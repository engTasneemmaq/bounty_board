import { bounties } from "../PostedBounties";
import { useParams, Link } from "react-router-dom";
import { Breadcrumb, Dropdown, Button, Radio, Pagination  } from 'antd';
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { ApplicationCard } from "./ApplicationCard";
import { useState, useMemo } from "react";


export const Applications = () => {
    const { id } = useParams();
    const [sortBy, setSortBy] = useState('newest'); // 'newest' or 'oldest'
    const [filterBy, setFilterBy] = useState('all'); // 'all', 'frontend', 'backend', 'team'

    const bounty = bounties.find(b => b.id === id);

    // Filter applications
    const filteredApplications = useMemo(() => {
        if (!bounty) return [];
        
        let filtered = [...bounty.application];
        
        if (filterBy !== 'all') {
            filtered = filtered.filter(app => {
                if (filterBy === 'frontend') {
                    return app.position?.toLowerCase().includes('frontend');
                } else if (filterBy === 'backend') {
                    return app.position?.toLowerCase().includes('backend');
                } else if (filterBy === 'team') {
                    return app.teamName !== undefined;
                }
                return true;
            });
        }
        
        return filtered;
    }, [bounty, filterBy]);

    // Sort applications
    const sortedApplications = useMemo(() => {
        let sorted = [...filteredApplications];
        
        sorted.sort((a, b) => {
            const dateA = new Date(a.dateOfApply);
            const dateB = new Date(b.dateOfApply);
            
            if (sortBy === 'newest') {
                return dateB - dateA;
            } else {
                return dateA - dateB;
            }
        });
        
        return sorted;
    }, [filteredApplications, sortBy]);

    const savedApplications = sortedApplications.filter(app => app.saved);
    const allApplication = sortedApplications;

    // Early return after all hooks
    if (!bounty) {
        return <div>Bounty not found</div>;
    } 
    
    const handleSortChange = (e) => {
        const value = e.target.value;
        setSortBy(value);
    };

    const handleFilterChange = (e) => {
        const value = e.target.value;
        setFilterBy(value);
    };

    const sortItems = [
        {
            key: '1',
            label: (
                <div className="flex flex-col gap-[15px] w-[188px] p-[20px]" onClick={(e) => e.stopPropagation()}>
                    <SubTitleText text={'SORT APPLICATION'} color={'#9199A3'} size={12} font={'normal'} />
                    <Radio.Group value={sortBy} onChange={handleSortChange} className="flex flex-col">
                        <Radio value="newest">Newest</Radio>
                        <Radio value="oldest">Oldest</Radio>
                    </Radio.Group>
                </div>
            ),
        },
    ]
    
    const filterItems = [
        {
            key: '1',
            label: (
                <div className="flex flex-col gap-[15px] w-[188px] p-[20px]" onClick={(e) => e.stopPropagation()}>
                    <SubTitleText text={'FILTER APPLICATION'} color={'#9199A3'} size={12} font={'normal'} />
                    <Radio.Group value={filterBy} onChange={handleFilterChange} className="flex flex-col">
                        <Radio value="all">All Applications</Radio>
                        <Radio value="frontend">Frontend</Radio>
                        <Radio value="backend">Backend</Radio>
                        <Radio value="team">Team</Radio>
                    </Radio.Group>
                </div>
            ),
        },
    ]

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: <Link to={'/dashboard/posted-bounties'}> Posted Bounties </Link>,
                    },
                    {
                        title: bounty.title,
                    },
                    {
                        title: 'Applications',
                    },
                ]}
            />
            <SubTitleText text={'Bounty Applications'} font={'medium'} size={20} color={'#18191C'} />

            <div className="mt-[30px] bg-[#F1F2F480] px-[20px] pt-[20px]">
                <div className="flex flex-row gap-[8px] items-center mb-[20px]">
                    <SubTitleText text={'Saved'} size={14} color={'#18191C'} font={'normal'} />
                    <span className="text-[14px] text-[#18191C] font-normal"> ({savedApplications.length}) </span>
                </div>
                <ApplicationCard isSaved={true} filteredApplications={sortedApplications} />
            </div>
            <div className="flex justify-end my-[20px] gap-[12px]">
                <Dropdown menu={{ items: filterItems }} placement="bottomLeft" className="border-0" trigger={['click']}>
                    <Button className="flex items-center gap-2">
                        Filter {filterBy !== 'all' && <span className="bg-[#0A65CC] text-white rounded-full w-5 h-5 text-xs flex items-center justify-center">1</span>}
                    </Button>
                </Dropdown>
                <Dropdown menu={{ items: sortItems }} placement="bottomLeft" className="border-0" trigger={['click']}>
                    <Button className="flex items-center gap-2">Sort</Button>
                </Dropdown>
            </div>
            <div className="mt-[30px] bg-[#F1F2F480] px-[20px] pt-[20px]">
                <div className="flex flex-row gap-[8px] items-center mb-[20px]">
                    <SubTitleText text={'All Application'} size={14} color={'#18191C'} font={'normal'} />
                    <span className="text-[14px] text-[#18191C] font-normal"> ({allApplication.length}) </span>
                </div>
                <ApplicationCard viewAllApplication={true} havePagination={true} filteredApplications={sortedApplications} />
            </div>
        </div>
    )
}

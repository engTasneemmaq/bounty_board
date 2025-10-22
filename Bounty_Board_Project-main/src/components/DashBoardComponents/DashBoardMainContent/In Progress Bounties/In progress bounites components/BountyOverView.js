import { Breadcrumb, Progress, Avatar } from 'antd';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { bountiesCardData } from '../../../../../MockData/bountiesCardData';
import { SubTitleText } from '../../../../../shared/Texts/SubTitleText';
import { NavLink, Outlet } from 'react-router-dom';
import { BountyMilestonesDetails } from './BountyMilestonesDetails';
import { BountyUserDetails } from './BountyUserDetails';
import { BountyFilesDetails } from './BountyFilesDetails';
import { useEffect, useState } from 'react';
import { ChevronRight } from 'lucide-react';

export const BountyOverView = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [bountyDetails, setBountyDetails] = useState(null);
    
    useEffect(() => {
        // Try to find bounty in mock data first
        let foundBounty = bountiesCardData.find((b) => String(b.id) === String(params.id));
        let isFromCompleted = false;
        
        // If not found, try to find in localStorage (for completed/posted bounties)
        if (!foundBounty) {
            const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
            foundBounty = storedBounties.find((b) => String(b.id) === String(params.id));
            
            // Check if this bounty is from Completed Work
            const completedBounties = JSON.parse(localStorage.getItem('completedBounties') || '[]');
            isFromCompleted = completedBounties.some((b) => String(b.id) === String(params.id));
        }
        
        // If still not found, create a default bounty based on ID
        if (!foundBounty) {
            // Check if this is a completed bounty ID (101, 102, 103)
            const completedIds = ['101', '102', '103'];
            const isCompletedId = completedIds.includes(String(params.id));
            
            foundBounty = {
                id: params.id,
                name: isCompletedId ? 'Machine Learning Model Implementation' : 'Bounty Details',
                description: isCompletedId ? 'AI-Powered Analytics Platform milestone' : 'Bounty description',
                milestones: isCompletedId ? 1 : 0,
                milestonesDone: isCompletedId ? 1 : 0,
                milestoneDetails: isCompletedId ? [
                    {
                        id: params.id,
                        name: 'Machine Learning Model Implementation',
                        description: 'Successfully implemented the machine learning model with 95% accuracy.',
                        status: 'completed',
                        assignedTo: 'User'
                    }
                ] : [],
                contributors: [],
                languages: isCompletedId ? ['Python', 'TensorFlow'] : [],
                skills: isCompletedId ? ['Machine Learning', 'Deep Learning'] : [],
                status: isCompletedId ? 'Completed' : 'In Progress'
            };
            
            // Save to localStorage for future reference
            if (isCompletedId) {
                const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
                storedBounties.push(foundBounty);
                localStorage.setItem('bountiesCardData', JSON.stringify(storedBounties));
            }
        }
        
        // Ensure required properties exist
        if (!foundBounty.languages) foundBounty.languages = [];
        if (!foundBounty.skills) foundBounty.skills = [];
        if (!foundBounty.contributors) foundBounty.contributors = [];
        if (!foundBounty.milestoneDetails) foundBounty.milestoneDetails = [];
        
        // Set status to Completed if all milestones are done or if from Completed Work
        if (!foundBounty.status) {
            if (isFromCompleted || (foundBounty.milestones > 0 && foundBounty.milestonesDone === foundBounty.milestones)) {
                foundBounty.status = 'Completed';
            } else {
                foundBounty.status = 'In Progress';
            }
        }
        
        setBountyDetails(foundBounty);
    }, [params.id]);

    if (!bountyDetails) {
        return <div className="p-6">Loading...</div>;
    }

    const percent = bountyDetails.milestones > 0 
        ? (bountyDetails.milestonesDone / bountyDetails.milestones) * 100 
        : 0;

    return (
        <div className="space-y-6">
            <div className="flex items-center gap-2 text-sm">
                <Link to="/dashboard/in-progress" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
                    In Progress Bounties
                </Link>
                <ChevronRight className="w-4 h-4 text-gray-400" />
                <span className="text-blue-600 font-semibold">{bountyDetails.name}</span>
            </div>
            
            <div className='flex flex-row justify-between items-center flex-wrap gap-6'>
                <div className='flex flex-col gap-4'>
                    <h1 className="text-3xl font-bold text-gradient">{bountyDetails.name}</h1>
                    <div className='flex flex-row items-center gap-3 flex-wrap'>
                        <Progress 
                            showInfo={false} 
                            className="w-[280px]" 
                            strokeColor={{
                                '0%': '#667eea',
                                '100%': '#764ba2',
                            }}
                            strokeWidth={10}
                            percent={percent}
                        />
                        <p className="text-base font-semibold text-gray-700">
                            <span className="text-blue-600">{bountyDetails.milestonesDone}</span>
                            <span className="text-gray-400 mx-1">/</span>
                            <span className="text-purple-600">{bountyDetails.milestones}</span>
                            <span className="text-gray-600 ml-2">milestones</span>
                        </p>
                    </div>
                </div>
                <Avatar.Group 
                    maxCount={5} 
                    maxStyle={{ 
                        color: '#fff', 
                        backgroundColor: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                        border: '2px solid white',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                >
                    {bountyDetails.contributors && bountyDetails.contributors.length > 0 ? (
                        bountyDetails.contributors.map((contributor, idx) => (
                            <Avatar 
                                key={idx} 
                                style={{ 
                                    backgroundColor: contributor.color || '#667eea',
                                    border: '2px solid white',
                                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                                    fontWeight: 'bold'
                                }}
                            >
                                {contributor.name}
                            </Avatar>
                        ))
                    ) : (
                        <>
                            <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" style={{ border: '2px solid white' }} />
                            <Avatar style={{ backgroundColor: '#f56a00', border: '2px solid white', fontWeight: 'bold' }}>K</Avatar>
                            <Avatar style={{ backgroundColor: '#87d068', border: '2px solid white', fontWeight: 'bold' }}>J</Avatar>
                            <Avatar style={{ backgroundColor: '#1890ff', border: '2px solid white', fontWeight: 'bold' }}>M</Avatar>
                            <Avatar style={{ backgroundColor: '#f56a00', border: '2px solid white', fontWeight: 'bold' }}>S</Avatar>
                        </>
                    )}
                </Avatar.Group>
            </div>
            <nav className='w-full flex flex-row flex-wrap gap-8 border-b-2 border-gray-200'>
                <NavLink
                    to={`/dashboard/bounty-name-overview/${params.id}`}
                    end
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-600 font-bold text-[15px] pb-4 border-b-2 border-blue-600 transition-all'
                            : 'text-gray-600 font-semibold text-[15px] pb-4 hover:text-blue-600 transition-colors'
                    }
                >
                    Overview
                </NavLink>
                <NavLink
                    to={`/dashboard/bounty-name-overview/${params.id}/milestones`}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-600 font-bold text-[15px] pb-4 border-b-2 border-blue-600 transition-all'
                            : 'text-gray-600 font-semibold text-[15px] pb-4 hover:text-blue-600 transition-colors'
                    }
                >
                    Milestones
                </NavLink>
                <NavLink
                    to={`/dashboard/bounty-name-overview/${params.id}/users`}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-600 font-bold text-[15px] pb-4 border-b-2 border-blue-600 transition-all'
                            : 'text-gray-600 font-semibold text-[15px] pb-4 hover:text-blue-600 transition-colors'
                    }
                >
                    Users
                </NavLink>
                <NavLink
                    to={`/dashboard/bounty-name-overview/${params.id}/files`}
                    className={({ isActive }) =>
                        isActive
                            ? 'text-blue-600 font-bold text-[15px] pb-4 border-b-2 border-blue-600 transition-all'
                            : 'text-gray-600 font-semibold text-[15px] pb-4 hover:text-blue-600 transition-colors'
                    }
                >
                    Files
                </NavLink>
            </nav>


            <Outlet context={bountyDetails} />

        </div>
    )
}
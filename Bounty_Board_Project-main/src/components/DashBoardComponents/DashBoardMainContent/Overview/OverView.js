import { Dropdown } from 'antd';
import { PaperDashBoard } from './OverviewComponent/PaperDashBoard';
import { SubTitleText } from '../../../../shared/Texts/SubTitleText';
import { MoveRight, Users, ShieldCheck, EllipsisVertical, Eye, CircleX, Hourglass } from 'lucide-react';
import { ParagraphDashBoard } from '../../DashBoardSharedComponents/ParagraphDashBoard';
import { useMediaQuery } from 'react-responsive';
import { TableDashboard } from '../../DashBoardSharedComponents/TableDashboard';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../../../context/AuthContext';
import { showMessage } from '../../../../utils/toast';
import CreativeCard from '../../../../shared/Cards/CreativeCard';
import CreativeButton from '../../../../shared/Buttons/CreativeButton';
import CreativeBadge from '../../../../shared/Badge/CreativeBadge';


export const Overview = ({ }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1057px)' });
    const navigate = useNavigate();
    const { user } = useAuth();

    // Get user's first name for greeting
    const getUserName = () => {
        if (user?.firstName) {
            return user.firstName;
        }
        if (user?.email) {
            return user.email.split('@')[0];
        }
        return 'User';
    };
    const columns = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
        },
        {
            title: 'APPLICATIONS',
            dataIndex: 'application',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'actions',
        },
    ];
    const columnsOne = [
        {
            title: 'Title',
            dataIndex: 'title',
        },
        {
            title: 'STATUS',
            dataIndex: 'status',
        },
        {
            title: 'Due Date',
            dataIndex: 'dueDate',
        },
        {
            title: 'ACTIONS',
            dataIndex: 'actions',
        },
    ];

    // Function to handle view detail
    const handleViewDetail = (bountyKey) => {
        console.log('View detail for bounty:', bountyKey);
        // Navigate to bounty details page (using the correct route)
        navigate(`/details/${bountyKey}`);
    };

    // State for bounties data
    const [createdBounties, setCreatedBounties] = useState([
        {
            id: '1',
            title: 'Convert Yolo World model to TFLite',
            postedDate: 'Jun 12, 2025',
            daysRemaining: '14 days remaining',
            status: 'active',
            applications: 556
        },
        {
            id: '2',
            title: 'AI Chatbot API',
            postedDate: 'Jun 1, 2025',
            expiredDate: 'Jun 7, 2025',
            status: 'expired',
            applications: 740
        },
        {
            id: '3',
            title: 'Chrome Extension',
            postedDate: 'Jun 1, 2025',
            expiredDate: 'Jun 7, 2025',
            status: 'expired',
            applications: 740
        },
        {
            id: '4',
            title: 'Design Feedback Tool',
            postedDate: 'Jun 12, 2025',
            daysRemaining: '24 days remaining',
            status: 'pending',
            applications: 0
        }
    ]);

    // Function to mark bounty as expired
    const handleMarkAsExpired = (bountyKey) => {
        console.log('Mark as expired for bounty:', bountyKey);
        
        // Get current date for expired date
        const currentDate = new Date();
        const expiredDate = currentDate.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        // Update the bounty status
        setCreatedBounties(prevBounties => 
            prevBounties.map(bounty => 
                bounty.id === bountyKey 
                    ? { 
                        ...bounty, 
                        status: 'expired',
                        expiredDate: expiredDate,
                        daysRemaining: undefined // Remove days remaining
                    }
                    : bounty
            )
        );
        
        showMessage.success('Bounty marked as expired successfully!');
    };

    // Create menu items function that takes bountyKey
    const getMenuItems = (bountyKey) => {
        // Find the bounty to check its status
        const bounty = createdBounties.find(b => b.id === bountyKey);
        const isExpired = bounty?.status === 'expired';
        
        const items = [
            {
                key: '1',
                label: (
                    <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                        <Eye className='text-[#5E6670]' size={16} />
                        View Detail
                    </div>
                ),
                onClick: () => handleViewDetail(bountyKey),
            }
        ];

        // Only show "Mark as expired" if bounty is not already expired
        if (!isExpired) {
            items.push({
                key: '2',
                label: (
                    <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                        <CircleX className='text-[#5E6670]' size={16} />
                        Mark as expired
                    </div>
                ),
                onClick: () => handleMarkAsExpired(bountyKey),
            });
        }

        return items;
    };

    // Navigate to applications page
    const navigateToApplications = (bountyId) => {
        console.log('Navigate to applications for bounty:', bountyId);
        navigate(`/dashboard/application/${bountyId}`);
    };

    // Navigate to bounty details for participated bounties
    const navigateToBountyDetails = (bountyId) => {
        console.log('Navigate to bounty details:', bountyId);
        // Using the in-progress bounty overview route
        navigate(`/dashboard/bounty-name-overview/${bountyId}`);
    };

    // Navigate to view all created bounties
    const viewAllCreatedBounties = () => {
        console.log('View all created bounties');
        navigate('/dashboard/posted-bounties');
    };

    // Navigate to view all participated bounties
    const viewAllParticipatedBounties = () => {
        console.log('View all participated bounties');
        navigate('/dashboard/in-progress');
    };

    // Helper function to render status badge
    const renderStatus = (status) => {
        switch(status) {
            case 'active':
                return (
                    <div className='flex flex-row gap-[8px] items-center'>
                        <ShieldCheck size={20} className='text-[#0BA02C]' />
                        <p className='text-[#0BA02C]'>Active</p>
                    </div>
                );
            case 'expired':
                return (
                    <div className='flex flex-row gap-[8px] items-center'>
                        <CircleX size={20} className='text-[#E05151]' />
                        <p className='text-[#E05151]'>Expired</p>
                    </div>
                );
            case 'pending':
                return (
                    <div className='flex flex-row gap-[8px] items-center'>
                        <Hourglass size={20} className='text-[#767F8C]' />
                        <p className='text-[#767F8C]'>Pending</p>
                    </div>
                );
            default:
                return null;
        }
    };

    // Build table data from state
    const data = createdBounties.map(bounty => ({
        key: bounty.id,
        title: (
            <div>
                <SubTitleText font={'medium'} size={16} text={bounty.title} />
                <ParagraphDashBoard 
                    text={`Posted on ${bounty.postedDate}`} 
                    withSpan={true} 
                    textSpan={
                        bounty.status === 'expired' 
                            ? (bounty.expiredDate ? `• ${bounty.expiredDate}` : '• Expired') 
                            : (bounty.daysRemaining ? `• ${bounty.daysRemaining}` : '')
                    } 
                />
            </div>
        ),
        status: renderStatus(bounty.status),
        application: (
            <div className='flex flex-row gap-[8px]'>
                <Users size={24} className='text-[#767F8C]' />
                <ParagraphDashBoard text={`${bounty.applications} Applications`} />
            </div>
        ),
        actions: (
            <div className='flex flex-row gap-[10px] items-center'>
                <CreativeButton
                    variant='primary'
                    size='sm'
                    onClick={() => navigateToApplications(bounty.id)} 
                    disabled={bounty.applications === 0}
                    className="w-[145px] lg:w-[200px] h-[48px]"
                > 
                    View Applications
                </CreativeButton>
                <Dropdown menu={{ items: getMenuItems(bounty.id) }} placement="bottomRight" trigger={['click']}>
                    <EllipsisVertical className='cursor-pointer hover:text-blue-600 transition-colors' size={20} />
                </Dropdown>
            </div>
        ),
    }));
    const dataOne = [
        {
            key: '1',
            title:
                <div >
                    <SubTitleText font={'medium'} size={16} text={'Chrome Extension'} />
                    <ParagraphDashBoard text={'In Progress'} withSpan={true} textSpan={'• Due in 5 days'} />
                </div>,
            status:
                <div className='flex flex-row gap-[8px] items-center'>
                    <p className='text-[#007AFF] text-[14px] font-medium'>In Progress</p>
                </div>
            ,
            dueDate:
                <div className='flex flex-row gap-[8px]'>
                    <p>Jul 1, 2025</p>
                </div>,
            actions:
                <div className='flex flex-row gap-[10px] items-center'>
                    <CreativeButton variant='primary' size='sm' onClick={() => navigateToBountyDetails('chrome-1')} className='w-[145px] h-[48px]'>
                        View Details
                    </CreativeButton>
                    <Dropdown menu={{ items: getMenuItems('chrome-1') }} placement="bottomRight" trigger={['click']}>
                        <EllipsisVertical className='cursor-pointer hover:text-blue-600 transition-colors' size={20} />
                    </Dropdown>
                </div>,
        },
        {
            key: '2',
            title:
                <div >
                    <SubTitleText font={'medium'} size={16} text={'Chrome Extension'} />
                    <ParagraphDashBoard text={'In Progress'} withSpan={true} textSpan={'• Due in 5 days'} />
                </div>,
            status:
                <div className='flex flex-row gap-[8px] items-center'>
                    <p className='text-[#0BA02C] text-[14px] font-medium'>Completed</p>
                </div>
            ,
            dueDate:
                <div className='flex flex-row gap-[8px]'>
                    <p>Jul 1, 2025</p>
                </div>,
            actions:
                <div className='flex flex-row gap-[10px] items-center'>
                    <CreativeButton variant='primary' size='sm' onClick={() => navigateToBountyDetails('chrome-2')} className='w-[145px] h-[48px]'>
                        View Details
                    </CreativeButton>
                    <Dropdown menu={{ items: getMenuItems('chrome-2') }} placement="bottomRight" trigger={['click']}>
                        <EllipsisVertical className='cursor-pointer hover:text-blue-600 transition-colors' size={20} />
                    </Dropdown>
                </div>,
        },
    ];
    return (

        <div className='w-full'>
            <div className='mb-[20px]'>
                <h2 className="text-[18px] font-medium mb-[8px]">Hello, {getUserName()}</h2>
                <ParagraphDashBoard text={'Track your latest bounty progress and contributions here.'} />
            </div>
            <div className="flex lg:flex-row flex-wrap gap-[24px] mb-[20px]">
                <PaperDashBoard icon={'presentation'} bg={'#FFF6E6'} text={'Bounties Created'} value={'3'} />
                <PaperDashBoard bg={'#E7F0FA'} text={'Bounties You’re Working On'} value={'5'} />
            </div>
            <div>
                <div className='flex justify-between items-center mb-[20px]'>
                    <SubTitleText font={'medium'} size={16} text={'Latest Bounties You Created'} />
                    <button 
                        className="border-0 flex items-center gap-[8px] text-grey-500 cursor-pointer hover:text-blue-600 transition-colors bg-transparent font-medium"
                        onClick={viewAllCreatedBounties}
                    >
                        View All
                        <MoveRight size={18} />
                    </button>
                </div>
                <TableDashboard havePagination={false} data={data} columns={columns} />
            </div>
            <div className='mt-[50px] mb-[50px]'>
                <div className='flex justify-between items-center mb-[20px] mt-[20px]'>
                    <SubTitleText font={'medium'} size={16} text={'Bounties Participated In'} />
                    <button 
                        className="border-0 flex items-center gap-[8px] text-grey-500 cursor-pointer hover:text-blue-600 transition-colors bg-transparent font-medium"
                        onClick={viewAllParticipatedBounties}
                    >
                        View All
                        <MoveRight size={18} />
                    </button>
                </div>
                <TableDashboard havePagination={false} data={dataOne} columns={columnsOne} />
            </div>

        </div>
    )
}
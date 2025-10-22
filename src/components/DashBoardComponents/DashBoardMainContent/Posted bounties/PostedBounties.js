import { useState, useMemo, useEffect } from "react";
import { SubTitleText } from "../../../../shared/Texts/SubTitleText";
import { Select, Button, Dropdown } from "antd";
import { showMessage } from "../../../../utils/toast";
import { TableDashboard } from "../../DashBoardSharedComponents/TableDashboard";
import { ParagraphDashBoard } from "../../DashBoardSharedComponents/ParagraphDashBoard";
import { Users, ShieldCheck, EllipsisVertical, Eye, CircleX, Hourglass, Briefcase } from 'lucide-react';
import { useNavigate } from "react-router";
import { useAuth } from "../../../../context/AuthContext";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";


export const bounties = [
    {
        key: '1',
        id: '1',
        title: 'Convert Yolo World model to TFLite',
        posted: 'Jun 12, 2025',
        remaining: '14 days remaining',
        statusKey: 'active',
        status: { text: 'Active', color: '#0BA02C', icon: ShieldCheck },
        applications: '556 Applications',
        button: { type: 'primary', bg: '', textColor: '', label: 'View Applications' },
        application: [{
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "1",
            saved: true,
            experience: 5,
        },
        {
            userName: "Jane Smith",
            position: "Backend Developer",
            role: "Node.js Developer",
            dateOfApply: "2025-07-21",
            id: "2",
            saved: false,
            experience: 4,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "3",
            saved: false,
            experience: 3,
        },

        {
            teamName: "John Doe",
            position: "Leader @username ",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            member: '3',
            id: "4",
            saved: true,
        },

        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "5",
            saved: false,
            experience: 3,
        },

        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "6",
            saved: true,
            experience: 3,
        },

        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "7",
            saved: true,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "8",
            saved: true,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "9",
            saved: false,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "10",
            saved: false,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "11",
            saved: true,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "12",
            saved: false,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "13",
            saved: false,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "14",
            saved: true,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "15",
            saved: false,
            experience: 3,
        },
        {
            userName: "John Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "16",
            saved: false,
            experience: 3,
        },

        ]
    },
    {
        key: '2',
        id: '2',
        title: 'AI Chatbot API',
        posted: 'Jun 1, 2025',
        remaining: 'Jun 7, 2025',
        statusKey: 'expired',
        status: { text: 'Expired', color: '#E05151', icon: CircleX },
        applications: '740 Applications',
        button: { type: '', bg: '#F1F2F4', textColor: '#0A65CC', label: 'View Applications' },
        application: [{
            userName: "zaid Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "1",
            saved: true,
        },
        {
            userName: "maha Smith",
            position: "Backend Developer",
            role: "Node.js Developer",
            dateOfApply: "2025-07-21",
            id: "2",
            saved: true,
        }]
    },
    {
        key: '3',
        id: '3',
        title: 'Chrome Extension',
        posted: 'Jun 1, 2025',
        remaining: 'Jun 7, 2025',
        statusKey: 'expired',
        status: { text: 'Expired', color: '#E05151', icon: CircleX },
        applications: '740 Applications',
        button: { type: '', bg: '#F1F2F4', textColor: '#0A65CC', label: 'View Applications' },
        application: [{
            userName: "khalil Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "1",
            saved: true,
        },
        {
            userName: "diala Smith",
            position: "Backend Developer",
            role: "Node.js Developer",
            dateOfApply: "2025-07-21",
            id: "2",
            saved: true,
        }]
    },
    {
        key: '4',
        id: '4',
        title: 'Design Feedback Tool',
        posted: 'Jun 12, 2025',
        remaining: '24 days remaining',
        statusKey: 'pending',
        status: { text: 'Pending', color: '#767F8C', icon: Hourglass },
        applications: '0 Applications',
        button: { type: '', bg: '#C8CCD1', textColor: '#F1F2F4', label: 'View Applications' },
        application: [{
            userName: "mahmoud Doe",
            position: "Frontend Developer",
            role: "React Developer",
            dateOfApply: "2025-07-20",
            id: "1",
            saved: false,
        },
        {
            userName: "Duaa Smith",
            position: "Backend Developer",
            role: "Node.js Developer",
            dateOfApply: "2025-07-21",
            id: "2",
            saved: false,
        }]
    },
];


export const PostedBounties = () => {
    const [statusFilter, setStatusFilter] = useState("all");
    const [bountiesList, setBountiesList] = useState([]);
    const navigate = useNavigate();
    const { user } = useAuth();

    // Load bounties from localStorage on component mount
    useEffect(() => {
        const loadBounties = () => {
            try {
                // Get posted bounties from localStorage
                const postedBounties = JSON.parse(localStorage.getItem("postedBounties") || "[]");
                
                // Filter by current user if logged in
                const userBounties = user 
                    ? postedBounties.filter(b => b.userId === user.id)
                    : postedBounties;
                
                // Format bounties for display
                const formattedBounties = userBounties.map(bounty => {
                    console.log("Formatting bounty:", bounty.id, "with userId:", bounty.userId);
                    return {
                        key: bounty.id,
                        id: bounty.id,
                        title: bounty.title,
                        posted: bounty.posted,
                        remaining: bounty.remaining,
                        statusKey: bounty.statusKey,
                        status: { 
                            text: bounty.status, 
                            color: bounty.statusKey === 'active' ? '#0BA02C' : bounty.statusKey === 'expired' ? '#E05151' : '#767F8C',
                            icon: bounty.statusKey === 'active' ? ShieldCheck : bounty.statusKey === 'expired' ? CircleX : Hourglass
                        },
                        applications: bounty.applications || '0 Applications',
                        button: { 
                            type: bounty.statusKey === 'active' ? 'primary' : '', 
                            bg: bounty.statusKey === 'active' ? '' : '#F1F2F4', 
                            textColor: bounty.statusKey === 'active' ? '' : '#0A65CC', 
                            label: 'View Applications' 
                        },
                        application: bounty.application || [],
                        ...bounty // Include all other bounty data (including userId)
                    };
                });
                
                console.log("✅ Formatted Bounties from localStorage:", formattedBounties);
                
                // If user has posted bounties, show only those
                // Otherwise, show mock data for demo
                if (formattedBounties.length > 0) {
                    setBountiesList(formattedBounties);
                } else {
                    console.log("No user bounties found, showing mock data");
                    // Add userId to mock bounties so they appear as owned
                    const mockWithUserId = bounties.map(b => ({
                        ...b,
                        userId: user?.id || 'guest'
                    }));
                    setBountiesList(mockWithUserId);
                }
            } catch (error) {
                console.error('Error loading bounties:', error);
                // Fallback to mock data
                setBountiesList(bounties);
            }
        };
        
        loadBounties();
    }, [user]);

    const handleChange = (value) => {
        setStatusFilter(value);
    };

    const options = [
        { value: 'all', label: 'All Bounties' },
        { value: 'active', label: 'Active' },
        { value: 'pending', label: 'Pending' },
        { value: 'expired', label: 'Expire' },
    ];

    // Handle view detail - navigate to bounty details page
    const handleViewDetail = (bountyId) => {
        console.log('=== View Detail Clicked ===');
        console.log('Bounty ID:', bountyId);
        console.log('Navigating to:', `/details/${bountyId}`);
        
        // Navigate to bounty details page
        // The BountyDetails component will check if the user is the owner
        // and hide Apply Now button and Author Card accordingly
        navigate(`/details/${bountyId}`);
    };

    // Handle mark as expired - update bounty status
    const handleMarkAsExpired = (bountyId) => {
        console.log('Mark as expired for bounty:', bountyId);
        
        // Get current date
        const currentDate = new Date().toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
        });
        
        // Update bounty status
        setBountiesList(prevBounties => 
            prevBounties.map(bounty => 
                bounty.id === bountyId 
                    ? { 
                        ...bounty, 
                        statusKey: 'expired',
                        status: { text: 'Expired', color: '#E05151', icon: CircleX },
                        remaining: currentDate,
                        button: { type: '', bg: '#F1F2F4', textColor: '#0A65CC', label: 'View Applications' }
                    }
                    : bounty
            )
        );
        
        showMessage.success('Bounty marked as expired successfully! ✅');
    };

    // Create menu items function that takes bountyId
    const getMenuItems = (bountyId) => {
        // Find the bounty to check its status
        const bounty = bountiesList.find(b => b.id === bountyId);
        const isExpired = bounty?.statusKey === 'expired';
        
        const menuItems = [
            {
                key: '1',
                label: (
                    <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                        <Eye className='text-[#5E6670]' size={16} />
                        View Detail
                    </div>
                ),
                onClick: () => handleViewDetail(bountyId),
            }
        ];

        // Only show "Mark as expired" if bounty is not already expired
        if (!isExpired) {
            menuItems.push({
                key: '2',
                label: (
                    <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                        <CircleX className='text-[#5E6670]' size={16} />
                        Mark as expired
                    </div>
                ),
                onClick: () => handleMarkAsExpired(bountyId),
            });
        }

        return menuItems;
    };

    const viewApplication = (id) => {
        navigate(`/dashboard/application/${id}`)
        console.log(id)
    }

    const filteredBounties = useMemo(() => {
        if (statusFilter === "all") return bountiesList;
        return bountiesList.filter(b => b.statusKey === statusFilter);
    }, [statusFilter, bountiesList]);

    const data = filteredBounties.map(item => ({
        key: item.key,
        title: (
            <div>
                <SubTitleText font={'medium'} size={16} text={item.title} />
                <ParagraphDashBoard
                    text={`Posted on ${item.posted}`}
                    withSpan={true}
                    textSpan={`• ${item.remaining}`}
                />
            </div>
        ),
        status: (
            <div className='flex flex-row gap-[8px] items-center'>
                <item.status.icon size={20} style={{ color: item.status.color }} />
                <p style={{ color: item.status.color }}>{item.status.text}</p>
            </div>
        ),
        application: (
            <div className='flex flex-row gap-[8px]'>
                <Users size={24} className='text-[#767F8C]' />
                <ParagraphDashBoard text={item.applications} />
            </div>
        ),
        actions: (
            <div className='flex flex-row gap-[10px] items-center'>
                <CreativeButton
                    variant="primary"
                    size="sm"
                    onClick={() => viewApplication(item.id)}
                    disabled={item.applications === '0 Applications'}
                    className="w-[145px] lg:w-[200px] h-[48px]"
                >
                    {item.button.label}
                </CreativeButton>
                <Dropdown 
                    menu={{ items: getMenuItems(item.id) }} 
                    placement="bottomRight"
                    trigger={['click']}
                >
                    <EllipsisVertical className='cursor-pointer hover:text-blue-600 transition-colors' size={20} />
                </Dropdown>
            </div>
        ),
    }));

    const columns = [
        { title: 'Title', dataIndex: 'title' },
        { title: 'STATUS', dataIndex: 'status' },
        { title: 'APPLICATIONS', dataIndex: 'application' },
        { title: 'ACTIONS', dataIndex: 'actions' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex flex-row justify-between flex-wrap gap-[20px]">
                <div className="flex items-center gap-3">
                    <Briefcase className="w-8 h-8 text-blue-600" />
                    <h2 className="text-3xl font-bold text-gradient">
                        Posted Bounties <span className="text-gray-400 text-xl font-normal">({filteredBounties.length})</span>
                    </h2>
                </div>
                <div className="flex flex-row gap-[10px] items-center">
                    <span className="text-sm text-gray-600 font-medium">Bounty status</span>
                    <Select
                        value={statusFilter}
                        style={{ width: 164, height: 48, borderRadius: "12px" }}
                        onChange={handleChange}
                        options={options}
                        className="creative-select"
                    />
                </div>
            </div>

            <TableDashboard havePagination={true} data={data} columns={columns} />
        </div>
    );
};

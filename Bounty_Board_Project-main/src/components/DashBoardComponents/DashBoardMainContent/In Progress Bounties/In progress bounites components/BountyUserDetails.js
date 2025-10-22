import { useState } from 'react';
import { Avatar, Dropdown } from 'antd';
import { Mail, Download, MoreVertical, Eye } from 'lucide-react';
import SendEmailModal from '../../../../LandingPage/ExploreBounties/SendEmailModal';
import { ViewUserProfileModal } from '../../Posted bounties/PostedBountiesComponents/ViewUserProfileModal';
import { useOutletContext } from 'react-router-dom';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';
import CreativeButton from '../../../../../shared/Buttons/CreativeButton';
import { showMessage } from '../../../../../utils/toast';

export const BountyUserDetails = () => { 
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedUserForProfile, setSelectedUserForProfile] = useState(null);
    
    const bountyDetails = useOutletContext();
    
    // Mock users - استخدم بيانات من bountyDetails أو Mock data
    const users = [
        { 
            id: 1, 
            name: 'User Name', 
            role: 'Technical Support Specialist',
            email: 'user1@example.com',
            avatar: 'UN'
        },
        { 
            id: 2, 
            name: 'User Name', 
            role: 'Product Designer',
            email: 'user2@example.com',
            avatar: 'UN'
        },
        { 
            id: 3, 
            name: 'User Name', 
            role: 'Marketing Officer',
            email: 'user3@example.com',
            avatar: 'UN'
        },
        { 
            id: 4, 
            name: 'User Name', 
            role: 'Marketing Manager',
            email: 'user4@example.com',
            avatar: 'UN'
        },
        { 
            id: 5, 
            name: 'User Name', 
            role: 'Junior Graphic Designer',
            email: 'user5@example.com',
            avatar: 'UN'
        },
        { 
            id: 6, 
            name: 'User Name', 
            role: 'Visual Designer',
            email: 'user6@example.com',
            avatar: 'UN'
        },
    ];
    
    const handleSendEmail = (user) => {
        setSelectedUser(user);
        setShowEmailModal(true);
    };
    
    const handleDownloadCV = (user) => {
        const loadingToast = showMessage.loading('Downloading CV... ⏳');
        setTimeout(() => {
            showMessage.dismiss(loadingToast);
            showMessage.success(`CV downloaded successfully for ${user.name}! 📄`);
            console.log('Download CV for:', user);
        }, 800);
    };

    const handleViewProfile = (user) => {
        console.log('View profile for:', user);
        setSelectedUserForProfile(user);
        setShowProfileModal(true);
    };
    
    const getMenuItems = (user) => [
        {
            key: '1',
            label: (
                <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                    <Mail className='text-[#5E6670]' size={16} />
                    Send Email
                </div>
            ),
            onClick: () => handleSendEmail(user),
        },
        {
            key: '2',
            label: (
                <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                    <Download className='text-[#5E6670]' size={16} />
                    Download CV
                </div>
            ),
            onClick: () => handleDownloadCV(user),
        },
    ];
    
    return (
        <div className="space-y-4">
            {users.map(user => (
                <CreativeCard key={user.id} className="p-5">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Avatar 
                                size={56} 
                                className="bg-gradient-to-br from-blue-600 to-purple-600 text-white font-bold border-2 border-white shadow-lg"
                            >
                                {user.avatar}
                            </Avatar>
                            <div>
                                <p className="font-bold text-base text-gray-900">{user.name}</p>
                                <p className="text-sm text-gray-600 font-medium">{user.role}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <CreativeButton 
                                variant="primary"
                                size="sm"
                                onClick={() => handleViewProfile(user)}
                                className="h-[40px] flex items-center gap-2"
                            >
                                View Profile
                                <Eye size={16} />
                            </CreativeButton>
                            <Dropdown 
                                menu={{ items: getMenuItems(user) }} 
                                placement="bottomRight"
                                trigger={['click']}
                            >
                                <MoreVertical 
                                    className="cursor-pointer hover:text-blue-600 text-gray-600 transition-colors" 
                                    size={22}
                                />
                            </Dropdown>
                        </div>
                    </div>
                </CreativeCard>
            ))}
            
            {/* Send Email Modal */}
            {showEmailModal && selectedUser && (
                <SendEmailModal
                    open={showEmailModal}
                    onClose={() => {
                        setShowEmailModal(false);
                        setSelectedUser(null);
                    }}
                    recipientName={selectedUser.name}
                    recipientEmail={selectedUser.email}
                />
            )}
            
            {/* View Profile Modal */}
            {showProfileModal && selectedUserForProfile && (
                <ViewUserProfileModal
                    open={showProfileModal}
                    onClose={() => {
                        setShowProfileModal(false);
                        setSelectedUserForProfile(null);
                    }}
                    userData={{
                        userName: selectedUserForProfile.name,
                        position: selectedUserForProfile.role,
                        email: selectedUserForProfile.email,
                    }}
                />
            )}
        </div>
    );
}
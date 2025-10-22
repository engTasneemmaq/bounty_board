import { Avatar, Button, Divider, Dropdown, Menu } from "antd";
import { showMessage } from "../../../../../utils/toast";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Star, Mail, CircleArrowRight, Ellipsis, Download, FileText } from 'lucide-react';
import { useState } from "react";
import SendEmailModal from "../../../../LandingPage/ExploreBounties/SendEmailModal";
import ArrowButton from "../../../../../shared/Buttons/ArrowButton";
import { useNavigate } from "react-router-dom";
import { ViewUserProfileModal } from "./ViewUserProfileModal";

export const ViewTeamDetails = ({ teamData }) => {
    const navigate = useNavigate();
    const [isFavorited, setIsFavorited] = useState(false);
    const [isAssigned, setIsAssigned] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedMember, setSelectedMember] = useState(null);
    const [showProfileModal, setShowProfileModal] = useState(false);
    const [selectedUserProfile, setSelectedUserProfile] = useState(null);

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        showMessage.success(isFavorited ? 'Removed from favorites ❤️' : 'Added to favorites ❤️');
    };

    const handleSendMail = (member) => {
        setSelectedMember(member);
        setShowEmailModal(true);
    };

    const handleAssignToBounty = () => {
        if (isAssigned) {
            showMessage.info('Team is already assigned to this bounty ℹ️');
        } else {
            setIsAssigned(true);
            showMessage.success('Team assigned to bounty successfully ✅');
        }
    };

    const handleDownloadCV = (member) => {
        showMessage.info(`Downloading CV for ${member.name} 📥`);
        // Add download logic here
    };

    const handleViewProfile = (member) => {
        setSelectedUserProfile(member);
        setShowProfileModal(true);
    };

    const getMemberMenuItems = (member) => [
        {
            key: 'email',
            icon: <Mail size={14} />,
            label: 'Send Email',
            onClick: () => handleSendMail(member)
        },
        {
            key: 'download',
            icon: <Download size={14} />,
            label: 'Download CV',
            onClick: () => handleDownloadCV(member)
        },
        {
            key: 'profile',
            icon: <FileText size={14} />,
            label: 'View Profile',
            onClick: () => handleViewProfile(member)
        }
    ];

    // Mock team data - with safe defaults
    const defaultTeam = {
        teamName: "Tech Innovators",
        leader: {
            name: "John Doe",
            username: "@johndoe",
            avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0A65CC&color=fff"
        },
        members: [
            {
                id: "1",
                name: "User Name",
                role: "Technical Support Specialist",
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            },
            {
                id: "2",
                name: "User Name",
                role: "Product Designer | Leader",
                isLeader: true,
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            },
            {
                id: "3",
                name: "User Name",
                role: "Marketing Officer",
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            },
            {
                id: "4",
                name: "User Name",
                role: "Marketing Manager",
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            },
            {
                id: "5",
                name: "User Name",
                role: "Junior Graphic Designer",
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            },
            {
                id: "6",
                name: "User Name",
                role: "Visual Designer",
                avatar: "https://ui-avatars.com/api/?name=User+Name&background=0A65CC&color=fff"
            }
        ],
        summary: "I am writing to express my interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW's job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position.\n\nI have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };

    // Merge teamData with defaults, ensuring all required properties exist
    const team = {
        ...defaultTeam,
        ...teamData,
        leader: {
            ...defaultTeam.leader,
            ...(teamData?.leader || {})
        },
        members: teamData?.members || defaultTeam.members
    };

    return (
        <div className="pb-[50px]">
            <div className="flex flex-row flex-wrap mt-[30px] pb-[30px] justify-between items-center w-full gap-2">
                <div className="flex flex-row gap-[24px]">
                    <Avatar className="w-[80px] h-[80px]" style={{ backgroundColor: '#0A65CC' }}>
                        {(team?.teamName || 'T').charAt(0)}
                    </Avatar>
                    <div className="flex flex-col gap-[8px]">
                        <SubTitleText text={team?.teamName || 'Team Name'} size={24} color={'#18191C'} font={'medium'} />
                        <SubTitleText 
                            text={`leader ${team?.leader?.username || '@leader'}`} 
                            size={16} 
                            color={'#767F8C'} 
                            font={'normal'} 
                        />
                    </div>
                </div>
                <div className="flex flex-row gap-[12px] flex-wrap">
                    <Button 
                        className={`w-[48px] h-[48px] ${isFavorited ? 'bg-[#0A65CC]' : 'bg-[#E7F0FA]'}`}
                        onClick={handleFavorite}
                    >
                        <Star 
                            size={24} 
                            className={isFavorited ? 'text-[#FFF] fill-[#FFF]' : 'text-[#0A65CC]'} 
                        />
                    </Button>
                    <Button 
                        className={`min-w-[180px] h-[48px] gap-[12px] ${
                            isAssigned 
                                ? 'text-[#ffffff] bg-[#767F8C] cursor-default' 
                                : 'text-[#ffffff] bg-[#0A65CC]'
                        }`}
                        icon={<CircleArrowRight size={24} className="mt-1" />}
                        onClick={handleAssignToBounty}
                        disabled={isAssigned}
                    > 
                        {isAssigned ? 'Assigned ✓' : 'Assign To Bounty'}
                    </Button>
                </div>
            </div>

            {/* Summary Section */}
            <div className="mb-[30px]">
                <SubTitleText text={'Summary'} size={18} color={'#18191C'} font={'medium'} className="mb-4" />
                <p className="text-[#5E6670] font-normal text-[16px] whitespace-pre-line">
                    {team?.summary || 'No summary available.'}
                </p>
            </div>

            <Divider />

            {/* Team Members Section */}
            <div className="mb-[30px]">
                <SubTitleText text={'Team Member'} size={18} color={'#18191C'} font={'medium'} className="mb-4" />
                <div className="space-y-3">
                    {(team?.members || []).map((member) => (
                        <div 
                            key={member.id} 
                            className="flex items-center justify-between py-3 px-4 bg-white border border-gray-200 rounded-lg hover:shadow-md transition-all"
                        >
                            <div className="flex items-center gap-4">
                                <Avatar size={48} src={member.avatar}>
                                    {member.name.charAt(0)}
                                </Avatar>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <SubTitleText 
                                            text={member.name} 
                                            size={14} 
                                            color={'#18191C'} 
                                            font={'medium'} 
                                        />
                                        {member.isLeader && (
                                            <Star size={16} className="text-yellow-500 fill-yellow-500" />
                                        )}
                                    </div>
                                    <SubTitleText 
                                        text={member.role} 
                                        size={14} 
                                        color={'#767F8C'} 
                                        font={'normal'} 
                                    />
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <Button 
                                    className="h-[40px] px-4 text-[#0A65CC] border-[#0A65CC]"
                                    onClick={() => handleViewProfile(member)}
                                >
                                    View Profile →
                                </Button>
                                <Dropdown 
                                    menu={{ items: getMemberMenuItems(member) }} 
                                    placement="bottomRight"
                                    trigger={['click']}
                                >
                                    <Button 
                                        className="w-[40px] h-[40px] border-gray-300"
                                        icon={<Ellipsis size={20} />}
                                        onClick={(e) => e.stopPropagation()}
                                    />
                                </Dropdown>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Divider />

            {/* Notes Section */}
            <div className="mb-[30px]">
                <SubTitleText text={'Notes'} size={18} color={'#18191C'} font={'medium'} className="mb-4" />
                <div className="bg-gray-100 rounded-lg p-4">
                    <p className="text-[#5E6670] font-normal text-[14px]">
                        {team?.notes || 'No notes available.'}
                    </p>
                </div>
            </div>

            {/* Send Email Modal */}
            {showEmailModal && selectedMember && (
                <SendEmailModal
                    open={showEmailModal}
                    onClose={() => {
                        setShowEmailModal(false);
                        setSelectedMember(null);
                    }}
                    recipientName={selectedMember.name}
                    recipientEmail={`${selectedMember.name.toLowerCase().replace(' ', '.')}@example.com`}
                />
            )}

            {/* View User Profile Modal */}
            {showProfileModal && selectedUserProfile && (
                <ViewUserProfileModal
                    open={showProfileModal}
                    onClose={() => {
                        setShowProfileModal(false);
                        setSelectedUserProfile(null);
                    }}
                    userData={{
                        userName: selectedUserProfile.name,
                        position: selectedUserProfile.role,
                        avatar: selectedUserProfile.avatar
                    }}
                />
            )}
        </div>
    );
};


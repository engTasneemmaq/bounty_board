import { Avatar, Button, Divider } from "antd"
import { showMessage } from "../../../../../utils/toast";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Star, Mail, CircleArrowRight, Cake, Map, NotepadText, User, Layers, GraduationCap, StickyNote, Download, Globe, Phone, Linkedin } from 'lucide-react';
import { SocialMediaLinksWithIcons } from '../../../DashBoardSharedComponents/SocialMediaLinksWithIcons';
import { UserInformationPopup } from "../../../DashBoardSharedComponents/UserInformationPopUp";
import { IconWithTitleAndSubTitle } from "../../../../../shared/IconsWithText/IconWithTitleAndSubTitle";
import { DownloadComponent } from "../../../../../shared/Download/Download";
import { useState } from "react";
import SendEmailModal from "../../../../LandingPage/ExploreBounties/SendEmailModal";

export const ViewUserDetails = ({ userData }) => {
    const [isFavorited, setIsFavorited] = useState(false);
    const [isAssigned, setIsAssigned] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);

    // Default user data with safe fallbacks
    const defaultUser = {
        userName: "Esther Howard",
        position: "Website Designer (UI/UX)",
        dateOfBirth: "14 June, 2021",
        nationality: "Bangladesh",
        maritalStatus: "Single",
        gender: "Male",
        experience: 7,
        education: "Master Degree",
        bountiesCreated: 9,
        participatedIn: 14,
        phone: "+1-202-555-0141",
        email: "esther.howard@gmail.com",
        secondaryEmail: "esther.howard@gmail.com",
        website: "www.estherhoward.com",
        biography: "I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.",
        notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        linkedIn: "https://linkedin.com/in/estherhoward"
    };

    const user = { ...defaultUser, ...userData };

    const handleFavorite = () => {
        setIsFavorited(!isFavorited);
        showMessage.success(isFavorited ? 'Removed from favorites ❤️' : 'Added to favorites ❤️');
    };

    const handleSendMail = () => {
        console.log('Opening send email modal');
        setShowEmailModal(true);
    };

    const handleAssignToBounty = () => {
        if (isAssigned) {
            showMessage.info('User is already assigned to this bounty ℹ️');
        } else {
            setIsAssigned(true);
            showMessage.success('User assigned to bounty successfully ✅');
        }
    };

    return (
        <div className="pb-[50px]">
            <div className="flex flex-row flex-wrap  mt-[30px] pb-[30px] justify-between items-center w-full gap-2">
                <div className="flex flex-row gap-[24px]">
                    <Avatar className="w-[80px] h-[80px]" style={{ backgroundColor: '#6B7280' }}>
                        {user?.userName?.charAt(0) || 'U'}
                    </Avatar>
                    <div className="flex flex-col gap-[8px]">
                        <SubTitleText text={user?.userName || 'User Name'} size={24} color={'#18191C'} font={'medium'} />
                        <SubTitleText text={user?.position || 'Position'} size={16} color={'#767F8C'} font={'normal'} />
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
                        className="w-[160px] h-[48px] gap-[12px] text-[#0A65CC] border-[#0A65CC]" 
                        icon={<Mail size={24} className="mt-1" />}
                        onClick={handleSendMail}
                    > 
                        Send Mail 
                    </Button>
                    <Button 
                        className={`w-[219px] h-[48px] gap-[12px] ${isAssigned ? 'text-[#ffffff] bg-[#767F8C] cursor-default' : 'text-[#ffffff] bg-[#0A65CC]'}`}
                        icon={<CircleArrowRight size={24} className="mt-1" />}
                        onClick={handleAssignToBounty}
                        disabled={isAssigned}
                    > 
                        {isAssigned ? 'Assigned ✓' : 'Assign to Bounty'}
                    </Button>
                </div>
            </div>
            <div className="grid grid-cols-[60%_35%] gap-[72px]">
                <div className="flex flex-col gap-[20px]">
                    <SubTitleText text={'BIOGRAPHY'} size={18} color={'#18191C'} font={'medium'} />
                    <p className="text-[#5E6670] font-normal text-[16px]">
                        {user?.biography || 'No biography available.'}
                    </p>
                    <Divider />
                    <SubTitleText text={'Notes'} size={18} color={'#18191C'} font={'medium'} />
                    <div className="bg-gray-100 rounded-lg p-4">
                        <p className="text-[#5E6670] font-normal text-[14px]">
                            {user?.notes || 'No notes available.'}
                        </p>
                    </div>
                    <Divider />
                    <div className="gap-[17px] flex flex-col">
                        <SubTitleText text={'Follow me Social Media'} size={14} color={'#18191C'} font={'medium'} />
                        <div className="flex flex-row flex-wrap gap-[12px]">
                            <SocialMediaLinksWithIcons icon={<Linkedin size={20} />} link={user?.linkedIn} />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-[24px]">
                    <div className="grid grid-cols-2 gap-4 border-[#E7F0FA] rounded-[8px] border p-[20px]">
                        <UserInformationPopup icon={<Cake size={24} className="text-[#0A65CC]" />} title={'DATE OF BIRTH'} text={user?.dateOfBirth || 'N/A'} />
                        <UserInformationPopup icon={<Map size={24} className="text-[#0A65CC]" />} title={'NATIONALITY'} text={user?.nationality || 'N/A'} />
                        <UserInformationPopup icon={<NotepadText size={24} className="text-[#0A65CC]" />} title={'MARITAL STATUS'} text={user?.maritalStatus || 'N/A'} />
                        <UserInformationPopup icon={<User size={24} className="text-[#0A65CC]" />} title={'GENDER'} text={user?.gender || 'N/A'} />
                        <UserInformationPopup icon={<Layers size={24} className="text-[#0A65CC]" />} title={'EXPERIENCE'} text={user?.experience ? `${user.experience} Years` : 'N/A'} />
                        <UserInformationPopup icon={<GraduationCap size={24} className="text-[#0A65CC]" />} title={'EDUCATIONS'} text={user?.education || 'N/A'} />
                        <UserInformationPopup icon={<Layers size={24} className="text-[#0A65CC]" />} title={'BOUNTIES CREATED'} text={user?.bountiesCreated?.toString() || '0'} />
                        <UserInformationPopup icon={<NotepadText size={24} className="text-[#0A65CC]" />} title={'PARTICIPATED IN'} text={user?.participatedIn?.toString() || '0'} />
                    </div>
                    <div className="flex flex-col gap-[16px] border-[#E7F0FA] rounded-[8px] border p-[20px]">
                        <SubTitleText text={'Download My Resume'} size={16} font={'medium'} />
                        <DownloadComponent />
                       
                    </div>
                    <div className="flex flex-col gap-[16px] border-[#E7F0FA] rounded-[8px] border p-[20px]">
                        <SubTitleText text={'Contact Information'} font={'medium'} />
                        <div className="flex flex-row gap-[12px]">
                            <Phone size={32} className="text-[#0A65CC]" />
                            <div className="flex flex-col gap-[5px]">
                                <SubTitleText text={'PHONE'} size={12} color={'#767F8C'} />
                                <SubTitleText text={user?.phone || 'N/A'} size={14} font={'medium'} />
                            </div>
                        </div>
                         <Divider />
                        <div className="flex flex-row gap-[12px]">
                            <Mail size={32} className="text-[#0A65CC]" />
                            <div className="flex flex-col gap-[5px]">
                                <SubTitleText text={'EMAIL ADDRESS'} size={12} color={'#767F8C'} />
                                <SubTitleText text={user?.email || 'N/A'} size={14} font={'medium'} />
                                {user?.secondaryEmail && (
                                    <>
                                        <SubTitleText text={'SECONDARY EMAIL'} size={12} color={'#767F8C'} className="mt-2" />
                                        <SubTitleText text={user.secondaryEmail} size={14} font={'medium'} />
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Send Email Modal */}
            <SendEmailModal
                open={showEmailModal}
                onClose={() => setShowEmailModal(false)}
                recipientName={user?.userName || 'User'}
                recipientEmail={user?.email || 'user@example.com'}
            />
        </div>
    )
}
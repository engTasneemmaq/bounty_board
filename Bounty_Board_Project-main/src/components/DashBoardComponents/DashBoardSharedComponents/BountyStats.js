import { SubTitleText } from "../../../shared/Texts/SubTitleText";
import { UserInformationPopup } from "./UserInformationPopUp";
import { Calendar, Timer ,Layers, WalletMinimal, CircleCheck, BriefcaseBusiness  } from 'lucide-react';

export const BountyStats = ({ title, information, size, font, bountyData }) => {
    // Get status based on bounty data or default to "In Progress"
    const getStatus = () => {
        if (!bountyData) return 'In Progress';
        if (bountyData.status) return bountyData.status;
        
        // Check if all milestones are completed
        if (bountyData.milestones > 0 && bountyData.milestonesDone === bountyData.milestones) {
            return 'Completed';
        }
        
        return 'In Progress';
    };

    const status = getStatus();
    
    // Determine icon color based on status
    const statusIconClass = status === 'Completed' ? 'text-green-600' : 'text-[#0A65CC]';
    
    return (
        <div className="border-[#E7F0FA] border-[2px] rounded-[8px] ">
            <div className="px-[32px] pt-[32px] mb-[24px] ">
                <SubTitleText text={title} size={size} font={font} />
                <div className="flex flex-row flex-wrap gap-[20px] justify-between mt-[20px] pb-[20px]">
                    <UserInformationPopup 
                        icon={<Calendar size={24} className="text-[#0A65CC]" />} 
                        title={'Bounty Posted:'} 
                        text={bountyData?.postedDate || '14 June, 2025'} 
                    />
                    <UserInformationPopup 
                        icon={<Timer size={24} className="text-[#0A65CC]" />} 
                        title={'Bounty expire in:'} 
                        text={bountyData?.expireDate || '14 July, 2025'} 
                    />
                    <UserInformationPopup 
                        icon={<Layers size={24} className="text-[#0A65CC]" />} 
                        title={'Category'} 
                        text={bountyData?.category || 'Development'} 
                    />
                    
                    <UserInformationPopup 
                        icon={<WalletMinimal size={24} className="text-[#0A65CC]" />} 
                        title={'Price:'} 
                        text={bountyData?.price || '$50k'} 
                    />
                    <UserInformationPopup 
                        icon={<CircleCheck size={24} className={statusIconClass} />} 
                        title={'Status:'} 
                        text={status} 
                    />
                    <UserInformationPopup 
                        icon={<BriefcaseBusiness size={24} className="text-[#0A65CC]" />} 
                        title={'MILESTONES'} 
                        text={String(bountyData?.milestones || 5)} 
                    />
                    
                </div>
            </div>
        </div>
    )
}
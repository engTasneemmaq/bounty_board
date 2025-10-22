import { Ellipsis } from "lucide-react";
import { SubTitleText } from "../../../../../../shared/Texts/SubTitleText";
import { Divider } from "antd";
import { MileStoneCard } from "./MileStonesCard";

export const MileStonesStatus = ({ useOutletContext, status }) => {

    const statusColor = { 
        'completed' : {
            borderColor: '#78C552', 
        }, 
        'in progress': {
            borderColor: '#E2E8F0', 
        }, 
        'awaiting review': {
            borderColor: '#306BFF', 
        }, 
        'back to queue': {
            borderColor: '#FFB580',
        }
    }

    const bountyDetails = useOutletContext(); 
    const findLength = bountyDetails.milestoneDetails.filter((milestone)=> milestone.status === status ).length; 
    const capitalizeStatus = status.charAt(0).toUpperCase() + status.slice(1);

    return (
        <div className="flex flex-col">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-[16px] items-center">
                    <SubTitleText font={'bold'} text={capitalizeStatus} size={15} />
                    <span className={`rounded-full border-[#E2E8F0] border w-[35px] h-[25px] flex items-center justify-center text-[12px] text-[#94A3B8]`}> {findLength} </span>
                </div>
                <Ellipsis />
            </div>
            <Divider className={`border-[2px] rounded-full mb-[30px]`} style={{borderColor:statusColor[status].borderColor}} />
            <MileStoneCard useOutletContext={useOutletContext} status={status} />
        </div>

    )
}
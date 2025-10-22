import { useOutletContext } from "react-router-dom";
import { MileStonesStatus } from "./BountyMileStoneComponents/MileStonesStatus";

export const BountyMilestonesDetails = () => {
    return (
        <div className="grid xl:grid-cols-3  2xl:grid-cols-4 gap-[35px]">
            <MileStonesStatus useOutletContext ={useOutletContext} status={'in progress'} />
            <MileStonesStatus useOutletContext ={useOutletContext} status={'awaiting review'} />
            <MileStonesStatus useOutletContext ={useOutletContext} status={'back to queue'} />
            <MileStonesStatus useOutletContext ={useOutletContext} status={'completed'} />
        </div>
    )
}
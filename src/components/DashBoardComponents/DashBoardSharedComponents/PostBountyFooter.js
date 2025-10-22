import { useState } from "react";
import { Button } from "antd";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import { CustomModal } from "../../../shared/Modal/CustomModal";
import { ModalForPostBounty } from "./ModalForPostBounty";
export const PostBountyFooter = ({ navigateTo, bountyData, milestones }) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <div className="flex flex-row items-center flex-wrap gap-[10px] mt-[250px] ">
            <Button onClick={navigateTo} className="h-[56px] w-[87px] border-[#0A65CC] text-[#0A65CC]">Back</Button>
            <ArrowButton className="w-[194px] h-[56px] " text="Post a Bounty" divClassName={'justify-start '} onClick={showModal} />

            <CustomModal open={open}
                onCancel={handleCancel}
                content={<ModalForPostBounty bountyData={bountyData} milestones={milestones} />} />
        </div>
    )
}
import BountyBoard from "../assets/logos/BountyBoard.svg"
import { Progress } from "antd";
import AccountInfo from "../components/AccountInfo"
import { useState } from "react";
import { FooterForProfile } from "../components/AccountInfo/NavigationInfo/FooterForProfile";

const AccountSettings = () => {
    const [percentForProgress, setPercentForProgress] = useState(0)
    return (
        <div className="flex flex-col w-full">
            <div className="flex justify-between px-6 py-6 items-center gap-[30px] text-[14px] md:px-12 md:text-base">
                <div className="flex justify-center md:justify-start h-[66px] w-[371px]">
                    <img src={BountyBoard} alt="Bounty Board" />
                </div>
                <div className="flex flex-col w-[312px] gap-2">
                    <div className="flex flex-row justify-between">
                        <span className="text-gray-500 font-inter">Setup Progress</span>
                        <span className="font-inter text-[#0A65CC]"> {percentForProgress}% Completed </span>
                    </div>
                    <Progress percent={percentForProgress} showInfo={false} status="active" />
                </div>
            </div>
            <div className="flex flex-col justify-center items-center w-full">
                <AccountInfo setPercentForProgress={setPercentForProgress} percentForProgress={percentForProgress} />
            </div>
            <FooterForProfile />
        </div>
    );
}

export default AccountSettings;
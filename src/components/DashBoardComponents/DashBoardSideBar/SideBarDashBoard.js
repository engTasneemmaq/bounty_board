import { useState } from "react";
import { Button } from "antd";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { LabelMainText } from "../DashBoardSharedComponents/LabelMainText";
import { ButtonSideBar } from "./ButtonSideBar";



export const SideBarDashBoard = ({ buttonsDashBoard, buttonsWorks, buttonsBounties, logout }) => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen((prev) => !prev);
    };

    return (

        <div className="absolute h-full lg:relative">
            <div className={`w-[288px] h-[111vh] lg:h-full relative transition-transform duration-300 ease-in-out bg-white z-20 border-r border-[#E4E5E8] pb-[80px] ${open ? 'translate-x-[0px]' : 'translate-x-[-270px]'} lg:translate-x-[0px]`}>

                <LabelMainText text={"DASHBOARD"} />
                <ButtonSideBar labelButtons={buttonsDashBoard} />
                <LabelMainText text={"My Work"} />
                <ButtonSideBar labelButtons={buttonsWorks} />
                <LabelMainText text={"My Bounties"} />
                <ButtonSideBar labelButtons={buttonsBounties} />
                <ButtonSideBar labelButtons={logout} />
                <Button
                    className={`border-0 rounded-none transition-transform duration-300 ease-in-out bg-transparent lg:hidden absolute top-1/2 right-[-26px]  rounded-tr-[5px] rounded-br-[5px]`}
                    onClick={showDrawer}>
                    {open ? <ChevronLeft /> : <ChevronRight />}
                </Button>
            </div>
        </div>

    );
};

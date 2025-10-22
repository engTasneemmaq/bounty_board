import React, { useState, useEffect } from "react";
import BountyBoard from "../../../assets/logos/BountyBoard.svg";
import { Button } from "antd";
import { MenuOutlined, BellOutlined } from "@ant-design/icons";
import { Container } from "../../../shared/Container/Container";
import { HeaderDropDown } from "./HeaderDropDown";

export const DashBoardHeader = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    const menuHandler = () => setOpenMenu((prev) => !prev);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(min-width: 768px)");

        const handleResize = (e) => {
            setIsMobile(!e.matches);
            if (e.matches) {
                setOpenMenu(false);
            }
        };

        handleResize(mediaQuery);
        mediaQuery.addEventListener("change", handleResize);
        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <Container>
            <div className="flex justify-between py-6 items-center gap-[30px] text-[14px] md:text-base">
                <div className="flex justify-start h-[41px] w-[371px]">
                    <img src={BountyBoard} alt="Bounty Board" />
                </div>
                <div className="md:hidden flex gap-[20px]">
                    <Button
                        className="border-0 p-0 relative after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-[#E05151] after:right-0 after:top-0 after:z-10 after:rounded-full"
                    >
                        <BellOutlined className="text-[24px]" />
                    </Button>
                    {isMobile && (
                        <Button className="border-0 p-0 relative" onClick={menuHandler}>
                            <MenuOutlined className="text-[24px]" />
                        </Button>
                    )}

                </div>

                {!isMobile && (
                    <HeaderDropDown isMobile={false} />
                )}
            </div>

            {isMobile && (
                <HeaderDropDown isMobile={true} openMenu={openMenu} />
            )}
        </Container>
    );
};

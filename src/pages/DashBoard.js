/** @format */

import { SideBarDashBoard } from "../components/DashBoardComponents/DashBoardSideBar/SideBarDashBoard";
import {
  Layers,
  UsersRound,
  Settings,
  Wallet,
  Briefcase,
  Star,
  Hourglass,
  CirclePlus,
  LoaderCircle,
  LogOut,
} from "lucide-react";
import { Container } from "../shared/Container/Container";
import { Outlet } from "react-router-dom";
import { FooterForProfile } from "../components/AccountInfo/NavigationInfo/FooterForProfile";
import { DashBoardHeader } from "../components/DashBoardComponents/DashBoardSideBar/DashBoardHeader";
import { Divider } from "antd";
import { MainHeader } from "../shared/MainHeader/MainHeader";


const DashBoard = () => {
  const buttonsDashBoard = [
    { label: "Overview", icon: <Layers />, to: "/dashboard" },
    { label: "My Team", icon: <UsersRound />, to: "MyTeam" },
    { label: "Wallet", icon: <Wallet />, to: "wallet" },
    { label: "Settings", icon: <Settings />, to: "settings" },
  ];

  const buttonsWorks = [
    { label: "Assigned to me", icon: <Briefcase />, to: "assigned" },
    { label: "Completed Work", icon: <Star />, to: "completed" },
    { label: "Applications", icon: <Hourglass />, to: "pending-applications" },
  ];

  const buttonsBounties = [
    { label: "Post a Bounty", icon: <CirclePlus />, to: "post-bounty" },
    { label: "Posted Bounties", icon: <Star />, to: "posted-bounties" },
    {
      label: "In Progress Bounties",
      icon: <LoaderCircle />,
      to: "in-progress",
    },
    { label: "Pending Bounties", icon: <Hourglass />, to: "pending-bounties" },
  
  ];
  const logout = [{ label: "Logout", icon: <LogOut />, to: "logout" }];

  return (
    <div>
      <MainHeader />
      <DashBoardHeader />
      <Divider className='border-[1.5px] m-0' />
      <Container>
        <div className='flex flex-row gap-[50px]'>
          <SideBarDashBoard
            buttonsDashBoard={buttonsDashBoard}
            buttonsWorks={buttonsWorks}
            buttonsBounties={buttonsBounties}
            logout={logout}
          />
          <div className='px-6 lg:px-0 mt-[50px] w-full '>
            <Outlet />
          </div>

        </div>
      </Container>
      <FooterForProfile />
    </div>
  );
};

export default DashBoard;

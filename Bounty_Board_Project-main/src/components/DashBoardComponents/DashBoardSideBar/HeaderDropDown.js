import { Button, Avatar, Dropdown, Menu } from "antd";
import { BellOutlined, UserOutlined, SettingOutlined, LogoutOutlined } from "@ant-design/icons";
import { customColors } from "../../../Theme/Theme";
import { useNavigate } from "react-router";
import { useAuth } from "../../../context/AuthContext";

export const HeaderDropDown = ({ isMobile, openMenu }) => {
  const navigate = useNavigate();
  const { user, signOut } = useAuth();
  
  const clickedHandler = () =>{ 
    navigate('post-bounty')
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="dashboard" onClick={() => navigate('/dashboard')}>
        <div className="flex items-center gap-2 py-1">
          <UserOutlined />
          <span>Dashboard</span>
        </div>
      </Menu.Item>
      <Menu.Item key="settings" onClick={() => navigate('settings')}>
        <div className="flex items-center gap-2 py-1">
          <SettingOutlined />
          <span>Settings</span>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>
        <div className="flex items-center gap-2 py-1 text-red-600">
          <LogoutOutlined />
          <span>Sign Out</span>
        </div>
      </Menu.Item>
    </Menu>
  );
  
  const mobileClasses = `md:hidden overflow-hidden px-6 transition-all duration-300 ease-in-out
    flex flex-col items-start w-[312px] gap-[24px]
    ${openMenu ? 'max-h-[500px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2 pointer-events-none'}`;

  const desktopClasses = `hidden md:flex flex-row items-center justify-end w-[312px] gap-[24px]`;

  // Get user initials from name
  const getUserInitials = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
    }
    if (user?.firstName) {
      return user.firstName.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  return (
    <div className={isMobile ? mobileClasses : desktopClasses}>
      <Button
        className="hidden md:block border-0 p-0 relative after:content-[''] after:absolute after:w-[10px] after:h-[10px] after:bg-[#E05151] after:right-0 after:top-0 after:z-10 after:rounded-full"
      >
        <BellOutlined className="text-[24px]" />
      </Button>
      <Button
        type="default"
        className="rounded-[3px] font-semibold w-[158px] h-[48px] border-[2px]"
        style={{
          color: customColors.darkBlue,
          borderColor: customColors.darkBlue,
        }}
        onClick={clickedHandler}
      >
        Post a Bounty
      </Button>
      <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt={`${user?.firstName} ${user?.lastName}`}
            className="h-10 w-10 rounded-full object-cover border-2 border-gray-300 cursor-pointer hover:border-[#0A65CC] transition-all"
          />
        ) : (
          <Avatar 
            size="large" 
            style={{ 
              backgroundColor: '#0A65CC', 
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: '600'
            }}
            className="hover:bg-[#0854B3] transition-colors"
          >
            {getUserInitials()}
          </Avatar>
        )}
      </Dropdown>
    </div>
  );
};

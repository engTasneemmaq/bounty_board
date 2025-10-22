/** @format */

import { useState, useMemo } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { Container } from "../Container/Container";
import { Select, Dropdown, Menu, AutoComplete } from "antd";
import { MenuOutlined, UserOutlined, SettingOutlined, LogoutOutlined, SearchOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import { useAuth } from "../../context/AuthContext";
import { bountiesCardData } from "../../MockData/bountiesCardData";
import BountyBoardLogo from "../../assets/logos/BountyBoard.svg";
import { Home, LayoutDashboard, Info, User, Settings, LogOut, Search } from "lucide-react";

export const MainHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const { user, isAuthenticated, signOut } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  // Search functionality
  const handleSearch = (value) => {
    if (value && value.trim()) {
      const selectedBounty = bountiesCardData.find(b => b.id.toString() === value);
      if (selectedBounty) {
        navigate(`/details/${selectedBounty.id}`, {
          state: { bountyData: selectedBounty }
        });
      } else {
        navigate(`/?search=${encodeURIComponent(value)}`);
      }
      setSearchValue("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchValue && searchValue.trim()) {
      navigate(`/?search=${encodeURIComponent(searchValue)}`);
      setSearchValue("");
    }
  };

  const searchOptions = useMemo(() => {
    if (!searchValue.trim()) return [];
    const filtered = bountiesCardData.filter((bounty) =>
      bounty.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      bounty.description.toLowerCase().includes(searchValue.toLowerCase()) ||
      bounty.skills.some(skill => skill.toLowerCase().includes(searchValue.toLowerCase()))
    );
    return filtered.slice(0, 8).map((bounty) => ({
      value: bounty.id.toString(),
      label: (
        <div className="flex items-start gap-3 py-2">
          <img
            src={bounty.image}
            alt={bounty.name}
            className="w-12 h-12 rounded object-cover flex-shrink-0"
          />
          <div className="flex-1 min-w-0">
            <div className="font-medium text-sm text-gray-900 truncate">
              {bounty.name}
            </div>
            <div className="text-xs text-gray-500 truncate">
              {bounty.description}
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-xs font-semibold text-[#0A65CC]">
                {bounty.details.bountyReward}
              </span>
              <span className="text-xs text-gray-400">•</span>
              <span className="text-xs text-gray-500">
                {bounty.daysRemaining} days left
              </span>
            </div>
          </div>
        </div>
      ),
    }));
  }, [searchValue]);

  const userMenu = (
    <Menu className="user-menu-dropdown">
      <Menu.Item key="dashboard" onClick={() => navigate('/dashboard')}>
        <div className="flex items-center gap-3 py-2 px-2 hover:text-blue-600 transition-colors">
          <LayoutDashboard size={18} />
          <span className="font-medium">Dashboard</span>
        </div>
      </Menu.Item>
      <Menu.Item key="settings" onClick={() => navigate('/dashboard/settings')}>
        <div className="flex items-center gap-3 py-2 px-2 hover:text-blue-600 transition-colors">
          <Settings size={18} />
          <span className="font-medium">Settings</span>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>
        <div className="flex items-center gap-3 py-2 px-2 text-red-600 hover:text-red-700 transition-colors">
          <LogOut size={18} />
          <span className="font-medium">Sign Out</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  const USAFlag = () => (
    <svg width='20' height='14' viewBox='0 0 7410 3900'>
      <rect width='7410' height='3900' fill='#b22234' />
      <g fill='#fff'>
        <rect y='300' width='7410' height='300' />
        <rect y='900' width='7410' height='300' />
        <rect y='1500' width='7410' height='300' />
        <rect y='2100' width='7410' height='300' />
        <rect y='2700' width='7410' height='300' />
        <rect y='3300' width='7410' height='300' />
      </g>
      <rect width='2964' height='2100' fill='#3c3b6e' />
      <g fill='#fff'>
        {Array.from({ length: 9 }, (_, row) =>
          Array.from({ length: row % 2 === 0 ? 6 : 5 }, (_, col) => {
            const x = col * 494 + (row % 2 === 0 ? 82 : 329);
            const y = row * 210 + 105;
            return (
              <polygon
                key={`${row}-${col}`}
                points={`${x},${y - 70} ${x + 20},${y + 22} ${x - 30},${
                  y - 22
                } ${x + 30},${y - 22} ${x - 20},${y + 22}`}
              />
            );
          }),
        )}
      </g>
    </svg>
  );

  const ArabicFlag = () => (
    <svg width='20' height='14' viewBox='0 0 512 336'>
      <rect width='512' height='336' fill='#006c35' />
      <text
        x='50%'
        y='45%'
        dominantBaseline='middle'
        textAnchor='middle'
        fill='white'
        fontSize='35'
        fontFamily='Arial'
      >
        لا إله إلا الله
      </text>
      <rect x='140' y='240' width='230' height='20' fill='white' />
    </svg>
  );

  return (
  <div className="w-full bg-[#F8F9FC] border-b border-gray-200">
    <div className="max-w-[100rem] w-[85%] mx-auto">
      {/* شريط الروابط */}
      <nav className="h-16 flex items-center justify-between px-4">
        <div className="flex items-center gap-8 sm:gap-12">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `nav-link text-[15px] font-medium flex items-center gap-2 transition-all duration-300 ${
                isActive 
                  ? "text-gradient font-bold" 
                  : "text-gray-700 hover:text-blue-600"
              }`
            }
          >
            <Home size={18} />
            Home
          </NavLink>

          {/* على الديسكتوب نظهر باقي اللنكات؛ على الموبايل منخلي منيو */}
          {!isMobile && (
            <>
              {isAuthenticated && (
                <NavLink
                  to="/dashboard"
                  className={({ isActive }) =>
                    `nav-link text-[15px] font-medium flex items-center gap-2 transition-all duration-300 ${
                      isActive 
                        ? "text-gradient font-bold" 
                        : "text-gray-700 hover:text-blue-600"
                    }`
                  }
                >
                  <LayoutDashboard size={18} />
                  Dashboard
                </NavLink>
              )}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link text-[15px] font-medium flex items-center gap-2 transition-all duration-300 ${
                    isActive 
                      ? "text-gradient font-bold" 
                      : "text-gray-700 hover:text-blue-600"
                  }`
                }
              >
                <Info size={18} />
                About Us
              </NavLink>
            </>
          )}

          {isMobile && (
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
              <MenuOutlined className="text-xl text-gray-700" />
            </button>
          )}
        </div>

        {/* User Profile or Login/Signup */}
        <div className="flex items-center gap-3">
          {isAuthenticated ? (
            <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight" overlayClassName="user-menu-overlay">
              <div className="flex items-center gap-2 cursor-pointer hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 px-4 py-2 rounded-xl transition-all duration-300 border border-transparent hover:border-blue-200 shadow-sm hover:shadow-md group">
                <div className="relative">
                  <img
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=667eea&color=fff`}
                    alt={`${user?.firstName} ${user?.lastName}`}
                    className="h-8 w-8 rounded-full object-cover border-2 border-gray-200 group-hover:border-blue-400 transition-all"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                </div>
                {!isMobile && (
                  <span className="text-sm font-semibold text-gray-900 group-hover:text-gradient transition-all">
                    {user?.firstName}
                  </span>
                )}
              </div>
            </Dropdown>
          ) : (
            <div className="flex items-center gap-3">
              <button
                onClick={() => navigate('/login')}
                className="px-6 py-2.5 text-sm font-bold text-blue-600 border-2 border-blue-200 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl hover:border-blue-400 hover:from-blue-100 hover:to-purple-100 hover:shadow-lg transition-all duration-300 min-w-[100px]"
              >
                Sign In
              </button>
              <button
                onClick={() => navigate('/register')}
                className="px-6 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 min-w-[100px]"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Logo and Search Bar - Only show on home page */}
      {isHomePage && (
        <div className="px-4 py-4 bg-[#F8F9FC] border-t border-gray-200">
          <div className="flex items-center gap-6">
            {/* Logo */}
            <NavLink to="/" className="flex items-center flex-shrink-0">
              <img
                src={BountyBoardLogo}
                alt="Bounty Board"
                className="h-9 md:h-11 w-auto"
              />
            </NavLink>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-3xl">
              <form onSubmit={handleFormSubmit} className="w-full">
                <AutoComplete
                  value={searchValue}
                  onChange={setSearchValue}
                  onSelect={handleSearch}
                  options={searchOptions}
                  className="w-full"
                  popupClassName="bounty-search-dropdown"
                  notFoundContent={searchValue.trim() ? "No bounties found" : null}
                >
                  <div className="relative group">
                    <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors z-10" />
                    <input
                      type="text"
                      placeholder="Find bounties by keyword or skill..."
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300 text-sm bg-white hover:border-gray-300"
                    />
                  </div>
                </AutoComplete>
              </form>
            </div>
          </div>

          {/* Mobile Search Bar */}
          <div className="md:hidden mt-3">
            <form onSubmit={handleFormSubmit} className="w-full">
              <AutoComplete
                value={searchValue}
                onChange={setSearchValue}
                onSelect={handleSearch}
                options={searchOptions}
                className="w-full"
                popupClassName="bounty-search-dropdown"
                notFoundContent={searchValue.trim() ? "No bounties found" : null}
              >
                <div className="relative group">
                  <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors z-10" />
                  <input
                    type="text"
                    placeholder="Search bounties..."
                    className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300 text-sm bg-white"
                  />
                </div>
              </AutoComplete>
            </form>
          </div>
        </div>
      )}
    </div>

    {/* قائمة الموبايل المنسدلة */}
    {isMobile && (
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <div className="flex flex-col gap-2 pl-4 pb-3">
          {isAuthenticated && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `nav-link text-[14px] ${isActive ? "active-link" : ""}`
              }
            >
              Dashboard
            </NavLink>
          )}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `nav-link text-[14px] ${isActive ? "active-link" : ""}`
            }
          >
            About Us
          </NavLink>
        </div>
      </div>
    )}

    <style>
      {`
        .nav-link {
          position: relative;
          padding-bottom: 4px;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 100%;
          height: 1px;
          background-color: transparent;
          transition: background-color 0.3s ease;
        }
        .active-link {
          font-weight: 500;
          color: #0A65CC;
        }
        .active-link::after {
          background-color: #0A65CC;
          bottom: ${isMobile ? "-1px" : "-11px"};
        }

        /* Autocomplete Dropdown Styling */
        .bounty-search-dropdown .ant-select-item {
          padding: 8px 12px;
        }
        .bounty-search-dropdown .ant-select-item:hover {
          background-color: #f0f6ff;
        }
        .bounty-search-dropdown .ant-select-item-option-selected {
          background-color: #e7f0fa;
        }
      `}
    </style>
  </div>
);

};

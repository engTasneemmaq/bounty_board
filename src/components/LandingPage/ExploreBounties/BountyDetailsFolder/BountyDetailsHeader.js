/** @format */
import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, User, LogOut, Settings } from 'lucide-react';
import BountyBoardLogo from '../../../../assets/logos/BountyBoard.svg';
import { useAuth } from '../../../../context/AuthContext';
import { Dropdown, Menu, AutoComplete } from 'antd';
import { bountiesCardData } from '../../../../MockData/bountiesCardData';

const BountyDetailsHeader = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { user, isAuthenticated, signOut } = useAuth();

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
      setSearchQuery("");
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (searchQuery && searchQuery.trim()) {
      navigate(`/?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  const searchOptions = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const filtered = bountiesCardData.filter((bounty) =>
      bounty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      bounty.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
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
  }, [searchQuery]);

  const handleLogout = () => {
    signOut();
    navigate('/');
  };

  const userMenu = (
    <Menu>
      <Menu.Item key="dashboard" onClick={() => navigate('/dashboard')}>
        <div className="flex items-center gap-2 py-1">
          <User size={16} />
          <span>Dashboard</span>
        </div>
      </Menu.Item>
      <Menu.Item key="settings" onClick={() => navigate('/dashboard/settings')}>
        <div className="flex items-center gap-2 py-1">
          <Settings size={16} />
          <span>Settings</span>
        </div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="logout" onClick={handleLogout}>
        <div className="flex items-center gap-2 py-1 text-red-600">
          <LogOut size={16} />
          <span>Sign Out</span>
        </div>
      </Menu.Item>
    </Menu>
  );

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => navigate('/')}
          >
            <img 
              src={BountyBoardLogo} 
              alt="Bounty Board" 
              className="h-8 md:h-10 w-auto"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <form onSubmit={handleFormSubmit} className="w-full">
              <AutoComplete
                value={searchQuery}
                onChange={setSearchQuery}
                onSelect={handleSearch}
                options={searchOptions}
                className="w-full"
                popupClassName="bounty-search-dropdown"
                notFoundContent={searchQuery.trim() ? "No bounties found" : null}
              >
                <div className="relative">
                  <Search
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                    size={20}
                  />
                  <input
                    type="text"
                    placeholder="Find bounties by keyword or skill..."
                    className="w-full pl-12 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A65CC] focus:border-transparent text-sm"
                  />
                </div>
              </AutoComplete>
            </form>
          </div>

          {/* Auth Buttons / User Menu */}
          <div className="flex items-center gap-3">
            {isAuthenticated ? (
              <Dropdown overlay={userMenu} trigger={['click']} placement="bottomRight">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 px-3 py-2 rounded-lg transition-colors">
                  <img
                    src={user?.avatar || `https://ui-avatars.com/api/?name=${user?.firstName}+${user?.lastName}&background=0A65CC&color=fff`}
                    alt={`${user?.firstName} ${user?.lastName}`}
                    className="h-8 w-8 rounded-full object-cover border border-gray-200"
                  />
                  <div className="hidden md:block">
                    <div className="text-sm font-medium text-gray-900">
                      {user?.firstName} {user?.lastName}
                    </div>
                  </div>
                </div>
              </Dropdown>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="px-4 md:px-6 py-2 md:py-2.5 text-[#0A65CC] border border-[#0A65CC] rounded-lg font-medium hover:bg-[#E7F0FA] transition-colors text-sm md:text-base"
                >
                  Sign In
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="px-4 md:px-6 py-2 md:py-2.5 bg-[#0A65CC] text-white rounded-lg font-medium hover:bg-[#0854B3] transition-colors text-sm md:text-base"
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleFormSubmit} className="w-full">
            <AutoComplete
              value={searchQuery}
              onChange={setSearchQuery}
              onSelect={handleSearch}
              options={searchOptions}
              className="w-full"
              popupClassName="bounty-search-dropdown"
              notFoundContent={searchQuery.trim() ? "No bounties found" : null}
            >
              <div className="relative">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 z-10"
                  size={18}
                />
                <input
                  type="text"
                  placeholder="Find bounties..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0A65CC] focus:border-transparent text-sm"
                />
              </div>
            </AutoComplete>
          </form>
        </div>
      </div>
    </header>
  );
};

export default BountyDetailsHeader;

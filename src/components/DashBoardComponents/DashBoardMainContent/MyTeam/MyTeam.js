import React, { useState } from 'react';
import { SubTitleText } from '../../../../shared/Texts/SubTitleText';
import { MyTeamOwner } from './MyTeamOwner';
import { MyTeamMember } from './MyTeamMember';
import { CreateTeam } from './CreateTeam';
import { Search, Plus, Mail } from 'lucide-react';
import CreativeButton from '../../../../shared/Buttons/CreativeButton';

export const MyTeam = () => {
  const [activeTab, setActiveTab] = useState('owner');
  const [searchTerm, setSearchTerm] = useState('');
  const [showInvitations, setShowInvitations] = useState(false);

  const handleTabChange = (tabKey) => {
    setActiveTab(tabKey);
    setShowInvitations(false);
    console.log('Switched to tab:', tabKey);
  };

  const handleCreateTeamClick = () => {
    setActiveTab('create');
    setShowInvitations(false);
  };

  const handleSearchTeam = (value) => {
    setSearchTerm(value);
    console.log('Searching teams:', value);
  };

  const handleShowTeamProfile = (team) => {
    // You can pass team data to show specific team profile
    console.log('Show team profile:', team);
  };

  const handleInvitationsClick = () => {
    setShowInvitations(true);
    setActiveTab('member');
  };

  const tabs = [
    { key: 'owner', label: 'My Team (Owner)' },
    { key: 'member', label: 'My Team (Member)' },
    { key: 'create', label: 'Create a Team' }
  ];

  const handleTeamCreated = () => {
    // After creating team, switch to owner tab
    setActiveTab('owner');
    setShowInvitations(false);
  };

  const renderContent = () => {
    switch (activeTab) {
      case 'owner':
        return <MyTeamOwner searchTerm={searchTerm} />;
      case 'member':
        return (
          <>
            {showInvitations && (
              <div className="mb-4 p-4 bg-blue-50 border border-blue-200 rounded-md flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                  <p className="text-blue-800 text-sm font-medium">
                    Showing only teams with pending invitations
                  </p>
                </div>
                <button
                  onClick={() => setShowInvitations(false)}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium underline"
                >
                  View All Teams
                </button>
              </div>
            )}
            <MyTeamMember showOnlyInvitations={showInvitations} searchTerm={searchTerm} />
          </>
        );
      case 'create':
        return <CreateTeam onTeamCreated={handleTeamCreated} />;
      default:
        return <MyTeamOwner searchTerm={searchTerm} />;
    }
  };

  return (
    <div className="w-full">
      {/* Page Title and Buttons */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gradient">
          My Team
        </h2>
        <div className="flex gap-3">
          <CreativeButton
            variant="outline"
            size="sm"
            onClick={handleInvitationsClick}
            className="h-[44px] flex items-center gap-2"
          >
            <Mail size={18} />
            Invitations (1)
          </CreativeButton>
          <CreativeButton
            variant="primary"
            size="sm"
            onClick={handleCreateTeamClick}
            className="h-[44px] flex items-center gap-2"
          >
            <Plus size={18} />
            Create Team
          </CreativeButton>
        </div>
      </div>

      {/* Tabs and Search Bar */}
      <div className="flex items-center justify-between border-b border-gray-200 mb-6">
        <div className="flex">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => handleTabChange(tab.key)}
              className={`px-6 py-3 text-[15px] font-semibold border-b-2 transition-all duration-300 relative ${
                activeTab === tab.key
                  ? 'border-blue-600 text-gradient'
                  : 'border-transparent text-gray-600 hover:text-blue-600 hover:border-blue-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Search Bar */}
        <div className="relative mb-[-1px] group">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
          <input
            type="text"
            placeholder="Search Team"
            value={searchTerm}
            className="w-[300px] pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300 bg-white hover:border-gray-300"
            onChange={(e) => handleSearchTeam(e.target.value)}
          />
        </div>
      </div>

      {/* Content */}
      {renderContent()}
    </div>
  );
};

import React, { useState } from 'react';
import { TeamCard } from './components/TeamCard';
import { TeamProfile } from './components/TeamProfile';

export const MyTeamOwner = ({ searchTerm = '' }) => {
  const [showTeamProfile, setShowTeamProfile] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);

  // Mock data for teams
  const teams = [
    {
      id: 1,
      name: 'Team Name',
      members: [
        { id: 1, name: 'Your Name (Owner)', email: 'you@company.com', status: 'Active', role: 'Owner', avatar: 'MN' },
        { id: 2, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 3, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 4, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 5, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 6, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' }
      ]
    },
    {
      id: 2,
      name: 'Team Name',
      members: [
        { id: 1, name: 'You (Owner)', email: 'you@company.com', status: 'Active', role: 'Owner', avatar: 'MN' },
        { id: 2, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 3, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 4, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 5, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' }
      ]
    }
  ];

  const handleViewTeamProfile = (team) => {
    setSelectedTeam(team);
    setShowTeamProfile(true);
  };

  const handleCloseTeamProfile = () => {
    setShowTeamProfile(false);
    setSelectedTeam(null);
  };

  // Filter teams based on search term
  const filteredTeams = teams.filter(team => 
    team.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // If team profile is shown, render it instead of teams list
  if (showTeamProfile && selectedTeam) {
    return (
      <TeamProfile
        team={selectedTeam}
        onClose={handleCloseTeamProfile}
        isOwner={true}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Teams List */}
      <div className="space-y-6">
        {filteredTeams.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[#767F8C]">No teams found matching "{searchTerm}"</p>
          </div>
        ) : (
          filteredTeams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              isOwner={true}
              onViewProfile={() => handleViewTeamProfile(team)}
            />
          ))
        )}
      </div>
    </div>
  );
};

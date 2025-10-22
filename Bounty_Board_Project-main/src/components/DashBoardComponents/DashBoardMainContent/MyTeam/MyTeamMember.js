import React, { useState } from 'react';
import { TeamCard } from './components/TeamCard';
import { TeamProfile } from './components/TeamProfile';

export const MyTeamMember = ({ showOnlyInvitations = false, searchTerm = '' }) => {
  const [showTeamProfile, setShowTeamProfile] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  
  // Pass the invitations mode to TeamCard
  const isInvitationsMode = showOnlyInvitations;

  // Mock data for teams where user is a member
  const allTeams = [
    {
      id: 1,
      name: 'Team Name',
      hasPendingInvitation: true,
      members: [
        { id: 1, name: 'Your Name (Owner)', email: 'you@company.com', status: 'Active', role: 'Owner', avatar: 'MN' },
        { id: 2, name: 'You', email: 'you@company.com', status: 'Pending', role: 'Member', avatar: 'MN' },
        { id: 3, name: 'Your name', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 4, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 5, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 6, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' }
      ]
    },
    {
      id: 2,
      name: 'Team Name',
      hasPendingInvitation: false,
      members: [
        { id: 1, name: 'You (Owner)', email: 'you@company.com', status: 'Active', role: 'Owner', avatar: 'MN' },
        { id: 2, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 3, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 4, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' },
        { id: 5, name: 'You', email: 'you@company.com', status: 'Active', role: 'Member', avatar: 'MN' }
      ]
    }
  ];

  // Filter teams based on showOnlyInvitations and searchTerm
  let teams = showOnlyInvitations 
    ? allTeams.filter(team => team.hasPendingInvitation)
    : allTeams;
  
  // Apply search filter
  if (searchTerm) {
    teams = teams.filter(team => 
      team.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  const handleViewTeamProfile = (team) => {
    setSelectedTeam(team);
    setShowTeamProfile(true);
  };

  const handleCloseTeamProfile = () => {
    setShowTeamProfile(false);
    setSelectedTeam(null);
  };

  const handleAcceptInvitation = () => {
    // Handle accept invitation logic
    console.log('Accept invitation');
  };

  const handleDeclineInvitation = () => {
    // Handle decline invitation logic
    console.log('Decline invitation');
  };

  // If team profile is shown, render it instead of teams list
  if (showTeamProfile && selectedTeam) {
    return (
      <TeamProfile
        team={selectedTeam}
        onClose={handleCloseTeamProfile}
        isOwner={false}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* Teams List */}
      <div className="space-y-6">
        {teams.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-[#767F8C]">
              {searchTerm ? `No teams found matching "${searchTerm}"` : 'No teams found'}
            </p>
          </div>
        ) : (
          teams.map((team) => (
            <TeamCard
              key={team.id}
              team={team}
              isOwner={false}
              showInvitationButtons={isInvitationsMode}
              onViewProfile={() => handleViewTeamProfile(team)}
              onAcceptInvitation={handleAcceptInvitation}
              onDeclineInvitation={handleDeclineInvitation}
            />
          ))
        )}
      </div>
    </div>
  );
};

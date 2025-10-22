import React, { useState, useEffect, useRef } from 'react';
import { MoreVertical, ArrowRight, UserPlus, Settings, Eye } from 'lucide-react';
import { showConfirm } from '../../../../../utils/confirm';
import { showMessage } from '../../../../../utils/toast';
import CreativeButton from '../../../../../shared/Buttons/CreativeButton';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';

export const TeamCard = ({
  team,
  isOwner,
  showInvitationButtons = false,
  onViewProfile,
  onAcceptInvitation,
  onDeclineInvitation
}) => {
  const [showMore, setShowMore] = useState(false);
  const [showMemberMenu, setShowMemberMenu] = useState(null);
  const [showTeamMenu, setShowTeamMenu] = useState(false);
  const teamMenuRef = useRef(null);
  // Detect if this card represents a team with a pending invitation for the user
  const hasPendingInvitation = !isOwner && (team?.hasPendingInvitation || team?.members?.some((member) => member.status === 'Pending'));

  // Handle Accept Invitation
  const handleAcceptInvitation = async () => {
    const confirmed = await showConfirm({
      title: '✅ Accept Invitation',
      message: `Join "${team.name}"?`,
      type: 'success',
      okText: 'Yes, Join',
      cancelText: 'Cancel'
    });
    
    if (confirmed) {
      showMessage.success(`You have successfully joined "${team.name}"! 🎉`);
      console.log('Accepted invitation for team:', team);
      if (onAcceptInvitation) {
        onAcceptInvitation(team);
      }
    }
  };

  // Handle Decline Invitation
  const handleDeclineInvitation = async () => {
    const confirmed = await showConfirm({
      title: 'Decline Invitation',
      message: `Are you sure you want to decline the invitation to "${team.name}"?`,
      type: 'warning',
      okText: 'Yes, Decline',
      cancelText: 'Cancel'
    });
    
    if (confirmed) {
      showMessage.error(`You have declined the invitation to "${team.name}".`);
      console.log('Declined invitation for team:', team);
      if (onDeclineInvitation) {
        onDeclineInvitation(team);
      }
    }
  };

  // Handle View Settings
  const handleViewSettings = async () => {
    await showConfirm({
      title: '⚙️ Team Settings',
      message: `Opening settings for "${team.name}"\n\nYou can configure:\n• Notifications\n• Privacy settings\n• Team preferences`,
      type: 'info',
      okText: 'Got it',
      showCancel: false
    });
    console.log('View settings for team:', team);
  };

  // Handle Leave Team
  const handleLeaveTeam = async () => {
    const confirmed = await showConfirm({
      title: '⚠️ Leave Team',
      message: `Are you sure you want to leave "${team.name}"?\n\nYou will need to be re-invited to join again.`,
      type: 'warning',
      okText: 'Yes, Leave',
      cancelText: 'Stay'
    });
    
    if (confirmed) {
      showMessage.success(`You have left "${team.name}" successfully.`);
      console.log('Left team:', team);
    }
  };

  // Close team menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (teamMenuRef.current && !teamMenuRef.current.contains(event.target)) {
        setShowTeamMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleMemberAction = async (action, memberId) => {
    const member = team.members.find(m => m.id === memberId);
    
    if (action === 'promote') {
      const confirmed = await showConfirm({
        title: '👑 Promote to Owner',
        message: `Promote "${member.name}" to Owner?\n\nYou will become a regular member.`,
        type: 'question',
        okText: 'Yes, Promote',
        cancelText: 'Cancel'
      });
      
      if (confirmed) {
        showMessage.success(`"${member.name}" has been promoted to Owner! 👑`);
        console.log('Promoted member to owner:', memberId);
      }
    } else if (action === 'remove') {
      const confirmed = await showConfirm({
        title: '⚠️ Remove Member',
        message: `Are you sure you want to remove "${member.name}" from the team?`,
        type: 'warning',
        okText: 'Yes, Remove',
        cancelText: 'Cancel'
      });
      
      if (confirmed) {
        showMessage.success(`"${member.name}" has been removed from the team.`);
        console.log('Removed member:', memberId);
      }
    }
    
    setShowMemberMenu(null);
  };

  const getMemberActions = (member) => {
    // If member is owner, don't show actions in member menu (owner has team-level menu)
    if (member.role === 'Owner') {
      return [
        { label: 'Transfer ownership', action: 'transfer' },
        { label: 'Delete team', action: 'delete', isDelete: true }
      ];
    }
    return [
      { label: '👑 Promote to Owner', action: 'promote' },
      { label: '🗑️ Remove from team', action: 'remove', isDelete: true }
    ];
  };

  const teamActions = [
    { label: 'Transfer ownership', action: 'transfer' },
    { label: 'Delete team', action: 'delete', isDelete: true }
  ];

  const handleTeamAction = async (action) => {
    if (action === 'transfer') {
      await showConfirm({
        title: '🔄 Transfer Ownership',
        message: 'You can select a team member to transfer ownership to from the member menu (⋮) next to their name.',
        type: 'info',
        okText: 'Got it',
        showCancel: false
      });
      console.log('Transfer ownership action');
    } else if (action === 'delete') {
      const confirmed = await showConfirm({
        title: '🗑️ Delete Team',
        message: `Are you sure you want to delete "${team.name}"?\n\nThis will permanently remove the team and all its data. This action cannot be undone.`,
        type: 'danger',
        okText: 'Yes, Delete',
        cancelText: 'Cancel'
      });
      
      if (confirmed) {
        showMessage.success(`Team "${team.name}" has been deleted.`);
        console.log('Delete team action');
      }
    }
    setShowTeamMenu(false);
  };
  
  const handleInviteClick = async () => {
    await showConfirm({
      title: '📧 Invite Members',
      message: `Invite Members to "${team.name}"\n\nThis will open a modal to search and invite new members to your team.`,
      type: 'info',
      okText: 'Got it',
      showCancel: false
    });
    console.log('Invite button clicked');
  };
  
  const handleSettingsClick = async () => {
    await showConfirm({
      title: '⚙️ Team Settings',
      message: `Team Settings for "${team.name}"\n\nHere you can configure:\n• Team name and description\n• Privacy settings\n• Notification preferences`,
      type: 'info',
      okText: 'Got it',
      showCancel: false
    });
    console.log('Settings button clicked');
  };

  return (
    <CreativeCard className="p-6">
      {/* Team Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center shadow-md">
            <span className="text-2xl font-bold text-gradient">MN</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gradient">{team.name}</h3>
          </div>
        </div>
        
        <div className="flex gap-2 items-center">
          {isOwner ? (
            <>
              <CreativeButton
                variant="outline"
                size="sm"
                onClick={handleInviteClick}
                className="h-[40px] flex items-center gap-2"
              >
                <UserPlus size={16} />
                Invite
              </CreativeButton>
              <CreativeButton
                variant="outline"
                size="sm"
                onClick={handleSettingsClick}
                className="h-[40px] flex items-center gap-2"
              >
                <Settings size={16} />
                Settings
              </CreativeButton>
              <div className="relative" ref={teamMenuRef}>
                <button
                  onClick={() => setShowTeamMenu(!showTeamMenu)}
                  className="p-2 hover:bg-[#F3F4F6] rounded"
                >
                  <MoreVertical size={18} />
                </button>
                
                {showTeamMenu && (
                  <div className="absolute right-0 top-10 bg-white border border-[#E4E5E8] rounded-lg shadow-lg z-10 min-w-[200px]">
                    {teamActions.map((action, index) => (
                      <button
                        key={action.action}
                        onClick={() => handleTeamAction(action.action)}
                        className={`w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FA] first:rounded-t-lg last:rounded-b-lg ${
                          action.isDelete ? 'text-red-500' : 'text-[#18191C]'
                        } ${index > 0 ? 'border-t border-[#E4E5E8]' : ''}`}
                      >
                        {action.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
                {hasPendingInvitation && showInvitationButtons ? (
                  <>
                    <CreativeButton
                      variant="error"
                      size="sm"
                      onClick={handleDeclineInvitation}
                      className="h-[40px]"
                    >
                      Decline
                    </CreativeButton>
                    <CreativeButton
                      variant="success"
                      size="sm"
                      onClick={handleAcceptInvitation}
                      className="h-[40px]"
                    >
                      Accept Invitation
                    </CreativeButton>
                    <CreativeButton
                      variant="outline"
                      size="sm"
                      onClick={handleViewSettings}
                      className="h-[40px] flex items-center gap-2"
                    >
                      <Eye size={16} />
                      View Settings
                    </CreativeButton>
                  </>
                ) : (
                  <>
                    <CreativeButton
                      variant="error"
                      size="sm"
                      onClick={handleLeaveTeam}
                      className="h-[40px] flex items-center gap-2"
                    >
                      <ArrowRight size={16} />
                      Leave Team
                    </CreativeButton>
                    <CreativeButton
                      variant="outline"
                      size="sm"
                      onClick={handleViewSettings}
                      className="h-[40px] flex items-center gap-2"
                    >
                      <Eye size={16} />
                      View Settings
                    </CreativeButton>
                  </>
                )}
            </>
          )}
        </div>
      </div>

      {/* Team Members */}
      <div>
        <h4 className="text-[16px] font-semibold text-[#18191C] mb-4">Team Members</h4>
        
        <div className="space-y-3">
          {team.members.slice(0, showMore ? team.members.length : 4).map((member) => {
            const memberActions = getMemberActions(member);
            
            return (
              <div key={member.id} className="flex items-center justify-between p-4 bg-white border border-[#E4E5E8] rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#D1D5DB] rounded-full flex items-center justify-center text-sm font-semibold text-[#4B5563]">
                    {member.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-[#18191C] text-sm">{member.name}</p>
                    <p className="text-sm text-[#767F8C]">{member.email} . {member.status}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Role Name"
                      className="px-4 py-2 border-2 border-gray-200 text-blue-600 rounded-lg text-[15px] w-[140px] focus:outline-none focus:border-blue-400 focus:shadow-lg bg-white placeholder:text-blue-600 transition-all duration-300"
                      defaultValue="Role Name"
                      disabled={!isOwner}
                    />
                  </div>
                  <CreativeButton
                    variant="primary"
                    size="sm"
                    onClick={onViewProfile}
                    className="h-[40px] flex items-center gap-2"
                  >
                    View Profile <ArrowRight size={16} />
                  </CreativeButton>
                  {isOwner && (
                    <div className="relative">
                      <button
                        onClick={() => setShowMemberMenu(showMemberMenu === member.id ? null : member.id)}
                        className="p-2 hover:bg-[#F3F4F6] rounded"
                      >
                        <MoreVertical size={18} />
                      </button>
                      
                      {showMemberMenu === member.id && (
                        <div className="absolute right-0 top-10 bg-white border border-[#E4E5E8] rounded-lg shadow-lg z-10 min-w-[200px]">
                          {memberActions.map((action, index) => (
                            <button
                              key={action.action}
                              onClick={() => handleMemberAction(action.action, member.id)}
                              className={`w-full px-4 py-2 text-left text-sm hover:bg-[#F8F9FA] first:rounded-t-lg last:rounded-b-lg ${
                                action.isDelete ? 'text-red-500' : 'text-[#18191C]'
                              } ${index > 0 ? 'border-t border-[#E4E5E8]' : ''}`}
                            >
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {team.members.length > 4 && (
          <div className="flex justify-center mt-4">
            <CreativeButton
              variant="outline"
              size="sm"
              onClick={() => setShowMore(!showMore)}
              className="h-[40px]"
            >
              {showMore ? 'Show Less' : 'Show More'}
            </CreativeButton>
          </div>
        )}
      </div>

      {/* Delete Team Section (for owners) */}
      {isOwner && (
        <div className="mt-6 pt-6 border-t border-[#E4E5E8]">
          <div className="flex items-center justify-between bg-white p-4 rounded-lg border border-[#E4E5E8]">
            <div>
              <h5 className="text-[16px] font-semibold text-[#18191C] mb-1">Delete team</h5>
              <p className="text-sm text-[#767F8C]">
                This will permanently remove the team and its associations.
              </p>
            </div>
            <button 
              onClick={() => handleTeamAction('delete')}
              className="flex items-center gap-2 px-5 py-2 bg-red-500 text-white rounded text-sm font-medium hover:bg-red-600 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
              </svg>
              Delete
            </button>
          </div>
        </div>
      )}
    </CreativeCard>
  );
};

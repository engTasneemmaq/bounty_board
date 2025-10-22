import React, { useState } from 'react';
import { SubTitleText } from '../../../../shared/Texts/SubTitleText';
import InputText from '../../../../shared/Inputs/InputText';
import { TeamDirectory } from './components/TeamDirectory';
import { Bold, Italic, Underline, Link, List, ListOrdered, Save, Send, Search, X } from 'lucide-react';
import { showMessage } from '../../../../utils/toast';
import CreativeButton from '../../../../shared/Buttons/CreativeButton';
import CreativeCard from '../../../../shared/Cards/CreativeCard';

export const CreateTeam = ({ onTeamCreated }) => {
  const [showDirectory, setShowDirectory] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [summary, setSummary] = useState('');
  const [searchMember, setSearchMember] = useState('');
  const [invitations, setInvitations] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [teamSaved, setTeamSaved] = useState(false); // Track if team is saved
  const [savedTeamData, setSavedTeamData] = useState(null); // Store saved team data

  const handleSaveTeam = () => {
    // Validate team name
    if (!teamName.trim()) {
      showMessage.error('Please enter a team name');
      return;
    }

    setIsCreating(true);
    
    // Simulate API call to save team
    setTimeout(() => {
      console.log('Saving team:', { teamName, summary });
      
      // Save team data
      const teamData = {
        id: Date.now(),
        name: teamName,
        summary: summary,
        createdAt: new Date().toISOString()
      };
      
      setSavedTeamData(teamData);
      setTeamSaved(true);
      setIsCreating(false);
      
      // Show success message
      showMessage.success(`Team "${teamName}" saved successfully! Now you can invite members.`);
    }, 1000);
  };

  const handleSendInvitations = () => {
    if (invitations.length === 0) {
      showMessage.error('Please add at least one member to invite');
      return;
    }

    setIsCreating(true);
    
    // Simulate API call to send invitations
    setTimeout(() => {
      console.log('Sending invitations:', { team: savedTeamData, invitations });
      
      // Show success message
      showMessage.success(`Invitations sent successfully to ${invitations.length} member(s)! 🎉`);
      
      // Reset form and go back to owner tab
      setTeamName('');
      setSummary('');
      setInvitations([]);
      setTeamSaved(false);
      setSavedTeamData(null);
      setIsCreating(false);
      
      // Call parent callback to switch to owner tab
      if (onTeamCreated) {
        onTeamCreated();
      }
    }, 1000);
  };

  const handleAddMember = (member) => {
    setInvitations(prev => [...prev, { ...member, role: 'Member' }]);
  };

  const handleRemoveMember = (memberId) => {
    setInvitations(prev => prev.filter(member => member.id !== memberId));
  };

  const handleUpdateRole = (memberId, newRole) => {
    setInvitations(prev => 
      prev.map(member => 
        member.id === memberId ? { ...member, role: newRole } : member
      )
    );
  };

  const handleFormatText = (format) => {
    // Handle text formatting
    console.log('Format text:', format);
  };

  const handleSearchMember = (searchTerm) => {
    setSearchMember(searchTerm);
    // Here you would typically filter directory users based on search term
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="space-y-8">
      {/* Create Team Form */}
      <div className="bg-white p-6 rounded-lg border border-[#E4E5E8]">
        <SubTitleText 
          text="Create a new team" 
          size={24} 
          font="bold" 
          color="#18191C" 
          divClassName="mb-6"
        />

        {/* Team Name */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#18191C] mb-2">
            Team Name
          </label>
          <InputText
            label=""
            placeholder="e.g. Growth Engineering"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            className="w-full h-[48px]"
            disabled={teamSaved}
          />
        </div>

        {/* Summary */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-[#18191C] mb-2">
            Summary
          </label>
          <div className={`border border-[#E4E5E8] rounded-md overflow-hidden ${!teamSaved && 'focus-within:ring-2 focus-within:ring-[#0A65CC] focus-within:border-transparent'} ${teamSaved && 'bg-gray-50'}`}>
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Explain what needs to be done, and what the hunter should deliver for this phase...."
              className={`w-full h-[120px] p-3 resize-none focus:outline-none border-none ${teamSaved && 'bg-gray-50 cursor-not-allowed'}`}
              disabled={teamSaved}
            />
            
            {/* Text Formatting Toolbar - Only show when team not saved */}
            {!teamSaved && (
              <div className="flex gap-1 p-2 bg-white border-t border-[#E4E5E8]">
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('bold')}
                  title="Bold"
                >
                  <Bold size={16} />
                </button>
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('italic')}
                  title="Italic"
                >
                  <Italic size={16} />
                </button>
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('underline')}
                  title="Underline"
                >
                  <Underline size={16} />
                </button>
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('link')}
                  title="Link"
                >
                  <Link size={16} />
                </button>
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('list')}
                  title="Bullet List"
                >
                  <List size={16} />
                </button>
                <button 
                  className="p-2 hover:bg-[#F8F9FA] rounded text-[#767F8C]"
                  onClick={() => handleFormatText('orderedList')}
                  title="Numbered List"
                >
                  <ListOrdered size={16} />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Show Save Team button if team not saved yet */}
        {!teamSaved && (
          <div className="flex justify-end pt-6 border-t border-gray-200">
            <CreativeButton
              variant="primary"
              size="md"
              onClick={handleSaveTeam}
              disabled={isCreating}
              loading={isCreating}
              className="flex items-center gap-2"
            >
              <Save size={18} />
              {isCreating ? 'Saving...' : 'Save Team'}
            </CreativeButton>
          </div>
        )}

        {/* Show Invite section after team is saved */}
        {teamSaved && (
          <>
            {/* Success Message */}
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 text-sm font-medium">
                ✅ Team "{savedTeamData?.name}" has been saved successfully! Now you can invite members.
              </p>
            </div>

            {/* Search & Invite Members */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-[#18191C] mb-2">
                Search & invite members
              </label>
              <div className="flex gap-3">
                <div className="flex-1 relative group">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition-colors" size={18} />
                  <input
                    type="text"
                    placeholder="Search name or email"
                    value={searchMember}
                    onChange={(e) => handleSearchMember(e.target.value)}
                    className="w-full h-[48px] pl-10 pr-4 py-2.5 border-2 border-gray-200 rounded-xl text-[15px] focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all duration-300 bg-white hover:border-gray-300"
                  />
                </div>
                <CreativeButton
                  variant="outline"
                  size="sm"
                  onClick={() => setShowDirectory(true)}
                  className="h-[48px] flex items-center gap-2"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                  </svg>
                  Directory
                </CreativeButton>
              </div>
            </div>

            {/* Invitations */}
            <div className="mb-6">
              <SubTitleText 
                text="Invitations" 
                size={18} 
                font="medium" 
                color="#18191C" 
                divClassName="mb-4"
              />
              
              {invitations.length === 0 ? (
                <p className="text-[#767F8C] text-sm">
                  No invites yet. Search above and add teammates, then set their roles.
                </p>
              ) : (
                <div className="space-y-3">
                  {invitations.map((member) => (
                    <div key={member.id} className="flex items-center justify-between p-4 bg-white border border-[#E4E5E8] rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[#D1D5DB] rounded-full flex items-center justify-center text-sm font-semibold text-[#4B5563]">
                          {member.avatar}
                        </div>
                        <div>
                          <p className="font-medium text-[#18191C] text-sm">{member.name}</p>
                          <p className="text-sm text-[#767F8C]">{member.email}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <select
                          value={member.role}
                          onChange={(e) => handleUpdateRole(member.id, e.target.value)}
                          className="px-4 py-2 border-2 border-gray-200 text-blue-600 rounded-lg text-[15px] focus:outline-none focus:border-blue-400 focus:shadow-lg bg-white transition-all duration-300"
                        >
                          <option value="">Role Name selected</option>
                          <option value="Member">Member</option>
                          <option value="Admin">Admin</option>
                          <option value="Leader">Leader</option>
                        </select>
                        <CreativeButton
                          variant="error"
                          size="sm"
                          onClick={() => handleRemoveMember(member.id)}
                          className="h-[40px] flex items-center gap-2"
                        >
                          <X size={16} />
                          Remove
                        </CreativeButton>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Send Invitations Button */}
            <div className="flex items-center justify-between pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                You're the <span className="font-semibold text-gradient">Owner</span> of this team. Invited members will receive an email.
              </p>
              <CreativeButton
                variant="success"
                size="md"
                onClick={handleSendInvitations}
                disabled={isCreating}
                loading={isCreating}
                className="flex items-center gap-2"
              >
                <Send size={18} />
                {isCreating ? 'Sending...' : 'Send Invitations'}
              </CreativeButton>
            </div>
          </>
        )}
      </div>

      {/* Team Directory Modal */}
      {showDirectory && (
        <TeamDirectory
          onClose={() => setShowDirectory(false)}
          onAddMember={handleAddMember}
          existingMembers={invitations}
        />
      )}
    </div>
  );
};

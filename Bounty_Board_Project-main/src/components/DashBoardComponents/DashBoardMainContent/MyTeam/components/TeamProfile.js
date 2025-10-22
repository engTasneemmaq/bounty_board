import React, { useState } from 'react';
import { Bold, Italic, Underline, Link as LinkIcon, List, ListOrdered, Edit, Trash2, Crown, ArrowRight, MoreVertical, Mail, Download, UserMinus, ArrowLeft, Save } from 'lucide-react';
import { UserProfileModal } from './UserProfileModal';
import { showConfirm } from '../../../../../utils/confirm';
import { showMessage } from '../../../../../utils/toast';
import CreativeButton from '../../../../../shared/Buttons/CreativeButton';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';

export const TeamProfile = ({ team, onClose, isOwner }) => {
  const [showMemberMenu, setShowMemberMenu] = useState(null);
  const [summary, setSummary] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
  const [showUserProfile, setShowUserProfile] = useState(null);
  const [isEditing, setIsEditing] = useState(true);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [selectedMemberForEmail, setSelectedMemberForEmail] = useState(null);

  const handleMemberAction = async (action, member) => {
    setShowMemberMenu(null);
    
    switch(action) {
      case 'email':
        setSelectedMemberForEmail(member);
        setShowEmailModal(true);
        break;
      case 'download':
        showMessage.loading(`Downloading CV for ${member.name}...`);
        // Simulate download
        setTimeout(() => {
          showMessage.success(`CV downloaded successfully! 📥`);
          console.log('Download CV for:', member);
        }, 500);
        break;
      case 'remove':
        const confirmed = await showConfirm({
          title: '⚠️ Remove Member',
          message: `Are you sure you want to remove ${member.name} from the team?`,
          type: 'warning',
          okText: 'Yes, Remove',
          cancelText: 'Cancel'
        });
        if (confirmed) {
          showMessage.success(`${member.name} has been removed from the team.`);
          console.log('Remove member:', member);
        }
        break;
      default:
        console.log(`${action} for member ${member.id}`);
    }
  };

  const handleSaveTeam = () => {
    // Validate summary
    if (!summary.trim()) {
      showMessage.error('Please add a summary before saving');
      return;
    }

    showMessage.loading('Saving team profile...');
    setTimeout(() => {
      console.log('Saving team:', { team, summary });
      showMessage.success('Team profile saved successfully! ✨');
      setIsEditing(false);
    }, 500);
  };

  const handleEditTeam = async () => {
    if (isEditing) {
      // If currently editing, cancel edit mode
      const confirmed = await showConfirm({
        title: '⚠️ Discard Changes',
        message: 'Discard changes and exit edit mode?',
        type: 'warning',
        okText: 'Yes, Discard',
        cancelText: 'Keep Editing'
      });
      if (confirmed) {
        setIsEditing(false);
        // Reset summary to original value
        setSummary('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.');
        showMessage.info('Edit mode cancelled');
      }
    } else {
      // Enter edit mode
      setIsEditing(true);
      showMessage.success('Edit mode enabled. You can now modify the team profile.');
    }
  };

  const handleDeleteTeam = async () => {
    const teamName = team?.name || 'this team';
    const confirmed = await showConfirm({
      title: '🗑️ Delete Team',
      message: `Warning: This action cannot be undone!\n\nAre you sure you want to delete "${teamName}"?\n\nThis will permanently remove:\n• Team profile\n• All team members\n• Team history and data`,
      type: 'danger',
      okText: 'Yes, Delete',
      cancelText: 'Cancel'
    });
    if (confirmed) {
      showMessage.success(`Team "${teamName}" has been deleted successfully.`);
      console.log('Deleting team:', team);
      // Close the profile and return to teams list
      setTimeout(() => {
        onClose();
      }, 1000);
    }
  };

  const handleFormatText = (format) => {
    console.log('Format text:', format);
  };

  const getMemberActions = (member) => [
    { label: 'Send Email', icon: <Mail size={16} />, action: 'email', member },
    { label: 'Download Cv', icon: <Download size={16} />, action: 'download', member },
    { label: 'Remove Member', icon: <UserMinus size={16} />, action: 'remove', isDelete: true, member }
  ];

  return (
    <div className="w-full bg-white">
      {/* Back Button */}
      <div className="p-4 border-b border-gray-200 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <button
          onClick={onClose}
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-semibold group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Teams</span>
        </button>
      </div>

      {/* Header */}
      <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-white">TN</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gradient">Team Name</h1>
          </div>
        </div>
        
        {isOwner && (
          <div className="flex gap-3">
            <CreativeButton
              variant={isEditing ? "warning" : "primary"}
              size="sm"
              onClick={handleEditTeam}
              className="h-[44px] flex items-center gap-2"
            >
              <Edit size={16} />
              {isEditing ? 'Cancel Edit' : 'Edit'}
            </CreativeButton>
            <CreativeButton
              variant="error"
              size="sm"
              onClick={handleDeleteTeam}
              className="h-[44px] flex items-center gap-2"
            >
              <Trash2 size={16} />
              Delete
            </CreativeButton>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-8 max-w-6xl">
        {/* Summary Section - Always Editable */}
        <div>
          <h2 className="text-base font-semibold text-[#18191C] mb-3">Summary</h2>
          <div className="border border-[#E4E5E8] rounded-md overflow-hidden focus-within:ring-2 focus-within:ring-[#0A65CC] focus-within:border-transparent">
            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Explain what needs to be done, and what the hunter should deliver for this phase...."
              className="w-full h-[150px] p-4 resize-none focus:outline-none border-none text-sm"
            />
            
            {/* Text Formatting Toolbar */}
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
                <LinkIcon size={16} />
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
          </div>
        </div>

        {/* Team Members Section */}
        <div>
          <h2 className="text-base font-semibold text-[#18191C] mb-4">Team Member</h2>
          
          <div className="space-y-3">
            {team.members.map((member, index) => {
              const memberActions = getMemberActions(member);
              return (
                <div key={member.id} className={`flex items-center justify-between p-4 rounded-lg border ${
                  showUserProfile?.id === member.id ? 'border-[#0A65CC] bg-[#F0F7FF]' : 'border-[#E4E5E8] bg-white'
                }`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#8B95A5] rounded-md flex items-center justify-center text-sm font-semibold text-white">
                      {member.avatar}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-[#18191C]">{member.name}</p>
                        {member.role === 'Owner' && (
                          <Crown size={14} className="text-[#FFB800]" />
                        )}
                      </div>
                      <p className="text-sm text-[#767F8C]">Technical Support Specialist</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    {isOwner && member.role !== 'Owner' && (
                      <button 
                        onClick={async () => {
                          const confirmed = await showConfirm({
                            title: '👑 Promote to Owner',
                            message: `Promote ${member.name} to Owner?\n\nYou will become a regular member.`,
                            type: 'question',
                            okText: 'Yes, Promote',
                            cancelText: 'Cancel'
                          });
                          if (confirmed) {
                            showMessage.success(`${member.name} has been promoted to Owner! 👑`);
                          }
                        }}
                        className="flex items-center gap-2 px-4 py-2 bg-white border border-[#0A65CC] text-[#0A65CC] rounded text-sm font-medium hover:bg-[#E7F0FA] transition-colors">
                        <Crown size={16} />
                        Promote To Owner
                      </button>
                    )}
                    <button 
                      onClick={() => setShowUserProfile(member)}
                      className="flex items-center gap-2 px-4 py-2 bg-[#E7F0FA] text-[#0A65CC] rounded text-sm font-medium hover:bg-[#D0E5F5] transition-colors">
                      View Profile <ArrowRight size={16} />
                    </button>
                    <div className="relative">
                      <button
                        onClick={() => setShowMemberMenu(showMemberMenu === member.id ? null : member.id)}
                        className="p-2 hover:bg-[#F3F4F6] rounded"
                      >
                        <MoreVertical size={18} />
                      </button>
                      
                      {showMemberMenu === member.id && (
                        <div className="absolute right-0 top-10 bg-white border border-[#E4E5E8] rounded-lg shadow-lg z-10 min-w-[180px]">
                          {memberActions.map((action, idx) => (
                            <button
                              key={action.action}
                              onClick={() => handleMemberAction(action.action, action.member)}
                              className={`w-full px-4 py-2.5 text-left text-sm hover:bg-[#F8F9FA] flex items-center gap-2 first:rounded-t-lg last:rounded-b-lg ${
                                action.isDelete ? 'text-red-500' : 'text-[#18191C]'
                              }`}
                            >
                              {action.icon}
                              {action.label}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Save Button - Always Visible */}
        <div className="flex justify-end pt-6 border-t border-gray-200">
          <CreativeButton
            variant="success"
            size="md"
            onClick={handleSaveTeam}
            className="flex items-center gap-2"
            title="Save all changes to team profile"
          >
            <Save size={18} />
            Save
          </CreativeButton>
        </div>
      </div>

      {/* User Profile Sidebar */}
      {showUserProfile && (
        <UserProfileModal member={showUserProfile} onClose={() => setShowUserProfile(null)} />
      )}

      {/* Send Email Modal */}
      {showEmailModal && selectedMemberForEmail && (
        <SendEmailModal
          member={selectedMemberForEmail}
          onClose={() => {
            setShowEmailModal(false);
            setSelectedMemberForEmail(null);
          }}
        />
      )}
    </div>
  );
};

// Send Email Modal Component
const SendEmailModal = ({ member, onClose }) => {
  const [emailData, setEmailData] = useState({
    from: '',
    to: member.email || 'member@company.com',
    subject: '',
    message: ''
  });
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = () => {
    if (!emailData.from || !emailData.subject || !emailData.message) {
      showMessage.error('Please fill in all fields');
      return;
    }

    setIsSending(true);
    
    // Simulate sending email
    setTimeout(() => {
      showMessage.success(`Email sent successfully to ${member.name}! 📧`);
      console.log('Email sent:', emailData);
      setIsSending(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-50"
        onClick={onClose}
      />
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg max-w-xl w-full p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#18191C]">Send Email to {member.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-[#F3F4F6] rounded transition-colors"
            >
              <Mail size={20} className="text-[#767F8C]" />
            </button>
          </div>

          <div className="space-y-4">
            {/* To */}
            <div>
              <label className="block text-sm font-medium text-[#18191C] mb-2">To</label>
              <input
                type="email"
                value={emailData.to}
                disabled
                className="w-full px-4 py-2 border border-[#E4E5E8] rounded-md bg-[#F8F9FA] text-[#767F8C]"
              />
            </div>

            {/* From */}
            <div>
              <label className="block text-sm font-medium text-[#18191C] mb-2">From (Your Email)</label>
              <input
                type="email"
                value={emailData.from}
                onChange={(e) => setEmailData({...emailData, from: e.target.value})}
                placeholder="your.email@company.com"
                className="w-full px-4 py-2 border border-[#E4E5E8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A65CC]"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block text-sm font-medium text-[#18191C] mb-2">Subject</label>
              <input
                type="text"
                value={emailData.subject}
                onChange={(e) => setEmailData({...emailData, subject: e.target.value})}
                placeholder="Email subject"
                className="w-full px-4 py-2 border border-[#E4E5E8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A65CC]"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-[#18191C] mb-2">Message</label>
              <textarea
                value={emailData.message}
                onChange={(e) => setEmailData({...emailData, message: e.target.value})}
                placeholder="Write your message here..."
                rows={6}
                className="w-full px-4 py-2 border border-[#E4E5E8] rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-[#0A65CC]"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-end gap-3 mt-6">
            <button
              onClick={onClose}
              className="px-6 py-2.5 border border-[#E4E5E8] text-[#767F8C] rounded-md font-medium hover:bg-[#F3F4F6] transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSendEmail}
              disabled={isSending}
              className={`px-6 py-2.5 rounded-md font-medium transition-colors flex items-center gap-2 ${
                isSending
                  ? 'bg-[#9CB3CB] text-white cursor-not-allowed'
                  : 'bg-[#0A65CC] text-white hover:bg-[#0854B3]'
              }`}
            >
              <Mail size={16} />
              {isSending ? 'Sending...' : 'Send Email'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

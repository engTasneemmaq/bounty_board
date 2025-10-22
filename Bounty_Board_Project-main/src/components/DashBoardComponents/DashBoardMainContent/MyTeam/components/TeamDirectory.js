import React, { useState } from 'react';
import { X } from 'lucide-react';

export const TeamDirectory = ({ onClose, onAddMember, existingMembers }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock data for directory users
  const directoryUsers = [
    { id: 1, name: 'mohammad nemri', email: 'you@company.com', avatar: 'MN' },
    { id: 2, name: 'mohammad nemri', email: 'you@company.com', avatar: 'MN' },
    { id: 3, name: 'mohammad nemri', email: 'you@company.com', avatar: 'MN' },
    { id: 4, name: 'mohammad nemri', email: 'you@company.com', avatar: 'MN' },
    { id: 5, name: 'mohammad nemri', email: 'you@company.com', avatar: 'MN' }
  ];

  const filteredUsers = directoryUsers.filter(user => 
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInviteUser = (user) => {
    // Check if user is already invited
    const isAlreadyInvited = existingMembers.some(member => member.id === user.id);
    if (!isAlreadyInvited) {
      onAddMember(user);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const isUserInvited = (userId) => {
    return existingMembers.some(member => member.id === userId);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-[#E4E5E8]">
          <div>
            <h2 className="text-xl font-bold text-[#18191C]">Team Directory</h2>
            <p className="text-sm text-[#767F8C] mt-1">
              Select people to invite and set their roles.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F8F9FA] rounded transition-colors"
          >
            <X size={20} className="text-[#767F8C]" />
          </button>
        </div>

        {/* Search */}
        <div className="p-6 border-b border-[#E4E5E8]">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-full p-3 border border-[#E4E5E8] rounded-md focus:outline-none focus:ring-2 focus:ring-[#0A65CC] focus:border-transparent"
          />
        </div>

        {/* Users List */}
        <div className="max-h-[400px] overflow-y-auto">
          {filteredUsers.length === 0 ? (
            <div className="p-6 text-center text-[#767F8C]">
              No users found matching your search.
            </div>
          ) : (
            <div className="p-6 space-y-3">
              {filteredUsers.map((user) => (
                <div key={user.id} className="flex items-center justify-between p-4 bg-white border border-[#E4E5E8] rounded-lg hover:bg-[#F8F9FA] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-[#D1D5DB] rounded-full flex items-center justify-center text-sm font-semibold text-[#4B5563]">
                      {user.avatar}
                    </div>
                    <div>
                      <p className="font-medium text-[#18191C] text-sm">{user.name}</p>
                      <p className="text-sm text-[#767F8C]">{user.email}</p>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleInviteUser(user)}
                    disabled={isUserInvited(user.id)}
                    className={`px-5 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${
                      isUserInvited(user.id)
                        ? "bg-[#E4E5E8] text-[#767F8C] cursor-not-allowed"
                        : "bg-[#0A65CC] text-white hover:bg-[#0854B3]"
                    }`}
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <line x1="19" y1="8" x2="19" y2="14" />
                      <line x1="22" y1="11" x2="16" y2="11" />
                    </svg>
                    {isUserInvited(user.id) ? "Invited" : "Invite"}
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
};

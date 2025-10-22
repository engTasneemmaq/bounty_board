/** @format */
import { X, Briefcase, Clock, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function SuggestedMembersModal({ open, onClose, onInvite, missingRoles = [] }) {
  const [invitedUsers, setInvitedUsers] = useState(new Set());

  // Mock suggested members data
  const suggestedMembers = [
    {
      id: "1",
      username: "john_doe",
      avatar: "https://ui-avatars.com/api/?name=John+Doe&background=0A65CC&color=fff",
      role: "Front End Developer",
      bounties: 9,
      experience: "3 Years experience",
    },
    {
      id: "2",
      username: "jane_smith",
      avatar: "https://ui-avatars.com/api/?name=Jane+Smith&background=0A65CC&color=fff",
      role: "Front End Developer",
      bounties: 12,
      experience: "5 Years experience",
    },
    {
      id: "3",
      username: "mike_wilson",
      avatar: "https://ui-avatars.com/api/?name=Mike+Wilson&background=0A65CC&color=fff",
      role: "Front End Developer",
      bounties: 7,
      experience: "2 Years experience",
    },
    {
      id: "4",
      username: "sarah_jones",
      avatar: "https://ui-avatars.com/api/?name=Sarah+Jones&background=0A65CC&color=fff",
      role: "Front End Developer",
      bounties: 15,
      experience: "4 Years experience",
    },
  ];

  const handleInvite = (userId, username) => {
    setInvitedUsers(prev => new Set([...prev, userId]));
    if (onInvite) {
      onInvite(userId, username);
    }
  };

  const isInvited = (userId) => invitedUsers.has(userId);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[95]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] max-w-[95vw] max-h-[90vh] rounded-2xl bg-white shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b bg-white sticky top-0 z-10">
          <div>
            <h2 className="text-xl font-semibold text-gray-800">Suggested Team Members</h2>
            <p className="text-sm text-gray-600 mt-1">
              Invite members to fill missing roles in your team
            </p>
          </div>
          <button 
            onClick={onClose} 
            className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center hover:bg-[#D0E3FF] transition-colors flex-shrink-0"
          >
            <X size={16} className="text-[#2A64D6]" />
          </button>
        </div>

        {/* Missing Roles Info */}
        {missingRoles.length > 0 && (
          <div className="px-5 py-3 bg-amber-50 border-b border-amber-200">
            <div className="flex items-start gap-2">
              <div className="h-5 w-5 rounded-full bg-amber-500 text-white text-xs grid place-items-center flex-shrink-0 mt-0.5">
                !
              </div>
              <div>
                <p className="text-sm font-medium text-amber-900">Missing Roles</p>
                <p className="text-xs text-amber-700 mt-1">
                  You need to assign: {missingRoles.join(", ")}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Members List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          {suggestedMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="h-16 w-16 rounded-lg bg-gray-300 flex-shrink-0 overflow-hidden">
                  <img
                    src={member.avatar}
                    alt={member.username}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900">{member.username}</h3>
                  <p className="text-sm text-gray-600 mt-0.5">{member.role}</p>
                  
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <div className="flex items-center gap-1">
                      <Briefcase size={14} />
                      <span>{member.bounties} Bounties</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={14} />
                      <span>{member.experience}</span>
                    </div>
                  </div>
                </div>

                {/* Invite Button */}
                <button
                  onClick={() => handleInvite(member.id, member.username)}
                  disabled={isInvited(member.id)}
                  className={`px-6 py-2 rounded-lg font-medium text-sm transition-all flex items-center gap-2 flex-shrink-0 ${
                    isInvited(member.id)
                      ? "bg-green-50 text-green-700 border-2 border-green-200 cursor-default"
                      : "bg-[#E7F0FA] text-[#0A65CC] hover:bg-[#0A65CC] hover:text-white"
                  }`}
                >
                  {isInvited(member.id) ? (
                    <>
                      <span>✓</span>
                      <span>Invited</span>
                    </>
                  ) : (
                    <>
                      <span>Invite</span>
                      <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-4 border-t bg-gray-50">
          <p className="text-sm text-gray-600">
            {invitedUsers.size > 0 
              ? `${invitedUsers.size} invitation${invitedUsers.size > 1 ? 's' : ''} sent`
              : 'No invitations sent yet'
            }
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-100 transition-colors text-sm font-medium"
            >
              Skip for Now
            </button>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0854B3] transition-colors text-sm font-medium"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


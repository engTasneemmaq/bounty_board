/** @format */
import { X, AlertCircle, ChevronDown, UserPlus } from "lucide-react";
import { useState } from "react";

export default function AssignTeamRolesModal({ open, onClose, onNext, onInviteMember, roles = [] }) {
  const [assignments, setAssignments] = useState({});
  const [notes, setNotes] = useState("");
  const [showInviteForRole, setShowInviteForRole] = useState(null);

  // Mock team members
  const teamMembers = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Mike Johnson" },
    { id: "4", name: "Sarah Williams" },
  ];

  // Default roles if none provided
  const defaultRoles = [
    { id: "backend", name: "Backend Developer", required: true },
    { id: "ui", name: "UI Designer", required: false },
    { id: "frontend", name: "Frontend Developer", required: true },
  ];

  const rolesList = roles.length > 0 ? roles : defaultRoles;

  const handleAssignment = (roleId, memberId) => {
    setAssignments(prev => ({
      ...prev,
      [roleId]: memberId
    }));
  };

  const handleApplyNow = () => {
    // Check if all required roles are assigned
    const requiredRolesAssigned = rolesList
      .filter(role => role.required)
      .every(role => assignments[role.id]);

    if (requiredRolesAssigned) {
      onNext({ assignments, notes });
    }
  };

  const isApplyDisabled = !rolesList
    .filter(role => role.required)
    .every(role => assignments[role.id]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[85]">
      <div className="absolute inset-0 bg-black/35" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] max-w-[95vw] rounded-2xl bg-white shadow-2xl max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-4 border-b sticky top-0 bg-white z-10">
          <div className="font-semibold text-lg">Assign your team members to the following roles:</div>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center flex-shrink-0">
            <X size={16} className="text-[#2A64D6]" />
          </button>
        </div>

        <div className="px-5 pb-5 pt-4 space-y-4">
          {/* Roles Assignment */}
          <div className="space-y-4">
            {rolesList.map((role) => (
              <div key={role.id} className="space-y-2">
                <div className="flex items-center gap-2">
                  <label className="text-[13px] font-medium text-gray-700">Role</label>
                  {role.required && (
                    <div className="flex items-center gap-1 text-red-500">
                      <AlertCircle size={14} />
                      <span className="text-[11px]">Required</span>
                    </div>
                  )}
                </div>
                
                <div className="grid grid-cols-2 gap-3">
                  {/* Role Name */}
                  <div className="flex items-center h-10 px-3 bg-gray-50 border border-gray-200 rounded-md text-sm text-gray-700">
                    {role.name}
                  </div>

                  {/* Assign Member Dropdown + Invite Button */}
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <select
                        value={assignments[role.id] || ""}
                        onChange={(e) => handleAssignment(role.id, e.target.value)}
                        className={`w-full h-10 px-3 pr-8 border rounded-md text-sm appearance-none bg-white focus:outline-none focus:border-[#2A64D6] focus:ring-1 focus:ring-[#2A64D6] ${
                          !assignments[role.id] && role.required 
                            ? 'border-red-300' 
                            : assignments[role.id] 
                              ? 'border-green-300 bg-green-50' 
                              : 'border-gray-200'
                        }`}
                      >
                        <option value="">Select</option>
                        {teamMembers.map((member) => (
                          <option key={member.id} value={member.id}>
                            {member.name}
                          </option>
                        ))}
                      </select>
                      <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
                    </div>
                    
                    {/* Invite Button */}
                    <button
                      onClick={() => setShowInviteForRole(role)}
                      className="h-10 w-10 rounded-md border border-[#2A64D6] text-[#2A64D6] hover:bg-[#E7F0FA] transition-colors flex items-center justify-center flex-shrink-0"
                      title="Invite member for this role"
                    >
                      <UserPlus size={18} />
                    </button>
                  </div>
                </div>
                
                {/* Inline Invite Section */}
                {showInviteForRole?.id === role.id && (
                  <div className="mt-2 p-3 bg-blue-50 border border-blue-200 rounded-md">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-blue-900">
                        Invite {role.name}
                      </span>
                      <button
                        onClick={() => setShowInviteForRole(null)}
                        className="text-blue-600 hover:text-blue-800"
                      >
                        <X size={14} />
                      </button>
                    </div>
                    <div className="space-y-2 max-h-[200px] overflow-y-auto">
                      {/* Mock suggested members for this role */}
                      {[
                        { id: "s1", name: "Alice Johnson", experience: "4 Years", bounties: 12 },
                        { id: "s2", name: "Bob Smith", experience: "3 Years", bounties: 8 },
                        { id: "s3", name: "Carol White", experience: "5 Years", bounties: 15 }
                      ].map((candidate) => (
                        <div key={candidate.id} className="flex items-center justify-between bg-white p-2 rounded border border-blue-100">
                          <div>
                            <div className="text-sm font-medium text-gray-900">{candidate.name}</div>
                            <div className="text-xs text-gray-500">
                              {candidate.bounties} Bounties • {candidate.experience}
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              if (onInviteMember) {
                                onInviteMember(candidate.id, candidate.name, role.id);
                              }
                              setShowInviteForRole(null);
                            }}
                            className="px-3 py-1 text-xs bg-[#0A65CC] text-white rounded hover:bg-[#0854B3] transition-colors"
                          >
                            Invite
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Notes Section */}
          <div className="space-y-2 pt-2">
            <label className="text-[13px] font-medium text-gray-700 block">
              Notes (optional)
            </label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full min-h-[100px] border border-gray-200 rounded-md p-3 text-sm resize-none focus:outline-none focus:border-[#2A64D6] focus:ring-1 focus:ring-[#2A64D6]"
              placeholder="Notes..."
            />
            
            {/* Formatting buttons */}
            <div className="flex items-center gap-2 text-gray-500">
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Bold">
                <span className="font-bold text-sm">B</span>
              </button>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Italic">
                <span className="italic text-sm">I</span>
              </button>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Underline">
                <span className="underline text-sm">U</span>
              </button>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Strike">
                <span className="line-through text-sm">S</span>
              </button>
              <div className="w-px h-4 bg-gray-300 mx-1"></div>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Link">
                <span className="text-sm">🔗</span>
              </button>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Bullet List">
                <span className="text-sm">•</span>
              </button>
              <button className="h-7 w-7 rounded hover:bg-gray-100 grid place-items-center" title="Numbered List">
                <span className="text-sm">≡</span>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4">
            <button 
              onClick={onClose} 
              className="px-4 h-9 rounded-md border text-sm hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleApplyNow}
              disabled={isApplyDisabled}
              className={`px-5 h-9 rounded-md text-white text-sm font-semibold flex items-center gap-2 ${
                isApplyDisabled 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#1667D9] hover:bg-[#0d4fb5]'
              }`}
            >
              Apply Now <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


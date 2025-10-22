import React, { useState } from "react";
import { ChevronRight, MoreVertical, Mail, Download, Star } from "lucide-react";
import { showMessage } from '../../utils/toast';

export default function TeamProfile() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);

  const handleSendMail = (email = 'team@example.com') => {
    window.location.href = `mailto:${email}`;
  };

  const handleDownloadCV = (userName) => {
    console.log(`Downloading CV for ${userName}...`);
    showMessage.info(`Downloading CV for ${userName} 📥`);
  };

  const teamMembers = [
    { id: 1, name: "User Name", role: "Technical Support Specialist", avatar: "UN" },
    { id: 2, name: "User Name", role: "Product Designer | Leader", avatar: "UN", isLeader: true },
    { id: 3, name: "User Name", role: "Marketing Officer", avatar: "UN" },
    { id: 4, name: "User Name", role: "Marketing Manager", avatar: "UN" },
    { id: 5, name: "User Name", role: "Junior Graphic Designer", avatar: "UN" },
    { id: 6, name: "User Name", role: "Visual Designer", avatar: "UN" },
  ];

  const toggleDropdown = (userId) => {
    setShowDropdown(showDropdown === userId ? null : userId);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-gray-600 text-2xl font-semibold">TN</span>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-[#111827]">Team Name</h1>
          </div>
        </div>
        <button 
          onClick={() => handleSendMail()}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8] transition-colors"
        >
          <Mail size={16} />
          Send Mail
        </button>
      </div>

      {/* Summary */}
      <div>
        <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Summary</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-3">
            I am writing to express my strong interest in the fourth grade instructional position in the Fort Wayne Community School System. 
            I learned about this opening on JobZone, IPFW's job database, and I am confident that my academic background and curriculum development skills make me an ideal candidate for this position.
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            I have completed a Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. 
            During my student teaching experience, I developed a three-week curriculum sequence on animal species and earth resources, 
            collaborated with three other third grade teachers to create a collaborative unit, and organized a field trip to the Indianapolis Zoo Animal Research Unit.
          </p>
        </div>
      </div>

      {/* Team Members */}
      <div>
        <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Team Member</h2>
        <div className="space-y-3">
          {teamMembers.map((user) => (
            <div 
              key={user.id} 
              className={`flex items-center justify-between p-4 rounded-xl border transition-colors ${
                selectedUser === user.id 
                  ? 'border-[#0A65CC] bg-blue-50' 
                  : 'border-[#E5E7EB] bg-white hover:bg-gray-50'
              }`}
              onClick={() => setSelectedUser(user.id)}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-gray-200 flex items-center justify-center">
                  <span className="text-[12px] font-medium text-gray-600">{user.avatar}</span>
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-[14px] font-medium text-[#111827]">{user.name}</h3>
                    {user.isLeader && (
                      <Star size={14} className="text-gray-500" />
                    )}
                  </div>
                  <p className="text-[12px] text-[#6B7280]">{user.role}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    console.log(`Viewing profile for ${user.name}`);
                  }}
                  className="flex items-center gap-1 px-3 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8] transition-colors"
                >
                  <span className="text-[12px]">View Profile</span>
                  <ChevronRight size={14} />
                </button>
                
                <div className="relative">
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleDropdown(user.id);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <MoreVertical size={16} className="text-[#6B7280]" />
                  </button>
                  
                  {showDropdown === user.id && (
                    <div className="absolute right-0 top-full mt-1 w-48 bg-white rounded-lg border border-[#E5E7EB] shadow-lg z-10">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSendMail(`${user.name.toLowerCase().replace(' ', '.')}@example.com`);
                          setShowDropdown(null);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#111827] hover:bg-gray-50 rounded-t-lg"
                      >
                        <Mail size={14} className="text-[#6B7280]" />
                        Send Email
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownloadCV(user.name);
                          setShowDropdown(null);
                        }}
                        className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#111827] hover:bg-gray-50 rounded-b-lg"
                      >
                        <Download size={14} className="text-[#6B7280]" />
                        Download Cv
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

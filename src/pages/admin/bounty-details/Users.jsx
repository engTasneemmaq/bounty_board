import React, { useState } from "react";
import { ChevronRight, MoreVertical, Mail, Download, X, Calendar, BookOpen, FileText, User, Briefcase, GraduationCap, Shield, ClipboardCheck, Phone } from "lucide-react";

export default function BountyUsers() {
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [profileUser, setProfileUser] = useState(null);

  const users = [
    { 
      id: 1, 
      name: "User Name", 
      role: "Technical Support Specialist", 
      avatar: "UN",
      fullName: "Esther Howard",
      jobTitle: "Website Designer (UI/UX)",
      dateOfBirth: "14 June, 2021",
      nationality: "Bangladesh",
      maritalStatus: "Single",
      gender: "Male",
      experience: "7 Years",
      education: "Master Degree",
      bountiesCreated: 9,
      participatedIn: 14,
      phone: "+1-202-555-0141",
      email: "esther.howard@gmail.com",
      secondaryEmail: "esther.howard@gmail.com",
      biography: "I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of iOS/Android and Hybrid Mobile Applications. *Wireframe Designs.",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat."
    },
    { id: 2, name: "User Name", role: "Product Designer | Leader", avatar: "UN", isLeader: true },
    { id: 3, name: "User Name", role: "Marketing Officer", avatar: "UN" },
    { id: 4, name: "User Name", role: "Marketing Manager", avatar: "UN" },
    { id: 5, name: "User Name", role: "Junior Graphic Designer", avatar: "UN" },
    { id: 6, name: "User Name", role: "Visual Designer", avatar: "UN" },
  ];

  const toggleDropdown = (userId) => {
    setShowDropdown(showDropdown === userId ? null : userId);
  };

  const handleViewProfile = (user) => {
    setProfileUser(user);
    setShowProfile(true);
  };

  const closeProfile = () => {
    setShowProfile(false);
    setProfileUser(null);
  };

  if (showProfile && profileUser) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={32} className="text-gray-600" />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold text-[#111827]">{profileUser.fullName || profileUser.name}</h1>
              <p className="text-[16px] text-[#6B7280]">{profileUser.jobTitle || profileUser.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={closeProfile}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-[#6B7280]" />
            </button>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8]">
              <Mail size={16} />
              Send Mail
            </button>
          </div>
        </div>

        <div className="grid grid-cols-[2fr_1fr] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Biography */}
            <div>
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">BIOGRAPHY</h2>
              <p className="text-[14px] text-[#6B7280] leading-relaxed">
                {profileUser.biography || "No biography available."}
              </p>
            </div>

            {/* Notes */}
            {profileUser.notes && (
              <div>
                <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Notes</h2>
                <div className="bg-gray-100 rounded-xl p-4">
                  <p className="text-[14px] text-[#6B7280] leading-relaxed">
                    {profileUser.notes}
                  </p>
                </div>
              </div>
            )}

            {/* Social Media */}
            <div>
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Follow me Social Media</h2>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">in</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Personal Details */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h2 className="text-[16px] font-semibold text-[#111827] mb-4">Personal Details</h2>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">DATE OF BIRTH</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.dateOfBirth || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <BookOpen size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">NATIONALITY</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.nationality || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <FileText size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">MARITAL STATUS</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.maritalStatus || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <User size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">GENDER</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.gender || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Briefcase size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">EXPERIENCE</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.experience || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <GraduationCap size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">EDUCATIONS</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.education || "N/A"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Shield size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">BOUNTIES CREATED</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.bountiesCreated || "0"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <ClipboardCheck size={16} className="text-[#0A65CC]" />
                    <span className="text-[12px] text-[#6B7280]">PARTICIPATED IN</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.participatedIn || "0"}</p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Download My Resume</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <FileText size={16} className="text-gray-600" />
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#111827]">{profileUser.fullName || profileUser.name}</p>
                    <p className="text-[12px] text-[#6B7280]">PDF</p>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-full bg-[#0A65CC] flex items-center justify-center hover:bg-[#0B5BB8]">
                  <Download size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone size={16} className="text-[#0A65CC]" />
                  <div>
                    <span className="text-[12px] text-[#6B7280]">PHONE</span>
                    <p className="text-[14px] font-medium text-[#111827]">{profileUser.phone || "N/A"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Mail size={16} className="text-[#0A65CC]" />
                  <div>
                    <span className="text-[12px] text-[#6B7280]">EMAIL ADDRESS</span>
                    <p className="text-[14px] font-medium text-[#111827]">{profileUser.email || "N/A"}</p>
                  </div>
                </div>
                
                <div className="ml-6">
                  <span className="text-[12px] text-[#6B7280]">SECONDARY EMAIL</span>
                  <p className="text-[14px] font-medium text-[#111827]">{profileUser.secondaryEmail || "N/A"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {users.map((user) => (
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
                  <span className="text-[12px] text-gray-500">⭐</span>
                )}
              </div>
              <p className="text-[12px] text-[#6B7280]">{user.role}</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={(e) => {
                e.stopPropagation();
                handleViewProfile(user);
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
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#111827] hover:bg-gray-50 rounded-t-lg">
                    <Mail size={14} className="text-[#6B7280]" />
                    Send Email
                  </button>
                  <button className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#111827] hover:bg-gray-50 rounded-b-lg">
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
  );
}

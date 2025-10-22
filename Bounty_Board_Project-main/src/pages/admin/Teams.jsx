import React, { useState, useMemo } from "react";
import { User, DollarSign, Search, ArrowUpDown, X, ChevronRight, MoreVertical, Mail, Download, Star } from "lucide-react";
import { showMessage } from '../../utils/toast';

const Kpi = ({ title, value, delta, icon }) => (
  <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[12px] text-[#6B7280]">{title}</p>
      <div className="w-9 h-9 rounded-lg bg-[#F0F6FF] grid place-items-center">{icon}</div>
    </div>
    <p className="text-[22px] font-semibold text-[#111827]">{value}</p>
    <p className="text-[12px] text-[#16A34A]">+{delta}% <span className="text-[#6B7280]">from last month</span></p>
  </div>
);

export default function Teams() {
  const [showTeamDetails, setShowTeamDetails] = useState(false);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [showUserProfile, setShowUserProfile] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDropdown, setShowDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showAll, setShowAll] = useState(false);

  const teams = [
    { 
      id: 1,
      name: 'Team Name', 
      leader: 'John Smith', 
      email: 'john.smith@email.com', 
      assigned: 8, 
      members: 8,
      initials: "JS",
      color: "bg-[#3B82F6]",
      summary: "I am writing to express my strong interest in the fourth grade instructional position that is currently available in the Fort Wayne Community School System. I learned of the opening through a notice posted on JobZone, IPFW's job database. I am confident that my academic background and curriculum development skills would be successfully utilized in this teaching position. I have just completed my Bachelor of Science degree in Elementary Education and have successfully completed Praxis I and Praxis II. During my student teaching experience, I developed and initiated a three-week curriculum sequence on animal species and earth resources. This collaborative unit involved working with three other third grade teachers within my team, and culminated in a field trip to the Indianapolis Zoo Animal Research Unit.",
      teamMembers: [
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
          biography: "I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of iOS/Android and Hybrid Mobile Applications. *Wireframe Designs."
        },
        { id: 2, name: "User Name", role: "Product Designer | Leader", avatar: "UN", isLeader: true },
        { id: 3, name: "User Name", role: "Marketing Officer", avatar: "UN" },
        { id: 4, name: "User Name", role: "Marketing Manager", avatar: "UN" },
        { id: 5, name: "User Name", role: "Junior Graphic Designer", avatar: "UN" },
        { id: 6, name: "User Name", role: "Visual Designer", avatar: "UN" },
      ]
    },
    { 
      id: 2,
      name: 'Team Name', 
      leader: 'John Smith', 
      email: 'john.smith@email.com', 
      assigned: 8, 
      members: 8,
      initials: "JS",
      color: "bg-[#3B82F6]",
      summary: "Sample team summary...",
      teamMembers: []
    },
    { 
      id: 3,
      name: 'Team Name', 
      leader: 'John Smith', 
      email: 'john.smith@email.com', 
      assigned: 8, 
      members: 8,
      initials: "JS",
      color: "bg-[#3B82F6]",
      summary: "Sample team summary...",
      teamMembers: []
    },
    { 
      id: 4,
      name: 'Team Name', 
      leader: 'John Smith', 
      email: 'john.smith@email.com', 
      assigned: 8, 
      members: 8,
      initials: "JS",
      color: "bg-[#3B82F6]",
      summary: "Sample team summary...",
      teamMembers: []
    },
  ];

  const handleViewTeamDetails = (team) => {
    setSelectedTeam(team);
    setShowTeamDetails(true);
    setShowUserProfile(false);
  };

  const handleViewUserProfile = (user) => {
    setSelectedUser(user);
    setShowUserProfile(true);
  };

  const toggleDropdown = (userId) => {
    setShowDropdown(showDropdown === userId ? null : userId);
  };

  const closeTeamDetails = () => {
    setShowTeamDetails(false);
    setSelectedTeam(null);
  };

  const closeUserProfile = () => {
    setShowUserProfile(false);
    setSelectedUser(null);
  };

  const handleSendMail = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleDownloadCV = (userName) => {
    console.log(`Downloading CV for ${userName}...`);
    showMessage.info(`Downloading CV for ${userName} 📥`);
  };
  
  const filteredTeams = useMemo(() => {
    if (!searchQuery.trim()) return teams;
    const query = searchQuery.toLowerCase();
    return teams.filter(team => 
      team.name.toLowerCase().includes(query) ||
      team.leader.toLowerCase().includes(query) ||
      team.email.toLowerCase().includes(query)
    );
  }, [searchQuery]);

  // User Profile View
  if (showUserProfile && selectedUser) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
              <User size={32} className="text-gray-600" />
            </div>
            <div>
              <h1 className="text-[24px] font-semibold text-[#111827]">{selectedUser.fullName || selectedUser.name}</h1>
              <p className="text-[16px] text-[#6B7280]">{selectedUser.jobTitle || selectedUser.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={closeUserProfile}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-[#6B7280]" />
            </button>
            <button 
              onClick={() => handleSendMail(selectedUser.email || 'esther.howard@gmail.com')}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8] transition-colors"
            >
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
                {selectedUser.biography || "No biography available."}
              </p>
            </div>

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
                    <span className="text-[12px] text-[#6B7280]">DATE OF BIRTH</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.dateOfBirth || "14 June, 2021"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">NATIONALITY</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.nationality || "Bangladesh"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">MARITAL STATUS</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.maritalStatus || "Single"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">GENDER</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.gender || "Male"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">EXPERIENCE</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.experience || "7 Years"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">EDUCATIONS</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.education || "Master Degree"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">BOUNTIES CREATED</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.bountiesCreated || "9"}</p>
                </div>
                
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[12px] text-[#6B7280]">PARTICIPATED IN</span>
                  </div>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.participatedIn || "14"}</p>
                </div>
              </div>
            </div>

            {/* Download Resume */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Download My Resume</h2>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-600 text-sm">📄</span>
                  </div>
                  <div>
                    <p className="text-[14px] font-medium text-[#111827]">{selectedUser.fullName || selectedUser.name}</p>
                    <p className="text-[12px] text-[#6B7280]">PDF</p>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownloadCV(selectedUser.fullName || selectedUser.name)}
                  className="w-8 h-8 rounded-full bg-[#0A65CC] flex items-center justify-center hover:bg-[#0B5BB8] transition-colors"
                >
                  <Download size={16} className="text-white" />
                </button>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Contact Information</h2>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-[#0A65CC]">📞</span>
                  <div>
                    <span className="text-[12px] text-[#6B7280]">PHONE</span>
                    <p className="text-[14px] font-medium text-[#111827]">{selectedUser.phone || "+1-202-555-0141"}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="text-[#0A65CC]">📧</span>
                  <div>
                    <span className="text-[12px] text-[#6B7280]">EMAIL ADDRESS</span>
                    <p className="text-[14px] font-medium text-[#111827]">{selectedUser.email || "esther.howard@gmail.com"}</p>
                  </div>
                </div>
                
                <div className="ml-6">
                  <span className="text-[12px] text-[#6B7280]">SECONDARY EMAIL</span>
                  <p className="text-[14px] font-medium text-[#111827]">{selectedUser.secondaryEmail || "esther.howard@gmail.com"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Team Details View
  if (showTeamDetails && selectedTeam) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-gray-600 text-2xl font-semibold">{selectedTeam.initials}</span>
            </div>
            <div>
              <h1 className="text-[24px] font-semibold text-[#111827]">{selectedTeam.name}</h1>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={closeTeamDetails}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X size={20} className="text-[#6B7280]" />
            </button>
            <button 
              onClick={() => handleSendMail(selectedTeam.email)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8] transition-colors"
            >
              <Mail size={16} />
              Send Mail
            </button>
          </div>
        </div>

        {/* Summary */}
        <div>
          <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Summary</h2>
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <p className="text-[14px] text-[#6B7280] leading-relaxed">
              {selectedTeam.summary}
            </p>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Team Member</h2>
          <div className="space-y-3">
            {selectedTeam.teamMembers.map((user) => (
              <div 
                key={user.id} 
                className="flex items-center justify-between p-4 rounded-xl border border-[#E5E7EB] bg-white hover:bg-gray-50 transition-colors"
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
                    onClick={() => handleViewUserProfile(user)}
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
                          onClick={() => {
                            handleSendMail(user.email || 'user@example.com');
                            setShowDropdown(null);
                          }}
                          className="w-full flex items-center gap-2 px-4 py-2 text-[12px] text-[#111827] hover:bg-gray-50 rounded-t-lg"
                        >
                          <Mail size={14} className="text-[#6B7280]" />
                          Send Email
                        </button>
                        <button 
                          onClick={() => {
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

  // Teams List View (Default)
  return (
    <div className="space-y-6">
      <h1 className="text-[24px] font-semibold text-[#111827]">Teams</h1>

      {/* KPIs */}
      <div className="grid grid-cols-2 gap-4">
        <Kpi 
          title="Total Team" 
          value="12,847" 
          delta="12.5" 
          icon={<User size={18} className="text-[#0A65CC]" />} 
        />
        <Kpi 
          title="Revenue" 
          value="$89,432" 
          delta="8.2" 
          icon={<DollarSign size={18} className="text-[#0A65CC]" />} 
        />
      </div>

      {/* Search and Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
        {/* Search */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="relative w-full max-w-[360px]">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
            />
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0A65CC]" 
              placeholder="Search team…" 
            />
          </div>
          <p className="text-[12px] text-[#6B7280]">{filteredTeams.length} Team found</p>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[1.6fr_1.6fr_1fr_1fr_120px] items-center px-3 pb-2 text-[12px] text-[#6B7280]">
          <div className="flex items-center gap-1">
            Team Name <ArrowUpDown size={14} />
          </div>
          <div className="flex items-center gap-1">
            Leader Name <ArrowUpDown size={14} />
          </div>
          <div className="text-center flex items-center justify-center gap-1">
            Assigned project <ArrowUpDown size={14} />
          </div>
          <div className="text-center flex items-center justify-center gap-1">
            #Member <ArrowUpDown size={14} />
          </div>
          <div className="text-right">Action</div>
        </div>

        {/* Rows */}
        <div className="space-y-2">
          {(showAll ? filteredTeams : filteredTeams.slice(0, 4)).map((t) => (
            <div key={t.id} className="grid grid-cols-[1.6fr_1.6fr_1fr_1fr_120px] items-center rounded border border-[#E5E7EB] px-3 py-3">
              {/* Team name col */}
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${t.color} flex items-center justify-center text-white text-[12px] font-semibold`}>
                  {t.initials}
                </div>
                <div>
                  <p className="text-[12px] font-medium text-[#111827]">{t.name}</p>
                </div>
              </div>

              {/* Leader col */}
              <div>
                <p className="text-[12px] font-medium text-[#111827]">{t.leader}</p>
                <a href={`mailto:${t.email}`} className="text-[11px] text-[#0A65CC] hover:underline">
                  {t.email}
                </a>
              </div>

              <div className="text-center text-[12px] text-[#111827]">{t.assigned}</div>
              <div className="text-center text-[12px] text-[#111827]">{t.members}</div>

              <div className="text-right">
                <button 
                  onClick={() => handleViewTeamDetails(t)}
                  className="rounded bg-[#0A65CC] px-3 py-1 text-[11px] text-white hover:bg-[#0B5BB8] transition-colors"
                >
                  View Team Details
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        {filteredTeams.length > 4 && (
          <div className="mt-3 flex justify-center">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="rounded border border-[#E5E7EB] px-4 py-2 text-[12px] hover:bg-gray-50 transition-colors"
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
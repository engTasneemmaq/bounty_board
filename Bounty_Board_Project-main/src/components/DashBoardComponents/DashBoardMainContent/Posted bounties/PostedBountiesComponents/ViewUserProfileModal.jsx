import React, { useState } from "react";
import { Modal, Avatar } from "antd";
import { 
  Calendar, 
  BookOpen, 
  FileText, 
  User, 
  Briefcase, 
  GraduationCap, 
  Shield, 
  ClipboardCheck,
  Phone,
  Mail,
  Globe,
  Download,
  Linkedin,
  X,
  UserCircle2
} from "lucide-react";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../../../shared/Cards/CreativeCard";
import SendEmailModal from "../../../../LandingPage/ExploreBounties/SendEmailModal";
import { showMessage } from "../../../../../utils/toast";

export const ViewUserProfileModal = ({ open, onClose, userData }) => {
  const [showEmailModal, setShowEmailModal] = useState(false);

  const handleDownloadResume = () => {
    showMessage.success('Resume downloaded successfully! 📥');
    // Here you would implement actual download logic
  };

  // Default user data
  const defaultUser = {
    userName: "Esther Howard",
    position: "Website Designer (UI/UX)",
    avatar: "https://ui-avatars.com/api/?name=Esther+Howard&background=0A65CC&color=fff",
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
    website: "www.estherhoward.com",
    biography: "I've been passionate about graphic design and digital art from an early age, with a keen interest in Website and User Interface design. Over the years, I can create High-quality and aesthetically pleasing designs as per the requirements and expectations of clients within the stipulated time. Check out my work and feel free to discuss your graphic design needs. I mostly use Adobe Photoshop, Illustrator, XD, and Figma. I have experience in designing for various kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - Designing as per the needs for iOS, Android, and Hybrid Mobile Applications. *Wireframe Designs.",
    notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    linkedIn: "https://linkedin.com/in/estherhoward"
  };

  const user = { ...defaultUser, ...userData };

  const InfoItem = ({ icon, label, value }) => (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        {icon}
        <span className="text-xs text-gray-600 font-semibold">{label}</span>
      </div>
      <p className="text-[15px] font-bold text-gray-900">{value}</p>
    </div>
  );

  return (
    <Modal
      open={open}
      onCancel={onClose}
      footer={null}
      width="75%"
      style={{ maxWidth: '1000px', top: 20 }}
      closeIcon={<X size={20} />}
    >
      <div className="max-h-[85vh] overflow-y-auto px-2">
        {/* Header */}
        <CreativeCard className="p-6 mb-6 mt-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <Avatar 
                  size={100} 
                  src={user.avatar}
                  className="border-4 border-white shadow-2xl"
                  style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
                >
                  <span className="text-2xl font-bold">{user.userName.charAt(0)}</span>
                </Avatar>
                <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gradient mb-2">{user.userName}</h1>
                <p className="text-base text-gray-600 font-medium flex items-center gap-2">
                  <UserCircle2 className="w-5 h-5 text-purple-600" />
                  {user.position}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <CreativeButton 
                variant="primary"
                size="md"
                className="h-[48px] flex items-center gap-2"
                onClick={() => setShowEmailModal(true)}
              >
                <Mail size={18} />
                Send Mail
              </CreativeButton>
            </div>
          </div>
        </CreativeCard>

        <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Biography */}
            <CreativeCard>
              <h2 className="text-xl font-bold text-gradient mb-4">BIOGRAPHY</h2>
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {user.biography}
              </p>
            </CreativeCard>

            {/* Notes */}
            <CreativeCard>
              <h2 className="text-xl font-bold text-gradient mb-4">Notes</h2>
              <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-5 border-2 border-gray-200">
                <p className="text-[15px] text-gray-700 leading-relaxed">
                  {user.notes}
                </p>
              </div>
            </CreativeCard>

            {/* Social Media */}
            <CreativeCard>
              <h2 className="text-lg font-bold text-gray-900 mb-4">Follow me on Social Media</h2>
              <div className="flex items-center gap-3">
                <a 
                  href={user.linkedIn} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
                >
                  <Linkedin size={24} className="text-white" />
                </a>
              </div>
            </CreativeCard>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Personal Details */}
            <CreativeCard>
              <h2 className="text-lg font-bold text-gradient mb-5">Personal Details</h2>
              <div className="grid grid-cols-2 gap-5">
                <InfoItem 
                  icon={<Calendar size={18} className="text-blue-600" />}
                  label="DATE OF BIRTH"
                  value={user.dateOfBirth}
                />
                <InfoItem 
                  icon={<BookOpen size={18} className="text-purple-600" />}
                  label="NATIONALITY"
                  value={user.nationality}
                />
                <InfoItem 
                  icon={<FileText size={18} className="text-green-600" />}
                  label="MARITAL STATUS"
                  value={user.maritalStatus}
                />
                <InfoItem 
                  icon={<User size={18} className="text-amber-600" />}
                  label="GENDER"
                  value={user.gender}
                />
                <InfoItem 
                  icon={<Briefcase size={18} className="text-indigo-600" />}
                  label="EXPERIENCE"
                  value={user.experience}
                />
                <InfoItem 
                  icon={<GraduationCap size={18} className="text-pink-600" />}
                  label="EDUCATION"
                  value={user.education}
                />
                <InfoItem 
                  icon={<Shield size={18} className="text-cyan-600" />}
                  label="BOUNTIES CREATED"
                  value={user.bountiesCreated}
                />
                <InfoItem 
                  icon={<ClipboardCheck size={18} className="text-teal-600" />}
                  label="PARTICIPATED IN"
                  value={user.participatedIn}
                />
              </div>
            </CreativeCard>

            {/* Download Resume */}
            <CreativeCard>
              <h2 className="text-lg font-bold text-gradient mb-4">Download My Resume</h2>
              <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                    <FileText size={24} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[15px] font-bold text-gray-900">{user.userName}</p>
                    <p className="text-sm text-gray-600 font-medium">PDF Document</p>
                  </div>
                </div>
                <button 
                  onClick={handleDownloadResume}
                  className="w-11 h-11 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all"
                >
                  <Download size={20} className="text-white" />
                </button>
              </div>
            </CreativeCard>

            {/* Contact Information */}
            <CreativeCard>
              <h2 className="text-lg font-bold text-gradient mb-5">Contact Information</h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <Phone size={20} className="text-green-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-600 font-semibold block mb-1">PHONE</span>
                    <p className="text-[15px] font-bold text-gray-900">{user.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Mail size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-600 font-semibold block mb-1">EMAIL ADDRESS</span>
                    <p className="text-[15px] font-bold text-gray-900 break-all">{user.email}</p>
                    
                    {user.secondaryEmail && (
                      <>
                        <span className="text-xs text-gray-600 font-semibold block mt-3 mb-1">SECONDARY EMAIL</span>
                        <p className="text-[15px] font-bold text-gray-900 break-all">{user.secondaryEmail}</p>
                      </>
                    )}
                  </div>
                </div>

                {user.website && (
                  <div className="flex items-start gap-4">
                    <Globe size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <span className="text-xs text-gray-600 font-semibold block mb-1">WEBSITE</span>
                      <a 
                        href={`https://${user.website}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[15px] font-bold text-blue-600 hover:text-blue-700 break-all transition-colors"
                      >
                        {user.website}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </CreativeCard>
          </div>
        </div>
      </div>

      {/* Send Email Modal */}
      {showEmailModal && (
        <SendEmailModal
          open={showEmailModal}
          onClose={() => setShowEmailModal(false)}
          recipientName={user.userName}
          recipientEmail={user.email}
        />
      )}
    </Modal>
  );
};


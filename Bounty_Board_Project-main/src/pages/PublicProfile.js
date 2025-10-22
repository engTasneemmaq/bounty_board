/** @format */
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { 
  Calendar, 
  MapPin, 
  FileText, 
  User as UserIcon,
  Briefcase,
  GraduationCap,
  Users,
  Package,
  Mail,
  Phone,
  Linkedin
} from "lucide-react";
import SendEmailModal from "../components/LandingPage/ExploreBounties/SendEmailModal";

const PublicProfile = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [showEmailModal, setShowEmailModal] = useState(false);

  // Mock data - يمكن استبداله ببيانات حقيقية من API
  const profileData = {
    name: "Esther Howard",
    role: "Website Designer (UI/UX)",
    avatar: "https://i.pravatar.cc/120",
    biography: `I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.`,
    dateOfBirth: "14 June, 2021",
    nationality: "Bangladesh",
    maritalStatus: "Single",
    gender: "Male",
    experience: "7 Years",
    education: "Master Degree",
    bountiesCreated: "9",
    participated: "14",
    phone: "+1-202-555-0141",
    email: "esther.howard@gmail.com",
    secondaryEmail: "esther.howard@gmail.com",
    website: "https://esther.com",
    skills: ["UI Designer", "UX Designer"],
    resume: {
      name: "Esther Howard",
      type: "PDF"
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 py-4">
          <button 
            onClick={() => navigate(-1)}
            className="text-[#0A65CC] hover:text-[#084db8] font-medium text-sm"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1200px] mx-auto px-6 py-8">
        <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
          {/* Profile Header */}
          <div className="p-8 border-b border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex gap-6">
                <div className="w-24 h-24 rounded-full bg-gray-300 overflow-hidden flex-shrink-0">
                  <img 
                    src={profileData.avatar} 
                    alt={profileData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-[#18191C] mb-1">
                    {profileData.name}
                  </h1>
                  <p className="text-[#767F8C] mb-4">{profileData.role}</p>
                </div>
              </div>
              <button
                onClick={() => setShowEmailModal(true)}
                className="flex items-center gap-2 px-5 h-11 rounded-lg bg-[#0A65CC] text-white font-semibold hover:bg-[#084db8] transition-colors"
              >
                <Mail size={18} />
                Send Mail
              </button>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 p-8">
            {/* Left Column */}
            <div className="space-y-8">
              {/* Biography */}
              <div>
                <h2 className="text-lg font-semibold text-[#18191C] mb-3">
                  BIOGRAPHY
                </h2>
                <p className="text-[#5E6670] text-sm leading-relaxed">
                  {profileData.biography}
                </p>
              </div>

              {/* Social Media */}
              <div>
                <h2 className="text-lg font-semibold text-[#18191C] mb-3">
                  Follow me Social Media
                </h2>
                <div className="flex items-center gap-3">
                  <a 
                    href="#"
                    className="w-10 h-10 rounded-lg bg-[#0077B5] flex items-center justify-center hover:opacity-90 transition-opacity"
                  >
                    <Linkedin size={20} className="text-white" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              {/* Personal Details */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h3 className="text-base font-semibold text-[#18191C] mb-4">
                  Personal Details
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <InfoBox
                    icon={<Calendar size={16} className="text-[#0A65CC]" />}
                    label="DATE OF BIRTH"
                    value={profileData.dateOfBirth}
                  />
                  <InfoBox
                    icon={<MapPin size={16} className="text-[#0A65CC]" />}
                    label="NATIONALITY"
                    value={profileData.nationality}
                  />
                  <InfoBox
                    icon={<FileText size={16} className="text-[#0A65CC]" />}
                    label="MARITAL STATUS"
                    value={profileData.maritalStatus}
                  />
                  <InfoBox
                    icon={<UserIcon size={16} className="text-[#0A65CC]" />}
                    label="GENDER"
                    value={profileData.gender}
                  />
                  <InfoBox
                    icon={<Briefcase size={16} className="text-[#0A65CC]" />}
                    label="EXPERIENCE"
                    value={profileData.experience}
                  />
                  <InfoBox
                    icon={<GraduationCap size={16} className="text-[#0A65CC]" />}
                    label="EDUCATION"
                    value={profileData.education}
                  />
                  <InfoBox
                    icon={<Package size={16} className="text-[#0A65CC]" />}
                    label="BOUNTIES CREATED"
                    value={profileData.bountiesCreated}
                  />
                  <InfoBox
                    icon={<Users size={16} className="text-[#0A65CC]" />}
                    label="PARTICIPATED IN"
                    value={profileData.participated}
                  />
                </div>
              </div>

              {/* Download Resume */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h3 className="text-base font-semibold text-[#18191C] mb-4">
                  Download My Resume
                </h3>
                <div className="flex items-center justify-between p-4 rounded-lg border border-[#E5E7EB] bg-[#F8F9FA]">
                  <div>
                    <p className="text-sm font-medium text-[#18191C]">
                      {profileData.resume.name}
                    </p>
                    <p className="text-xs text-[#767F8C] mt-1">
                      {profileData.resume.type}
                    </p>
                  </div>
                  <button className="w-10 h-10 rounded-lg bg-[#E7F0FA] flex items-center justify-center hover:bg-[#D0E5F5] transition-colors">
                    <svg 
                      width="20" 
                      height="20" 
                      viewBox="0 0 24 24" 
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="text-[#0A65CC]"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1="12" y1="15" x2="12" y2="3" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-5">
                <h3 className="text-base font-semibold text-[#18191C] mb-4">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <ContactItem
                    icon={<Phone size={18} className="text-[#0A65CC]" />}
                    label="PHONE"
                    value={profileData.phone}
                  />
                  <ContactItem
                    icon={<Mail size={18} className="text-[#0A65CC]" />}
                    label="EMAIL ADDRESS"
                    value={profileData.email}
                  />
                  <ContactItem
                    icon={<Mail size={18} className="text-[#0A65CC]" />}
                    label="SECONDARY EMAIL"
                    value={profileData.secondaryEmail}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Email Modal */}
      <SendEmailModal
        open={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        recipientName={profileData.name}
        recipientEmail={profileData.email}
      />
    </div>
  );
};

// Helper Components
const InfoBox = ({ icon, label, value }) => (
  <div className="space-y-2">
    <div className="flex items-center gap-2">
      {icon}
      <span className="text-xs text-[#767F8C] font-medium">{label}</span>
    </div>
    <p className="text-sm font-semibold text-[#18191C]">{value}</p>
  </div>
);

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5">{icon}</div>
    <div className="flex-1">
      <p className="text-xs text-[#767F8C] font-medium mb-1">{label}</p>
      <p className="text-sm text-[#18191C]">{value}</p>
    </div>
  </div>
);

export default PublicProfile;



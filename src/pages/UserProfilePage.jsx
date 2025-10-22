import React from "react";
import { useParams } from "react-router-dom";
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
  UserCircle2
} from "lucide-react";
import { Avatar } from "antd";
import CreativeButton from "../shared/Buttons/CreativeButton";
import CreativeCard from "../shared/Cards/CreativeCard";
import { showMessage } from "../utils/toast";

export default function UserProfilePage() {
  const { userId } = useParams();

  const handleDownloadResume = () => {
    showMessage.success('Resume downloaded successfully! 📥');
    // Here you would implement actual download logic
  };

  // Mock user data - في الواقع ستأتي من API أو localStorage
  const userData = {
    id: userId,
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

  return (
    <div className="space-y-8 p-6 md:p-8">
      {/* Header */}
      <CreativeCard className="p-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="relative">
              <Avatar 
                size={100} 
                src={userData.avatar}
                className="border-4 border-white shadow-2xl"
                style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}
              >
                <span className="text-2xl font-bold">{userData.userName.charAt(0)}</span>
              </Avatar>
              <div className="absolute -bottom-1 -right-1 w-7 h-7 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gradient mb-2">{userData.userName}</h1>
              <p className="text-base text-gray-600 font-medium flex items-center gap-2">
                <UserCircle2 className="w-5 h-5 text-purple-600" />
                {userData.position}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CreativeButton 
              variant="primary"
              size="md"
              className="h-[48px] flex items-center gap-2"
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
              {userData.biography}
            </p>
          </CreativeCard>

          {/* Notes */}
          <CreativeCard>
            <h2 className="text-xl font-bold text-gradient mb-4">Notes</h2>
            <div className="bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl p-5 border-2 border-gray-200">
              <p className="text-[15px] text-gray-700 leading-relaxed">
                {userData.notes}
              </p>
            </div>
          </CreativeCard>

          {/* Social Media */}
          <CreativeCard>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Follow me on Social Media</h2>
            <div className="flex items-center gap-3">
              <a 
                href={userData.linkedIn} 
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
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar size={18} className="text-blue-600" />
                  <span className="text-xs text-gray-600 font-semibold">DATE OF BIRTH</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.dateOfBirth}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen size={18} className="text-purple-600" />
                  <span className="text-xs text-gray-600 font-semibold">NATIONALITY</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.nationality}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-green-600" />
                  <span className="text-xs text-gray-600 font-semibold">MARITAL STATUS</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.maritalStatus}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-amber-600" />
                  <span className="text-xs text-gray-600 font-semibold">GENDER</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.gender}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase size={18} className="text-indigo-600" />
                  <span className="text-xs text-gray-600 font-semibold">EXPERIENCE</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.experience}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap size={18} className="text-pink-600" />
                  <span className="text-xs text-gray-600 font-semibold">EDUCATION</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.education}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield size={18} className="text-cyan-600" />
                  <span className="text-xs text-gray-600 font-semibold">BOUNTIES CREATED</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.bountiesCreated}</p>
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ClipboardCheck size={18} className="text-teal-600" />
                  <span className="text-xs text-gray-600 font-semibold">PARTICIPATED IN</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">{userData.participatedIn}</p>
              </div>
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
                  <p className="text-[15px] font-bold text-gray-900">{userData.userName}</p>
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
                  <p className="text-[15px] font-bold text-gray-900">{userData.phone}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Mail size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-600 font-semibold block mb-1">EMAIL ADDRESS</span>
                  <p className="text-[15px] font-bold text-gray-900 break-all">{userData.email}</p>
                  
                  {userData.secondaryEmail && (
                    <>
                      <span className="text-xs text-gray-600 font-semibold block mt-3 mb-1">SECONDARY EMAIL</span>
                      <p className="text-[15px] font-bold text-gray-900 break-all">{userData.secondaryEmail}</p>
                    </>
                  )}
                </div>
              </div>

              {userData.website && (
                <div className="flex items-start gap-4">
                  <Globe size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <span className="text-xs text-gray-600 font-semibold block mb-1">WEBSITE</span>
                    <a 
                      href={`https://${userData.website}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[15px] font-bold text-blue-600 hover:text-blue-700 break-all transition-colors"
                    >
                      {userData.website}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </CreativeCard>
        </div>
      </div>
    </div>
  );
}


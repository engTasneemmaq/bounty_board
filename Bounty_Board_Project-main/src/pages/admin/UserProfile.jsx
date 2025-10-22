import React from "react";
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
  Download,
  UserMinus,
  Send
} from "lucide-react";
import { showConfirm } from '../../utils/confirm';
import { showMessage } from '../../utils/toast';

export default function UserProfile() {
  const handleSuspend = async () => {
    const confirmed = await showConfirm({
      title: '⚠️ Suspend User',
      message: 'Are you sure you want to suspend this user?\n\nThey will not be able to access their account until unsuspended.',
      type: 'warning',
      okText: 'Yes, Suspend',
      cancelText: 'Cancel'
    });
    
    if (confirmed) {
      console.log('User suspended');
      // Here you would typically make an API call to suspend the user
      showMessage.success('User has been suspended successfully');
    }
  };

  const handleSendMail = () => {
    const email = 'esther.howard@gmail.com';
    window.location.href = `mailto:${email}`;
  };

  const handleDownloadCV = () => {
    console.log('Downloading CV...');
    // Here you would typically fetch the CV from the server
    showMessage.info('CV download will start shortly 📥');
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={32} className="text-gray-600" />
          </div>
          <div>
            <h1 className="text-[24px] font-semibold text-[#111827]">Esther Howard</h1>
            <p className="text-[16px] text-[#6B7280]">Website Designer (UI/UX)</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={handleSuspend}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 hover:bg-red-100 transition-colors"
          >
            <UserMinus size={16} />
            Suspend
          </button>
          <button 
            onClick={handleSendMail}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A65CC] text-white hover:bg-[#0B5BB8] transition-colors"
          >
            <Send size={16} />
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
              I am passionate about graphic design and digital art. I have been working in the field of UI/UX design for over 5 years, creating high-quality designs for websites and mobile applications. I specialize in creating user-friendly interfaces that are both beautiful and functional. My skills include Adobe Photoshop, Illustrator, XD, and Figma. I have experience in designing for various industries including e-commerce, healthcare, and education. I am always looking for new challenges and opportunities to grow as a designer.
            </p>
            <p className="text-[14px] text-[#6B7280] leading-relaxed mt-3">
              <strong>Website UI/UX:</strong> I create modern and responsive designs for websites that provide excellent user experience across all devices.
            </p>
            <p className="text-[14px] text-[#6B7280] leading-relaxed mt-2">
              <strong>Mobile Application UI/UX:</strong> I design intuitive interfaces for iOS, Android, and hybrid applications.
            </p>
            <p className="text-[14px] text-[#6B7280] leading-relaxed mt-2">
              <strong>Wireframe Designs:</strong> I create detailed wireframes and prototypes to help clients visualize their projects before development.
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
                  <Calendar size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">DATE OF BIRTH</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">14 June, 2021</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <BookOpen size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">NOTIONALITY</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">Bangladesh</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <FileText size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">MARITAL STATUS</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">Single</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">GENDER</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">Male</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">EXPERIENCE</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">7 Years</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">EDUCATIONS</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">Master Degree</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <Shield size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">BOUNTIES CREATED</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">9</p>
              </div>
              
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <ClipboardCheck size={16} className="text-[#0A65CC]" />
                  <span className="text-[12px] text-[#6B7280]">PARTICIPATED IN</span>
                </div>
                <p className="text-[14px] font-medium text-[#111827]">14</p>
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
                  <p className="text-[14px] font-medium text-[#111827]">Esther Howard</p>
                  <p className="text-[12px] text-[#6B7280]">PDF</p>
                </div>
              </div>
              <button 
                onClick={handleDownloadCV}
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
                <Phone size={16} className="text-[#0A65CC]" />
                <div>
                  <span className="text-[12px] text-[#6B7280]">PHONE</span>
                  <p className="text-[14px] font-medium text-[#111827]">+1-202-555-0141</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#0A65CC]" />
                <div>
                  <span className="text-[12px] text-[#6B7280]">EMAIL ADDRESS</span>
                  <p className="text-[14px] font-medium text-[#111827]">esther.howard@gmail.com</p>
                </div>
              </div>
              
              <div className="ml-6">
                <span className="text-[12px] text-[#6B7280]">SECONDARY EMAIL</span>
                <p className="text-[14px] font-medium text-[#111827]">esther.howard@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
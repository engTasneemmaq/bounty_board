import React from 'react';
import { X, Calendar, Flag, Heart, User, Briefcase, GraduationCap, Boxes, Download, Phone, Mail, FileText, Linkedin, UserCircle2 } from 'lucide-react';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';
import { showMessage } from '../../../../../utils/toast';

export const UserProfileModal = ({ member, onClose }) => {
  if (!member) return null;

  const handleDownloadResume = () => {
    showMessage.success('Resume downloaded successfully! 📥');
    // Here you would implement actual download logic
  };

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40"
        onClick={onClose}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 h-full w-full max-w-2xl bg-gradient-to-br from-gray-50 to-blue-50/20 shadow-2xl z-50 overflow-y-auto animate-slide-in">
        {/* Header */}
        <div className="p-6 border-b-2 border-gray-100 bg-white/90 backdrop-blur-sm sticky top-0 z-10 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-bold text-gradient">User Profile</h3>
            <button
              onClick={onClose}
              className="p-2.5 hover:bg-red-100 rounded-xl transition-all hover:scale-110 group"
            >
              <X size={22} className="text-gray-600 group-hover:text-red-600 transition-colors" />
            </button>
          </div>
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                {member.avatar || 'EH'}
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-4 border-white shadow-lg"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900">Esther Howard</h2>
              <p className="text-base text-gray-600 font-medium flex items-center gap-2 mt-1">
                <UserCircle2 className="w-5 h-5 text-purple-600" />
                Website Designer (UI/UX)
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Biography */}
          <CreativeCard>
            <h3 className="text-xl font-bold text-gradient mb-4">BIOGRAPHY</h3>
            <p className="text-[15px] leading-relaxed text-gray-700">
              I've been passionate about graphic design and digital art from an early age with a keen interest in Website and Mobile Application User Interfaces. I can create high-quality and aesthetically pleasing designs in a quick turnaround time. Check out the portfolio section of my profile to see samples of my work and feel free to discuss your designing needs. I mostly use Adobe Photoshop, Illustrator, XD and Figma. *Website User Experience and Interface (UI/UX) Design - for all kinds of Professional and Personal websites. *Mobile Application User Experience and Interface Design - for all kinds of IOS/Android and Hybrid Mobile Applications. *Wireframe Designs.
            </p>
          </CreativeCard>

          {/* Stats Grid */}
          <CreativeCard>
            <h3 className="text-lg font-bold text-gradient mb-5">Personal Details</h3>
            <div className="grid grid-cols-2 gap-5">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="text-blue-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">DATE OF BIRTH</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">14 June, 2021</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Flag className="text-purple-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">NATIONALITY</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">Bangladesh</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Heart className="text-red-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">MARITAL STATUS</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">Single</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <User className="text-amber-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">GENDER</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">Male</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Briefcase className="text-indigo-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">EXPERIENCE</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">7 Years</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <GraduationCap className="text-pink-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">EDUCATION</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">Master Degree</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Boxes className="text-cyan-600 w-5 h-5" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">BOUNTIES CREATED</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">9</p>
              </div>

              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Boxes className="text-teal-600 w-5 h-5 rotate-45" />
                  <span className="text-xs text-gray-600 font-semibold uppercase tracking-wide">PARTICIPATED IN</span>
                </div>
                <p className="text-[15px] font-bold text-gray-900">14</p>
              </div>
            </div>
          </CreativeCard>

          {/* Download Resume */}
          <CreativeCard>
            <h3 className="text-lg font-bold text-gradient mb-4">Download My Resume</h3>
            <div className="flex items-center justify-between p-4 rounded-xl bg-gradient-to-r from-blue-50/50 to-purple-50/50 border-2 border-gray-200 hover:border-blue-400 hover:shadow-lg transition-all">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
                  <FileText size={24} className="text-white" />
                </div>
                <div>
                  <p className="text-[15px] font-bold text-gray-900">Esther Howard</p>
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
            <h3 className="text-lg font-bold text-gradient mb-5">Contact Information</h3>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <Phone size={20} className="text-green-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-600 font-semibold block mb-1">PHONE</span>
                  <p className="text-[15px] font-bold text-gray-900">+1-202-555-0141</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-600 font-semibold block mb-1">EMAIL ADDRESS</span>
                  <p className="text-[15px] font-bold text-gray-900 break-all">esther.howard@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Mail size={20} className="text-purple-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <span className="text-xs text-gray-600 font-semibold block mb-1">SECONDARY EMAIL</span>
                  <p className="text-[15px] font-bold text-gray-900 break-all">esther.howard@gmail.com</p>
                </div>
              </div>
            </div>
          </CreativeCard>

          {/* Social Media */}
          <CreativeCard>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Follow me on Social Media</h3>
            <a 
              href="https://linkedin.com/in/estherhoward" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-xl bg-[#0077B5] flex items-center justify-center hover:scale-110 hover:shadow-xl transition-all inline-flex"
            >
              <Linkedin size={24} className="text-white" />
            </a>
          </CreativeCard>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
};

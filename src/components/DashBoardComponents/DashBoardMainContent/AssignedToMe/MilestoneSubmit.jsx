/** @format */
import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Clock, Upload, Globe, ChevronRight, User, Send } from "lucide-react";
import { useAuth } from "../../../../context/AuthContext";
import { showMessage } from "../../../../utils/toast";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

const Dropzone = ({ onClick }) => (
  <div 
    onClick={onClick}
    className="rounded-lg border-2 border-dashed border-gray-300 p-8 text-center cursor-pointer hover:border-blue-400 hover:bg-blue-50/30 transition"
  >
    <div className="mx-auto mb-2 grid h-10 w-10 place-items-center rounded-full bg-gray-100">
      <Upload className="h-4 w-4 text-gray-500" />
    </div>
    <div className="text-sm text-gray-700">Drag &amp; drop files here</div>
    <div className="text-xs text-gray-400">or click to browse files</div>
    <div className="mt-3 text-[11px] text-gray-400">
      Supported formats: .pdf, .zip, .json, .mp4, .png, .jpg, .jpeg, .gif, .doc, .docx, .txt
    </div>
  </div>
);

export default function MilestoneSubmit() {
  const { id } = useParams();
  const [github, setGithub] = useState("");
  const [notes, setNotes] = useState("");
  const navigate = useNavigate();
  const { user } = useAuth();

  // Get user's full name for display
  const getUserName = () => {
    if (user?.firstName && user?.lastName) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (user?.firstName) {
      return user.firstName;
    }
    if (user?.email) {
      return user.email.split('@')[0];
    }
    return 'User';
  };

  const handleFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      showMessage.success(`${e.target.files.length} file(s) uploaded! ✅`);
    };
    input.click();
  };

  const handleSubmit = () => {
    if (!notes && !github) {
      showMessage.warning('Please upload at least one file or add delivery notes to submit. ⚠️');
      return;
    }
    const loadingToast = showMessage.loading('Submitting milestone... ⏳');
    setTimeout(() => {
      showMessage.dismiss(loadingToast);
      showMessage.success('Milestone submitted successfully! ✅');
      navigate('/dashboard/assigned');
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-sm">
          <Link to="/dashboard/assigned" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Assigned to Me
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-blue-600 font-semibold">Milestone Name</span>
        </div>
        <Link 
          to="/dashboard/bounty-name-overview/1" 
          className="text-sm font-semibold text-blue-600 hover:text-blue-700 flex items-center gap-1 transition-colors"
        >
          View Details
          <ChevronRight size={16} />
        </Link>
      </div>

      {/* Header */}
      <CreativeCard>
        <div className="flex items-start justify-between gap-6">
          <div className="flex-1">
            <div className="mb-4 flex flex-wrap items-center gap-3">
              <CreativeBadge variant="success">In Progress</CreativeBadge>
              <span className="inline-flex items-center gap-2 text-[15px] text-gray-700 font-medium">
                <User size={16} className="text-purple-600" />
                Assigned to: <span className="text-gray-900 font-bold">{getUserName()}</span>
              </span>
              <span className="inline-flex items-center gap-2 text-[15px] text-gray-700 font-medium">
                <Clock size={16} className="text-blue-600" /> 
                Duration: <span className="text-gray-900 font-bold">5 days</span>
              </span>
            </div>
            <h1 className="mb-3 text-2xl font-bold text-gradient">Milestone Name</h1>
            <p className="text-[15px] leading-relaxed text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </CreativeCard>

      {/* Submit Work */}
      <CreativeCard>
        <h2 className="text-xl font-bold text-gradient mb-6">Submit Work</h2>
        <div className="space-y-6">
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">Upload Files</label>
            <Dropzone onClick={handleFileUpload} />
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              GitHub Repository <span className="text-gray-500 font-normal text-sm">(optional)</span>
            </label>
            <div className="relative">
              <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                className="w-full h-12 rounded-xl border-2 border-gray-200 pl-12 pr-4 text-[15px] outline-none focus:border-blue-400 focus:shadow-lg transition-all"
                placeholder="https://github.com/..."
                value={github}
                onChange={(e) => setGithub(e.target.value)}
              />
            </div>
          </div>

          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">Notes</label>
            <textarea
              className="w-full rounded-xl border-2 border-gray-200 bg-gray-50 p-4 text-[15px] outline-none focus:border-blue-400 focus:shadow-lg transition-all resize-none"
              rows={6}
              placeholder="Add your notes here..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>

          <div className="flex justify-end pt-4">
            <CreativeButton
              variant="primary"
              size="md"
              onClick={handleSubmit}
              className="h-[50px] px-8 flex items-center gap-2"
            >
              <Send size={18} />
              Submit Work
            </CreativeButton>
          </div>
        </div>
      </CreativeCard>
    </div>
  );
}

/** @format */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AlertCircle, Download, Trash2, Plus, Globe, ChevronRight, User, Clock, FileText } from "lucide-react";
import { showMessage } from "../../../../utils/toast";
import { showConfirm } from "../../../../utils/confirm";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

const FileRow = ({ name = "file.pdf", size = "2.3 MB", onDownload, onDelete }) => (
  <div className="flex items-center justify-between rounded-xl border-2 border-gray-200 bg-gradient-to-r from-gray-50/50 to-blue-50/50 px-5 py-4 hover:border-blue-300 transition-all duration-300">
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
        <FileText className="h-6 w-6 text-white" />
      </div>
      <div>
        <div className="font-bold text-base text-gray-900">{name}</div>
        <div className="text-sm text-gray-600 font-medium">{size}</div>
      </div>
    </div>
    <div className="flex items-center gap-3">
      <button 
        onClick={onDownload} 
        className="p-2.5 rounded-lg border-2 border-blue-200 bg-blue-50 hover:bg-blue-100 hover:border-blue-300 transition-all duration-300 group"
      >
        <Download className="h-5 w-5 text-blue-600 group-hover:text-blue-700" />
      </button>
      <button 
        onClick={onDelete} 
        className="p-2.5 rounded-lg border-2 border-red-200 bg-red-50 hover:bg-red-100 hover:border-red-300 transition-all duration-300 group"
      >
        <Trash2 className="h-5 w-5 text-red-600 group-hover:text-red-700" />
      </button>
    </div>
  </div>
);

const FeedbackBlock = () => (
  <div className="rounded-xl border-2 border-red-200 bg-gradient-to-r from-red-50/50 to-orange-50/50 p-5">
    <div className="mb-3 flex items-center gap-2 text-red-700">
      <AlertCircle className="h-5 w-5 text-red-600" />
      <span className="text-base font-bold">Back to Queue</span>
    </div>
    <div className="rounded-lg border border-red-100 bg-white p-4">
      <div className="mb-3 text-base font-bold text-gray-800">Reviewer Feedback:</div>
      <ol className="list-decimal space-y-2 pl-5 text-[15px] text-gray-700">
        <li>The authentication flow is not properly handling error states …</li>
        <li>Dashboard layout breaks on mobile devices …</li>
        <li>Missing error boundaries around the new components …</li>
        <li>Lacks proper TypeScript types for new API responses.</li>
      </ol>
    </div>
  </div>
);

export default function MilestoneResubmit() {
  const [github, setGithub] = useState("https://github.example.com/milestone-1");
  const [notes, setNotes] = useState("Added fixes for authentication flow, updated mobile layout, and included error boundaries. All TypeScript types have been properly defined.");
  const [files, setFiles] = useState([
    { id: 1, name: "authentication-fix.zip", size: "3.2 MB" },
    { id: 2, name: "mobile-layout-update.zip", size: "1.8 MB" },
    { id: 3, name: "error-boundaries.js", size: "456 KB" }
  ]);
  const navigate = useNavigate();

  const handleDownload = (fileName) => {
    const loadingToast = showMessage.loading(`Downloading ${fileName}... ⏳`);
    setTimeout(() => {
      showMessage.dismiss(loadingToast);
      showMessage.success(`${fileName} downloaded successfully! 📥`);
      // Simulate download
      const link = document.createElement('a');
      link.download = fileName;
      link.click();
    }, 800);
  };

  const handleDelete = async (fileId, fileName) => {
    const confirmed = await showConfirm({
      title: 'Delete File',
      message: `Are you sure you want to delete ${fileName}?`,
      type: 'error',
    });
    
    if (confirmed) {
      setFiles(files.filter(f => f.id !== fileId));
      showMessage.success(`${fileName} deleted successfully! 🗑️`);
    }
  };

  const handleAddFile = () => {
    // Trigger file input
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.onchange = (e) => {
      const newFiles = Array.from(e.target.files).map((file, index) => ({
        id: Date.now() + index,
        name: file.name,
        size: `${(file.size / 1024 / 1024).toFixed(2)} MB`
      }));
      setFiles([...files, ...newFiles]);
      showMessage.success(`${e.target.files.length} file(s) added successfully! ✅`);
    };
    input.click();
  };

  const handleResubmit = () => {
    if (files.length === 0) {
      showMessage.warning('Please add at least one file before resubmitting! ⚠️');
      return;
    }
    if (!notes.trim()) {
      showMessage.warning('Please add notes explaining your changes! ⚠️');
      return;
    }
    
    const loadingToast = showMessage.loading('Resubmitting work for review... ⏳');
    setTimeout(() => {
      showMessage.dismiss(loadingToast);
      showMessage.success('Work resubmitted successfully! Moving to Awaiting Review... ✅');
      // Navigate to awaiting review after 1 second
      setTimeout(() => {
        navigate('/dashboard/assigned');
      }, 1000);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      {/* ===== breadcrumb + view details ===== */}
      <div className="flex items-center gap-2 text-sm">
        <Link to="/dashboard/assigned" className="text-gray-600 hover:text-blue-600 transition-colors">
          Assigned to Me
        </Link>
        <ChevronRight className="h-4 w-4 text-gray-400" />
        <span className="text-blue-600 font-semibold">Milestone Name</span>
      </div>
      {/* ===================================== */}

      <div className="space-y-6">
        <CreativeCard>
          <div className="space-y-4">
            <h1 className="text-2xl font-bold text-gradient">Milestone Name</h1>
            <p className="text-[15px] leading-relaxed text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit…</p>
            <FeedbackBlock />
          </div>
        </CreativeCard>

        <CreativeCard>
          <div className="space-y-6">
            <h2 className="text-xl font-bold text-gradient">Resubmit Work</h2>
          <div className="grid gap-4">
            {files.length > 0 ? (
              files.map(file => (
                <FileRow 
                  key={file.id}
                  name={file.name}
                  size={file.size}
                  onDownload={() => handleDownload(file.name)}
                  onDelete={() => handleDelete(file.id, file.name)}
                />
              ))
            ) : (
              <div className="rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 p-8 text-center">
                <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="mt-2 text-sm text-gray-600">No files uploaded yet</p>
                <p className="text-xs text-gray-500">Click "Add More Files" below to upload your work</p>
              </div>
            )}

            <button 
              onClick={handleAddFile}
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-dashed border-blue-300 bg-gradient-to-r from-blue-50/50 to-purple-50/50 py-4 text-[15px] font-semibold text-blue-600 hover:bg-blue-100 hover:border-blue-400 transition-all duration-300"
            >
              <Plus className="h-5 w-5" /> Add More Files
            </button>

            <div>
              <div className="mb-3 text-base font-bold text-gray-900">
                GitHub Repository <span className="text-gray-500 font-normal">(optional)</span>
              </div>
              <div className="relative">
                <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  className="w-full h-12 rounded-xl border-2 border-gray-200 pl-12 pr-4 text-[15px] focus:border-blue-400 focus:shadow-lg transition-all duration-300"
                  value={github}
                  onChange={(e) => setGithub(e.target.value)}
                />
              </div>
            </div>

            <div>
              <div className="mb-3 text-base font-bold text-gray-900">Notes</div>
              <textarea 
                className="w-full rounded-xl border-2 border-gray-200 bg-white p-4 text-[15px] focus:border-blue-400 focus:shadow-lg transition-all duration-300" 
                rows={5}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            <div className="pt-4 flex items-center justify-between">
              <div className="text-sm text-gray-600 font-medium">
                💡 Make sure you've addressed all reviewer feedback before resubmitting
              </div>
              <CreativeButton 
                onClick={handleResubmit}
                variant="primary"
                size="md"
                className="h-[48px] px-8"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Resubmit Work
              </CreativeButton>
            </div>
          </div>
          </div>
        </CreativeCard>
      </div>
    </div>
  );
}

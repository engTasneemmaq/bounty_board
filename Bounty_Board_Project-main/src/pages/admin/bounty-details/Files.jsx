import React from "react";
import { FileText, Calendar } from "lucide-react";

export default function BountyFiles() {
  const files = [
    {
      id: 1,
      name: "Project tech requirements.pdf",
      uploader: "User Name",
      size: "56 MB",
      uploadTime: "1 hour ago",
      type: "pdf"
    },
    {
      id: 2,
      name: "Project tech requirements.pdf",
      uploader: "User Name",
      size: "56 MB",
      uploadTime: "Feb 2, 2025",
      type: "pdf"
    },
    {
      id: 3,
      name: "Project tech requirements.pdf",
      uploader: "User Name",
      size: "56 MB",
      uploadTime: "Feb 2, 2025",
      type: "pdf"
    },
    {
      id: 4,
      name: "Project tech requirements.pdf",
      uploader: "User Name",
      size: "56 MB",
      uploadTime: "Feb 2, 2025",
      type: "pdf"
    },
    {
      id: 5,
      name: "Project tech requirements.pdf",
      uploader: "User Name",
      size: "56 MB",
      uploadTime: "Feb 2, 2025",
      type: "pdf"
    }
  ];

  return (
    <div className="space-y-4">
      {/* Table Header */}
      <div className="grid grid-cols-4 gap-4 px-4 py-2 text-[12px] font-medium text-[#6B7280] border-b border-[#E5E7EB]">
        <div>Activity</div>
        <div>Uploader</div>
        <div>File Size</div>
        <div>Upload Time</div>
      </div>

      {/* Table Rows */}
      <div className="space-y-2">
        {files.map((file) => (
          <div key={file.id} className="grid grid-cols-4 gap-4 px-4 py-3 items-center hover:bg-gray-50 rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                <FileText size={16} className="text-red-600" />
              </div>
              <span className="text-[13px] font-medium text-[#111827]">{file.name}</span>
            </div>
            
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center">
                <span className="text-[10px] font-medium text-gray-600">U</span>
              </div>
              <span className="text-[12px] text-[#6B7280]">{file.uploader}</span>
            </div>
            
            <div className="text-[12px] text-[#111827]">{file.size}</div>
            
            <div className="flex items-center gap-2">
              <Calendar size={14} className="text-[#6B7280]" />
              <span className="text-[12px] text-[#6B7280]">{file.uploadTime}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

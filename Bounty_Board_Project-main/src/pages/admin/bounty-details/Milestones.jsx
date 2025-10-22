import React, { useState } from "react";
import { MoreVertical, Eye, Calendar, CheckCircle, ArrowLeft, User, Clock, Upload, Download } from "lucide-react";
import { showMessage } from '../../../utils/toast';

export default function Milestones() {
  const [selectedMilestone, setSelectedMilestone] = useState(null);
  const [showMilestoneDetail, setShowMilestoneDetail] = useState(false);

  const handleDownload = (fileName) => {
    console.log(`Downloading ${fileName}...`);
    showMessage.info(`Downloading ${fileName} 📥`);
  };

  const handleView = (fileName) => {
    console.log(`Viewing ${fileName}...`);
    showMessage.info(`Opening ${fileName} 👀`);
  };

  const milestones = [
    {
      id: 1,
      title: "Milestone Title",
      name: "Milestone Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.",
      role: "Role Name",
      status: "In Progress",
      assignedTo: "UserName",
      duration: "5 days",
      views: 0,
      date: "Nov 30",
      color: "bg-orange-50 text-orange-600",
      statusColor: "text-orange-600",
      statusBg: "bg-orange-50",
      canSubmit: true
    },
    {
      id: 2,
      title: "Milestone Title",
      name: "Milestone Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.",
      role: "Role Name",
      status: "Awaiting Review",
      assignedTo: "UserName",
      duration: "5 days",
      views: 3,
      date: "Nov 30",
      color: "bg-blue-50 text-blue-600",
      statusColor: "text-blue-600",
      statusBg: "bg-blue-50",
      submittedFiles: [
        { name: "api-documentation.pdf", size: "2.3 MB" },
        { name: "dashboard-integration.zip", size: "2.3 MB" },
        { name: "test-results.json", size: "2.3 MB" }
      ],
      githubRepo: "https://github.example.com/milestone-1",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat."
    },
    {
      id: 3,
      title: "Milestone Title",
      name: "Milestone Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.",
      role: "Role Name",
      status: "Back To Queue",
      assignedTo: "UserName",
      duration: "5 days",
      views: 3,
      date: "Nov 30",
      color: "bg-red-50 text-red-600",
      statusColor: "text-red-600",
      statusBg: "bg-red-50",
      reviewerFeedback: {
        issues: [
          "The authentication flow is not properly handling error states - when the API returns a 401, the user should be redirected to login instead of showing a generic error.",
          "The dashboard layout breaks on mobile devices. Please ensure responsive design is implemented correctly.",
          "Missing error boundaries around the new components. If an API call fails, the entire dashboard crashes.",
          "The code lacks proper TypeScript types for the new API responses."
        ]
      },
      resubmitFiles: [
        { name: "file 1", size: "2.3 MB" },
        { name: "file 2", size: "2.3 MB" },
        { name: "file 3", size: "2.3 MB" }
      ],
      githubRepo: "https://github.example.com/milestone-1",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat."
    },
    {
      id: 4,
      title: "Milestone Title",
      name: "Milestone Name",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
      fullDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat.",
      role: "Role Name",
      status: "Completed",
      assignedTo: "UserName",
      completedDate: "Jan 20, 2024",
      views: 3,
      date: "Done",
      color: "bg-green-50 text-green-600",
      statusColor: "text-green-600",
      statusBg: "bg-green-50",
      completedFiles: [
        { name: "file 1", size: "2.3 MB" },
        { name: "file 2", size: "2.3 MB" },
        { name: "file 3", size: "2.3 MB" }
      ],
      githubRepo: "https://github.example.com/milestone-1",
      notes: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisl ut aliquip ex ea commodo consequat."
    }
  ];

  const columns = [
    { title: "In Progress", count: 2, items: milestones.filter(m => m.status === "In Progress") },
    { title: "Awaiting Review", count: 4, items: milestones.filter(m => m.status === "Awaiting Review") },
    { title: "Back To Queue", count: 8, items: milestones.filter(m => m.status === "Back To Queue") },
    { title: "Completed", count: 3, items: milestones.filter(m => m.status === "Completed") }
  ];

  const handleMilestoneClick = (milestone) => {
    setSelectedMilestone(milestone);
    setShowMilestoneDetail(true);
  };

  const handleBackToMilestones = () => {
    setShowMilestoneDetail(false);
    setSelectedMilestone(null);
  };

  // Milestone Detail View
  if (showMilestoneDetail && selectedMilestone) {
    return (
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[24px] font-semibold text-[#111827]">{selectedMilestone.name}</h1>
            <div className="flex items-center gap-4 mt-2">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-lg text-[12px] font-medium ${selectedMilestone.statusBg} ${selectedMilestone.statusColor}`}>
                {selectedMilestone.status === "Completed" ? "✓ Completed" : 
                 selectedMilestone.status === "In Progress" ? "● In Progress" :
                 selectedMilestone.status === "Awaiting Review" ? "⏳ Awaiting Review" :
                 "⚠ Back to Queue"}
              </span>
              <div className="flex items-center gap-1 text-[12px] text-[#6B7280]">
                <User size={14} />
                <span>Assigned to: {selectedMilestone.assignedTo}</span>
              </div>
              {selectedMilestone.duration && (
                <div className="flex items-center gap-1 text-[12px] text-[#6B7280]">
                  <Clock size={14} />
                  <span>Duration: {selectedMilestone.duration}</span>
                </div>
              )}
              {selectedMilestone.completedDate && (
                <div className="flex items-center gap-1 text-[12px] text-[#6B7280]">
                  <CheckCircle size={14} />
                  <span>Completed: {selectedMilestone.completedDate}</span>
                </div>
              )}
            </div>
          </div>
          <button 
            onClick={handleBackToMilestones}
            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <ArrowLeft size={16} />
            <span className="text-[12px]">Back to Milestones</span>
          </button>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Description</h2>
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <p className="text-[14px] text-[#6B7280] leading-relaxed">
              {selectedMilestone.fullDescription}
            </p>
          </div>
        </div>

        {/* Status-specific content */}
        {selectedMilestone.status === "In Progress" && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Submit Work</h2>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
              <div className="mb-4">
                <h3 className="text-[14px] font-medium text-[#111827] mb-2">Upload Files</h3>
                <div className="border-2 border-dashed border-[#E5E7EB] rounded-lg p-8 text-center">
                  <Upload size={32} className="mx-auto mb-2 text-[#9CA3AF]" />
                  <p className="text-[14px] text-[#6B7280] mb-1">Drag & drop files here</p>
                  <p className="text-[12px] text-[#9CA3AF] mb-2">or click to browse files</p>
                  <p className="text-[10px] text-[#9CA3AF]">Supported formats: .pdf, .zip, .json, .docx, .doc, .jpg, .png, .gif</p>
                </div>
              </div>
              
              <div className="mb-4">
                <h3 className="text-[14px] font-medium text-[#111827] mb-2">GitHub Repository (optional)</h3>
                <input 
                  type="text" 
                  placeholder="https://github..."
                  className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px]"
                />
              </div>
              
              <div>
                <h3 className="text-[14px] font-medium text-[#111827] mb-2">Notes</h3>
                <textarea 
                  placeholder="Notes..."
                  className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg text-[13px] h-20 resize-none"
                />
              </div>
            </div>
          </div>
        )}

        {selectedMilestone.status === "Awaiting Review" && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Submitted Work</h2>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <div className="mb-4">
                <h3 className="text-[14px] font-medium text-[#111827] mb-3">Attached Files</h3>
                <div className="space-y-2">
                  {selectedMilestone.submittedFiles?.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-red-100 flex items-center justify-center">
                          <span className="text-red-600 text-sm">📄</span>
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#111827]">{file.name}</p>
                          <p className="text-[11px] text-[#6B7280]">{file.size}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleView(file.name)}
                          className="text-[11px] px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          View
                        </button>
                        <button 
                          onClick={() => handleDownload(file.name)}
                          className="text-[11px] px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedMilestone.githubRepo && (
                <div className="mb-4">
                  <h3 className="text-[14px] font-medium text-[#111827] mb-2">GitHub Repository</h3>
                  <div className="flex items-center gap-2 text-[#0A65CC]">
                    <span>🔗</span>
                    <a href={selectedMilestone.githubRepo} className="text-[13px] hover:underline">
                      {selectedMilestone.githubRepo}
                    </a>
                  </div>
                </div>
              )}
              
              {selectedMilestone.notes && (
                <div>
                  <h3 className="text-[14px] font-medium text-[#111827] mb-2">Notes</h3>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-[13px] text-[#6B7280]">{selectedMilestone.notes}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {selectedMilestone.status === "Back To Queue" && (
          <div className="space-y-6">
            <div className="bg-red-50 rounded-xl border border-red-200 p-4">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-red-600">⚠</span>
                <h3 className="text-[14px] font-medium text-red-800">Back to Queue</h3>
              </div>
              
              <div className="mb-4">
                <h4 className="text-[13px] font-medium text-red-800 mb-2">Reviewer Feedback:</h4>
                <div className="space-y-2">
                  <p className="text-[12px] text-red-700 mb-2">The submitted work has several issues that need to be addressed:</p>
                  {selectedMilestone.reviewerFeedback?.issues.map((issue, index) => (
                    <div key={index} className="text-[12px] text-red-700">
                      <span className="font-medium">{index + 1}.</span> {issue}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Resubmit Work</h2>
              <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
                <div className="mb-4">
                  <h3 className="text-[14px] font-medium text-[#111827] mb-3">Upload Files</h3>
                  <div className="space-y-2">
                    {selectedMilestone.resubmitFiles?.map((file, index) => (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-600 text-sm">📄</span>
                          </div>
                          <div>
                            <p className="text-[13px] font-medium text-[#111827]">{file.name}</p>
                            <p className="text-[11px] text-[#6B7280]">{file.size}</p>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleDownload(file.name)}
                          className="text-[11px] px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                        >
                          Download
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
                
                {selectedMilestone.githubRepo && (
                  <div className="mb-4">
                    <h3 className="text-[14px] font-medium text-[#111827] mb-2">GitHub Repository (optional)</h3>
                    <div className="flex items-center gap-2 text-[#0A65CC]">
                      <span>🔗</span>
                      <a href={selectedMilestone.githubRepo} className="text-[13px] hover:underline">
                        {selectedMilestone.githubRepo}
                      </a>
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-[14px] font-medium text-[#111827] mb-2">Notes</h3>
                  <div className="bg-gray-100 rounded-lg p-3">
                    <p className="text-[13px] text-[#6B7280]">{selectedMilestone.notes}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedMilestone.status === "Completed" && (
          <div>
            <h2 className="text-[16px] font-semibold text-[#111827] mb-3">Submit Work</h2>
            <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
              <div className="mb-4">
                <h3 className="text-[14px] font-medium text-[#111827] mb-3">Upload Files</h3>
                <div className="space-y-2">
                  {selectedMilestone.completedFiles?.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-600 text-sm">📄</span>
                        </div>
                        <div>
                          <p className="text-[13px] font-medium text-[#111827]">{file.name}</p>
                          <p className="text-[11px] text-[#6B7280]">{file.size}</p>
                        </div>
                      </div>
                      <button 
                        onClick={() => handleDownload(file.name)}
                        className="text-[11px] px-2 py-1 rounded bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors flex items-center gap-1"
                      >
                        <Download size={12} />
                        Download
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              {selectedMilestone.githubRepo && (
                <div className="mb-4">
                  <h3 className="text-[14px] font-medium text-[#111827] mb-2">GitHub Repository</h3>
                  <div className="flex items-center gap-2 text-[#0A65CC]">
                    <span>🔗</span>
                    <a href={selectedMilestone.githubRepo} className="text-[13px] hover:underline">
                      {selectedMilestone.githubRepo}
                    </a>
                  </div>
                </div>
              )}
              
              <div>
                <h3 className="text-[14px] font-medium text-[#111827] mb-2">Notes</h3>
                <div className="bg-gray-100 rounded-lg p-3">
                  <p className="text-[13px] text-[#6B7280]">{selectedMilestone.notes}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // Milestones Grid View (Default)
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-4 gap-6">
        {columns.map((column, index) => (
          <div key={index} className="space-y-4">
            {/* Column Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <h3 className="text-[14px] font-medium text-[#111827]">{column.title}</h3>
                <span className="px-2 py-1 rounded-full bg-gray-100 text-[12px] text-[#6B7280]">
                  {column.count}
                </span>
              </div>
              <button className="p-1 hover:bg-gray-100 rounded">
                <MoreVertical size={16} className="text-[#6B7280]" />
              </button>
            </div>

            {/* Cards */}
            <div className="space-y-3">
              {column.items.map((milestone) => (
                <div 
                  key={milestone.id} 
                  className="bg-white rounded-xl border border-[#E5E7EB] p-4 cursor-pointer hover:shadow-md transition-shadow"
                  onClick={() => handleMilestoneClick(milestone)}
                >
                  <h4 className="text-[14px] font-medium text-[#111827] mb-2">{milestone.title}</h4>
                  <p className="text-[12px] text-[#6B7280] leading-relaxed mb-3">
                    {milestone.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className={`px-2 py-1 rounded-full text-[11px] font-medium ${milestone.color}`}>
                      {milestone.role}
                    </span>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Eye size={12} className="text-[#6B7280]" />
                        <span className="text-[11px] text-[#6B7280]">{milestone.views}</span>
                      </div>
                      
                      <div className="flex items-center gap-1">
                        {milestone.status === "Completed" ? (
                          <>
                            <CheckCircle size={12} className="text-green-600" />
                            <span className="text-[11px] text-green-600">Done</span>
                          </>
                        ) : (
                          <>
                            <Calendar size={12} className="text-[#6B7280]" />
                            <span className="text-[11px] text-[#6B7280]">{milestone.date}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** @format */
import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Clock, Download, Eye, X, CheckCircle, AlertTriangle, ChevronRight, User, FileText } from "lucide-react";
import { Modal, Alert } from "antd";
import { useAuth } from "../../../../context/AuthContext";
import { showMessage } from "../../../../utils/toast";
import { showConfirm } from "../../../../utils/confirm";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

export default function MilestoneAwaitingReview() {
  const [showSummary, setShowSummary] = useState(true);
  const [showBackToQueueModal, setShowBackToQueueModal] = useState(false);
  const [feedback, setFeedback] = useState("");
  const [statusChanged, setStatusChanged] = useState(false);
  const [newStatus, setNewStatus] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
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
  
  // Initialize sample data if localStorage is empty
  useEffect(() => {
    const storedData = localStorage.getItem('bountiesCardData');
    if (!storedData || storedData === '[]') {
      console.log('Initializing sample data...');
      const sampleData = [
        {
          id: 1,
          name: "Eco-Friendly Trip Planner",
          milestoneDetails: [
            {
              id: "1",
              name: "Maps Integration",
              description: "Integrate Google Maps for route planning.",
              role: "Frontend Developer",
              status: "in progress",
              assignedTo: "AD"
            },
            {
              id: "2",
              name: "Trip Saving Feature",
              description: "Allow users to bookmark past trips.",
              role: "Full Stack Developer",
              status: "awaiting review",
              assignedTo: "LI"
            },
            {
              id: "3",
              name: "Authentication",
              description: "Add login and secure session handling.",
              role: "Auth Engineer",
              status: "back to queue",
              assignedTo: "AP"
            },
            {
              id: "4",
              name: "UI/UX Design",
              description: "Create a mobile-first design prototype.",
              role: "UI/UX Designer",
              status: "completed",
              assignedTo: "UI"
            }
          ]
        }
      ];
      localStorage.setItem('bountiesCardData', JSON.stringify(sampleData));
      console.log('Sample data initialized:', sampleData);
    }
  }, []);

  const files = [
    { name: "api-documentation.pdf", size: "2.3 MB" },
    { name: "dashboard-integration.zip", size: "2.3 MB" },
    { name: "test-results.json", size: "2.3 MB" },
  ];

  const handleView = (fileName) => {
    showMessage.info(`Opening ${fileName}... 👁️`);
  };

  const handleDownload = (fileName) => {
    const loadingToast = showMessage.loading(`Downloading ${fileName}... ⏳`);
    setTimeout(() => {
      showMessage.dismiss(loadingToast);
      showMessage.success(`${fileName} downloaded successfully! 📥`);
    }, 800);
  };

  const handleApprove = () => {
    console.log('Approve clicked! Milestone ID:', id);
    
    // Update milestone status to completed
    const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
    console.log('Stored bounties:', storedBounties);
    
    let milestoneFound = false;
    const updatedBounties = storedBounties.map(bounty => {
      if (bounty.milestoneDetails) {
        bounty.milestoneDetails = bounty.milestoneDetails.map(milestone => {
          console.log('Checking milestone:', milestone.id, 'against:', id);
          if (String(milestone.id) === String(id)) {
            milestoneFound = true;
            console.log('Milestone found! Updating to completed');
            return { ...milestone, status: 'completed' };
          }
          return milestone;
        });
      }
      return bounty;
    });
    
    console.log('Milestone found:', milestoneFound);
    console.log('Updated bounties:', updatedBounties);
    localStorage.setItem('bountiesCardData', JSON.stringify(updatedBounties));
    
    // Show visual notification on the page
    setNewStatus('approved');
    setStatusChanged(true);
    
    // Show success message
    showMessage.success('Milestone Approved! Moving to Completed... ✅');
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/dashboard/in-progress');
    }, 3000);
  };

  const handleBackToQueue = () => {
    console.log('Back to Queue clicked! Milestone ID:', id);
    console.log('Feedback:', feedback);
    
    if (!feedback.trim()) {
      showMessage.warning('Please provide feedback for Back to Queue! ⚠️');
      return;
    }
    
    setShowBackToQueueModal(false);
    
    // Update milestone status to back to queue
    const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
    console.log('Stored bounties:', storedBounties);
    
    let milestoneFound = false;
    const updatedBounties = storedBounties.map(bounty => {
      if (bounty.milestoneDetails) {
        bounty.milestoneDetails = bounty.milestoneDetails.map(milestone => {
          console.log('Checking milestone:', milestone.id, 'against:', id);
          if (String(milestone.id) === String(id)) {
            milestoneFound = true;
            console.log('Milestone found! Updating to back to queue');
            return { 
              ...milestone, 
              status: 'back to queue',
              feedback: feedback // Save the feedback
            };
          }
          return milestone;
        });
      }
      return bounty;
    });
    
    console.log('Milestone found:', milestoneFound);
    console.log('Updated bounties:', updatedBounties);
    localStorage.setItem('bountiesCardData', JSON.stringify(updatedBounties));
    
    // Show visual notification on the page
    setNewStatus('back to queue');
    setStatusChanged(true);
    
    // Show warning message
    showMessage.warning('Sent Back to Queue! Feedback recorded. ⚠️');
    
    // Redirect after 3 seconds
    setTimeout(() => {
      navigate('/dashboard/in-progress');
    }, 3000);
  };

  return (
    <div className="flex gap-6">
      {/* Status Changed Alert */}
      {statusChanged && newStatus === 'approved' && (
        <Alert
          message="✅ Milestone Approved Successfully!"
          description="The milestone has been moved to Completed. Redirecting to dashboard..."
          type="success"
          showIcon
          icon={<CheckCircle size={24} />}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[500px] shadow-2xl animate-pulse"
          style={{ fontSize: '16px' }}
        />
      )}
      
      {statusChanged && newStatus === 'back to queue' && (
        <Alert
          message="⚠️ Milestone Sent Back to Queue!"
          description="Feedback has been recorded. The milestone will be reviewed again. Redirecting..."
          type="warning"
          showIcon
          icon={<AlertTriangle size={24} />}
          className="fixed top-20 left-1/2 transform -translate-x-1/2 z-50 w-[500px] shadow-2xl animate-pulse"
          style={{ fontSize: '16px' }}
        />
      )}
      
      {/* Main Content */}
      <div className="flex-1 space-y-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm">
          <Link to="/dashboard/in-progress" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            In Progress Bounties
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <Link to="/dashboard/bounty-name-overview/1" className="text-gray-600 hover:text-blue-600 font-medium transition-colors">
            Bounty Name
          </Link>
          <ChevronRight size={16} className="text-gray-400" />
          <span className="text-blue-600 font-semibold">Milestone Name</span>
        </div>

        {/* Header */}
        <CreativeCard>
          <h1 className="mb-4 text-2xl font-bold text-gradient">Milestone Name</h1>
          <div className="flex flex-wrap items-center gap-3">
            <CreativeBadge variant={newStatus === 'approved' ? 'success' : newStatus === 'back to queue' ? 'warning' : 'info'}>
              {newStatus === 'approved' ? 'Approved' : newStatus === 'back to queue' ? 'Back to Queue' : 'Awaiting Review'}
            </CreativeBadge>
            <span className="inline-flex items-center gap-2 text-[15px] text-gray-700 font-medium">
              <User size={16} className="text-purple-600" />
              Assigned to: <span className="text-gray-900 font-bold">{getUserName()}</span>
            </span>
            <span className="inline-flex items-center gap-2 text-[15px] text-gray-700 font-medium">
              <Clock size={16} className="text-blue-600" /> 
              Duration: <span className="text-gray-900 font-bold">5 days</span>
            </span>
          </div>
        </CreativeCard>

        {/* Description */}
        <CreativeCard>
          <h2 className="mb-4 text-xl font-bold text-gradient">Description</h2>
          <p className="text-[15px] leading-relaxed text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </CreativeCard>

        {/* Submitted Work */}
        <div>
          <h2 className="mb-3 text-lg font-semibold text-gray-900">Submitted Work</h2>
          
          {/* Attached Files */}
          <div className="mb-6">
            <h3 className="mb-3 text-sm font-semibold text-gray-700">Attached Files</h3>
            <div className="space-y-2">
              {files.map((file, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between rounded-lg bg-gray-50 border border-gray-200 px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <svg className="h-5 w-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clipRule="evenodd"/>
                    </svg>
                    <div>
                      <div className="text-sm font-medium text-gray-900">{file.name}</div>
                      <div className="text-xs text-gray-500">{file.size}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button 
                      onClick={() => handleView(file.name)}
                      className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs hover:bg-gray-50"
                    >
                      <Eye className="h-3.5 w-3.5" />
                      View
                    </button>
                    <button 
                      onClick={() => handleDownload(file.name)}
                      className="inline-flex items-center gap-1 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-xs hover:bg-gray-50"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Repository */}
          <div className="mb-6">
            <h3 className="mb-2 text-sm font-semibold text-gray-700">GitHub Repository</h3>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <a href="https://github.example.com/milestone-1" className="text-blue-600 hover:underline">
                https://github.example.com/milestone-1
              </a>
            </div>
          </div>

          {/* Notes */}
          <div>
            <h3 className="mb-2 text-sm font-semibold text-gray-700">Notes</h3>
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
          </div>
        </div>
      </div>

      {/* Milestone Summary Sidebar */}
      {showSummary && (
        <div className="w-80 shrink-0">
          <div className="sticky top-6 rounded-lg border bg-white p-6 shadow-sm">
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Milestone Summary</h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Role Required</span>
                <span className="font-medium text-gray-900">Frontend Developer</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Created on</span>
                <span className="font-medium text-gray-900">2024-01-10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Submitted on</span>
                <span className="font-medium text-gray-900">2024-01-10</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Days left</span>
                <span className="font-semibold text-red-600">2 days</span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <button
                onClick={handleApprove}
                className="w-full rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-green-700 transition"
              >
                Approve
              </button>
              <button
                onClick={() => setShowBackToQueueModal(true)}
                className="w-full rounded-lg bg-red-600 px-4 py-2.5 text-sm font-semibold text-white hover:bg-red-700 transition"
              >
                Back To Queue
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Back To Queue Modal */}
      <Modal
        open={showBackToQueueModal}
        onCancel={() => setShowBackToQueueModal(false)}
        footer={null}
        closeIcon={<X size={20} />}
        width={500}
      >
        <div className="py-4">
          <h2 className="mb-2 text-xl font-semibold text-gray-900">Back to Queue Milestone</h2>
          <p className="mb-4 text-sm text-gray-600">Provide feedback for Back TO queue</p>
          
          <textarea
            className="w-full rounded-lg border border-gray-300 p-3 text-sm outline-none focus:ring-2 focus:ring-blue-200"
            rows={5}
            placeholder="Explain why this milestone is being Back TO queue..."
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
          />

          <div className="mt-6 flex justify-end gap-3">
            <button
              onClick={() => setShowBackToQueueModal(false)}
              className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              onClick={handleBackToQueue}
              className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700"
            >
              Back TO Queue Milestone
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
}


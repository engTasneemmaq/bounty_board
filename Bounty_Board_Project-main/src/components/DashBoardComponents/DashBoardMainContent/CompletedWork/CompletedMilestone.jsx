/** @format */
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  CheckCircle2,
  UserRound,
  CircleDollarSign,
  CalendarDays,
  FileText,
  Download,
  Github,
  ChevronRight,
  Copy,
  ExternalLink,
  User,
  Clock,
} from "lucide-react";
import { showMessage } from "../../../../utils/toast";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

export default function CompletedMilestone() {
  const { id } = useParams(); // Get milestone or bounty ID from URL
  const bountyId = id || '101'; // Default to 101 (from completed work data)
  
  // Get bounty data from localStorage or mock data
  const getBountyData = () => {
    // Try to find in localStorage first
    const storedBounties = JSON.parse(localStorage.getItem('bountiesCardData') || '[]');
    let foundBounty = storedBounties.find(b => String(b.id) === String(bountyId));
    
    // If not found, create from completed work data
    if (!foundBounty) {
      foundBounty = {
        id: bountyId,
        name: "Machine Learning Model Implementation",
        description: "AI-Powered Analytics Platform milestone",
        status: "Completed",
        milestones: 1,
        milestonesDone: 1,
        contributors: [],
        languages: ["Python", "TensorFlow"],
        skills: ["Machine Learning", "Deep Learning"],
        milestoneDetails: [
          {
            id: bountyId,
            name: "Machine Learning Model Implementation",
            description: "Successfully implemented the machine learning model with 95% accuracy.",
            status: "completed",
            assignedTo: "User"
          }
        ]
      };
      
      // Save to localStorage for future reference
      storedBounties.push(foundBounty);
      localStorage.setItem('bountiesCardData', JSON.stringify(storedBounties));
    }
    
    return foundBounty;
  };
  
  const bountyData = getBountyData();
  
  const handleDownload = (fileName) => {
    const loadingToast = showMessage.loading(`Downloading ${fileName}... ⏳`);
    setTimeout(() => {
      showMessage.dismiss(loadingToast);
      showMessage.success(`${fileName} downloaded successfully! 📥`);
      // Simulate download
      const link = document.createElement('a');
      link.download = fileName;
      link.href = '#';
      link.click();
    }, 800);
  };

  const handleCopyGitHub = () => {
    const githubUrl = "https://github.example.com/milestone-1";
    navigator.clipboard.writeText(githubUrl).then(() => {
      showMessage.success('GitHub link copied to clipboard! 📋');
    }).catch(() => {
      showMessage.error('Failed to copy link');
    });
  };

  const handleViewOnGitHub = () => {
    window.open("https://github.example.com/milestone-1", "_blank");
    showMessage.info('Opening GitHub repository... 🔗');
  };

  return (
    <section className="w-full space-y-4">
      {/* Success Banner */}
      <div className="bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl p-4 shadow-lg">
        <div className="flex items-center gap-3 text-white">
          <div className="bg-white/20 rounded-full p-2">
            <CheckCircle2 className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-semibold text-lg">🎉 Milestone Successfully Completed!</h3>
            <p className="text-sm text-green-50">Congratulations! You've earned $4,000 for this milestone.</p>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="text-xs text-gray-500 flex items-center gap-1">
        <Link to="/dashboard/completed" className="hover:underline">
          Completed Work
        </Link>
        <ChevronRight className="h-3 w-3" />
        <span>Machine Learning Model Implementation</span>
      </div>

      {/* Main Card */}
      <div className="bg-white border rounded-xl shadow-sm p-6">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Machine Learning Model Implementation</h2>
            <p className="text-sm text-gray-500 mt-1">Completed milestone for AI-Powered Analytics Platform</p>
          </div>
          <Link
            to={`/dashboard/bounty-name-overview/${bountyId}`}
            className="inline-flex items-center gap-2 text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
            onClick={() => showMessage.info(`Opening bounty details for ${bountyData.name}... 🔗`)}
          >
            View Bounty Details
            <ExternalLink className="h-4 w-4" />
          </Link>
        </div>

        {/* Info Row */}
        <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-gray-700">
          <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full border bg-emerald-50 border-emerald-200 text-emerald-600">
            <CheckCircle2 className="h-4 w-4" /> Completed
          </span>
          <span className="inline-flex items-center gap-1">
            <UserRound className="h-4 w-4" /> Your Role: Machine Learning Engineer
          </span>
          <span className="inline-flex items-center gap-1">
            <CircleDollarSign className="h-4 w-4" /> Earned:{" "}
            <span className="text-green-600 font-semibold">4000$</span>
          </span>
          <span className="inline-flex items-center gap-1">
            <CalendarDays className="h-4 w-4" /> Completed: Jan 20, 2024
          </span>
        </div>

        {/* Description */}
        <p className="mt-5 text-sm leading-6 text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat.
        </p>

        {/* Submit Work */}
        <div className="mt-8">
          <h3 className="font-semibold mb-3">Submit Work</h3>

          {/* Files */}
          <div className="space-y-2">
            {[
              { name: "final-model-implementation.zip", size: "5.8 MB" },
              { name: "training-data-results.csv", size: "2.1 MB" },
              { name: "documentation.pdf", size: "1.3 MB" }
            ].map((file, i) => (
              <div
                key={i}
                className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-lg px-4 py-3 hover:border-green-300 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-green-100 rounded-lg p-2">
                    <FileText className="h-5 w-5 text-green-700" />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-900">{file.name}</div>
                    <div className="text-xs text-gray-500">{file.size}</div>
                  </div>
                </div>
                <button 
                  onClick={() => handleDownload(file.name)}
                  className="inline-flex items-center gap-1.5 text-sm bg-green-600 text-white rounded-md px-4 py-2 hover:bg-green-700 transition-colors font-medium shadow-sm"
                >
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            ))}
          </div>

          {/* GitHub */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2">
              GitHub Repository
            </label>
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 flex-1">
                  <div className="bg-gray-900 rounded-lg p-2">
                    <Github className="h-5 w-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium text-gray-900">ML Model Repository</div>
                    <div className="text-xs text-gray-500">https://github.example.com/milestone-1</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyGitHub}
                    className="inline-flex items-center gap-1.5 text-sm bg-white border border-gray-300 rounded-md px-3 py-2 hover:bg-gray-50 transition-colors"
                  >
                    <Copy className="h-4 w-4" /> Copy
                  </button>
                  <button
                    onClick={handleViewOnGitHub}
                    className="inline-flex items-center gap-1.5 text-sm bg-gray-900 text-white rounded-md px-3 py-2 hover:bg-gray-800 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" /> Open
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="mt-6">
            <label className="block text-sm font-medium mb-2 flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Completion Notes
            </label>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
              <p className="text-sm text-gray-700 leading-relaxed">
                Successfully implemented the machine learning model with 95% accuracy. The model has been trained on the provided dataset and validated against multiple test cases. All required documentation has been included, and the code follows best practices with comprehensive unit tests. The repository includes setup instructions and deployment guidelines.
              </p>
              <div className="mt-3 pt-3 border-t border-green-200">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  <span>All requirements met and verified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

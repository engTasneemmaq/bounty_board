import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAdminBounties } from "../../../context/AdminBountiesContext";
import { Calendar, Clock, Layers, DollarSign, CheckCircle } from "lucide-react";

export default function PendingBountyDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getById, approve, reject } = useAdminBounties();

  const bounty = getById(id);

  if (!bounty) {
    return (
      <div className="p-6">
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
          Bounty not found
        </div>
      </div>
    );
  }

  const handleApprove = () => {
    approve(bounty.id);
    navigate("/admin/pending-bounties");
  };

  const handleReject = () => {
    reject(bounty.id);
    navigate("/admin/pending-bounties");
  };

  const getStatusBadge = () => {
    if (bounty.status === "approved") {
      return (
        <span className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700 text-[14px] font-medium">
          Approved
        </span>
      );
    }
    if (bounty.status === "rejected") {
      return (
        <span className="px-4 py-2 rounded-lg bg-purple-100 text-purple-700 text-[14px] font-medium">
          Rejected
        </span>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-[24px] font-bold text-[#111827]">Pending Bounties</h1>
        <div className="flex items-center gap-2">
          {bounty.status === "pending" ? (
            <>
              <button
                onClick={handleReject}
                className="px-5 py-2.5 rounded-lg bg-[#EF4444] text-white text-[14px] font-medium hover:bg-[#DC2626] transition-colors"
              >
                Reject
              </button>
              <button
                onClick={handleApprove}
                className="px-5 py-2.5 rounded-lg bg-[#22C55E] text-white text-[14px] font-medium hover:bg-[#16A34A] transition-colors"
              >
                Approve
              </button>
            </>
          ) : (
            getStatusBadge()
          )}
        </div>
      </div>

      {/* Bounty Card */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        {/* Image and Title */}
        <div className="p-6 flex items-start gap-6">
          <div className="w-32 h-32 rounded-lg bg-gradient-to-br from-purple-400 to-pink-400 flex-shrink-0"></div>
          
          <div className="flex-1">
            <h2 className="text-[22px] font-bold text-[#111827] mb-4">Bounty Name</h2>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-6 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Bounty Posted</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827]">14 June, 2025</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Clock size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Bounty Expire In</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827]">14 July, 2025</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Category</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827]">{bounty.category}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <DollarSign size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Salary</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827]">${bounty.price}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <CheckCircle size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Status</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827] capitalize">{bounty.status === "pending" ? "Under Review" : bounty.status}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Layers size={16} className="text-[#3B82F6]" />
                  <span className="text-[11px] text-[#6B7280] uppercase">Milestones</span>
                </div>
                <p className="text-[13px] font-medium text-[#111827]">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-3">Project Description</h3>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
            We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS. 
            You can find the ONNX Runtime library here: <a href="https://github.com/microsoft/onnxruntime" className="text-[#3B82F6] hover:underline">https://github.com/microsoft/onnxruntime</a>
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
            The integration appears to work correctly when running development builds, and the plugin loads and functions as expected. However, we are 
            encountering a critical issue: the app crashes immediately in distribution (shipping) builds. We suspect the issue may be related to differences in symbol 
            visibility, runtime linking, or build configurations between development and distribution modes on iOS. Our goal is to identify the root cause of the crash 
            and ensure the plugin works reliably in production-ready (App Store) builds.
          </p>
        </div>
      </div>

      {/* Project Requirements */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-3">Project Requirements</h3>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0"></span>
              <span className="text-[14px] text-[#6B7280]">Unreal Engine plugin development for iOS</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0"></span>
              <span className="text-[14px] text-[#6B7280]">ONNX Runtime or native libraries integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3B82F6] mt-2 flex-shrink-0"></span>
              <span className="text-[14px] text-[#6B7280]">iOS build pipelines and crash debugging</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Details */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-3">Technical Details</h3>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6">
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-4">
            This bounty involves integrating the libonnxruntime library into an Unreal Engine 5.4 project targeting iOS. While the integration works correctly in 
            development builds, the project crashes immediately in distribution (shipping) builds. The ONNX Runtime is currently in PyTorch format and needs to be 
            converted to a format compatible with iOS deployment.
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            The core challenge lies in ensuring that the model, once converted to TFLite, can run without issues on iOS devices. The developer should have 
            experience debugging iOS release build crashes, linking static libraries (.a files or .frameworks), working with Xcode toolchains, and familiarity with 
            integrating native libraries in Unreal Engine projects, especially those involving machine learning inference. Familiarity with integrating native libraries in 
            Unreal Engine projects, especially those involving machine learning inference, will be crucial.
          </p>
        </div>
      </div>

      {/* Languages & Skills */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-3">Languages & Skills</h3>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4">
          <div>
            <h4 className="text-[14px] font-medium text-[#111827] mb-3">Languages</h4>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "Objective-C", "Swift"].map((lang) => (
                <span key={lang} className="px-3 py-1.5 rounded-lg bg-gray-100 text-[#6B7280] text-[12px] font-medium">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-[14px] font-medium text-[#111827] mb-3">Skills & Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["Crash Debugging", "Xcode", "Model Conversion", "TFLite", "Static Libraries", "Ultralytics", "ONNX Runtime", "Swift"].map((skill) => (
                <span key={skill} className="px-3 py-1.5 rounded-lg bg-gray-100 text-[#6B7280] text-[12px] font-medium">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
        </div>

      {/* Project Resources */}
      <div>
        <h3 className="text-[18px] font-semibold text-[#111827] mb-3">Project Resources</h3>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-6 space-y-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center">
              <span className="text-[#3B82F6]">🔗</span>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#111827]">Link to Project</p>
              <a href="https://github.com/microsoft/onnxruntime" className="text-[12px] text-[#3B82F6] hover:underline">
                https://github.com/microsoft/onnxruntime
              </a>
            </div>
          </div>
          
          <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <span className="text-red-600">📄</span>
              </div>
              <div>
                <p className="text-[14px] font-medium text-[#111827]">YOLO World Official Docs</p>
                <p className="text-[12px] text-[#6B7280]">PDF</p>
              </div>
            </div>
            <button className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center hover:bg-blue-100 transition-colors">
              <span className="text-[#3B82F6]">⬇️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import { Calendar, Clock, Layers, DollarSign, CheckCircle, Folder } from "lucide-react";
import { showMessage } from '../../../utils/toast';

export default function BountyOverview() {
  const handleDownload = () => {
    console.log('Downloading file...');
    showMessage.info('File download will start shortly 📥');
  };

  return (
    <div className="space-y-6">
      {/* Bounty Overview Section */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-4">Bounty Overview</h2>
        <div className="grid grid-cols-6 gap-4">
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Calendar size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Bounty Posted</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">14 June, 2025</p>
          </div>
          
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Bounty Expire In</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">14 July, 2025</p>
          </div>
          
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Layers size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Category</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">Development</p>
          </div>
          
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <DollarSign size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Price</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">$50k</p>
          </div>
          
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Status</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">In Progress</p>
          </div>
          
          <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
            <div className="flex items-center gap-2 mb-2">
              <Folder size={16} className="text-[#0A65CC]" />
              <span className="text-[12px] text-[#6B7280]">Milestones</span>
            </div>
            <p className="text-[14px] font-medium text-[#111827]">5</p>
          </div>
        </div>
      </div>

      {/* Project Description */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-3">Project Description</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-3">
            We need to integrate the <code className="bg-gray-100 px-1 rounded">libonnxruntime</code> library into our Unreal Engine 5.4 project targeting iOS. 
            The integration works fine in development builds, but the app crashes in distribution (shipping) builds.
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-3">
            The ONNX Runtime is currently in PyTorch format and needs to be converted for iOS deployment. 
            The main challenge is ensuring the model, once converted to TFLite, runs without issues on iOS devices.
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            <a href="https://github.com/microsoft/onnxruntime" className="text-[#0A65CC] hover:underline">
              https://github.com/microsoft/onnxruntime
            </a>
          </p>
        </div>
      </div>

      {/* Project Requirements */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-3">Project Requirements</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <ul className="space-y-2">
            <li className="text-[14px] text-[#6B7280] flex items-start gap-2">
              <span className="w-2 h-2 bg-[#0A65CC] rounded-full mt-2 flex-shrink-0"></span>
              Unreal Engine plugin development for iOS
            </li>
            <li className="text-[14px] text-[#6B7280] flex items-start gap-2">
              <span className="w-2 h-2 bg-[#0A65CC] rounded-full mt-2 flex-shrink-0"></span>
              ONNX Runtime or native libraries integration
            </li>
            <li className="text-[14px] text-[#6B7280] flex items-start gap-2">
              <span className="w-2 h-2 bg-[#0A65CC] rounded-full mt-2 flex-shrink-0"></span>
              iOS build pipelines and crash debugging
            </li>
          </ul>
        </div>
      </div>

      {/* Technical Details */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-3">Technical Details</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
          <p className="text-[14px] text-[#6B7280] leading-relaxed mb-3">
            The project requires experience with debugging iOS release build crashes, linking static libraries (.a files or .frameworks), 
            working with Xcode toolchains, and familiarity with integrating native libraries in Unreal Engine projects, especially for machine learning inference.
          </p>
          <p className="text-[14px] text-[#6B7280] leading-relaxed">
            Success is defined as delivering a working iOS build that includes the converted TFLite model and demonstrates its correct function within the app environment.
          </p>
        </div>
      </div>

      {/* Languages & Skills */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-3">Languages & Skills</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 space-y-4">
          <div>
            <h3 className="text-[14px] font-medium text-[#111827] mb-2">Languages</h3>
            <div className="flex flex-wrap gap-2">
              {["Python", "C++", "Objective-C", "Swift"].map((lang) => (
                <span key={lang} className="px-3 py-1 rounded-lg border border-[#E5E7EB] text-[12px] text-[#6B7280]">
                  {lang}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-[14px] font-medium text-[#111827] mb-2">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {["Crash Debugging", "Xcode", "Model Conversion", "TFLite", "Static Libraries", "Ultralytics", "ONNX Runtime", "Swift"].map((skill) => (
                <span key={skill} className="px-3 py-1 rounded-lg border border-[#E5E7EB] text-[12px] text-[#6B7280]">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Resources */}
      <div>
        <h2 className="text-[18px] font-semibold text-[#111827] mb-3">Project Resources</h2>
        <div className="bg-white rounded-xl border border-[#E5E7EB] p-4 space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center">
              <span className="text-[#0A65CC] text-sm">🔗</span>
            </div>
            <div>
              <p className="text-[14px] font-medium text-[#111827]">Link to Project</p>
              <a href="https://github.com/microsoft/onnxruntime" className="text-[12px] text-[#0A65CC] hover:underline">
                https://github.com/microsoft/onnxruntime
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center">
              <span className="text-[#0A65CC] text-sm">📄</span>
            </div>
            <div className="flex-1">
              <p className="text-[14px] font-medium text-[#111827]">YOLO World Official Docs</p>
              <p className="text-[12px] text-[#6B7280]">PDF</p>
            </div>
            <button 
              onClick={handleDownload}
              className="w-8 h-8 rounded-lg bg-[#F0F6FF] flex items-center justify-center hover:bg-[#E7F0FB] transition-colors"
            >
              <span className="text-[#0A65CC] text-sm">⬇️</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @format */
import React, { useMemo, useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import {
  ArrowLeft, Link as LinkIcon, Mail, CalendarDays, Clock4, DollarSign,
  Users, BadgeCheck, Globe, Download,
} from "lucide-react";
import { showMessage } from "../../../../utils/toast";

import ApplyAsModal from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/ApplyAsModal";
import ApplyFormModal from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/ApplyFormModal";
import AssignTeamRolesModal from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/AssignTeamRolesModal";
import ApplicationSubmittedModal from "components/DashBoardComponents/DashBoardMainContent/PendingApplications/ApplicationSubmittedModal";
import SendEmailModal from "components/LandingPage/ExploreBounties/SendEmailModal";

const LS_KEY = (id) => `bountyStatus:${id}`; // values: "pending" | "waiting" | "applied" | "default"
const loadStatus = (id, fallback) => localStorage.getItem(LS_KEY(id)) || fallback;
const saveStatus = (id, status) => localStorage.setItem(LS_KEY(id), status);

function Stat({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <div className="h-9 w-9 rounded-lg bg-[#EEF5FF] grid place-items-center text-[#0A60E0]">
        {icon}
      </div>
      <div>
        <p className="text-[11px] uppercase tracking-wide text-gray-500">{label}</p>
        <p className="text-[14px] font-semibold text-gray-800">{value}</p>
      </div>
    </div>
  );
}

export default function ApplicationDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const location = useLocation();
  const incoming = location.state?.source || "pending";

  const [status, setStatus] = useState(() => loadStatus(id, incoming));
  useEffect(() => { saveStatus(id, status); }, [id, status]);

  const isApplied = status === "applied";
  const isWaiting = status === "waiting";

  const [showApplyAs, setShowApplyAs] = useState(false);
  const [showApplyForm, setShowApplyForm] = useState(false);
  const [showAssignRoles, setShowAssignRoles] = useState(false);
  const [showSubmitted, setShowSubmitted] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [applicationType, setApplicationType] = useState(null); // 'individual' or 'team'
  const [selectedTeamId, setSelectedTeamId] = useState(null);

  useEffect(() => {
    if (incoming === "reapply") setShowApplyAs(true);
  }, [incoming]);

  const rightCta = useMemo(() => {
    if (isApplied) {
      return (
        <div className="inline-flex items-center gap-2 rounded-lg bg-[#6F7F95] text-white px-4 py-2">
          <span>Applied</span>
          <BadgeCheck className="h-4 w-4" />
        </div>
      );
    }
    if (isWaiting) {
      return (
        <div className="inline-flex items-center gap-2 rounded-lg bg-[#1FA24A]/90 text-white px-4 py-2">
          <span>Waiting To Complete Team</span>
        </div>
      );
    }
    return (
      <button
        onClick={() => setShowApplyAs(true)}
        className="rounded-lg bg-[#0A60E0] text-white px-4 py-2 hover:bg-[#0a56c6]"
      >
        Apply Now
      </button>
    );
  }, [isApplied, isWaiting]);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center justify-between bg-[#F3F5F8] px-4 md:px-6 py-3 rounded-md mb-5">
        <button onClick={() => navigate(-1)} className="inline-flex items-center gap-2 text-[#0A60E0]">
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm">Back</span>
        </button>
        <h2 className="text-sm md:text-base font-semibold">Bounty Details</h2>
        <div className="flex items-center gap-3">{rightCta}</div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6">
        {/* LEFT */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1544198365-3c96e8a31a0b?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="w-full aspect-[11/4.6] object-cover rounded-xl"
          />
          <h1 className="text-xl md:text-2xl font-semibold mt-5">Convert Yolo World model to TFLite</h1>
          <div className="mt-2 flex flex-wrap items-center gap-6 text-sm text-gray-700">
            <a 
              href="https://github.com/microsoft/onnxruntime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-[#0A60E0] transition-colors"
            >
              <LinkIcon className="h-4 w-4 text-[#0A60E0]" />
              https://github.com/microsoft/onnxruntime
            </a>
            <a 
              href="mailto:susan@gmail.com"
              className="inline-flex items-center gap-2 hover:text-[#0A60E0] transition-colors"
            >
              <Mail className="h-4 w-4 text-[#0A60E0]" />
              susan@gmail.com
            </a>
          </div>


          <section className="mt-6 space-y-10">
            <div>
              <h3 className="font-semibold">Project Description</h3>
              <p className="mt-2 text-[14px] leading-7 text-gray-700">
                We are currently working on integrating libonnxruntime into our Unreal
                Engine 5.4 project targeting iOS. You can find the ONNX Runtime library
                here: https://github.com/microsoft/onnxruntime…
                The integration appears to work correctly when running development builds,
                however, we are encountering a critical issue…
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Project Requirements</h3>
              <ul className="mt-2 list-disc pl-5 text-[14px] leading-7 text-gray-700">
                <li>Unreal Engine plugin development for iOS</li>
                <li>ONNX Runtime or native libraries integration</li>
                <li>iOS build pipelines and crash debugging</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold">Technical Details</h3>
              <p className="mt-2 text-[14px] leading-7 text-gray-700">
                This bounty involves integrating the libonnxruntime library into an Unreal
                Engine 5.4 project targeting iOS… The core challenge lies in ensuring that
                the model, once converted to TFLite, can run without issues on iOS devices…
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Languages & Skills</h3>
              <div className="mt-3">
                <p className="text-sm text-gray-500">Languages</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Python","C++","Objective-C","Swift"].map((t) => (
                    <span key={t} className="px-4 py-2 text-sm rounded-md bg-[#F4F6F8] text-gray-700">{t}</span>
                  ))}
                </div>
              </div>
              <div className="mt-5">
                <p className="text-sm text-gray-500">Skills & Technologies</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {["Crash Debugging","Xcode","Model Conversion","TFLite","Static Libraries","Ultralytics","ONNX Runtime","Swift"]
                    .map((t) => <span key={t} className="px-4 py-2 text-sm rounded-md bg-[#F4F6F8] text-gray-700">{t}</span>)}
                </div>
              </div>
            </div>
          </section>

          
        </div>

        {/* RIGHT */}
        <aside className="space-y-6">
          <div className="rounded-xl border p-5">
            <h4 className="font-semibold mb-4">Bounty Overview</h4>
            <div className="grid grid-cols-2 gap-4">
              <Stat icon={<CalendarDays className="h-4 w-4" />} label="Job Posted" value="14 June, 2025" />
              <Stat icon={<Clock4 className="h-4 w-4" />} label="Job Expire in" value="14 July, 2025" />
              <Stat icon={<DollarSign className="h-4 w-4" />} label="Price" value="$50k-80k" />
              <Stat icon={<BadgeCheck className="h-4 w-4" />} label="Status" value="Active" />
              <Stat icon={<Users className="h-4 w-4" />} label="Applicants" value="120" />
              <Stat icon={<BadgeCheck className="h-4 w-4" />} label="Languages" value="JavaScript" />
            </div>
          </div>

          <div className="rounded-xl border p-5">
            <h4 className="font-semibold mb-4">Open Roles</h4>
            <button 
              onClick={() => showMessage.info("Frontend Developer role selected 📋")}
              className="w-full text-left rounded-xl border px-4 py-3 hover:bg-[#F7FAFF] transition-colors"
            >
              <div className="font-semibold">Frontend Developer</div>
              <div className="text-xs text-gray-500 mt-1">React, TailwindCSS, TypeScript</div>
            </button>
            <button 
              onClick={() => showMessage.info("Backend Developer role selected 📋")}
              className="mt-3 w-full text-left rounded-xl border px-4 py-3 hover:bg-[#F7FAFF] transition-colors"
            >
              <div className="font-semibold">Backend Developer</div>
              <div className="text-xs text-gray-500 mt-1">Node.js, Express.js, MongoDB</div>
            </button>
          </div>

          <div className="rounded-xl border p-5">
            <h4 className="font-semibold mb-4">Project Resources</h4>
            <a 
              href="https://github.com/microsoft/onnxruntime" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-start gap-3 py-2 border-b hover:bg-gray-50 transition-colors cursor-pointer"
            >
              <div className="h-9 w-9 rounded-lg bg-[#EEF5FF] grid place-items-center text-[#0A60E0]">
                <Globe className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">Link to Project</p>
                <p className="text-xs text-gray-600">https://github.com/microsoft/onnxruntime</p>
              </div>
            </a>
            <div className="flex items-start gap-3 py-3">
              <div className="h-9 w-9 rounded-lg bg-[#EEF5FF] grid place-items-center text-[#0A60E0]">
                <Download className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium">YOLO World Official Docs</p>
                <p className="text-xs text-gray-600">PDF</p>
              </div>
              <button 
                onClick={() => showMessage.success("Downloading YOLO World Official Docs... 📥")}
                className="h-8 w-8 rounded-lg bg-[#EEF5FF] text-[#0A60E0] grid place-items-center hover:bg-[#D8E8FF] transition-colors"
              >
                <Download className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="rounded-xl border p-5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">Susan Jeans</div>
                  <div className="text-xs text-gray-500">Website Designer (UI/UX)</div>
                </div>
              </div>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="rounded-lg border px-3 py-2 text-sm hover:bg-gray-50 transition-colors"
              >
                Message
              </button>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <div className="text-gray-500">Member Since:</div><div>March 2024</div>
              <div className="text-gray-500">Bounties:</div><div>14 total</div>
              <div className="text-gray-500">Email address:</div><div>susan@gmail.com</div>
              <div className="text-gray-500">Website:</div><div>https://susan.com</div>
              <div className="text-gray-500">Skills:</div>
              <div className="flex gap-2">
                <span className="rounded bg-gray-100 px-2 py-1 text-xs">UI Designer</span>
                <span className="rounded bg-gray-100 px-2 py-1 text-xs">UX Designer</span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      <ApplyAsModal
        open={showApplyAs}
        onClose={() => setShowApplyAs(false)}
        onNext={(data) => {
          setShowApplyAs(false);
          setApplicationType(data.type);
          setSelectedTeamId(data.teamId);
          
          if (data.type === "individual") {
            setShowApplyForm(true);
          } else if (data.type === "team") {
            setShowAssignRoles(true);
          }
        }}
      />
      
      <ApplyFormModal
        open={showApplyForm}
        bountyTitle="Convert Yolo World model to TFLite"
        onClose={() => setShowApplyForm(false)}
        onSubmit={() => {
          setShowApplyForm(false);
          setStatus("applied");       
          setShowSubmitted(true);
          showMessage.success("Application submitted successfully! ✅");
        }}
      />
      
      <AssignTeamRolesModal
        open={showAssignRoles}
        onClose={() => setShowAssignRoles(false)}
        onNext={(data) => {
          setShowAssignRoles(false);
          setStatus("waiting");
          setShowSubmitted(true);
          showMessage.success("Team application submitted! Waiting to complete team. ✅");
        }}
        onInviteMember={(candidateId, candidateName, roleId) => {
          showMessage.success(`Invitation sent to ${candidateName}! ✅`);
        }}
        roles={[
          { id: "frontend", name: "Frontend Developer", required: true },
          { id: "backend", name: "Backend Developer", required: true },
        ]}
      />
      
      <ApplicationSubmittedModal
        open={showSubmitted}
        onClose={() => setShowSubmitted(false)}
        onBackDashboard={() => navigate("/dashboard/pending-applications")}
      />
      
      <SendEmailModal
        open={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        recipientName="Susan Jeans"
        recipientEmail="susan@gmail.com"
      />
    </div>
  );
}

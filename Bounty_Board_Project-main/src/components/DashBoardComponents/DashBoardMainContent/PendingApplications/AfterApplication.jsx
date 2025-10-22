/** @format */
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Link as LinkIcon,
  Mail,
  CalendarDays,
  Clock3,
  Boxes,
  DollarSign,
  Users,
  BadgeCheck,
  Globe,
  FileText,
  DownloadCloud,
} from "lucide-react";
import { showMessage } from "../../../../utils/toast";
import { useState } from "react";
import SendEmailModal from "components/LandingPage/ExploreBounties/SendEmailModal";

const MOCK = {
  id: 101,
  title: "Convert Yolo World model to TFLite",
  image:
    "https://images.unsplash.com/photo-1543852786-1cf6624b9987?q=80&w=1600&auto=format&fit=crop",
  repo: "https://github.com/microsoft/onnxruntime",
  email: "susan@gmail.com",
  overview: {
    posted: "14 June, 2025",
    expire: "14 July, 2025",
    category: "Back-end",
    salary: "$50k-80k",
    status: "Active",
    applicants: 120,
    languages: "JavaScript",
  },
  description: [
    `We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS. You can find the ONNX Runtime library here:`,
    `The integration appears to work correctly when running development builds, and the plugin loads and functions as expected. However, we are encountering a critical issue: the app crashes immediately in distribution (shipping) builds. We suspect the issue may be related to differences in symbol visibility, runtime linking, or build configurations between development and distribution modes on iOS. Our goal is to identify the root cause of the crash and ensure the plugin works reliably in production-ready (App Store) builds.`,
  ],
  requirements: [
    "Unreal Engine plugin development for iOS",
    "ONNX Runtime or native libraries integration",
    "iOS build pipelines and crash debugging",
  ],
  technical: [
    `This bounty involves integrating the libonnxruntime library into an Unreal Engine 5.4 project targeting iOS. While the integration works correctly in development builds, the project crashes when compiled as a distribution (shipping) build. The ONNX Runtime is currently available in PyTorch format and needs to be converted to a format compatible with iOS deployment.`,
    `The core challenge lies in ensuring that the model, once converted to TFLite, can run without issues on iOS devices. The developer should have experience debugging iOS release build crashes, linking static libraries (.a files or .frameworks), and working with Xcode toolchains. Familiarity with integrating native libraries in Unreal Engine projects, especially those involving machine learning inference, will be crucial.`,
    `Success will be measured by delivering a working iOS build that includes the converted TFLite model and demonstrates that the model functions correctly within the app environment.`,
  ],
  roles: [
    { name: "Frontend Developer", tags: ["React", "TailwindCSS", "TypeScript"] },
    { name: "Backend Developer", tags: ["Node.js", "Express.js", "MongoDB"] },
  ],
  resources: [
    {
      type: "link",
      label: "Link to Project",
      value: "https://github.com/microsoft/onnxruntime",
    },
    { type: "file", label: "YOLO World Official Docs", ext: "PDF" },
  ],
  author: {
    name: "Susan Jeans",
    role: "Website Designer (UI/UX)",
    since: "March 2024",
    counts: { total: 14, created: 5, participated: 9 },
    email: "susan@gmail.com",
    website: "https://susan.com",
    skills: ["UI Designer", "UX Designer"],
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=240&auto=format&fit=crop",
  },
  languages: ["Python", "C++", "Objective-C", "Swift"],
  skills: [
    "Crash Debugging",
    "Xcode",
    "Model Conversion",
    "TFLite",
    "Static Libraries",
    "Ultralytics",
    "ONNX Runtime",
    "Swift",
  ],
};

export default function AfterApplication() {
  const { id } = useParams();
  const navigate = useNavigate();
  const b = MOCK; // (بدّل لاحقًا ببيانات API حسب الـ id)
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center gap-3 bg-gray-50 px-4 sm:px-6 py-3 border-b">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center justify-center h-8 w-8 rounded-md hover:bg-gray-200"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4 text-gray-700" />
        </button>
        <h2 className="text-sm sm:text-base font-semibold">Bounty Details</h2>

        {/* Applied pill */}
        <div className="ml-auto">
          <div className="inline-flex items-center gap-2 bg-gray-700 text-white text-sm px-5 py-2 rounded-md">
            <span>Applied</span>
            <BadgeCheck className="h-4 w-4" />
          </div>
          <p className="text-xs text-gray-500 mt-1 text-right">
            Bounty expire in:{" "}
            <span className="text-red-500">June 30, 2025</span>
          </p>
        </div>
      </div>

      {/* Body */}
      <div className="mx-auto w-[92%] max-w-[1150px] py-6 grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_360px] gap-8">
        {/* LEFT */}
        <div>
          {/* Cover */}
          <img
            src={b.image}
            alt=""
            className="w-full aspect-[16/8] object-cover rounded-xl border"
          />

          {/* Title + repo/email */}
          <h1 className="text-xl sm:text-2xl font-semibold mt-4">{b.title}</h1>

          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mt-2">
            <span className="inline-flex items-center gap-2">
              <LinkIcon className="h-4 w-4" />
              <a href={b.repo} className="break-all hover:underline">
                {b.repo}
              </a>
            </span>
            <span className="inline-flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <a href={`mailto:${b.email}`} className="hover:underline">
                {b.email}
              </a>
            </span>
          </div>

          {/* Description */}
          <Section title="Project Description" className="mt-6">
            <p className="text-sm leading-7 text-gray-800">
              {b.description[0]}{" "}
              <Link to="#" className="text-blue-600 underline">
                {b.repo}
              </Link>
              .
            </p>
            <p className="text-sm leading-7 text-gray-800 mt-4">
              {b.description[1]}
            </p>
          </Section>

          {/* Requirements */}
          <Section title="Project Requirements" className="mt-8">
            <ul className="list-disc pl-6 text-sm text-gray-800 space-y-1">
              {b.requirements.map((r, i) => (
                <li key={i}>{r}</li>
              ))}
            </ul>
          </Section>

          {/* Technical */}
          <Section title="Technical Details" className="mt-8">
            {b.technical.map((p, i) => (
              <p key={i} className="text-sm leading-7 text-gray-800 mt-4 first:mt-0">
                {p}
              </p>
            ))}
          </Section>

          {/* Languages & Skills */}
          <Section title="Languages & Skills" className="mt-8">
            <h4 className="text-sm font-medium text-gray-700 mb-2">Languages</h4>
            <Pills items={b.languages} />
            <h4 className="text-sm font-medium text-gray-700 mt-6 mb-2">
              Skills & Technologies
            </h4>
            <Pills items={b.skills} />
          </Section>

          {/* Share */}
          <div className="mt-8 flex items-center gap-3 text-sm">
            <span className="text-gray-700">Share this Bounty:</span>
            <button 
              onClick={() => showMessage.success("Shared on Facebook! 📤")}
              className="px-3 py-1.5 rounded bg-blue-50 text-blue-600 border hover:bg-blue-100 transition-colors"
            >
              Facebook
            </button>
            <button 
              onClick={() => showMessage.success("Shared on X! 📤")}
              className="px-3 py-1.5 rounded bg-slate-900 text-white border hover:bg-slate-800 transition-colors"
            >
              X
            </button>
            <button 
              onClick={() => showMessage.success("Shared on LinkedIn! 📤")}
              className="px-3 py-1.5 rounded bg-blue-50 text-blue-600 border hover:bg-blue-100 transition-colors"
            >
              Linkedin
            </button>
          </div>
        </div>

        {/* RIGHT */}
        <div className="space-y-6">
          {/* Overview */}
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-semibold mb-4">Bounty Overview</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <Row icon={<CalendarDays className="h-4 w-4" />} label="Job Posted" value={b.overview.posted} />
              <Row icon={<Clock3 className="h-4 w-4" />} label="Job Expire In" value={b.overview.expire} />
              <Row icon={<Boxes className="h-4 w-4" />} label="Category" value={b.overview.category} />
              <Row icon={<DollarSign className="h-4 w-4" />} label="Price" value={b.overview.salary} />
              <Row icon={<BadgeCheck className="h-4 w-4" />} label="Status" value={b.overview.status} />
              <Row icon={<Users className="h-4 w-4" />} label="Applicants" value={String(b.overview.applicants)} />
              <Row icon={<Globe className="h-4 w-4" />} label="Languages" value={b.overview.languages} />
            </div>
          </div>

          {/* Open Roles */}
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-semibold mb-4">Open Roles</h3>
            <div className="space-y-3">
              {b.roles.map((r, i) => (
                <div
                  key={i}
                  className="rounded-xl border hover:border-blue-400 transition p-4"
                >
                  <div className="font-semibold text-blue-700">{r.name}</div>
                  <div className="text-xs text-gray-500 mt-1">
                    • {r.tags.join(", ")}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div className="bg-white border rounded-xl p-5">
            <h3 className="font-semibold mb-4">Project Resources</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-lg border p-3">
                <Globe className="h-4 w-4 text-gray-500 mt-1" />
                <div className="text-sm">
                  <div className="text-gray-600">Link to Project</div>
                  <a
                    href={b.resources[0].value}
                    className="text-blue-600 break-all hover:underline"
                  >
                    {b.resources[0].value}
                  </a>
                </div>
              </div>

              <div className="flex items-center justify-between rounded-lg border p-3">
                <div className="flex items-center gap-3">
                  <FileText className="h-4 w-4 text-gray-500" />
                  <div className="text-sm">
                    <div className="text-gray-700">{b.resources[1].label}</div>
                    <div className="text-xs text-gray-500">{b.resources[1].ext}</div>
                  </div>
                </div>
                <button 
                  onClick={() => showMessage.success("Downloading document... 📥")}
                  className="inline-flex items-center gap-1 rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
                >
                  <DownloadCloud className="h-4 w-4" /> Download
                </button>
              </div>
            </div>
          </div>

          {/* Author */}
          <div className="bg-white border rounded-xl p-5">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={b.author.avatar}
                  alt=""
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{b.author.name}</div>
                  <div className="text-xs text-gray-500">{b.author.role}</div>
                </div>
              </div>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="rounded-md border bg-blue-600 text-white text-sm px-3 py-1.5 hover:bg-blue-700 transition-colors"
              >
                Message
              </button>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-sm">
              <Info label="Member Since" value={b.author.since} />
              <Info
                label="Bounties"
                value={
                  <>
                    {b.author.counts.total} total
                    <div className="text-[11px] text-gray-400">
                      Created: {b.author.counts.created} • Participated: {b.author.counts.participated}
                    </div>
                  </>
                }
              />
              <Info label="Email address" value={b.author.email} />
              <Info label="Website" value={b.author.website} />
              <Info
                label="Skills"
                value={
                  <div className="flex flex-wrap gap-2">
                    {b.author.skills.map((s) => (
                      <span
                        key={s}
                        className="text-[11px] px-2 py-1 rounded bg-gray-100 border"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                }
              />
            </div>

            <button 
              onClick={() => showMessage.info("Opening LinkedIn profile... 🔗")}
              className="mt-4 inline-flex items-center gap-2 text-sm rounded-md border px-2.5 py-1.5 hover:bg-gray-50 transition-colors"
            >
              {/* social placeholder */} in
            </button>
          </div>
        </div>
      </div>

      <footer className="text-xs text-gray-500 text-center py-6">
        © 2025 Bounty Board – All rights Reserved
      </footer>
      
      <SendEmailModal
        open={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        recipientName={b.author.name}
        recipientEmail={b.author.email}
      />
    </div>
  );
}

/* ---------- small helpers ---------- */

function Section({ title, className = "", children }) {
  return (
    <section className={className}>
      <h3 className="font-semibold">{title}</h3>
      <div className="mt-3">{children}</div>
    </section>
  );
}

function Pills({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="px-3 py-1.5 text-sm rounded border bg-gray-50"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function Row({ icon, label, value }) {
  return (
    <div className="flex items-start gap-2">
      <span className="mt-0.5 text-gray-500">{icon}</span>
      <div>
        <div className="text-[11px] uppercase tracking-wide text-gray-400">
          {label}
        </div>
        <div className="text-gray-800">{value}</div>
      </div>
    </div>
  );
}

function Info({ label, value }) {
  return (
    <div>
      <div className="text-[11px] uppercase tracking-wide text-gray-400">
        {label}
      </div>
      <div className="text-gray-800">{value}</div>
    </div>
  );
}

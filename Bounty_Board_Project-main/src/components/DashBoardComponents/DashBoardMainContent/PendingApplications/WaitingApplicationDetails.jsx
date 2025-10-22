/** @format */
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Link as LinkIcon,
  Mail,
  CalendarDays,
  Timer,
  Layers,
  DollarSign,
  Users,
  Globe,
  Download,
  MessageSquare,
} from "lucide-react";
import { showMessage } from "../../../../utils/toast";
import { useState } from "react";
import SendEmailModal from "components/LandingPage/ExploreBounties/SendEmailModal";

export default function WaitingApplicationDetails() {
  const navigate = useNavigate();
  const [showEmailModal, setShowEmailModal] = useState(false);

  return (
    <div className="w-full">
      {/* Top bar */}
      <div className="flex items-center gap-3 bg-gray-50 px-4 sm:px-8 py-3">
        <button
          onClick={() => navigate(-1)}
          className="grid h-7 w-7 place-items-center rounded-md text-gray-600 hover:bg-gray-200"
          aria-label="Back"
        >
          <ArrowLeft className="h-4 w-4" />
        </button>
        <h2 className="text-sm sm:text-base font-semibold">Bounty Details</h2>
      </div>

      <div className="mx-auto w-[92%] max-w-[1140px] py-6 grid gap-6 lg:grid-cols-[1fr,360px]">
        {/* LEFT */}
        <section className="space-y-6">
          {/* Cover image */}
          <div className="overflow-hidden rounded-xl border">
            <img
              src="https://placehold.co/1100x460"
              alt="cover"
              className="h-auto w-full object-cover"
            />
          </div>

          {/* Title + quick links */}
          <div>
            <h1 className="text-xl sm:text-2xl font-semibold">
              Convert Yolo World model to TFLite
            </h1>
            <div className="mt-2 flex flex-wrap items-center gap-5 text-sm text-gray-700">
              <a
                href="https://github.com/microsoft/onnxruntime"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <LinkIcon className="h-4 w-4" />
                https://github.com/microsoft/onnxruntime
              </a>
              <a
                href="mailto:susan@gmail.com"
                className="inline-flex items-center gap-2 hover:underline"
              >
                <Mail className="h-4 w-4" />
                susan@gmail.com
              </a>
            </div>
          </div>

          {/* Project Description */}
          <Block title="Project Description">
            <p className="text-sm leading-6 text-gray-700">
              We are currently working on integrating libonnxruntime into our
              Unreal Engine 5.4 project targeting iOS. You can find the ONNX
              Runtime library here:
              <br />
              <a
                className="text-blue-600 underline"
                href="https://github.com/microsoft/onnxruntime"
                target="_blank"
                rel="noreferrer"
              >
                https://github.com/microsoft/onnxruntime
              </a>
              .
              <br />
              The integration appears to work correctly when running development
              builds, however the app crashes immediately in distribution
              (shipping) builds…
            </p>
          </Block>

          {/* Project Requirements */}
          <Block title="Project Requirements">
            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-1">
              <li>Unreal Engine plugin development for iOS</li>
              <li>ONNX Runtime or native libraries integration</li>
              <li>iOS build pipelines and crash debugging</li>
            </ul>
          </Block>

          {/* Technical Details */}
          <Block title="Technical Details">
            <p className="text-sm leading-6 text-gray-700">
              This bounty involves integrating the libonnxruntime library into
              an Unreal Engine 5.4 project targeting iOS. While the integration
              works correctly in development builds, the project crashes when
              compiled as a distribution (shipping) build…
            </p>
          </Block>

          {/* Languages & Skills */}
          <Block title="Languages & Skills">
            <div className="space-y-4">
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-800">
                  Languages
                </div>
                <Chips
                  items={["Python", "C++", "Objective-C", "Swift"]}
                />
              </div>
              <div>
                <div className="mb-2 text-sm font-semibold text-gray-800">
                  Skills & Technologies
                </div>
                <Chips
                  items={[
                    "Crash Debugging",
                    "Xcode",
                    "Model Conversion",
                    "TFLite",
                    "Static Libraries",
                    "Ultralytics",
                    "ONNX Runtime",
                    "Swift",
                  ]}
                />
              </div>
            </div>
          </Block>

          {/* Share */}
          <div className="pt-2">
            <div className="text-sm text-gray-700 mb-2">Share this Bounty:</div>
            <div className="flex gap-2">
              <SocialBtn label="Facebook" />
              <SocialBtn label="X" />
              <SocialBtn label="LinkedIn" />
            </div>
          </div>
        </section>

        {/* RIGHT */}
        <aside className="space-y-6">
          {/* Status + Overview */}
          <div className="flex items-start justify-between">
            <span className="inline-flex items-center rounded-md bg-gray-100 px-3 py-1.5 text-xs font-semibold text-gray-700">
              Waiting To Complete Team
            </span>
          </div>

          <Card title="Bounty Overview">
            <OverviewRow
              icon={<CalendarDays className="h-4 w-4" />}
              label="JOB POSTED:"
              value="14 June, 2025"
            />
            <OverviewRow
              icon={<Timer className="h-4 w-4" />}
              label="JOB EXPIRE IN:"
              value="14 July, 2025"
            />
            <OverviewRow
              icon={<Layers className="h-4 w-4" />}
              label="CATEGORY:"
              value="Back-end"
            />
            <OverviewRow
              icon={<DollarSign className="h-4 w-4" />}
              label="SALERY:"
              value="$50k-80k"
            />
            <OverviewRow
              icon={<Timer className="h-4 w-4" />}
              label="STATUS:"
              value="Active"
            />
            <OverviewRow
              icon={<Users className="h-4 w-4" />}
              label="APPLICANTS:"
              value="120"
            />
            <OverviewRow
              icon={<Layers className="h-4 w-4" />}
              label="LANGUAGES:"
              value="JavaScript"
            />
          </Card>

          {/* Open Roles */}
          <Card title="Open Roles">
            <RolePill
              title="Frontend Developer"
              chips={["React", "TailwindCSS", "TypeScript"]}
            />
            <RolePill
              title="Backend Developer"
              chips={["Node.js", "Express.js", "MongoDB"]}
            />
          </Card>

          {/* Project Resources */}
          <Card title="Project Resources">
            <div className="space-y-3">
              <div>
                <div className="text-xs text-gray-500 mb-1 inline-flex items-center gap-2">
                  <Globe className="h-4 w-4" />
                  Link to Project
                </div>
                <a
                  className="block truncate rounded-md border px-3 py-2 text-sm hover:bg-gray-50"
                  href="https://github.com/microsoft/onnxruntime"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://github.com/microsoft/onnxruntime
                </a>
              </div>

              <div className="flex items-center justify-between rounded-md border px-3 py-2">
                <div className="min-w-0">
                  <div className="text-sm font-medium">YOLO World Official Docs</div>
                  <div className="text-[11px] text-gray-500">PDF</div>
                </div>
                <button 
                  onClick={() => showMessage.success("Downloading YOLO World Official Docs... 📥")}
                  className="inline-flex items-center gap-1 rounded-md border px-2.5 py-1.5 text-xs hover:bg-gray-50"
                >
                  <Download className="h-4 w-4" /> Download
                </button>
              </div>
            </div>
          </Card>

          {/* Author */}
          <Card>
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=5"
                  className="h-12 w-12 rounded-full object-cover"
                  alt="author"
                />
                <div>
                  <div className="font-semibold">Susan Jeans</div>
                  <div className="text-xs text-gray-500">
                    Website Designer (UI/UX)
                  </div>
                </div>
              </div>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700"
              >
                <MessageSquare className="h-4 w-4" />
                Message
              </button>
            </div>

            <div className="mt-4 space-y-2 text-sm">
              <Row label="Member Since:" value="March 2024" />
              <Row label="Bounties:" value="14 total" />
              <Row label="Email address:" value="susan@gmail.com" />
              <Row label="Website:" value="https://susan.com" />
              <div className="flex items-start gap-2">
                <div className="w-28 shrink-0 text-gray-500">Skills:</div>
                <div className="flex flex-wrap gap-2">
                  <MiniChip>UI Designer</MiniChip>
                  <MiniChip>UX Designer</MiniChip>
                </div>
              </div>
            </div>
          </Card>
        </aside>
      </div>
      
      <SendEmailModal
        open={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        recipientName="Susan Jeans"
        recipientEmail="susan@gmail.com"
      />
    </div>
  );
}

/* --------------- helpers / small components --------------- */
function Block({ title, children }) {
  return (
    <div>
      <h3 className="mb-2 text-base font-semibold">{title}</h3>
      {children}
    </div>
  );
}

function Chips({ items = [] }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded bg-gray-100 px-3 py-1 text-sm text-gray-700"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function SocialBtn({ label }) {
  return (
    <button 
      onClick={() => showMessage.info(`Opening ${label} profile... 🔗`)}
      className="rounded-md border px-3 py-1.5 text-sm hover:bg-gray-50"
    >
      {label}
    </button>
  );
}

function Card({ title, children }) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      {title && (
        <div className="mb-3 text-sm font-semibold text-gray-800">{title}</div>
      )}
      {children}
    </div>
  );
}

function OverviewRow({ icon, label, value }) {
  return (
    <div className="mb-2 flex items-center gap-3">
      <div className="grid h-8 w-8 place-items-center rounded-md bg-gray-100 text-gray-700">
        {icon}
      </div>
      <div className="text-xs">
        <div className="text-gray-500">{label}</div>
        <div className="font-medium text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function RolePill({ title, chips = [] }) {
  return (
    <div className="mb-3 rounded-lg border px-4 py-3">
      <div className="text-sm font-semibold text-blue-600">{title}</div>
      {chips.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-1.5 text-[11px] text-gray-600">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded bg-gray-100 px-2 py-0.5 leading-5"
            >
              {c}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex text-sm">
      <div className="w-28 shrink-0 text-gray-500">{label}</div>
      <div className="text-gray-800">{value}</div>
    </div>
  );
}

function MiniChip({ children }) {
  return (
    <span className="rounded bg-gray-100 px-2 py-0.5 text-xs text-gray-700">
      {children}
    </span>
  );
}

/** @format */
import React, { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  CalendarDays,
  Clock,
  Layers,
  CircleDollarSign,
  CheckCircle,
  Blocks,
  ExternalLink,
  Download,
  Globe,
  ChevronRight,
  Pencil,
  Trash2,
  ArrowLeft,
  Users,
  FileText,
  Code,
} from "lucide-react";
import EditBountyModal from "./modals/EditBountyModal";
import DeleteConfirmModal from "./modals/DeleteConfirmModal";
import { showMessage } from "../../../../utils/toast";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

/* ---------------- Mock data (بدّليها ب API لاحقاً) ---------------- */
const DB = {
  1: {
    id: 1,
    title: "Bounty Name",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=1200&auto=format&fit=crop",
    posted: "2025-06-14",
    expire: "2025-07-14",
    category: "Development",
    salary: "50k",
    status: "Under Review",
    milestones: 5,
    description:
      "We are currently working on integrating libonnxruntime into our Unreal Engine 5.4 project targeting iOS. You can find the ONNX Runtime library here:",
    link: "https://github.com/microsoft/onnxruntime",
    details:
      "The integration appears to work correctly when running development builds, and the plugin loads and functions as expected. However, we are encountering a critical issue: the app crashes immediately in distribution (shipping) builds...",
    technical:
      "This bounty involves integrating the libonnxruntime library into an Unreal Engine 5.4 project targeting iOS...",
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
    resources: [
      { id: 1, type: "link", label: "Link to Project", url: "https://github.com/microsoft/onnxruntime" },
      { id: 2, type: "pdf", label: "YOLO World Official Docs", ext: "PDF" },
    ],
    roles: [
      { name: "Frontend Developer", stack: ["React", "TailwindCSS", "TypeScript"] },
      { name: "Backend Developer", stack: ["Node.js", "Express.js", "MongoDB"] },
    ],
  },
};

export default function PendingBountyDetails() {
  const { id } = useParams();
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const data = useMemo(() => DB[id] ?? DB[1], [id]);

  return (
    <section className="w-full space-y-6">
      {/* breadcrumb */}
      <CreativeCard className="p-4">
        <div className="flex items-center gap-2">
          <Link 
            to="/dashboard/pending-bounties" 
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Pending Bounties
          </Link>
          <ChevronRight className="h-4 w-4 text-gray-400" />
          <span className="text-gray-700 font-medium">{data.title}</span>
        </div>
      </CreativeCard>

      {/* header card */}
      <CreativeCard className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <h2 className="text-2xl font-bold text-gradient mb-2">{data.title}</h2>
            <CreativeBadge variant="warning" className="text-sm">
              <Clock className="w-3 h-3 mr-1" />
              {data.status}
            </CreativeBadge>
          </div>

          <div className="flex items-center gap-3">
            <CreativeButton
              variant="primary"
              size="sm"
              onClick={() => setOpenEdit(true)}
              className="flex items-center gap-2"
            >
              <Pencil className="h-4 w-4" />
              Edit
            </CreativeButton>
            <CreativeButton
              variant="error"
              size="sm"
              onClick={() => setOpenDelete(true)}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete
            </CreativeButton>
          </div>
        </div>

        {/* summary row */}
        <div className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Image */}
            <div className="lg:col-span-1">
              <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 group">
                <img
                  src={data.image}
                  alt={data.title}
                  className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Info Grid */}
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoPill icon={<CalendarDays />} label="Bounty Posted:" value={formatDate(data.posted)} />
                <InfoPill icon={<Clock />} label="Bounty Expire In:" value={formatDate(data.expire)} />
                <InfoPill icon={<Layers />} label="Category" value={data.category} />
                <InfoPill icon={<CircleDollarSign />} label="Price:" value={data.salary} />
                <InfoPill icon={<Blocks />} label="Milestones" value={data.milestones} />
                <InfoPill icon={<CheckCircle />} label="Status:" value={data.status} />
              </div>
            </div>
          </div>
        </div>

      </CreativeCard>

      {/* Project Description */}
      <CreativeCard className="p-6">
        <Section title="Project Description">
          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              {data.description}{" "}
              <a
                href={data.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 inline-flex items-center gap-1 hover:text-blue-700 transition-colors"
              >
                <ExternalLink className="h-4 w-4" /> {data.link}
              </a>
            </p>
            <p className="text-gray-700 leading-relaxed">{data.details}</p>
          </div>
        </Section>
      </CreativeCard>

      {/* Technical Details */}
      <CreativeCard className="p-6">
        <Section title="Technical Details">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200">
            <div className="flex items-start gap-3">
              <div className="bg-blue-100 rounded-lg p-2">
                <Code className="h-5 w-5 text-blue-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">{data.technical}</p>
            </div>
          </div>
        </Section>
      </CreativeCard>

      {/* Languages & Skills */}
      <CreativeCard className="p-6">
        <Section title="Languages & Skills">
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <div className="bg-green-100 rounded-lg p-2">
                  <Code className="h-4 w-4 text-green-600" />
                </div>
                Programming Languages
              </h4>
              <div className="flex flex-wrap gap-3">
                {data.languages.map((t, i) => (
                  <Tag key={i} label={t} />
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <div className="bg-purple-100 rounded-lg p-2">
                  <Users className="h-4 w-4 text-purple-600" />
                </div>
                Skills & Technologies
              </h4>
              <div className="flex flex-wrap gap-3">
                {data.skills.map((t, i) => (
                  <Tag key={i} label={t} />
                ))}
              </div>
            </div>
          </div>
        </Section>
      </CreativeCard>

      {/* Project Resources + Open Roles */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CreativeCard className="p-6 lg:col-span-2">
          <Section title="Project Resources">
            <div className="space-y-4">
              {data.resources.map((r) =>
                r.type === "link" ? (
                  <div
                    key={r.id}
                    className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 border border-blue-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-blue-100 rounded-lg p-2">
                        <Globe className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900">Link to Project</div>
                        <a
                          href={r.url}
                          target="_blank"
                          rel="noreferrer"
                          className="text-blue-600 break-all hover:text-blue-700 transition-colors"
                        >
                          {r.url}
                        </a>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    key={r.id}
                    className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 border border-green-200"
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-green-100 rounded-lg p-2">
                        <FileText className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{r.label}</div>
                        <div className="text-sm text-gray-500">{r.ext}</div>
                      </div>
                    </div>
                    <CreativeButton
                      variant="outline"
                      size="sm"
                      onClick={() => showMessage.success("File downloaded successfully! 📥")}
                      className="flex items-center gap-2"
                    >
                      <Download className="h-4 w-4" />
                      Download
                    </CreativeButton>
                  </div>
                )
              )}
            </div>
          </Section>
        </CreativeCard>

        <CreativeCard className="p-6">
          <Section title="Open Roles">
            <div className="space-y-4">
              {data.roles.map((r, i) => (
                <div key={i} className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 border border-purple-200">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-purple-100 rounded-lg p-2">
                      <Users className="h-4 w-4 text-purple-600" />
                    </div>
                    <div className="font-semibold text-gray-900">{r.name}</div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {r.stack.map((tech, idx) => (
                      <span key={idx} className="inline-block bg-white rounded-md px-3 py-1 text-xs text-gray-700 border border-purple-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Section>
        </CreativeCard>
      </div>

      {/* Modals */}
      {openEdit && <EditBountyModal data={data} onClose={() => setOpenEdit(false)} />}
      {openDelete && (
        <DeleteConfirmModal
          title="Delete Bounty"
          message="Are you sure you want to delete this bounty?"
          onCancel={() => setOpenDelete(false)}
          onConfirm={() => {
            setOpenDelete(false);
            showMessage.success("Bounty deleted successfully!");
          }}
        />
      )}
    </section>
  );
}

/* ---------------------- عناصر مساعدة داخلية ---------------------- */

function InfoPill({ icon, label, value }) {
  const Icon = () => React.cloneElement(icon, { className: "h-5 w-5" });
  return (
    <div className="flex items-center gap-3 p-3 bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
      <div className="bg-blue-100 rounded-lg p-2">
        <Icon />
      </div>
      <div>
        <div className="text-xs uppercase tracking-wide text-gray-500 font-medium">{label}</div>
        <div className="text-sm font-semibold text-gray-900">{value}</div>
      </div>
    </div>
  );
}

function Section({ title, children, className = "" }) {
  return (
    <div className={`${className}`}>
      <h3 className="text-xl font-bold text-gradient mb-4 flex items-center gap-2">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
          <FileText className="h-5 w-5 text-white" />
        </div>
        {title}
      </h3>
      {children}
    </div>
  );
}

function Tag({ label }) {
  return (
    <span className="inline-block rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 px-4 py-2 text-sm font-medium text-gray-800 border border-blue-200 hover:border-blue-300 transition-colors shadow-sm">
      {label}
    </span>
  );
}

const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

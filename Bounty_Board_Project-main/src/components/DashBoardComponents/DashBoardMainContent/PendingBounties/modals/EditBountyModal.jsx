/** @format */
import React, { useState, useRef, useEffect } from "react";
import {
  X, Upload, ChevronDown, MoreHorizontal, Trash2, Globe, Plus, FileText,
  Edit3, Save, ArrowRight, Image as ImageIcon, Calendar, DollarSign, Code,
  Users, FileText as FileIcon, Link as LinkIcon, Type, Settings
} from "lucide-react";
import EditMilestonesModal from "./EditMilestonesModal";
import { showMessage } from "../../../../../utils/toast";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../../shared/Badge/CreativeBadge";

/* click outside */
function useOutside(ref, cb) {
  useEffect(() => {
    const h = (e) => { if (ref.current && !ref.current.contains(e.target)) cb?.(); };
    document.addEventListener("mousedown", h);
    return () => document.removeEventListener("mousedown", h);
  }, [ref, cb]);
}

export default function EditBountyModal({ onClose }) {
  const [docs, setDocs] = useState([
    { id: 1, name: "Project docs 1", size: "3.5 MB" },
    { id: 2, name: "Project docs 2", size: "4.7 MB" },
    { id: 3, name: "Project docs 3", size: "1.3 MB" },
  ]);
  const [menu, setMenu] = useState(null);

  // فتح/إغلاق شاشة الـ Milestones
  const [showMilestones, setShowMilestones] = useState(false);

  const del = (id) => {
    setDocs((d) => d.filter((x) => x.id !== id));
    setMenu(null);
  };

  // عندما نقرر الانتقال، نستبدل هذا المودال بمودال الميلاستونز
  if (showMilestones) {
    return (
      <EditMilestonesModal
        onClose={onClose}
        onBack={() => setShowMilestones(false)}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-[100]">
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      {/* modal */}
      <div className="relative h-full w-full grid place-items-center p-4">
        <div className="w-full max-w-[900px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-blue-50 to-purple-50 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-2">
                <Edit3 className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gradient">Edit Bounty</h3>
            </div>
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* body */}
          <div className="max-h-[85vh] overflow-y-auto px-6 py-5 space-y-7">
            {/* row 1: picture + top fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* picture dashed */}
              <div className="border-2 border-dashed border-blue-300 rounded-xl h-[140px] grid place-items-center text-gray-500 bg-gradient-to-br from-blue-50 to-purple-50 hover:border-blue-400 transition-colors cursor-pointer group">
                <div className="flex flex-col items-center gap-3">
                  <div className="h-12 w-12 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 grid place-items-center group-hover:from-blue-200 group-hover:to-purple-200 transition-colors">
                    <ImageIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-700">Browse photo or drop here</div>
                    <div className="text-xs text-gray-500 mt-1">
                      A photo larger than 400 pixels works best. Max photo size 5 MB.
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <Field label="Project Title">
                  <input className="bb-input h-9" defaultValue="Develop a lightweight analytics dashboard for mobile apps" />
                </Field>

                <div className="grid grid-cols-2 gap-4">
                  <Field label="Expiration Date">
                    <input type="date" className="bb-input h-9" defaultValue="2025-07-30" />
                  </Field>
                  <Field label="Category">
                    <div className="relative">
                      {/* appearance:none لإخفاء سهم المتصفح الافتراضي */}
                      <select className="bb-input bb-select h-9 pr-8">
                        <option>Development</option>
                        <option>Design</option>
                        <option>Data</option>
                      </select>
                      <ChevronDown className="h-4 w-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                    </div>
                  </Field>
                </div>
              </div>
            </div>

            {/* row 2: price + languages */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Field label="Price">
                <div className="grid grid-cols-[1fr,72px] gap-2">
                  <input className="bb-input h-9" defaultValue="9000" />
                  <input className="bb-input h-9 text-center" defaultValue="USD" readOnly />
                </div>
              </Field>
              <Field label="Languages">
                <input className="bb-input h-9" defaultValue="HTML,C++,JAVA" />
              </Field>
            </div>

            {/* Roles & Technologies */}
            <div>
              <Label title="Roles & Technologies" />
              <div className="flex items-center gap-2">
                <div className="relative w-36">
                  <select className="bb-input bb-select h-9 pr-8">
                    <option>Back-end</option>
                    <option>Front-end</option>
                    <option>Full-stack</option>
                  </select>
                  <ChevronDown className="h-4 w-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
                </div>
                <input className="bb-input h-9 flex-1" defaultValue="React, TailwindCSS, Firebase" />
                <button type="button" className="h-9 w-9 rounded-lg border grid place-items-center hover:bg-gray-50">
                  <Plus className="h-4 w-4" />
                </button>
              </div>
              <button
                type="button"
                className="mt-2 w-full h-9 rounded-md bg-gray-50 border text-xs text-gray-600 hover:bg-gray-100 flex items-center justify-center gap-2"
              >
                <Plus className="h-3.5 w-3.5" /> Add New Role
              </button>
            </div>

            {/* Project Resources */}
            <div>
              <Label title="Project Resources" />
              <div className="text-[12px] text-gray-600 mb-1">Project docs</div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {docs.map((d) => (
                  <DocCard
                    key={d.id}
                    doc={d}
                    open={menu === d.id}
                    onOpen={() => setMenu(d.id)}
                    onClose={() => setMenu(null)}
                    onDelete={() => del(d.id)}
                  />
                ))}

                {/* add tile */}
                <div className="border border-dashed rounded-xl p-4 text-gray-500">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gray-100 grid place-items-center">
                      <Plus className="h-4 w-4" />
                    </div>
                    <div className="text-xs">
                      <div className="font-medium text-gray-700">Add Project docs</div>
                      <div className="text-[11px] text-gray-400">Browse file or drop here.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* link */}
              <div className="mt-4">
                <div className="text-[12px] text-gray-600 mb-1">Link to Project</div>
                <div className="relative">
                  <Globe className="h-4 w-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    className="bb-input h-9 pl-9"
                    type="url"
                    inputMode="url"
                    autoComplete="url"
                    spellCheck={false}
                    placeholder="Project link/url..."
                    defaultValue=""
                  />
                </div>
              </div>
            </div>

            {/* Description & Requirements */}
            <div>
              <Label title="Description & Requirements" />
              <Rich label="Description" />
              <Rich label="Requirements" />
              <Rich label="Technical Details" />
            </div>

            {/* footer actions */}
            <div className="flex items-center justify-end gap-3 pt-6 border-t border-gray-200">
              <CreativeButton
                variant="outline"
                size="md"
                onClick={() => {
                  showMessage.success("Bounty saved successfully! ✅");
                  onClose();
                }}
                className="flex items-center gap-2"
              >
                <Save className="h-4 w-4" />
                Save
              </CreativeButton>
              <CreativeButton
                variant="primary"
                size="md"
                onClick={() => {
                  showMessage.info("Moving to milestones configuration... ⚙️");
                  setShowMilestones(true);
                }}
                className="flex items-center gap-2"
              >
                Next
                <ArrowRight className="h-4 w-4" />
              </CreativeButton>
            </div>
          </div>
        </div>
      </div>

      {/* base css */}
      <style>{`
        .bb-input{
          width:100%;
          border:1px solid #E5E7EB;
          border-radius:8px;
          padding:0 10px;
          font-size:13px;
          outline:none;
          background:white;
        }
        .bb-input:focus{ box-shadow:0 0 0 3px rgba(59,130,246,.18); border-color:#D1D5DB; }

        /* إخفاء سهم المتصفح وإبقاء أيقونة ChevronDown فقط */
        .bb-select{
          appearance:none;
          -webkit-appearance:none;
          -moz-appearance:none;
          background-image:none;
        }
        .bb-select::-ms-expand{ display:none; } /* IE/Edge القديم */
      `}</style>
    </div>
  );
}

/* ---- subs ---- */
function Label({ title }) {
  return <div className="text-[15px] font-semibold mb-2">{title}</div>;
}

function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-[12px] text-gray-600 mb-1">{label}</div>
      {children}
    </label>
  );
}

function Rich({ label }) {
  return (
    <div className="mb-4">
      <div className="text-[12px] text-gray-600 mb-1">{label}</div>
      <div className="flex items-center gap-3 border rounded-t-lg px-3 py-1.5 text-gray-500 text-[12px]">
        <span className="font-semibold">B</span>
        <span className="italic">I</span>
        <span className="underline">U</span>
        <span className="line-through">S</span>
        <span className="text-gray-300 select-none">|</span>
        <span>🔗</span>
        <span className="text-gray-300 select-none">|</span>
        <span>•</span>
        <span>1.</span>
      </div>
      <textarea
        className="w-full border rounded-b-lg p-3 text-[13px] min-h-[110px]"
        defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    </div>
  );
}

function DocCard({ doc, open, onOpen, onClose, onDelete }) {
  const ref = useRef(null);
  useOutside(ref, () => open && onClose?.());

  return (
    <div className="border border-gray-200 rounded-xl p-4 relative bg-gradient-to-r from-gray-50 to-gray-100 hover:from-blue-50 hover:to-purple-50 transition-all duration-300 hover:border-blue-300">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 grid place-items-center">
            <FileIcon className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-800">{doc.name}</div>
            <div className="text-xs text-gray-500">{doc.size}</div>
          </div>
        </div>

        <div className="relative z-20" ref={ref}>
          <button
            onClick={() => (open ? onClose() : onOpen())}
            className="h-8 w-8 grid place-items-center rounded-lg hover:bg-gray-200 transition-colors"
          >
            <MoreHorizontal className="h-4 w-4 text-gray-600" />
          </button>

          {open && (
            <div className="absolute right-0 mt-2 w-[140px] bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-30">
              <button
                className="w-full flex items-center gap-2 px-4 py-2 text-sm text-rose-600 hover:bg-rose-50 transition-colors"
                onClick={() => {
                  showMessage.success("File deleted successfully! 🗑️");
                  onDelete();
                }}
              >
                <Trash2 className="h-4 w-4" />
                Delete
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/** @format */
import React, { useState } from "react";
import { ChevronDown, Plus, MoreHorizontal } from "lucide-react";

const DURATIONS = ["3 days", "5 days", "1 week", "2 weeks", "1 month"];
const ROLES = ["Back-end", "Front-end", "Full-stack", "Mobile", "Data"];

export default function EditMilestones({ onBack, onSave, onNext }) {
  const [items, setItems] = useState([
    {
      id: crypto.randomUUID(),
      title: "Integrate AI Chatbot with React App",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      duration: "5 days",
      role: "Back-end",
    },
  ]);

  const addMilestone = () =>
    setItems((xs) => [
      ...xs,
      {
        id: crypto.randomUUID(),
        title: "",
        description: "",
        duration: "5 days",
        role: "Back-end",
      },
    ]);

  const update = (id, key, val) =>
    setItems((xs) => xs.map((x) => (x.id === id ? { ...x, [key]: val } : x)));

  return (
    <div className="px-6 lg:px-10 py-6">
      <h1 className="text-[28px] font-semibold mb-6">Edit Milestones</h1>

      <div className="space-y-5">
        {items.map((m, i) => (
          <section
            key={m.id}
            className="bg-[#F7F8FA] rounded-xl border border-gray-200"
          >
            <div className="p-4 sm:p-6">
              {/* header actions (النقاط الثلاث شكل فقط) */}
              <div className="flex items-start justify-between mb-3">
                <span className="sr-only">Milestone #{i + 1}</span>
                <button
                  type="button"
                  className="ml-auto h-8 w-8 grid place-items-center text-gray-400 hover:text-gray-600"
                  title="More"
                >
                  <MoreHorizontal className="h-5 w-5" />
                </button>
              </div>

              {/* Title */}
              <Field label="Milestone Title">
                <input
                  className="bb-input h-11"
                  placeholder="Integrate AI Chatbot with React App"
                  value={m.title}
                  onChange={(e) => update(m.id, "title", e.target.value)}
                />
              </Field>

              {/* Grid: Description | Duration | Role */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
                <div className="lg:col-span-7">
                  <Field label="Description">
                    {/* toolbar (شكلي) */}
                    <div className="flex items-center gap-3 border border-b-0 rounded-t-lg px-3 py-2 text-gray-500 text-[13px] bg-white">
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
                      className="w-full border rounded-b-lg p-3 text-[14px] min-h-[140px] bg-white"
                      placeholder="Write milestone description…"
                      value={m.description}
                      onChange={(e) =>
                        update(m.id, "description", e.target.value)
                      }
                    />
                  </Field>
                </div>

                <div className="lg:col-span-5 flex flex-col gap-5">
                  <Field label="Suggested Duration">
                    <Select
                      value={m.duration}
                      onChange={(v) => update(m.id, "duration", v)}
                      options={DURATIONS}
                    />
                  </Field>

                  <Field label="Assigned Role">
                    <Select
                      value={m.role}
                      onChange={(v) => update(m.id, "role", v)}
                      options={ROLES}
                    />
                  </Field>
                </div>
              </div>
            </div>
          </section>
        ))}
      </div>

      {/* Add Milestone */}
      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={addMilestone}
          className="inline-flex items-center gap-2 border rounded-lg px-4 h-10 text-[14px] bg-white hover:bg-gray-50"
        >
          <Plus className="h-4 w-4" />
          + Add Milestone
        </button>
      </div>

      {/* Footer actions */}
      <div className="flex flex-wrap gap-3 mt-8">
        <button
          onClick={onBack}
          type="button"
          className="inline-flex items-center gap-3 px-5 h-11 rounded-lg bg-[#0A5BD8] text-white hover:bg-[#094fc0]"
        >
          ← Back
        </button>

        <button
          onClick={() => onSave?.(items)}
          type="button"
          className="inline-flex items-center gap-3 px-5 h-11 rounded-lg bg-emerald-600 text-white hover:bg-emerald-700"
        >
          Save
        </button>

        <button
          onClick={() => onNext?.(items)}
          type="button"
          className="inline-flex items-center gap-3 px-5 h-11 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
        >
          Next →
        </button>
      </div>

      {/* نفس ستايل الإدخال المستخدم سابقًا */}
      <style>{`
        .bb-input{
          width:100%;
          border:1px solid #E5E7EB;
          border-radius:10px;
          padding:0 12px;
          font-size:14px;
          background:#fff;
          outline:none;
        }
        .bb-input:focus{
          box-shadow:0 0 0 3px rgba(59,130,246,.18);
          border-color:#D1D5DB;
        }
      `}</style>
    </div>
  );
}

/* ---- small building blocks ---- */
function Field({ label, children }) {
  return (
    <label className="block mb-4">
      <div className="text-[14px] text-gray-700 mb-2">{label}</div>
      {children}
    </label>
  );
}

function Select({ value, onChange, options }) {
  return (
    <div className="relative">
      <select
        className="bb-input h-11 pr-9 appearance-none"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
      >
        {options.map((op) => (
          <option key={op} value={op}>
            {op}
          </option>
        ))}
      </select>
      <ChevronDown className="h-4 w-4 text-gray-500 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
    </div>
  );
}

/** @format */
import React, { useState } from "react";
import { X, ChevronDown, Plus, ArrowLeft, Save, Target, Clock, User, FileText, Edit3 } from "lucide-react";
import { showMessage } from "../../../../../utils/toast";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../../shared/Badge/CreativeBadge";

const emptyItem = () => ({
  id: crypto.randomUUID(),
  title: "Integrate AI Chatbot with React App",
  desc:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  duration: "5 days",
  role: "Back-end",
});

export default function EditMilestonesModal({ onClose, onBack }) {
  const [items, setItems] = useState([emptyItem(), emptyItem(), emptyItem()]);

  const addItem = () => setItems((p) => [...p, emptyItem()]);

  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative h-full w-full grid place-items-center p-4">
        <div className="w-full max-w-[980px] bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
          {/* header */}
          <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-purple-50 to-blue-50 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-2">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gradient">Edit Milestones</h3>
            </div>
            <button
              onClick={onClose}
              className="h-9 w-9 rounded-full grid place-items-center hover:bg-gray-200 transition-colors"
              aria-label="Close"
            >
              <X className="h-5 w-5 text-gray-600" />
            </button>
          </div>

          {/* content */}
          <div className="max-h-[80vh] overflow-y-auto p-6 space-y-6">
            {items.map((m, index) => (
              <section
                key={m.id}
                className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl border border-gray-200 p-6 space-y-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Milestone Header */}
                <div className="flex items-center gap-3 pb-4 border-b border-gray-200">
                  <div className="bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg p-2">
                    <Edit3 className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900">Milestone {index + 1}</h4>
                    <p className="text-sm text-gray-600">Configure milestone details</p>
                  </div>
                </div>

                <Field label="Milestone Title">
                  <input className="milestone-input h-11" defaultValue={m.title} />
                </Field>

                <div className="grid grid-cols-1 lg:grid-cols-[1fr,320px] gap-6">
                  {/* Description */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <div className="bg-blue-100 rounded-lg p-1.5">
                        <FileText className="h-4 w-4 text-blue-600" />
                      </div>
                      <Label small>Description</Label>
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl border border-blue-200 overflow-hidden">
                      <Toolbar />
                      <textarea
                        className="w-full border-0 p-4 text-[14px] min-h-[120px] bg-white resize-none focus:outline-none"
                        defaultValue={m.desc}
                      />
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="space-y-4">
                    <Field label="Suggested Duration">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200 p-1">
                          <select className="milestone-input h-10 pr-8 bg-transparent border-0">
                            <option>5 days</option>
                            <option>10 days</option>
                            <option>2 weeks</option>
                          </select>
                          <Clock className="h-4 w-4 text-green-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </Field>

                    <Field label="Assigned Role">
                      <div className="relative">
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-1">
                          <select className="milestone-input h-10 pr-8 bg-transparent border-0">
                            <option>Back-end</option>
                            <option>Front-end</option>
                            <option>Full-stack</option>
                          </select>
                          <User className="h-4 w-4 text-purple-600 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                        </div>
                      </div>
                    </Field>
                  </div>
                </div>
              </section>
            ))}

            <div className="flex justify-end">
              <CreativeButton
                variant="outline"
                size="md"
                onClick={() => {
                  addItem();
                  showMessage.success("New milestone added! ✅");
                }}
                className="flex items-center gap-2"
              >
                <Plus className="h-4 w-4" />
                Add Milestone
              </CreativeButton>
            </div>
          </div>

          {/* footer */}
          <div className="flex items-center justify-between gap-3 px-6 py-4 border-t border-gray-200 bg-gradient-to-r from-gray-50 to-gray-100">
            <CreativeButton
              variant="outline"
              size="md"
              onClick={() => {
                showMessage.info("Going back to edit bounty details... ↩️");
                onBack();
              }}
              className="flex items-center gap-2"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </CreativeButton>

            <CreativeButton
              variant="primary"
              size="md"
              onClick={() => {
                showMessage.success("Milestones saved successfully! ✅");
                onClose();
              }}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Save
            </CreativeButton>
          </div>
        </div>
      </div>

      {/* inputs style (لتطابق الديزاين) */}
      <style>{`
        .milestone-input{
          width:100%;
          border:1px solid transparent;
          border-radius:10px;
          padding:0 12px;
          font-size:14px;
          outline:none;
          background:transparent;
          color: #374151;
          font-weight: 500;
        }
        .milestone-input:focus{ 
          box-shadow:0 0 0 3px rgba(59,130,246,.18); 
          border-color:#3B82F6; 
          background: white;
        }
        .milestone-input::placeholder {
          color: #9CA3AF;
          font-weight: 400;
        }
      `}</style>
    </div>
  );
}

/* small subs */
function Field({ label, children }) {
  return (
    <label className="block">
      <div className="text-[13px] text-gray-600 mb-1">{label}</div>
      {children}
    </label>
  );
}
function Label({ children, small }) {
  return (
    <div className={`${small ? "text-[13px]" : "text-[15px]"} text-gray-600 mb-1`}>
      {children}
    </div>
  );
}
function Toolbar() {
  return (
    <div className="flex items-center gap-3 border-b border-blue-200 px-4 py-3 text-gray-600 text-sm bg-gradient-to-r from-blue-50 to-purple-50">
      <button className="font-bold hover:text-blue-600 transition-colors">B</button>
      <button className="italic hover:text-blue-600 transition-colors">I</button>
      <button className="underline hover:text-blue-600 transition-colors">U</button>
      <button className="line-through hover:text-blue-600 transition-colors">S</button>
      <span className="text-gray-300 select-none">|</span>
      <button className="hover:text-blue-600 transition-colors">🔗</button>
      <span className="text-gray-300 select-none">|</span>
      <button className="hover:text-blue-600 transition-colors">•</button>
      <button className="hover:text-blue-600 transition-colors">1.</button>
    </div>
  );
}

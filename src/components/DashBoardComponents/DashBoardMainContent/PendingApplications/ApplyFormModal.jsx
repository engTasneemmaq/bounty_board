/** @format */
import { X } from "lucide-react";

export default function ApplyFormModal({ open, onClose, onSubmit, bountyTitle }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[90]">
      <div className="absolute inset-0 bg-black/35" onClick={onClose} />
      <div className="absolute left-1/2 top-24 -translate-x-1/2 w-[820px] max-w-[95vw] rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between p-4">
          <div className="font-semibold">Apply Bounty: {bountyTitle}</div>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center">
            <X size={16} className="text-[#2A64D6]" />
          </button>
        </div>

        <div className="px-5 pb-5 space-y-4">
          <label className="text-[13px] text-gray-600 block">Choose a Role</label>
          <select className="w-full h-10 border rounded-md px-3">
            <option value="">Select…</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>ML Engineer</option>
          </select>

          <label className="text-[13px] text-gray-600 block mt-4">Notes (optional)</label>
          <textarea className="w-full min-h-[120px] border rounded-md p-3" placeholder="Notes…" />

          <div className="flex items-center justify-between mt-4">
            <button onClick={onClose} className="px-4 h-9 rounded-md border text-sm">Cancel</button>
            <button
              onClick={onSubmit}
              className="px-5 h-9 rounded-md bg-[#1667D9] text-white text-sm font-semibold flex items-center gap-2"
            >
              Apply Now <span>→</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

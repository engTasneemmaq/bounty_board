/** @format */
import { X } from "lucide-react";

export default function ApplicationSubmittedModal({ open, onClose, onBackDashboard }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-[100]">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] max-w-[96vw] rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between p-4">
          <div className="font-semibold">Application Submitted</div>
          <button onClick={onClose} className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center">
            <X size={16} className="text-[#2A64D6]" />
          </button>
        </div>

        <div className="px-5 pb-5">
          <div className="rounded-xl border p-5 bg-[#F8FBFF]">
            <div className="text-sm text-gray-700">
              Your application has been submitted. You can track the status of your applications from the
              <button
                onClick={onBackDashboard}
                className="ml-1 text-[#2A64D6] underline"
              >
                My Applications
              </button>
              page.
            </div>
            <div className="mt-4">
              <button onClick={onBackDashboard} className="px-4 h-9 rounded-md border text-sm">
                Back To Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/** @format */
import React, { useState } from "react";
import { Info } from "lucide-react";

export const TransferModal = ({ onClose }) => {
  const [to, setTo] = useState("");
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#E4E5E8] bg-white shadow-lg">
        <div className="p-6">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#101828]">Transfer</p>
            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-[#F2F4F7]"
              aria-label="Close"
            >
              ✕
            </button>
          </div>

          {/* Balance bar */}
          <div className="mb-4 flex items-center justify-between rounded-[10px] border border-[#E4E5E8] bg-[#F9FAFB] p-3">
            <div>
              <p className="text-[12px] text-[#98A2B3]">Available Balance</p>
              <div className="mt-1 flex gap-5 text-[12px]">
                <span className="text-[#12B76A]">● Available: $12,450</span>
                <span className="text-[#F59E0B]">● Pending: $2,800</span>
              </div>
            </div>
            <p className="text-[14px] font-semibold text-[#101828]">$12,450.00</p>
          </div>

          {/* To field */}
          <label className="text-[12px] text-[#18191C]">Username, Email, or Wallet ID</label>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Enter username, email, or wallet ID"
            className="mt-1 mb-3 h-11 w-full rounded-[10px] border border-[#E4E5E8] px-3 text-[14px] outline-none focus:border-[#98A2B3]"
          />

          {/* Amount */}
          <label className="text-[12px] text-[#18191C]">Transfer Amount</label>
          <div className="mt-1 mb-3 flex items-center gap-2">
            <span className="grid h-11 w-10 place-items-center rounded-[10px] border border-[#E4E5E8] bg-[#F8F9FA] text-[13px]">
              $
            </span>
            <input
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="h-11 w-full rounded-[10px] border border-[#E4E5E8] px-3 text-[14px] outline-none focus:border-[#98A2B3]"
            />
          </div>

          {/* Note */}
          <label className="text-[12px] text-[#18191C]">Note (Optional)</label>
          <textarea
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={200}
            className="mt-1 h-[100px] w-full rounded-[10px] border border-[#E4E5E8] px-3 py-2 text-[14px] outline-none focus:border-[#98A2B3]"
          />
          <div className="mb-3 text-right text-[12px] text-[#98A2B3]">{note.length}/200</div>

          {/* Info box */}
          <div className="mb-4 rounded-[10px] border border-[#E4E5E8] bg-[#F0F7FF] p-3">
            <div className="mb-1 flex items-center gap-2 text-[12px] font-medium text-[#101828]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/70">
                <Info className="h-3.5 w-3.5 text-[#0A65CC]" />
              </span>
              Transfer Information
            </div>
            <p className="text-[12px] text-[#667085]">Processing time: Instant</p>
            <p className="text-[12px] text-[#667085]">
              Fee: Free for transfers within the platform
            </p>
            <p className="text-[12px] text-[#667085]">
              External transfers may incur network fees
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="h-10 rounded-[10px] border border-[#E4E5E8] px-5 text-[14px]"
            >
              Cancel
            </button>
            <button className="h-10 rounded-[10px] bg-[#0A65CC] px-5 text-[14px] text-white">
              Confirm Transfer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferModal;

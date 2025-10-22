/** @format */
import React, { useState } from "react";
import { Info, Landmark, Wallet, CreditCard } from "lucide-react";

export const WithdrawModal = ({ onClose }) => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bank");

  const MethodBtn = ({ k, title, Icon }) => {
    const active = method === k;
    return (
      <button
        type="button"
        onClick={() => setMethod(k)}
        className={`flex h-12 w-full items-center justify-center gap-2 rounded-[10px] border
        ${active ? "border-[#0A65CC] bg-[#F8FBFF] text-[#0A65CC]" : "border-[#E4E5E8] bg-white text-[#344054]"}`}
      >
        <Icon className="h-4 w-4" />
        <span className="text-[12px] font-medium">{title}</span>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
       <div className="w-full max-w-[520px] overflow-hidden rounded-2xl border border-[#E4E5E8] bg-white shadow-lg">
        <div className="p-6">
          {/* Header */}
          <div className="mb-2 flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#101828]">Withdraw</p>
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

          {/* Amount */}
          <label className="text-[12px] text-[#18191C]">Withdrawal Amount</label>
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

          {/* Method */}
          <p className="mb-2 text-[12px] text-[#18191C]">Withdrawal Method</p>
          <div className="mb-4 grid grid-cols-3 gap-2">
            <MethodBtn k="bank" title="Bank Transfer" Icon={Landmark} />
            <MethodBtn k="paypal" title="PayPal" Icon={Wallet} />
            <MethodBtn k="card" title="Debit Card" Icon={CreditCard} />
          </div>

          {/* Account details */}
          <div className="mb-4 space-y-3">
            <label className="block text-[12px] text-[#18191C]">Account Number</label>
            <input className="h-11 w-full rounded-[10px] border border-[#E4E5E8] px-3" />
            <label className="block text-[12px] text-[#18191C]">Routing Number</label>
            <input className="h-11 w-full rounded-[10px] border border-[#E4E5E8] px-3" />
          </div>

          {/* Info box */}
          <div className="mb-4 rounded-[10px] border border-[#E4E5E8] bg-[#F0F7FF] p-3">
            <div className="mb-1 flex items-center gap-2 text-[12px] font-medium text-[#101828]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/70">
                <Info className="h-3.5 w-3.5 text-[#0A65CC]" />
              </span>
              Processing Information
            </div>
            <p className="text-[12px] text-[#667085]">Processing time: 1–3 business days</p>
            <p className="text-[12px] text-[#667085]">Fee: Free</p>
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
              Confirm Withdraw
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WithdrawModal;

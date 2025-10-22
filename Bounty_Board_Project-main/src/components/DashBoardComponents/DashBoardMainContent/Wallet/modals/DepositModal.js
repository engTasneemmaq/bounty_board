/** @format */
import React, { useState } from "react";
import { Info, CreditCard, Landmark, Bitcoin } from "lucide-react";

export const DepositModal = ({ onClose }) => {
  const [amount, setAmount] = useState("");
  const [method, setMethod] = useState("bank");
  const presets = [100, 500, 1000, 5000];

  const Option = ({ k, title, desc, Icon }) => {
    const active = method === k;
    return (
      <button
        type="button"
        onClick={() => setMethod(k)}
        className={`w-full text-left rounded-[10px] border px-4 py-3 relative
        ${active ? "border-[#0A65CC] bg-[#F8FBFF]" : "border-[#E4E5E8] bg-white"}`}
      >
        <div className="flex items-start gap-3">
          <span
            className={`mt-[2px] inline-flex h-7 w-7 items-center justify-center rounded-md
            ${active ? "bg-[#E7F0FB] text-[#0A65CC]" : "bg-[#EEF2F6] text-[#667085]"}`}
          >
            <Icon className="h-4 w-4" />
          </span>
          <div className="pr-6">
            <p className="text-[13px] font-medium text-[#18191C]">{title}</p>
            <p className="text-[12px] text-[#98A2B3]">{desc}</p>
          </div>
        </div>
        {/* radio on the right */}
        <span
          className={`absolute right-3 top-1/2 -translate-y-1/2 grid h-5 w-5 place-items-center rounded-full border
          ${active ? "border-[#0A65CC]" : "border-[#D0D5DD]"}`}
        >
          <span
            className={`h-2.5 w-2.5 rounded-full ${active ? "bg-[#0A65CC]" : "bg-transparent"}`}
          />
        </span>
      </button>
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-[460px] overflow-hidden rounded-2xl border border-[#E4E5E8] bg-white shadow-lg">
        <div className="p-6">
          {/* Header */}
          <div className="mb-1 flex items-center justify-between">
            <p className="text-[16px] font-semibold text-[#101828]">Deposit</p>
            <button
              onClick={onClose}
              className="grid h-8 w-8 place-items-center rounded-lg hover:bg-[#F2F4F7]"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
          <p className="mb-4 text-[12px] text-[#667085]">
            Add funds to your wallet balance
          </p>

          {/* Amount */}
          <label className="text-[12px] text-[#18191C]">Amount</label>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00"
            className="mt-1 mb-2 h-11 w-full rounded-[10px] border border-[#E4E5E8] px-3 text-[14px] outline-none focus:border-[#98A2B3]"
          />
          <div className="mb-5 flex gap-2">
            {presets.map((v) => (
              <button
                key={v}
                onClick={() => setAmount(String(v))}
                className="h-8 rounded-md border border-[#E4E5E8] px-3 text-[12px] text-[#101828] hover:bg-[#F8F9FA]"
              >
                ${v}
              </button>
            ))}
          </div>

          {/* Payment method */}
          <p className="mb-2 text-[12px] text-[#18191C]">Payment Method</p>
          <div className="space-y-3">
            <Option
              k="bank"
              title="Bank Transfer"
              desc="Direct transfer from your bank account"
              Icon={Landmark}
            />
            <Option
              k="card"
              title="Credit/Debit Card"
              desc="Instant deposit with card payment"
              Icon={CreditCard}
            />
            <Option
              k="crypto"
              title="Cryptocurrency"
              desc="Deposit using Bitcoin, Ethereum, or USDC"
              Icon={Bitcoin}
            />
          </div>

          {/* Description */}
          <label className="mt-5 block text-[12px] text-[#18191C]">
            Description (Optional)
          </label>
          <textarea className="mt-1 h-[88px] w-full rounded-[10px] border border-[#E4E5E8] px-3 py-2 text-[14px] outline-none focus:border-[#98A2B3]" />

          {/* Info box */}
          <div className="mt-5 rounded-[10px] border border-[#E4E5E8] bg-[#F0F7FF] p-3">
            <div className="mb-2 flex items-center gap-2 text-[12px] font-medium text-[#101828]">
              <span className="grid h-5 w-5 place-items-center rounded-full bg-white/70">
                <Info className="h-3.5 w-3.5 text-[#0A65CC]" />
              </span>
              Processing Information
            </div>
            <ul className="list-disc space-y-1 pl-5 text-[12px] text-[#667085]">
              <li>Bank transfers: 1–3 business days</li>
              <li>Card payments: Instant processing</li>
              <li>Crypto deposits: 3–6 network confirmations</li>
            </ul>
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between">
            <button
              onClick={onClose}
              className="h-10 rounded-[10px] border border-[#E4E5E8] px-5 text-[14px]"
            >
              Cancel
            </button>
            <button className="h-10 rounded-[10px] bg-[#0A65CC] px-5 text-[14px] text-white">
              Confirm Deposit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositModal;

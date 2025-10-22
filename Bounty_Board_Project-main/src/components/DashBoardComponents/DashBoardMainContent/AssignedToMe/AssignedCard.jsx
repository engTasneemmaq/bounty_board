/** @format */
import React from "react";
import { Image as ImageIcon, User, CircleDollarSign, BadgeInfo, ArrowRight } from "lucide-react";
import StatusBadge from "./StatusBadge";

function Remaining({ days }) {
  const color =
    days <= 1 ? "text-rose-600" : days <= 2 ? "text-amber-500" : "text-emerald-600";
  return (
    <div className={`text-sm ${color} flex items-center gap-2`}>
      <span className="w-1.5 h-1.5 rounded-full bg-current inline-block" />
      {days} {days === 1 ? "day" : "days"} Remaining
    </div>
  );
}

export default function AssignedCard({ item }) {
  return (
    <div className="rounded-xl border overflow-hidden bg-white shadow-sm">
      {/* Image / header */}
      <div className="relative h-[170px] bg-gray-100 grid place-items-center">
        {item.image ? (
          <img src={item.image} alt="" className="w-full h-full object-cover" />
        ) : (
          <div className="flex flex-col items-center gap-2 text-gray-400">
            <div className="border rounded-lg p-2 bg-white/70">
              <ImageIcon className="h-6 w-6" />
            </div>
          </div>
        )}

        <div className="absolute top-3 right-3">
          <StatusBadge status={item.status} />
        </div>
      </div>

      {/* Body */}
      <div className="p-4">
        <h3 className="text-[18px] font-semibold">{item.title}</h3>
        <div className="text-gray-600 text-sm mt-1 flex items-center gap-2">
          <span className="text-gray-400">◎</span>
          {item.milestone}
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2 text-gray-700">
            <User className="h-4 w-4 text-gray-400" />
            <span className="text-gray-500">Your Role:</span>
            <span className="font-medium">{item.role}</span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <CircleDollarSign className="h-4 w-4 text-gray-400" />
            <span className="text-gray-500">You Earn:</span>
            <span className="font-medium">{item.earn}$</span>
          </div>

          <Remaining days={item.daysRemaining} />
        </div>

        {/* Actions */}
        <div className="mt-4 flex items-center gap-3">
          <button className="h-10 px-4 rounded-lg border text-sm hover:bg-gray-50">
            View Details
          </button>
          <button className="h-10 px-4 rounded-lg bg-blue-600 text-white text-sm hover:bg-blue-700 flex items-center gap-2">
            <span>Go to Milestone</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

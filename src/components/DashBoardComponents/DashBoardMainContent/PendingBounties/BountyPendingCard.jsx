// src/components/DashBoardComponents/DashBoardMainContent/PendingBounties/BountyPendingCard.jsx
import React from "react";
import { CalendarDays, CircleDollarSign, Puzzle } from "lucide-react";

export default function BountyPendingCard({ bounty }) {
  const {
    name,
    salaryMin,
    salaryMax,
    currency,
    milestones,
    submittedAt,
    thumbnail,
    status,
  } = bounty;

  return (
    <div className="flex gap-3 border border-gray-200 rounded-lg p-3 bg-white">
      {/* Thumbnail */}
      <div className="w-24 h-16 rounded-md overflow-hidden bg-gray-100 grid place-items-center">
        {thumbnail ? (
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        ) : (
          <span className="text-gray-400 text-xs">No Image</span>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-semibold text-[15px] truncate">{name}</h3>
          <StatusBadge status={status} />
        </div>

        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
          <Meta
            icon={<CircleDollarSign className="h-4 w-4" />}
            label={`${symbol(currency)}${nf(salaryMin)}–${nf(salaryMax)}`}
          />
          <Dot />
          <Meta
            icon={<Puzzle className="h-4 w-4" />}
            label={`${milestones} Milestones`}
          />
          <Dot />
          <Meta
            icon={<CalendarDays className="h-4 w-4" />}
            label={`Submitted on ${formatDate(submittedAt)}`}
          />
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status = "UnderReview" }) {
  return (
    <span className="text-[12px] font-semibold px-2.5 py-1 rounded-full border bg-rose-50 border-rose-100 text-rose-500">
      {status === "UnderReview" ? "Under Review" : status}
    </span>
  );
}
function Meta({ icon, label }) {
  return <span className="inline-flex items-center gap-1.5">{icon}{label}</span>;
}
function Dot() {
  return <span className="w-1 h-1 rounded-full bg-gray-200" />;
}
const nf = (n) => new Intl.NumberFormat().format(n);
const symbol = (c) => (c === "USD" ? "$" : c === "EUR" ? "€" : c === "JOD" ? "JOD " : "");
const formatDate = (s) =>
  new Date(s).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });

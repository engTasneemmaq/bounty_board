/** @format */
import React from "react";

/**
 * status: "rejected" | "awaiting" | "progress"
 */
export default function StatusBadge({ status }) {
  const map = {
    rejected:   { text: "Rejected",        bg: "bg-rose-100",    dot: "bg-rose-500",    txt: "text-rose-700" },
    awaiting:   { text: "Awaiting Review", bg: "bg-amber-100",   dot: "bg-amber-500",   txt: "text-amber-700" },
    progress:   { text: "In Progress",     bg: "bg-emerald-100", dot: "bg-emerald-500", txt: "text-emerald-700" },
  };
  const s = map[status] ?? map.progress;

  return (
    <span className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-xs ${s.bg} ${s.txt}`}>
      <span className={`w-2 h-2 rounded-full ${s.dot}`} />
      {s.text}
    </span>
  );
}

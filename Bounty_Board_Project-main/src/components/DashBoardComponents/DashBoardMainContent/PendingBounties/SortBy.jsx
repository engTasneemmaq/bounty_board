// src/components/DashBoardComponents/DashBoardMainContent/PendingBounties/SortBy.jsx
import React from "react";
import { ChevronDown } from "lucide-react";

export default function SortBy({ value, onChange }) {
  return (
    <div className="inline-flex items-center gap-2">
      <span className="text-xs sm:text-sm text-gray-500">Sort by</span>
      <div className="relative">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="appearance-none border border-gray-200 rounded-lg bg-white text-xs sm:text-sm py-2 pl-3 pr-8"
          aria-label="Sort pending bounties"
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="salaryHigh">Price: High → Low</option>
          <option value="salaryLow">Price: Low → High</option>
          <option value="milestones">Milestones</option>
        </select>
        <ChevronDown className="h-4 w-4 text-gray-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
      </div>
    </div>
  );
}

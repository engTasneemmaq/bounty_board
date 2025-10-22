// src/components/DashBoardComponents/DashBoardMainContent/PendingBounties/EmptyState.jsx
import React from "react";

export default function EmptyState() {
  return (
    <div className="border border-dashed border-gray-200 rounded-xl p-6 text-center bg-gray-50">
      <h4 className="font-semibold text-gray-700">No pending bounties</h4>
      <p className="text-gray-500 text-sm mt-1">
        You’ll see your submitted bounties here while they’re under review.
      </p>
    </div>
  );
}

// src/components/DashBoardComponents/DashBoardMainContent/PendingBounties/SkeletonCard.jsx
import React from "react";

export default function SkeletonCard() {
  return (
    <div className="flex gap-3 border border-gray-200 rounded-lg p-3">
      <div className="w-24 h-16 rounded-md bg-gray-100 animate-pulse" />
      <div className="flex-1 space-y-2">
        <div className="h-4 w-2/5 bg-gray-100 rounded animate-pulse" />
        <div className="flex gap-2">
          <div className="h-3 w-28 bg-gray-100 rounded animate-pulse" />
          <div className="h-3 w-24 bg-gray-100 rounded animate-pulse" />
          <div className="h-3 w-40 bg-gray-100 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
}

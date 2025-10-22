/** @format */
import React, { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Image as ImageIcon,
  Eye,
  X,
  Clock4,
  CalendarDays,
  DollarSign,
  UserRound,
  ChevronDown,
  AlertCircle,
  FileText,
} from "lucide-react";
import { showMessage } from "../../../../utils/toast";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

// =========== Mock data (Replace it later with API data ) ===========
const MOCK = {
  pending: [
    {
      id: "p-101",
      title: "Bounty Name",
      user: "user name",
      role: "Mobile Developer",
      value: 1800,
      durationWeeks: 4,
      appliedAt: "2024-01-18",
      note: "Experienced React Native developer with 50+ published apps. I can handle both iOS...",
      status: "Pending",
    },
    {
      id: "p-102",
      title: "Bounty Name",
      user: "user name",
      role: "Mobile Developer",
      value: 1800,
      durationWeeks: 4,
      appliedAt: "2024-01-18",
      note: "Experienced React Native developer with 50+ published apps. I can handle both iOS...",
      status: "Pending",
    },
    {
      id: "p-103",
      title: "Bounty Name",
      user: "user name",
      role: "Mobile Developer",
      value: 1800,
      durationWeeks: 4,
      appliedAt: "2024-01-18",
      note: "Experienced React Native developer with 50+ published apps. I can handle both iOS...",
      status: "Pending",
    },
  ],
  reapply: [
    {
      id: "r-201",
      title: "Bounty Name",
      user: "user name",
      role: "Mobile Developer",
      value: 1800,
      durationWeeks: 4,
      appliedAt: "2024-01-18",
      note: "Experienced React Native developer with 50+ published apps. I can handle both iOS...",
      status: "Not selected",
    },
  ],
  waiting: [
    {
      id: "w-301",
      title: "Bounty Name",
      user: "user name",
      role: "Mobile Developer",
      value: 1800,
      durationWeeks: 4,
      appliedAt: "2024-01-18",
      status: "Waiting",
    },
  ],
};

// ================ Badge helper =================
function Pill({ color = "gray", children }) {
  const map = {
    yellow: "warning",
    orange: "warning",
    green: "success",
    gray: "info",
  };
  return <CreativeBadge variant={map[color] || "info"}>{children}</CreativeBadge>;
}

// ================ Withdraw Modal =================
function WithdrawModal({ open, onClose, onConfirm }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/40 p-4">
      <div className="w-full max-w-[540px] rounded-2xl bg-white p-6 shadow-xl">
        <div className="flex items-start justify-between">
          <h3 className="text-lg font-semibold">Withdraw Application</h3>
          <button
            onClick={onClose}
            className="h-8 w-8 rounded-full bg-gray-100 grid place-items-center"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
          <p className="text-sm text-gray-700">
            <strong>Are you sure you want to withdraw this application?</strong>
            <br />
            This action cannot be undone. You&apos;ll need to reapply if you change
            your mind.
          </p>
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="rounded-lg border px-4 py-2 text-sm bg-gray-50 hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              onConfirm?.();
              onClose?.();
            }}
            className="rounded-lg px-4 py-2 text-sm bg-red-600 text-white hover:bg-red-700"
          >
            Withdraw Application
          </button>
        </div>
      </div>
    </div>
  );
}

// ================ One Card =================
function ApplicationCard({
  data,
  variant, // "pending" | "reapply" | "waiting"
  onWithdraw,
}) {
  const navigate = useNavigate();
  const goToDetails = () =>
    navigate(`/dashboard/pending/${data.id}`, {
      state: { source: variant },
    });

  // badge color
  const badge =
    variant === "pending" ? (
      <Pill color="yellow">Pending</Pill>
    ) : variant === "reapply" ? (
      <Pill color="orange">Not selected</Pill>
    ) : (
      <Pill color="green">Waiting</Pill>
    );

  return (
    <CreativeCard className="overflow-hidden group">
      {/* image placeholder + badge */}
      <div className="relative h-44 w-full bg-gradient-to-br from-gray-50 to-gray-100 grid place-items-center">
        <ImageIcon className="h-8 w-8 text-gray-300" />
        <div className="absolute right-3 top-3">{badge}</div>
      </div>

      {/* body */}
      <div className="p-5">
        <h3 className="text-lg font-bold text-gradient">{data.title}</h3>
        <p className="text-sm text-gray-600 mt-1 font-medium">by: {data.user}</p>

        <div className="mt-4 space-y-2 text-sm text-gray-700">
          <div className="flex items-center gap-2">
            <UserRound className="h-4 w-4 text-purple-600" />
            <span>
              Applied as: <span className="font-semibold text-gray-900">{data.role}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <DollarSign className="h-4 w-4 text-green-600" />
            <span>
              Total Value:{" "}
              <span className="text-green-600 font-bold">${data.value}</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Clock4 className="h-4 w-4 text-blue-600" />
            <span>
              Duration: <span className="font-semibold text-gray-900">{data.durationWeeks} weeks</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-amber-600" />
            <span>
              Applied: <span className="font-semibold text-gray-900">
                {new Date(data.appliedAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </span>
            </span>
          </div>
        </div>

        {/* note (optional) */}
        {data.note && (
          <div className="mt-3 rounded-lg bg-gradient-to-r from-blue-50/50 to-purple-50/50 px-4 py-3 text-xs text-gray-700 border border-gray-200">
            {data.note}
          </div>
        )}

        {/* actions */}
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <CreativeButton
            variant="outline"
            size="sm"
            onClick={goToDetails}
            className="flex-1 h-[40px] flex items-center gap-2 justify-center"
          >
            <Eye className="h-4 w-4" />
            View Details
          </CreativeButton>

          {variant === "pending" && (
            <CreativeButton
              variant="error"
              size="sm"
              onClick={() => onWithdraw?.(data)}
              className="flex-1 h-[40px] flex items-center gap-2 justify-center"
            >
              <X className="h-4 w-4" />
              Withdraw
            </CreativeButton>
          )}

          {variant === "reapply" && (
            <Link to={`/dashboard/pending/${data.id}`} state={{ source: "reapply" }} className="flex-1">
              <CreativeButton
                variant="primary"
                size="sm"
                className="w-full h-[40px]"
              >
                Reapply
              </CreativeButton>
            </Link>
          )}
        </div>
      </div>
    </CreativeCard>
  );
}

// ================ The Main Page =================
export default function PendingApplications() {
  const [sortOpen, setSortOpen] = useState(false);
  const [withdraw, setWithdraw] = useState({ open: false, item: null });
  const [sortBy, setSortBy] = useState("recent"); // "recent" or "oldest"
  const [pendingList, setPendingList] = useState(MOCK.pending);
  const [reapplyList, setReapplyList] = useState(MOCK.reapply);
  const [waitingList, setWaitingList] = useState(MOCK.waiting);

  const { pending, reapply, waiting } = useMemo(() => {
    const sortApplications = (apps) => {
      return [...apps].sort((a, b) => {
        const dateA = new Date(a.appliedAt);
        const dateB = new Date(b.appliedAt);
        return sortBy === "recent" ? dateB - dateA : dateA - dateB;
      });
    };

    return {
      pending: sortApplications(pendingList),
      reapply: sortApplications(reapplyList),
      waiting: sortApplications(waitingList),
    };
  }, [sortBy, pendingList, reapplyList, waitingList]);

  const handleWithdraw = () => {
    if (!withdraw.item) return;
    
    // Remove the item from pending list
    setPendingList(prev => prev.filter(item => item.id !== withdraw.item.id));
    
    showMessage.success("Application withdrawn successfully! ✅");
    console.log("withdraw:", withdraw.item);
    
    // Close the modal
    setWithdraw({ open: false, item: null });
  };

  return (
    <section className="w-full space-y-6">
      {/* Header */}
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-3">
          <FileText className="w-8 h-8 text-blue-600" />
          <div>
            <h2 className="text-3xl font-bold text-gradient">Pending Applications</h2>
            <p className="text-sm text-gray-600 mt-1">
              Track your bounty applications and their status.
            </p>
          </div>
        </div>

        {/* Sort */}
        <div className="relative">
          <button
            onClick={() => setSortOpen((v) => !v)}
            className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 bg-white px-4 py-2.5 text-[15px] font-medium hover:border-blue-400 transition-colors"
          >
            Sort by: {sortBy === "recent" ? "Recent" : "Oldest"} <ChevronDown className="h-5 w-5 text-gray-400" />
          </button>
          {sortOpen && (
            <div className="absolute right-0 mt-2 w-44 rounded-xl border-2 border-gray-200 bg-white p-2 shadow-xl text-sm z-10">
              <button 
                onClick={() => { setSortBy("recent"); setSortOpen(false); }}
                className={`w-full text-left rounded-lg px-3 py-2 transition-colors ${
                  sortBy === "recent" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" : "hover:bg-gray-100"
                }`}
              >
                Recent
              </button>
              <button 
                onClick={() => { setSortBy("oldest"); setSortOpen(false); }}
                className={`w-full text-left rounded-lg px-3 py-2 transition-colors ${
                  sortBy === "oldest" ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold" : "hover:bg-gray-100"
                }`}
              >
                Oldest
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Pending grid */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
        {pending.map((item) => (
          <ApplicationCard
            key={item.id}
            data={item}
            variant="pending"
            onWithdraw={(it) => setWithdraw({ open: true, item: it })}
          />
        ))}
      </div>

      {/* Reapply */}
      <div className="mt-10">
        <div className="mb-3">
          <h3 className="text-[18px] font-semibold">
            Eligible to Reapply <span className="text-gray-400 text-sm">({reapply.length})</span>
          </h3>
          <p className="text-sm text-gray-500">
            Your request was not chosen this time, but you can try again as individual
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {reapply.map((item) => (
            <ApplicationCard key={item.id} data={item} variant="reapply" />
          ))}
        </div>
      </div>

      {/* Waiting */}
      <div className="mt-10">
        <h3 className="text-[18px] font-semibold mb-4">Waiting Applications</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
          {waiting.map((item) => (
            <ApplicationCard key={item.id} data={item} variant="waiting" />
          ))}
        </div>
      </div>

      {/* Withdraw modal */}
      <WithdrawModal
        open={withdraw.open}
        onClose={() => setWithdraw({ open: false, item: null })}
        onConfirm={handleWithdraw}
      />
    </section>
  );
}




import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, ChevronDown, ArrowUpDown, CheckCircle2, Clock, X } from "lucide-react";

const MOCK_BOUNTIES = [
  {
    id: "bnty-1",
    name: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "Completed",
    price: 1000,
    completion: 100,
  },
  {
    id: "bnty-2",
    name: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "Active",
    price: 1000,
    completion: 60,
  },
  {
    id: "bnty-3",
    name: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "In progress",
    price: 1000,
    completion: 40,
  },
  {
    id: "bnty-4",
    name: "Bounty Name",
    posterEmail: "PosterEmail@gmail.com",
    category: "Category Name",
    status: "Expire",
    price: 1000,
    completion: 0,
  },
];

const Dot = ({ className = "" }) => (
  <span className={`inline-block h-3 w-3 rounded ${className}`} />
);

const StatusBadge = ({ status }) => {
  if (status === "Completed") {
    return (
      <div className="inline-flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-3 py-1 text-[13px] font-medium text-green-600">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        Completed
      </div>
    );
  }
  if (status === "Active") {
    return (
      <div className="inline-flex items-center gap-2 rounded-md border border-green-200 bg-green-50 px-3 py-1 text-[13px] font-medium text-green-600">
        <CheckCircle2 className="h-4 w-4 text-green-600" />
        Active
      </div>
    );
  }
  if (status === "In progress") {
    return (
      <div className="inline-flex items-center gap-2 rounded-md border border-orange-200 bg-orange-50 px-3 py-1 text-[13px] font-medium text-orange-500">
        <Clock className="h-4 w-4 text-orange-500" />
        In progress
      </div>
    );
  }
  return (
    <div className="inline-flex items-center gap-2 rounded-md border border-red-200 bg-red-50 px-3 py-1 text-[13px] font-medium text-red-500">
      <X className="h-4 w-4 text-red-500" />
      Expire
    </div>
  );
};

const CategoryPill = ({ label }) => (
  <span className="inline-flex items-center rounded-md bg-[#EAF1FF] px-3 py-[6px] text-[13px] font-medium text-[#3B6BFF]">
    {label}
  </span>
);

const by = (key) => (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);

export default function AdminBounties() {
  const navigate = useNavigate();

  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("all");
  const [category, setCategory] = useState("all");
  const [sortKey, setSortKey] = useState("name");
  const [sortDir, setSortDir] = useState("asc");
  const [showAll, setShowAll] = useState(false);

  const allCategories = useMemo(
    () => Array.from(new Set(MOCK_BOUNTIES.map((b) => b.category))),
    []
  );

  const filtered = useMemo(() => {
    let rows = [...MOCK_BOUNTIES];

    if (query.trim()) {
      const q = query.toLowerCase();
      rows = rows.filter(
        (r) =>
          r.name.toLowerCase().includes(q) ||
          r.posterEmail.toLowerCase().includes(q)
      );
    }
    if (status !== "all") rows = rows.filter((r) => r.status === status);
    if (category !== "all") rows = rows.filter((r) => r.category === category);

    rows.sort(by(sortKey));
    if (sortDir === "desc") rows.reverse();

    return rows;
  }, [query, status, category, sortKey, sortDir]);

  const totalBounties = MOCK_BOUNTIES.length;
  const activeProjects = MOCK_BOUNTIES.filter((b) => b.status !== "Expire").length;
  const avgCompletion =
    Math.round(
      (MOCK_BOUNTIES.reduce((s, b) => s + (b.completion ?? 0), 0) /
        Math.max(MOCK_BOUNTIES.length, 1)) *
        10
    ) / 10;

  const toggleSort = (key) => {
    if (sortKey === key) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("asc");
    }
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-[24px] font-semibold text-[#111827]">Bounty Details</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-4 gap-4">
        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Total Bounties</span>
            <Dot className="bg-[#3B6BFF]" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-[#111827]">{totalBounties}</div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Active Projects</span>
            <Dot className="bg-[#22C55E]" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-[#111827]"></div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Avg Completion</span>
            <Dot className="bg-[#F59E0B]" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-[#111827]">{avgCompletion.toFixed(1)}%</div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-4">
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span>Expire Projects</span>
            <Dot className="bg-[#EF4444]" />
          </div>
          <div className="mt-2 text-2xl font-semibold text-[#111827]">{activeProjects}</div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex w-full max-w-xl items-center gap-3">
          <div className="relative w-full">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search users..."
              className="w-full rounded-lg border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none focus:border-[#3B6BFF]"
            />
          </div>

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="w-[130px] rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[#3B6BFF] outline-none"
          >
            <option value="all">All Status</option>
            <option value="Completed">Completed</option>
            <option value="Active">Active</option>
            <option value="In progress">In progress</option>
            <option value="Expire">Expire</option>
          </select>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-[140px] rounded-lg border border-gray-200 bg-white px-3 py-2.5 text-sm text-gray-700 focus:border-[#3B6BFF] outline-none"
          >
            <option value="all">All Category</option>
            {allCategories.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>

        <div className="text-sm text-gray-500">{filtered.length} Project found</div>
      </div>

      {/* Table */}
      <div className="rounded-xl border border-gray-200 bg-white">
        {/* Header */}
        <div className="grid grid-cols-[1.5fr,1.1fr,1fr,0.8fr,0.9fr] items-center gap-4 border-b border-gray-100 px-6 py-4 text-[13px] font-medium text-gray-500">
          <button
            onClick={() => toggleSort("name")}
            className="flex items-center gap-2 text-left hover:text-gray-700"
          >
            Bounty Name
            <SortIcon active={sortKey === "name"} dir={sortDir} />
          </button>
          <button
            onClick={() => toggleSort("category")}
            className="flex items-center gap-2 hover:text-gray-700"
          >
            Category <SortIcon active={sortKey === "category"} dir={sortDir} />
          </button>
          <button
            onClick={() => toggleSort("status")}
            className="flex items-center gap-2 hover:text-gray-700"
          >
            Status <SortIcon active={sortKey === "status"} dir={sortDir} />
          </button>
          <button
            onClick={() => toggleSort("price")}
            className="flex items-center gap-2 hover:text-gray-700"
          >
            Price <SortIcon active={sortKey === "price"} dir={sortDir} />
          </button>
          <div className="text-right">Actions</div>
        </div>

        {/* Rows */}
        <ul className="divide-y divide-gray-100">
          {(showAll ? filtered : filtered.slice(0, 5)).map((b) => (
            <li
              key={b.id}
              className="grid grid-cols-[1.5fr,1.1fr,1fr,0.8fr,0.9fr] items-center gap-4 px-6 py-5"
            >
              {/* Name and email + avatar */}
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#3B6BFF] text-sm font-semibold text-white">
                  {getInitials(b.name)}
                </div>
                <div>
                  <div className="text-[14px] font-medium text-[#111827]">{b.name}</div>
                  <div className="text-[13px] text-gray-500">{b.posterEmail}</div>
                </div>
              </div>

              <div>
                <CategoryPill label={b.category} />
              </div>

              <div>
                <StatusBadge status={b.status} />
              </div>

              <div className="text-[14px] font-medium text-gray-600">{b.price}$</div>

              <div className="text-right">
                <button
                  onClick={() => navigate(`/admin/bounties/${b.id}`)}
                  className="rounded-md bg-[#3B6BFF] px-4 py-2 text-sm font-medium text-white hover:bg-[#2E57E6] focus:outline-none"
                >
                  View project Details
                </button>
              </div>
            </li>
          ))}
        </ul>

        {/* Footer */}
        {filtered.length > 5 && (
          <div className="flex justify-center border-t border-gray-100 p-4">
            <button 
              onClick={() => setShowAll(!showAll)}
              className="rounded-md border border-[#3B6BFF] px-4 py-2 text-sm font-medium text-[#3B6BFF] hover:bg-[#eef3ff] transition-colors"
            >
              {showAll ? 'Show Less' : 'View All'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

function SortIcon({ active, dir }) {
  return (
    <svg
      className={`h-3.5 w-3.5 ${active ? "text-[#3B6BFF]" : "text-gray-400"}`}
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      {dir === "asc" ? (
        <path d="M7 7l3-3 3 3H7zM13 13l-3 3-3-3h6z" />
      ) : (
        <path d="M7 13l3 3 3-3H7zM13 7l-3-3-3 3h6z" />
      )}
    </svg>
  );
}

function getInitials(name = "") {
  const parts = name.trim().split(" ");
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[1][0]).toUpperCase();
}
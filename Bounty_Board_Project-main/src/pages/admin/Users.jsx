import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import {
  Search,
  ChevronDown,
  ArrowUpDown,
  UserMinus,
  CheckCircle2,
} from "lucide-react";

const usersSeed = [
  {
    id: 1,
    name: "John Smith",
    email: "john.smith@email.com",
    role: "Role Name",
    status: "Active",
    posted: 24,
    worked: 24,
    color: "bg-[#3B82F6]", // JS
  },
  {
    id: 2,
    name: "Michael Brown",
    email: "mike.brown@email.com",
    role: "Role Name",
    status: "Active",
    posted: 45,
    worked: "",
    color: "bg-[#EF4444]", // MB
  },
  {
    id: 3,
    name: "David Wilson",
    email: "david.w@email.com",
    role: "Role Name",
    status: "Suspended",
    posted: 67,
    worked: "",
    color: "bg-[#9CA3AF]", // DW
  },
  {
    id: 4,
    name: "Sarah Johnson",
    email: "sarah.j@email.com",
    role: "Role Name",
    status: "Active",
    posted: 12,
    worked: "",
    color: "bg-[#22C55E]", // SJ
  },
  {
    id: 5,
    name: "Emily Davis",
    email: "emily.davis@email.com",
    role: "Role Name",
    status: "Active",
    posted: 8,
    worked: "",
    color: "bg-[#3B82F6]", // ED
  },
  {
    id: 6,
    name: "Lisa Anderson",
    email: "lisa.anderson@email.com",
    role: "Role Name",
    status: "Active",
    posted: 15,
    worked: "",
    color: "bg-[#22C55E]", // LA
  },
];

export default function Users() {
  const [q, setQ] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [roleFilter, setRoleFilter] = useState("all");
  const [users, setUsers] = useState(usersSeed);
  
  const list = useMemo(() => {
    let filtered = [...users];
    
    // Search filter
    if (q.trim()) {
      filtered = filtered.filter(
        (u) =>
          u.name.toLowerCase().includes(q.toLowerCase()) ||
          u.email.toLowerCase().includes(q.toLowerCase())
      );
    }
    
    // Status filter
    if (statusFilter !== "all") {
      filtered = filtered.filter((u) => u.status === statusFilter);
    }
    
    // Role filter
    if (roleFilter !== "all") {
      filtered = filtered.filter((u) => u.role === roleFilter);
    }
    
    return filtered;
  }, [q, statusFilter, roleFilter, users]);
  
  const handleToggleUserStatus = (userId) => {
    setUsers(users.map(user => {
      if (user.id === userId) {
        return {
          ...user,
          status: user.status === 'Active' ? 'Suspended' : 'Active'
        };
      }
      return user;
    }));
  };

  return (
    <div className="space-y-4">
      {/* Title */}
      <div className="text-[20px] font-semibold text-[#111827]">User Management</div>

      <div className="bg-white rounded-xl border border-[#E5E7EB]">
        {/* Search and Filters */}
        <div className="px-5 pt-4">
          <div className="flex items-center justify-between gap-3">
            <div className="relative w-[360px]">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#9CA3AF]"
              />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search users..."
                className="w-full pl-10 pr-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#0A65CC]"
              />
            </div>

            <div className="flex items-center gap-2 ml-auto">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F4F6] text-[12px] text-[#111827] hover:bg-[#E5E7EB] border-none outline-none cursor-pointer"
              >
                <option value="all">All Status</option>
                <option value="Active">Active</option>
                <option value="Suspended">Suspended</option>
              </select>
              <select
                value={roleFilter}
                onChange={(e) => setRoleFilter(e.target.value)}
                className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F3F4F6] text-[12px] text-[#111827] hover:bg-[#E5E7EB] border-none outline-none cursor-pointer"
              >
                <option value="all">All Roles</option>
                <option value="Role Name">Role Name</option>
              </select>
              <span className="text-[12px] text-[#6B7280] ml-3">
                {list.length} users found
              </span>
            </div>
          </div>
        </div>

        {/* Table header */}
        <div className="mt-4 px-5 pb-2">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.4fr] text-[12px] text-[#6B7280]">
            <div className="flex items-center gap-1">
              Name <ArrowUpDown size={14} />
            </div>
            <div className="flex items-center gap-1">
              Role <ArrowUpDown size={14} />
            </div>
            <div className="flex items-center gap-1">
              Status <ArrowUpDown size={14} />
            </div>
            <div>Posted Bounty</div>
            <div>worked bounty</div>
            <div>Actions</div>
          </div>
        </div>

        {/* Rows */}
        <div className="divide-y divide-[#E5E7EB]">
          {list.map((u) => (
            <Row key={u.id} user={u} onToggleStatus={handleToggleUserStatus} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ user, onToggleStatus }) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const statusPill =
    user.status === "Active"
      ? "bg-green-50 text-green-700"
      : "bg-red-50 text-red-600";

  const actionBtn =
    user.status === "Active"
      ? {
          label: "Suspend",
          className:
            "bg-[#EF4444] hover:bg-[#dc2626] text-white inline-flex items-center gap-2",
          icon: <UserMinus size={14} />,
        }
      : {
          label: "Activation",
          className:
            "bg-[#22C55E] hover:bg-[#16a34a] text-white inline-flex items-center gap-2",
          icon: <CheckCircle2 size={14} />,
        };

  return (
    <div className="px-5 py-3">
      <div className="grid grid-cols-[2fr_1fr_1fr_1fr_1fr_1.4fr] items-center">
        {/* Name + email */}
        <div className="flex items-center gap-3">
          <div
            className={[
              "w-10 h-10 rounded-full grid place-items-center text-white text-[12px] font-semibold",
              user.color,
            ].join(" ")}
          >
            {initials}
          </div>
          <div>
            <div className="text-[13px] font-medium text-[#111827]">{user.name}</div>
            <div className="text-[12px] text-[#6B7280]">{user.email}</div>
          </div>
        </div>

        {/* Role badge */}
        <div>
          <span className="inline-block text-[11px] px-3 py-1 rounded-lg bg-[#EEF2FF] text-[#0A65CC]">
            {user.role}
          </span>
        </div>

        {/* Status pill */}
        <div>
          <span className={`inline-block text-[11px] px-2.5 py-1 rounded ${statusPill}`}>
            {user.status}
          </span>
        </div>

        {/* Posted / worked */}
        <div className="text-[13px] text-[#111827]">{user.posted}</div>
        <div className="text-[13px] text-[#111827]">{user.worked || user.posted}</div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button 
            onClick={() => onToggleStatus(user.id)}
            className={`text-[12px] px-3 py-2 rounded-lg ${actionBtn.className} transition-colors`}
          >
            {actionBtn.icon}
            {actionBtn.label}
          </button>
          <Link
            to={`/admin/users/${user.id}`}
            className="text-[12px] px-3 py-2 rounded-lg bg-[#2E90FA] hover:bg-[#1c74d8] text-white transition-colors"
          >
            View
          </Link>
        </div>
      </div>
    </div>
  );
}
import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import {
  Layers,
  UsersRound,
  BarChart3,
  Settings,
  Users,
  BriefcaseBusiness,
  Box,
  Bell,
} from "lucide-react";

export default function AdminLayout() {
  const groups = [
    {
      title: "DASHBOARD",
      items: [
        { to: "/admin", label: "Overview", icon: <Layers size={18} /> },
        { to: "/admin/users", label: "Users", icon: <UsersRound size={18} /> },
        { to: "/admin/bounties", label: "Bounty details", icon: <BarChart3 size={18} /> },
        { to: "/admin/teams", label: "Teams", icon: <Users size={18} /> },
        { to: "/admin/settings", label: "Settings", icon: <Settings size={18} /> },
      ],
    },
    {
      title: "MANAGEMENT",
      items: [
        { to: "/admin/pending-bounties", label: "Pending Bounties", icon: <BriefcaseBusiness size={18} /> }
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-[#F6F7F9]">
      <div className="max-w-[1200px] mx-auto px-4 py-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded bg-[#0A65CC] flex items-center justify-center">
              <Layers size={18} className="text-white" />
            </div>
            <p className="text-[18px] font-semibold text-[#111827]">Admin Panel</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={18} className="text-[#344054]" />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#FF4D4F] rounded-full" />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#E4E5E8] flex items-center justify-center">
                <span className="text-[#0A65CC] font-semibold text-sm">AU</span>
              </div>
              <div className="text-right leading-4">
                <p className="text-[13px] font-medium text-[#111827]">Admin User</p>
                <p className="text-[12px] text-[#98A2B3]">admin@company.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-[240px_1fr] gap-6">
          {/* Sidebar */}
          <aside className="bg-white rounded-xl border border-[#E5E7EB] p-3">
            {groups.map((group, gi) => (
              <div key={group.title} className={gi ? "mt-4" : ""}>
                <p className="px-2 pb-2 text-[11px] font-medium uppercase tracking-wide text-[#9CA3AF]">
                  {group.title}
                </p>
                <div className="space-y-1">
                  {group.items.map((item) => (
                    <NavLink
                      key={item.to}
                      to={item.to}
                      end={item.to === "/admin"}
                      className={({ isActive }) =>
                        `relative flex items-center gap-3 rounded-md px-3 py-2 text-[13px] text-[#111827] hover:bg-[#F3F6FB] ${
                          isActive
                            ? "bg-[#F0F6FF] text-[#0A65CC] font-medium before:absolute before:left-0 before:top-1 before:bottom-1 before:w-1 before:rounded before:bg-[#0A65CC]"
                            : ""
                        }`
                      }
                    >
                      <span className="shrink-0">{item.icon}</span>
                      <span className="truncate">{item.label}</span>
                    </NavLink>
                  ))}
                </div>
              </div>
            ))}
          </aside>

          {/* Content */}
          <main className="bg-white rounded-xl border border-[#E5E7EB] p-6">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
}
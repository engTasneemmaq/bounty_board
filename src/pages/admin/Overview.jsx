import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { User, DollarSign, Layers, UserMinus, CheckCircle2 } from "lucide-react";

const Kpi = ({ title, value, delta, icon }) => (
  <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
    <div className="flex items-center justify-between mb-1">
      <p className="text-[12px] text-[#6B7280]">{title}</p>
      <div className="w-9 h-9 rounded-lg bg-[#F0F6FF] grid place-items-center">{icon}</div>
    </div>
    <p className="text-[22px] font-semibold text-[#111827]">{value}</p>
    <p className="text-[12px] text-[#16A34A]">+{delta}% <span className="text-[#6B7280]">from last month</span></p>
  </div>
);

export default function Overview() {
  const navigate = useNavigate();
  const [users, setUsers] = React.useState([
    { 
      id: 1, 
      name: "John Smith", 
      email: "john.smith@email.com", 
      status: "Active",
      posted: 24,
      worked: 24,
      initials: "JS",
      color: "bg-[#3B82F6]"
    },
    { 
      id: 2, 
      name: "Michael Brown", 
      email: "mike.brown@email.com", 
      status: "Active",
      posted: "",
      worked: 45,
      initials: "MB",
      color: "bg-[#EF4444]"
    },
    { 
      id: 3, 
      name: "David Wilson", 
      email: "david.w@email.com", 
      status: "Suspended",
      posted: "",
      worked: 67,
      initials: "DW",
      color: "bg-[#9CA3AF]"
    },
  ]);

  const bounties = [
    { 
      id: 101, 
      name: "Bounty Name", 
      email: "PosterEmail@gmail.com", 
      cat: "Category Name", 
      status: "Completed", 
      price: "1000$",
      initials: "JS",
      color: "bg-[#3B82F6]"
    },
    { 
      id: 102, 
      name: "Bounty Name", 
      email: "PosterEmail@gmail.com", 
      cat: "Category Name", 
      status: "Active", 
      price: "1000$",
      initials: "JS",
      color: "bg-[#3B82F6]"
    },
    { 
      id: 103, 
      name: "Bounty Name", 
      email: "PosterEmail@gmail.com", 
      cat: "Category Name", 
      status: "In progress", 
      price: "1000$",
      initials: "JS",
      color: "bg-[#3B82F6]"
    },
    { 
      id: 104, 
      name: "Bounty Name", 
      email: "PosterEmail@gmail.com", 
      cat: "Category Name", 
      status: "Expire", 
      price: "1000$",
      initials: "JS",
      color: "bg-[#3B82F6]"
    },
  ];

  const goToBounty = (b) => {
    const tabByStatus = {
      Completed: "milestones",
      "In progress": "milestones",
      Active: "overview",
      Expire: "overview",
    };
    const tab = tabByStatus[b.status] || "overview";
    navigate(`/admin/bounties/${b.id}/${tab}`);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Completed":
      case "Active":
        return <CheckCircle2 size={14} className="text-green-600" />;
      case "In progress":
        return <div className="w-3 h-3 rounded-full bg-orange-500" />;
      case "Expire":
        return <div className="w-3 h-3 rounded-full bg-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "Completed":
      case "Active":
        return "bg-green-50 text-green-700";
      case "In progress":
        return "bg-orange-50 text-orange-600";
      case "Expire":
        return "bg-red-50 text-red-600";
      default:
        return "bg-gray-50 text-gray-600";
    }
  };

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
    <div className="space-y-6">
      <h1 className="text-[24px] font-semibold text-[#111827]">Overview</h1>

      {/* Summary Cards */}
      <div className="grid grid-cols-3 gap-4">
        <Kpi 
          title="Total Users" 
          value="12,847" 
          delta="12.5" 
          icon={<User size={18} className="text-[#0A65CC]" />} 
        />
        <Kpi 
          title="Revenue" 
          value="$89,432" 
          delta="8.2" 
          icon={<DollarSign size={18} className="text-[#0A65CC]" />} 
        />
        <Kpi 
          title="Total bounties" 
          value="2,156" 
          delta="8.2" 
          icon={<Layers size={18} className="text-[#0A65CC]" />} 
        />
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
        <h2 className="text-[14px] font-semibold text-[#111827] mb-3">Users</h2>
        <div className="space-y-3">
          {users.map((u) => (
            <div key={u.id} className="flex items-center justify-between py-3 border-b border-[#E5E7EB] last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`w-9 h-9 rounded-full ${u.color} flex items-center justify-center text-white text-xs font-semibold`}>
                  {u.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#111827]">{u.name}</p>
                  <p className="text-[12px] text-[#6B7280]">{u.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2 py-1 rounded bg-[#EEF2FF] text-[#0A65CC]">Role Name</span>
                <span className={`text-[11px] px-2 py-1 rounded ${u.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-600'}`}>
                  {u.status}
                </span>
                <span className="text-[12px] text-[#111827]">{u.posted || ""}</span>
                <span className="text-[12px] text-[#111827]">{u.worked}</span>
                <div className="flex items-center gap-2">
                  {u.status === 'Active' ? (
                    <button 
                      onClick={() => handleToggleUserStatus(u.id)}
                      className="text-[11px] px-2 py-1 rounded bg-red-50 text-red-600 flex items-center gap-1 hover:bg-red-100 transition-colors"
                    >
                      <UserMinus size={12} />
                      Suspend
                    </button>
                  ) : (
                    <button 
                      onClick={() => handleToggleUserStatus(u.id)}
                      className="text-[11px] px-2 py-1 rounded bg-green-50 text-green-600 flex items-center gap-1 hover:bg-green-100 transition-colors"
                    >
                      <CheckCircle2 size={12} />
                      Activation
                    </button>
                  )}
                  <Link 
                    to={`/admin/users/${u.id}`} 
                    className="text-[11px] px-2 py-1 rounded bg-[#E7F0FB] text-[#0A65CC] hover:bg-[#d4e5f7] transition-colors"
                  >
                    View
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 flex justify-center">
          <button 
            onClick={() => navigate('/admin/users')}
            className="text-[12px] px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 transition-colors"
          >
            View All
          </button>
        </div>
      </div>

      {/* Bounties Table */}
      <div className="bg-white rounded-xl border border-[#E5E7EB] p-4">
        <h2 className="text-[14px] font-semibold text-[#111827] mb-3">Bounties</h2>
        <div className="space-y-3">
          {bounties.map((b) => (
            <div key={b.id} className="flex items-center justify-between py-3 border-b border-[#E5E7EB] last:border-b-0">
              <div className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-full ${b.color} flex items-center justify-center text-white text-xs font-semibold`}>
                  {b.initials}
                </div>
                <div>
                  <p className="text-[13px] font-medium text-[#111827]">{b.name}</p>
                  <p className="text-[12px] text-[#6B7280]">{b.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[11px] px-2 py-1 rounded bg-[#EEF2FF] text-[#0A65CC]">{b.cat}</span>
                <span className={`text-[11px] px-2 py-1 rounded flex items-center gap-1 ${getStatusColor(b.status)}`}>
                  {getStatusIcon(b.status)}
                  {b.status}
                </span>
                <span className="text-[12px] font-medium text-[#111827]">{b.price}</span>
                <button 
                  onClick={() => goToBounty(b)} 
                  className="text-[11px] px-2 py-1 rounded bg-[#E7F0FB] text-[#0A65CC]"
                >
                  View project Details
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="pt-3 flex justify-center">
          <button 
            onClick={() => navigate('/admin/bounties')}
            className="text-[12px] px-3 py-1 rounded border border-[#E5E7EB] hover:bg-gray-50 transition-colors"
          >
            View All
          </button>
        </div>
      </div>
    </div>
  );
}
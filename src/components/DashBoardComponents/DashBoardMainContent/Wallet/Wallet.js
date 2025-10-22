/** @format */
import React, { useMemo, useState } from "react";
import {
  Plus,
  Minus,
  ArrowDownToLine,
  ArrowUpRight,
  MoreHorizontal,
  Check,
  Settings as Gear,
  Wallet as WalletIcon,
} from "lucide-react";
import { SubTitleText } from "../../../../shared/Texts/SubTitleText";
import { DepositModal } from "./modals/DepositModal";
import { WithdrawModal } from "./modals/WithdrawModal";
import { TransferModal } from "./modals/TransferModal";
import CreativeCard from "../../../../shared/Cards/CreativeCard";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import CreativeBadge from "../../../../shared/Badge/CreativeBadge";

/* =============== Primitives =============== */
const Card = ({ className = "", children }) => (
  <div className={`bg-white border border-[#E4E5E8] rounded-lg shadow-sm ${className}`}>
    {children}
  </div>
);

const Dot = ({ color }) => (
  <span
    className="inline-block w-2 h-2 rounded-full align-middle"
    style={{ backgroundColor: color }}
  />
);

const TinyIcon = ({ children }) => (
  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full border border-[#E4E5E8] text-[#98A2B3]">
    {children}
  </span>
);

const StatusText = ({ status }) => {
  const map = {
    Active: { text: "Active", color: "#0A65CC" },
    Pending: { text: "Pending", color: "#B54708" },
    Completed: { text: "Completed", color: "#12B76A" },
  };
  const { text, color } = map[status] || map.Active;
  return (
    <span className="inline-flex items-center gap-1 text-[12px]" style={{ color }}>
      <Dot color={color} />
      {text}
    </span>
  );
};

/* =============== Main =============== */
export const Wallet = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [openDeposit, setOpenDeposit] = useState(false);
  const [openWithdraw, setOpenWithdraw] = useState(false);
  const [openTransfer, setOpenTransfer] = useState(false);

  const tabs = useMemo(
    () => [
      { key: "overview", label: "Overview" },
      { key: "projects", label: "Projects Price" },
      { key: "transactions", label: "Transactions" },
    ],
    []
  );

  const TitleText =
    activeTab === "transactions" ? "My Wallet" : "Wallet";

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-3">
        <WalletIcon className="w-8 h-8 text-blue-600" />
        <h2 className="text-3xl font-bold text-gradient">{TitleText}</h2>
      </div>

      {/* Balance + Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CreativeCard className="col-span-2 p-6 bg-gradient-to-br from-blue-50/50 to-purple-50/50">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-sm text-gray-600 font-medium">Available Balance</p>
              <div className="mt-2 text-4xl font-bold text-gradient">$12,450.00</div>
              <p className="text-xs text-gray-500 mt-2">Last updated: 2 hours ago</p>
              <div className="flex items-center gap-6 mt-4 text-sm font-medium">
                <span className="flex items-center gap-2 text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-600"></span>
                  Available: $12,450
                </span>
                <span className="flex items-center gap-2 text-amber-600">
                  <span className="w-2 h-2 rounded-full bg-amber-600"></span>
                  Pending: $2,800
                </span>
              </div>
            </div>
            <button className="text-sm text-gray-500 hover:text-gray-700 font-medium transition-colors">Hide</button>
          </div>
        </CreativeCard>

        <CreativeCard className="p-6">
          <p className="text-sm text-gray-600 font-semibold mb-4">Quick Actions</p>
          <div className="grid grid-cols-3 gap-3">
            <button
              onClick={() => setOpenDeposit(true)}
              className="h-[80px] border-2 border-gray-200 rounded-xl hover:border-blue-400 hover:bg-blue-50/50 flex flex-col items-center justify-center gap-2 transition-all duration-300 group"
            >
              <Plus className="w-6 h-6 text-blue-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">Deposit</span>
            </button>
            <button
              onClick={() => setOpenWithdraw(true)}
              className="h-[80px] border-2 border-gray-200 rounded-xl hover:border-purple-400 hover:bg-purple-50/50 flex flex-col items-center justify-center gap-2 transition-all duration-300 group"
            >
              <ArrowDownToLine className="w-6 h-6 text-purple-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-purple-600 transition-colors">Withdraw</span>
            </button>
            <button
              onClick={() => setOpenTransfer(true)}
              className="h-[80px] border-2 border-gray-200 rounded-xl hover:border-green-400 hover:bg-green-50/50 flex flex-col items-center justify-center gap-2 transition-all duration-300 group"
            >
              <ArrowUpRight className="w-6 h-6 text-green-600 group-hover:scale-110 transition-transform" />
              <span className="text-sm font-medium text-gray-700 group-hover:text-green-600 transition-colors">Transfer</span>
            </button>
          </div>
        </CreativeCard>
      </div>

      {/* Tabs + Gear */}
      <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
        {tabs.map((t) => (
          <button
            key={t.key}
            onClick={() => setActiveTab(t.key)}
            className={`px-5 py-2.5 rounded-xl text-[15px] font-semibold transition-all duration-300 ${
              activeTab === t.key
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
            }`}
          >
            {t.label}
          </button>
        ))}
        <div className="ml-auto">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Gear className="w-5 h-5 text-gray-500 hover:text-blue-600 transition-colors" />
          </button>
        </div>
      </div>

      {/* Content */}
      {activeTab === "overview" && (
        <OverviewTab
          onDeposit={() => setOpenDeposit(true)}
          onWithdraw={() => setOpenWithdraw(true)}
          onTransfer={() => setOpenTransfer(true)}
        />
      )}
      {activeTab === "projects" && <ProjectsPriceTab />}
      {activeTab === "transactions" && <TransactionsTab />}

      {/* Modals */}
      {openDeposit && <DepositModal onClose={() => setOpenDeposit(false)} />}
      {openWithdraw && <WithdrawModal onClose={() => setOpenWithdraw(false)} />}
      {openTransfer && <TransferModal onClose={() => setOpenTransfer(false)} />}
    </div>
  );
};

/* =============== Overview (exact like shots) =============== */
const OverviewItem = ({ name, reserved, status, rightAmount, rightNote }) => (
  <div className="flex items-center justify-between px-4 py-3 rounded-md border border-[#E4E5E8] bg-[#F9FAFB]">
    <div>
      <div className="text-[13px] text-[#18191C]">{name}</div>
      <div className="text-[12px] text-[#98A2B3] flex items-center gap-2">
        <span>Reserved: {reserved}</span>
        <span className="mx-1">•</span>
        <StatusText status={status} />
      </div>
    </div>
    <div className="text-right">
      <div className="text-[13px] text-[#18191C] font-medium">{rightAmount}</div>
      <div className="text-[12px] text-[#98A2B3]">{rightNote}</div>
    </div>
  </div>
);

const IconBubble = ({ tone, children }) => {
  const map = {
    blue: { bg: "#EDF5FF", fg: "#0A65CC" },
    red: { bg: "#FFECEB", fg: "#B42318" },
    gray: { bg: "#EEF2F6", fg: "#344054" },
  };
  const c = map[tone] || map.blue;
  return (
    <span
      className="inline-flex items-center justify-center w-7 h-7 rounded-md"
      style={{ background: c.bg, color: c.fg }}
    >
      {children}
    </span>
  );
};

const OverviewTxRow = ({ tone, title, sub, amount, status }) => {
  const toneMap = {
    Completed: { color: "#12B76A" },
    Pending: { color: "#B54708" },
  };
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        {tone === "deposit" && (
          <IconBubble tone="blue">
            <Plus className="w-4 h-4" />
          </IconBubble>
        )}
        {tone === "withdraw" && (
          <IconBubble tone="red">
            <Minus className="w-4 h-4" />
          </IconBubble>
        )}
        {tone === "transfer" && (
          <IconBubble tone="blue">
            <ArrowUpRight className="w-4 h-4" />
          </IconBubble>
        )}
        <div>
          <div className="text-[13px] text-[#18191C]">{title}</div>
          <div className="text-[12px] text-[#98A2B3]">{sub}</div>
        </div>
      </div>

      <div className="text-right">
        <div
          className={`text-[12px] ${
            tone === "withdraw"
              ? "text-[#B42318]"
              : tone === "transfer"
              ? "text-[#B54708]"
              : "text-[#027A48]"
          }`}
        >
          {amount}
        </div>
        <div
          className="text-[12px] inline-flex items-center gap-1"
          style={{ color: toneMap[status]?.color }}
        >
          <Dot color={toneMap[status]?.color} />
          {status}
        </div>
      </div>
    </div>
  );
};

const OverviewTab = ({ onDeposit, onWithdraw, onTransfer }) => {
  return (
    <div className="space-y-5">
      {/* Recent Projects */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[14px] font-semibold text-[#18191C]">Recent Projects</p>
          <button className="text-[12px] text-[#0A65CC]">View All</button>
        </div>
        <div className="space-y-3">
          <OverviewItem
            name="E-commerce Platform"
            reserved="$2,500"
            status="Active"
            rightAmount="$2,500"
            rightNote="75% complete"
          />
          <OverviewItem
            name="Mobile App Redesign"
            reserved="$1,800"
            status="Pending"
            rightAmount="$1,800"
            rightNote="0% complete"
          />
          <OverviewItem
            name="Marketing Campaign"
            reserved="$950"
            status="Completed"
            rightAmount="$950"
            rightNote="100% complete"
          />
        </div>
      </Card>

      {/* Recent Transactions */}
      <Card className="p-5">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[14px] font-semibold text-[#18191C]">Recent Transactions</p>
          <button className="text-[12px] text-[#0A65CC]">View All</button>
        </div>
        <div className="space-y-6">
          <OverviewTxRow
            tone="deposit"
            title="Deposit"
            sub="Project milestone payment"
            amount="+$5,000"
            status="Completed"
          />
          <OverviewTxRow
            tone="withdraw"
            title="Withdraw"
            sub="Team payment"
            amount="-$1,200"
            status="Completed"
          />
          <OverviewTxRow
            tone="transfer"
            title="Transfer"
            sub="Project fund allocation"
            amount="-$800"
            status="Pending"
          />
          <OverviewTxRow
            tone="deposit"
            title="Deposit"
            sub="Client payment"
            amount="+$2,500"
            status="Completed"
          />
        </div>
      </Card>
    </div>
  );
};

/* =============== Projects Price (unchanged visual; matches shot) =============== */
const StatCard = ({ title, value, badge }) => (
  <Card className="p-4">
    <p className="text-[11px] text-[#98A2B3] mb-1">{title}</p>
    <div className="flex items-center justify-between">
      <p className="text-[18px] font-semibold">{value}</p>
      {badge ? <TinyIcon>{badge}</TinyIcon> : null}
    </div>
  </Card>
);

const ProjectsPriceTab = () => {
  const rows = [
    {
      project: "E-commerce Platform",
      desc: "Complete redesign of e-commerce platform with modern UI/UX.",
      client: "TechCorp Inc.",
      amount: "$2,500",
      status: "Active",
    },
    {
      project: "Mobile App Redesign",
      desc: "Mobile application redesign for iOS and Android platforms.",
      client: "StartupXYZ",
      amount: "$1,800",
      status: "Pending",
    },
    {
      project: "Marketing Campaign",
      desc: "Digital marketing campaign design and implementation.",
      client: "BrandCo",
      amount: "$950",
      status: "Completed",
    },
    {
      project: "Data Analytics Tool",
      desc: "Custom analytics dashboard development.",
      client: "DataFlow Ltd.",
      amount: "$3,200",
      status: "Active",
    },
    {
      project: "Website Optimization",
      desc: "Performance optimization and SEO improvements.",
      client: "WebSolutions",
      amount: "$1,200",
      status: "Pending",
    },
    {
      project: "Brand Identity Design",
      desc: "Complete brand identity package including logo and guidelines.",
      client: "Creative Agency",
      amount: "$2,800",
      status: "Active",
    },
  ];

  const statusPill = (s) =>
    s === "Active" ? (
      <span className="px-2 py-[2px] rounded text-[11px] bg-[#E7F0FB] text-[#0A65CC]">Active</span>
    ) : s === "Pending" ? (
      <span className="px-2 py-[2px] rounded text-[11px] bg-[#FFFAEB] text-[#B54708]">Pending</span>
    ) : (
      <span className="px-2 py-[2px] rounded text-[11px] bg-[#ECFDF3] text-[#027A48]">Completed</span>
    );

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <StatCard title="Total Reserved" value="$12,450" />
        <StatCard title="Active Projects" value="3" />
        <StatCard title="Pending Projects" value="2" />
        <StatCard title="Completed" value="1" badge={<Check className="w-3 h-3" />} />
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-medium">Projects Price</p>
          <div className="flex items-center gap-2">
            <input
              className="h-8 w-[180px] border border-[#E4E5E8] rounded px-3 text-[12px]"
              placeholder="Search projects..."
            />
            <select className="h-8 border border-[#E4E5E8] rounded px-2 text-[12px]">
              <option>All Projects</option>
            </select>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full text-[12px]">
            <thead>
              <tr className="text-left text-[#98A2B3] border-b border-[#F1F2F4]">
                <th className="py-2 font-medium">Project Details</th>
                <th className="py-2 font-medium">Client</th>
                <th className="py-2 font-medium">Reserved Amount</th>
                <th className="py-2 font-medium">Status</th>
                <th className="py-2 font-medium">Progress</th>
                <th className="py-2 font-medium">Timeline</th>
                <th className="py-2 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r, i) => (
                <tr key={i} className="border-b border-[#F1F2F4] align-top">
                  <td className="py-3 pr-4">
                    <div className="text-[#18191C]">{r.project}</div>
                    <div className="text-[#98A2B3]">{r.desc}</div>
                  </td>
                  <td className="py-3 pr-4 text-[#98A2B3]">{r.client}</td>
                  <td className="py-3 pr-4">{r.amount}</td>
                  <td className="py-3 pr-4">{statusPill(r.status)}</td>
                  <td className="py-3 pr-4">
                    <div className="h-2 rounded bg-[#F2F4F7] w-24" />
                  </td>
                  <td className="py-3 pr-4 text-[#98A2B3]">—</td>
                  <td className="py-3 text-right">
                    <button className="inline-flex items-center justify-center w-8 h-8 rounded hover:bg-[#F2F4F7]">
                      <MoreHorizontal className="w-4 h-4 text-[#98A2B3]" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

/* =============== Transactions (matches shot) =============== */
const PillStat = ({ title, value, icon }) => (
  <Card className="p-4">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-[11px] text-[#98A2B3]">{title}</p>
        <p className="text-[18px] font-semibold mt-1">{value}</p>
      </div>
      <TinyIcon>{icon}</TinyIcon>
    </div>
  </Card>
);

const TransactionsTab = () => {
  const items = [
    { type: "Deposit", detail: "Project milestone payment", amount: "+$5,000", status: "Completed", tone: "green" },
    { type: "Withdraw", detail: "Team payment", amount: "-$1,200", status: "Completed", tone: "red" },
    { type: "Transfer", detail: "Project fund allocation", amount: "-$800", status: "Pending", tone: "orange" },
    { type: "Deposit", detail: "Client payment", amount: "+$2,500", status: "Completed", tone: "green" },
  ];
  const toneMap = {
    green: "text-[#027A48]",
    red: "text-[#B42318]",
    orange: "text-[#B54708]",
  };

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <PillStat title="Total Deposits" value="$12,500" icon="+" />
        <PillStat title="Total Withdrawals" value="$2,150" icon="-" />
        <PillStat title="Pending" value="2" icon="•" />
        <PillStat title="Failed" value="1" icon="•" />
      </div>

      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-[12px] font-medium">Transaction History</p>
          <div className="flex items-center gap-2">
            <input className="h-8 w-[200px] border border-[#E4E5E8] rounded px-3 text-[12px]" placeholder="Search transactions..." />
            <select className="h-8 border border-[#E4E5E8] rounded px-2 text-[12px]">
              <option>All Types</option>
            </select>
            <select className="h-8 border border-[#E4E5E8] rounded px-2 text-[12px]">
              <option>All Status</option>
            </select>
          </div>
        </div>

        <div className="space-y-6">
          {items.map((t, i) => (
            <div key={i} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {t.type === "Deposit" && (
                  <IconBubble tone="blue">
                    <Plus className="w-4 h-4" />
                  </IconBubble>
                )}
                {t.type === "Withdraw" && (
                  <IconBubble tone="red">
                    <Minus className="w-4 h-4" />
                  </IconBubble>
                )}
                {t.type === "Transfer" && (
                  <IconBubble tone="blue">
                    <ArrowUpRight className="w-4 h-4" />
                  </IconBubble>
                )}
                <div>
                  <p className="text-[13px] text-[#18191C]">{t.type}</p>
                  <p className="text-[12px] text-[#98A2B3]">{t.detail}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={`text-[12px] ${toneMap[t.tone]}`}>{t.amount}</p>
                <p className={`text-[12px] inline-flex items-center gap-1 ${t.status === "Completed" ? "text-[#12B76A]" : "text-[#B54708]"}`}>
                  <Dot color={t.status === "Completed" ? "#12B76A" : "#B54708"} />
                  {t.status}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default Wallet;

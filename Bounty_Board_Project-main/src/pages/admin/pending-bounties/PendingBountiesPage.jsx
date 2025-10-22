import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { useAdminBounties } from "../../../context/AdminBountiesContext";
import BountyRow from "./BountyRow";

const HeaderStat = ({ title, value, color }) => (
  <div className="bg-white rounded-lg border border-[#E5E7EB] p-5">
    <div className="flex items-center justify-between mb-2">
      <p className="text-[12px] text-[#6B7280]">{title}</p>
      <div className={`w-10 h-10 rounded-lg ${color} bg-opacity-10 flex items-center justify-center`}>
        <span className={`w-3 h-3 rounded-full ${color}`}></span>
      </div>
    </div>
    <p className="text-[28px] font-bold text-[#111827]">{value}</p>
  </div>
);

const TableHeader = () => (
  <div className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_1.2fr] gap-4 px-6 py-3 bg-gray-50 border-b border-[#E5E7EB]">
    <div className="text-[12px] font-medium text-[#6B7280] flex items-center gap-1">
      Bounty Name
      <span className="text-[10px]">↕</span>
    </div>
    <div className="text-[12px] font-medium text-[#6B7280] flex items-center gap-1">
      Category
      <span className="text-[10px]">↕</span>
    </div>
    <div className="text-[12px] font-medium text-[#6B7280]">Status</div>
    <div className="text-[12px] font-medium text-[#6B7280] flex items-center gap-1">
      Price
      <span className="text-[10px]">↕</span>
    </div>
    <div className="text-[12px] font-medium text-[#6B7280]">Actions</div>
  </div>
);

const Section = ({
  title,
  items,
  variant,
  showStatusFilter = false,
}) => {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [category, setCategory] = useState("all");
  const [limit, setLimit] = useState(4);

  const filtered = useMemo(() => {
    let x = items;
    if (search) {
      const s = search.toLowerCase();
      x = x.filter(
        (b) =>
          b.posterName.toLowerCase().includes(s) ||
          b.posterEmail.toLowerCase().includes(s)
      );
    }
    if (statusFilter !== "all") x = x.filter((b) => b.status === statusFilter);
    if (category !== "all") x = x.filter((b) => b.category === category);
    return x;
  }, [items, search, statusFilter, category]);

  return (
    <div className="mt-8">
      <h2 className="text-[20px] font-semibold text-[#111827] mb-4">{title}</h2>
      
      <div className="bg-white rounded-xl border border-[#E5E7EB] overflow-hidden">
        {/* Search and Filters */}
        <div className="p-4 flex items-center justify-between border-b border-[#E5E7EB]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Search
                size={18}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search users..."
                className="w-[280px] pl-10 pr-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#3B82F6]"
              />
            </div>

            {showStatusFilter && (
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#6B7280] focus:outline-none focus:border-[#3B82F6] bg-white"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
            )}

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-3 py-2.5 rounded-lg border border-[#E5E7EB] text-[13px] text-[#6B7280] focus:outline-none focus:border-[#3B82F6] bg-white"
            >
              <option value="all">All Category</option>
              <option value="Category Name">Category Name</option>
            </select>
          </div>

          <div className="text-[12px] text-[#6B7280]">
            {filtered.length} Project found
          </div>
        </div>

        {/* Table */}
        <TableHeader />
        <div className="divide-y divide-[#E5E7EB]">
          {filtered.length === 0 ? (
            <div className="px-6 py-12 text-center text-[#6B7280]">
              No bounties found
            </div>
          ) : (
            filtered.slice(0, limit).map((b) => (
              <BountyRow key={b.id} bounty={b} variant={variant} />
            ))
          )}
        </div>

        {/* View All Button */}
        {filtered.length > limit && (
          <div className="p-4 text-center border-t border-[#E5E7EB]">
            <button
              onClick={() => setLimit((n) => n + 4)}
              className="px-4 py-2 rounded-lg border border-[#3B82F6] text-[#3B82F6] text-[12px] font-medium hover:bg-blue-50 transition-colors"
            >
              View All
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const PendingBountiesPage = () => {
  const { byStatus, stats } = useAdminBounties();

  return (
    <div className="space-y-6">
      {/* Title */}
      <h1 className="text-[24px] font-bold text-[#111827]">Pending Bounties</h1>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <HeaderStat
          title="Total Bounties"
          value={stats.total}
          color="bg-[#3B82F6]"
        />
        <HeaderStat
          title="Approved Projects"
          value={stats.approved}
          color="bg-[#22C55E]"
        />
        <HeaderStat
          title="Rejected Projects"
          value={stats.rejected}
          color="bg-[#EF4444]"
        />
      </div>

      {/* Pending Bounties */}
      <Section
        title="Pending Bounties"
        items={byStatus("pending")}
        variant="pending"
        showStatusFilter={true}
      />

      {/* Approved Bounties */}
      <Section
        title="Approved Bounties"
        items={byStatus("approved")}
        variant="approved"
        showStatusFilter={false}
      />

      {/* Rejected Bounties */}
      <Section
        title="Rejected Bounties"
        items={byStatus("rejected")}
        variant="rejected"
        showStatusFilter={false}
      />
    </div>
  );
};

export default PendingBountiesPage;

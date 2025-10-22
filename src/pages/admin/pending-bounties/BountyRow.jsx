import { useNavigate } from "react-router-dom";
import { CategoryTag, StatusBadge } from "./Badges";
import { useAdminBounties } from "../../../context/AdminBountiesContext";

const BountyRow = ({ bounty, variant = "pending" }) => {
  const { approve, reject } = useAdminBounties();
  const navigate = useNavigate();

  const handleApprove = () => {
    approve(bounty.id);
  };

  const handleReject = () => {
    reject(bounty.id);
  };

  const handleView = () => {
    navigate(`/admin/pending-bounties/${bounty.id}`);
  };

  return (
    <div className="grid grid-cols-[2fr_1.2fr_1fr_0.8fr_1.2fr] gap-4 px-6 py-4 hover:bg-gray-50 transition-colors items-center">
      {/* Bounty name + email */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-[#3B82F6] flex items-center justify-center text-white font-semibold text-[14px]">
          {bounty.initials}
        </div>
        <div>
          <div className="text-[14px] font-medium text-[#111827]">{bounty.posterName}</div>
          <div className="text-[12px] text-[#6B7280]">{bounty.posterEmail}</div>
        </div>
      </div>

      {/* Category */}
      <div>
        <CategoryTag text={bounty.category} />
      </div>

      {/* Status */}
      <div>
        <StatusBadge status={bounty.status} />
      </div>

      {/* Price */}
      <div className="text-[14px] font-medium text-[#111827]">{bounty.price}$</div>

      {/* Actions */}
      <div className="flex items-center gap-2">
        {variant === "pending" ? (
          <>
            <button
              onClick={handleReject}
              className="px-3 py-1.5 rounded-md bg-[#EF4444] text-white text-[12px] font-medium hover:bg-[#DC2626] transition-colors"
            >
              Reject
            </button>
            <button
              onClick={handleApprove}
              className="px-3 py-1.5 rounded-md bg-[#22C55E] text-white text-[12px] font-medium hover:bg-[#16A34A] transition-colors"
            >
              Approve
            </button>
            <button
              onClick={handleView}
              className="px-3 py-1.5 rounded-md bg-[#3B82F6] text-white text-[12px] font-medium hover:bg-[#2563EB] transition-colors"
            >
              View
            </button>
          </>
        ) : (
          <button
            onClick={handleView}
            className="px-4 py-2 rounded-md bg-[#3B82F6] text-white text-[12px] font-medium hover:bg-[#2563EB] transition-colors"
          >
            View project Details
          </button>
        )}
      </div>
    </div>
  );
};

export default BountyRow;

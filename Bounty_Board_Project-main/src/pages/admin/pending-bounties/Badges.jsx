import { CheckCircle, Clock, X } from "lucide-react";

export const CategoryTag = ({ text = "Category Name" }) => (
  <span className="inline-block px-3 py-1.5 rounded-md text-[12px] font-medium bg-[#EBF5FF] text-[#3B82F6]">
    {text}
  </span>
);

export const StatusBadge = ({ status }) => {
  const statusConfig = {
    pending: {
      bg: "bg-orange-50",
      text: "text-orange-600",
      icon: <Clock size={14} className="text-orange-600" />,
      label: "Pending"
    },
    approved: {
      bg: "bg-green-50",
      text: "text-green-600",
      icon: <CheckCircle size={14} className="text-green-600" />,
      label: "Approved"
    },
    rejected: {
      bg: "bg-red-50",
      text: "text-red-600",
      icon: <X size={14} className="text-red-600" />,
      label: "Rejected"
    }
  };

  const config = statusConfig[status] || statusConfig.pending;

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md ${config.bg} ${config.text} text-[12px] font-medium`}>
      {config.icon}
      {config.label}
    </span>
  );
};

import { Button, Card, Tag, Avatar } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { useAdminBounties } from "../../../context/AdminBountiesContext";
import { StatusBadge } from "../pending-bounties/Badges";
import {
  ArrowLeftOutlined,
  CheckOutlined,
  CloseOutlined,
  BellOutlined,
} from "@ant-design/icons";

const InfoChip = ({ label, value }) => (
  <div className="flex items-center gap-2">
    <div className="text-[#6B7280] text-[12px]">{label}</div>
    <div className="font-medium text-[#111827]">{value}</div>
  </div>
);

const AdminBountyDetails = () => {
  const { id } = useParams();
  const { getById, approve, reject } = useAdminBounties();
  const bounty = getById(id);
  const navigate = useNavigate();

  if (!bounty) {
    return (
      <div className="p-6">
        <Button onClick={() => navigate(-1)}>Back</Button>
        <div className="mt-4">Bounty not found.</div>
      </div>
    );
  }

  return (
    <div className="px-6 py-5">
      {/* Top bar */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Button icon={<ArrowLeftOutlined />} onClick={() => navigate(-1)}>
            Back
          </Button>
          <div className="text-[20px] font-[700]">Pending Bounties</div>
        </div>

        <div className="flex items-center gap-4">
          <BellOutlined className="text-[#6B7280]" />
          <div className="flex items-center gap-2">
            <Avatar className="bg-[#3B82F6]">AU</Avatar>
            <div className="text-[12px]">
              <div className="text-[#111827]">Admin User</div>
              <div className="text-[#6B7280]">admin@company.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Banner card */}
      <Card className="mt-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-4">
            <div className="aspect-[16/10] rounded-md overflow-hidden bg-gray-200" />
          </div>

          <div className="lg:col-span-8">
            <div className="flex items-start justify-between">
              <div className="text-[24px] font-[700] text-[#111827]">{bounty.title}</div>
              <div className="flex items-center gap-2">
                {bounty.status !== "rejected" && (
                  <Button
                    icon={<CloseOutlined />}
                    className="!bg-[#FEE2E2] !text-[#EF4444] hover:!bg-[#FCA5A5] !border-none"
                    onClick={() => reject(bounty.id)}
                  >
                    Reject
                  </Button>
                )}
                {bounty.status !== "approved" && (
                  <Button
                    icon={<CheckOutlined />}
                    className="!bg-[#DCFCE7] !text-[#16A34A] hover:!bg-[#BBF7D0] !border-none"
                    onClick={() => approve(bounty.id)}
                  >
                    Approve
                  </Button>
                )}
              </div>
            </div>

            <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 mt-3">
              <InfoChip label="BOUNTY POSTED" value="14 June, 2025" />
              <InfoChip label="BOUNTY EXPIRE IN" value="14 July, 2025" />
              <InfoChip label="CATEGORY" value={bounty.category} />
              <InfoChip label="SALARY" value={`${bounty.price}0$`} />
              <InfoChip label="STATUS" value={<StatusBadge status={bounty.status} />} />
              <InfoChip label="MILESTONES" value={bounty.milestones.length} />
            </div>
          </div>
        </div>
      </Card>

      {/* Description */}
      <Card className="mt-4">
        <div className="text-[16px] font-[700] mb-2">Project Description</div>
        <p className="text-[#374151] leading-6">{bounty.description}</p>

        <div className="text-[16px] font-[700] mt-6 mb-2">Project Requirements</div>
        <ul className="list-disc ml-6 text-[#374151]">
          {bounty.requirements.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <div className="text-[16px] font-[700] mt-6 mb-2">Technical Details</div>
        <ul className="list-disc ml-6 text-[#374151]">
          {bounty.technical.map((r, i) => (
            <li key={i}>{r}</li>
          ))}
        </ul>

        <div className="text-[16px] font-[700] mt-6 mb-2">Languages & Skills</div>
        <div className="flex flex-wrap gap-2">
          {["Python", "C++", "Objective-C", "Swift"].map((t) => (
            <Tag key={t} color="default" className="!m-0">{t}</Tag>
          ))}
        </div>

        <div className="text-[16px] font-[700] mt-6 mb-2">Skills & Technologies</div>
        <div className="flex flex-wrap gap-2">
          {["Crash Debugging", "Xcode", "Model Conversion", "TFLite", "Static Libraries", "ONNX Runtime", "Swift"].map((t) => (
            <Tag key={t} className="!m-0">{t}</Tag>
          ))}
        </div>

        <div className="text-[16px] font-[700] mt-6 mb-2">Project Resources</div>
        <div className="space-y-2">
          {bounty.resources.map((r, i) => (
            <div key={i} className="flex items-center justify-between rounded-md border px-3 py-2">
              <div>
                <div className="font-medium">{r.label}</div>
                {r.url && <a className="text-[#3B82F6]" href={r.url} target="_blank" rel="noreferrer">{r.url}</a>}
                {r.note && <div className="text-[12px] text-gray-500">{r.note}</div>}
              </div>
              <Button size="small">Download</Button>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
};

export default AdminBountyDetails;

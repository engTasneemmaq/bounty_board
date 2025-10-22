import { Typography } from "antd";
import { Link } from "react-router-dom";
import BountyBoard from "../../assets/logos/BountyBoard.svg";

const { Title, Text } = Typography;

export default function ResetPasswordSuccess() {
  return (
    <div className="min-h-screen bg-[#ECE6E4]/40 flex items-center justify-center px-6">
      <div className="w-full max-w-[720px] bg-white rounded-xl shadow-sm p-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={BountyBoard} alt="Bounty Board" className="h-8" />
        </div>

        <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-[#1677FF]/10 flex items-center justify-center">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M20 6L9 17l-5-5" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        <Title level={4} className="!m-0">
          Congratulations, Reset password successfully!
        </Title>
        <Text className="text-gray-500 block mb-6">
          You can log to back into the system!
        </Text>

        <Link
          to="/login"
          className="inline-flex h-[40px] items-center justify-center px-6 rounded-md bg-[#1677FF] hover:bg-[#1668DC] text-white font-semibold"
        >
          Sign in
        </Link>
      </div>
    </div>
  );
}

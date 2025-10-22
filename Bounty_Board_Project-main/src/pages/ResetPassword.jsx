// import { useState } from "react";
// import { Input, Typography } from "antd";
// import { Link } from "react-router-dom";
// import BountyBoard from "../assets/logos/BountyBoard.svg";

// const { Title, Text } = Typography;

// export default function ResetPassword() {
//   const [pwd, setPwd] = useState("");
//   const [pwd2, setPwd2] = useState("");
//   const [done, setDone] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     if (!pwd || pwd !== pwd2) return; // يمكن إضافة رسائل خطأ
//     // TODO: نداء API لتغيير كلمة المرور
//     setDone(true);
//   };

//   return (
//     <div className="min-h-screen bg-[#ECE6E4]/40 flex items-center justify-center px-6">
//       <div className="w-full max-w-[720px] bg-white rounded-xl shadow-sm p-10 text-center">
//         {/* الشعار فقط بدون Admin panel */}
//         <div className="flex items-center justify-center gap-3 mb-8">
//           <img src={BountyBoard} alt="Bounty Board" className="h-8" />
//         </div>

//         {!done ? (
//           <>
//             <Title level={3} className="!m-0">Reset Password</Title>
//             <Text className="text-gray-500">Please enter your new password below</Text>

//             <form onSubmit={onSubmit} className="mt-6 space-y-3 text-left">
//               <Input.Password
//                 placeholder="New Password"
//                 className="h-[44px]"
//                 value={pwd}
//                 onChange={(e) => setPwd(e.target.value)}
//               />
//               <Input.Password
//                 placeholder="Confirm Password"
//                 className="h-[44px]"
//                 value={pwd2}
//                 onChange={(e) => setPwd2(e.target.value)}
//               />
//               <button
//                 type="submit"
//                 className="h-[44px] w-full rounded-md bg-[#1677FF] hover:bg-[#1668DC] text-white font-semibold inline-flex items-center justify-center gap-2"
//               >
//                 Reset Password <span aria-hidden>→</span>
//               </button>
//             </form>
//           </>
//         ) : (
//           <>
//             <div className="mx-auto mb-5 h-16 w-16 rounded-full bg-[#1677FF]/10 flex items-center justify-center">
//               <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
//                 <path d="M20 6L9 17l-5-5" stroke="#1677FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
//               </svg>
//             </div>
//             <Title level={4} className="!m-0">
//               Congratulations, Reset password successfully!
//             </Title>
//             <Text className="text-gray-500 block mb-6">
//               You can log to back into the system!
//             </Text>
//             <Link
//               to="/login"
//               className="inline-flex h-[40px] items-center justify-center px-6 rounded-md bg-[#1677FF] hover:bg-[#1668DC] text-white font-semibold"
//             >
//               Sign in
//             </Link>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }



// src/pages/ResetPassword.jsx
import { useState } from "react";
import { Input, Typography } from "antd";
import BountyBoard from "../assets/logos/BountyBoard.svg";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

export default function ResetPassword() {
  const [pwd, setPwd] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();
    setErr("");

    if (!pwd || !pwd2) return setErr("Please fill both fields.");
    if (pwd !== pwd2) return setErr("Passwords do not match.");

    try {
      setLoading(true);
      // TODO: نداء API لتغيير كلمة المرور
      // await api.resetPassword({ password: pwd })
      navigate("/reset-password-success"); // <-- يفتح شاشة النجاح
    } catch (ex) {
      setErr("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#ECE6E4]/40 flex items-center justify-center px-6">
      <div className="w-full max-w-[720px] bg-white rounded-xl shadow-sm p-10 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <img src={BountyBoard} alt="Bounty Board" className="h-8" />
        </div>

        <Title level={3} className="!m-0">Reset Password</Title>
        <Text className="text-gray-500">Please enter your new password below</Text>

        <form onSubmit={onSubmit} className="mt-6 space-y-3 text-left">
          <Input.Password
            placeholder="New Password"
            className="h-[44px]"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
          <Input.Password
            placeholder="Confirm Password"
            className="h-[44px]"
            value={pwd2}
            onChange={(e) => setPwd2(e.target.value)}
          />

          {err && <p className="text-red-500 text-sm">{err}</p>}

          <button
            type="submit"
            disabled={loading}
            className="h-[44px] w-full rounded-md bg-[#1677FF] hover:bg-[#1668DC] disabled:opacity-60 text-white font-semibold inline-flex items-center justify-center gap-2"
          >
            {loading ? "Please wait..." : <>Reset Password <span aria-hidden>→</span></>}
          </button>
        </form>
      </div>
    </div>
  );
}

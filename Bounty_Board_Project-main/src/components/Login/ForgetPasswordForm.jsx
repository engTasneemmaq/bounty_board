// // src/components/Login/ForgetPasswordForm.jsx
// import { useState } from "react";
// import { Input } from "antd";
// import ArrowButton from "../../shared/Buttons/ArrowButton";
// import GoogleSignInButton from "./GoogleSignIn";

// const ForgetPasswordForm = () => {
//   const [email, setEmail] = useState("");

//   const onReset = (e) => {
//     e.preventDefault();
//     // TODO: trigger reset password flow
//     // console.log({ email });
//   };

//   return (
//     <form onSubmit={onReset} className="flex flex-col gap-[20px]">
//       <Input
//         className="h-[59px] w-full"
//         placeholder="Email address"
//         size="large"
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />

//       <ArrowButton text="Reset Password" className="h-[57px] w-full text-[18px]" type="submit" />

//       <div className="relative flex items-center">
//         <div className="flex-grow border-t border-gray-300" />
//         <span className="px-3 text-gray-500 text-xs font-medium">or</span>
//         <div className="flex-grow border-t border-gray-300" />
//       </div>

//       <GoogleSignInButton />
//     </form>
//   );
// };

// export default ForgetPasswordForm;


import { useState } from "react";
import { Input } from "antd";
import GoogleSignInButton from "./GoogleSignIn";
import { useNavigate } from "react-router-dom";

const ForgetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const onReset = (e) => {
    e.preventDefault();
    // TODO: نداء API لإرسال إيميل الريست إن لزم
    navigate("/reset-password");
  };

  return (
    <form onSubmit={onReset} className="flex flex-col gap-[20px]">
      <Input
        className="h-[59px] w-full"
        placeholder="Email address"
        size="large"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className="h-[57px] w-full text-[18px] rounded-md bg-[#1677FF] hover:bg-[#1668DC] text-white font-semibold inline-flex items-center justify-center gap-2 transition"
      >
        Reset Password <span aria-hidden>→</span>
      </button>

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="px-3 text-gray-500 text-xs font-medium">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      <GoogleSignInButton />
    </form>
  );
};

export default ForgetPasswordForm;

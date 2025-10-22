// // src/pages/admin/AdminLogin.js
// import { Input, Button, Checkbox, Typography } from "antd";
// import Logo from "logo.svg"; 

// const { Title, Text } = Typography;

// const AdminLogin = () => {
//   return (
//     <div className="min-h-screen flex flex-col items-center bg-[#FAFAFA]">
//       <div className="w-full pt-6">
//         <div className="w-fit mx-auto">
//           <img src={Logo} alt="Bounty Board" className="h-10 w-auto select-none" />

//           <div className="pl-[56px] -mt-1 text-[13px] leading-[16px] text-[#6B7280]">
//             Admin Panel
//           </div>
//         </div>
//       </div>

//       {/* ===== Card ===== */}
//       <div className="mt-8 bg-white shadow-md rounded-2xl p-8 w-[420px]">
//         <Title
//           level={3}
//           className="!m-0 !text-[26px] !text-center !font-[700] text-[#111827]"
//         >
//           Admin Login
//         </Title>
//         <Text className="block text-center text-gray-500 mt-1 mb-6">
//           Access your admin dashboard securely
//         </Text>

//         <div className="flex flex-col gap-4">
//           <Input
//             size="large"
//             placeholder="Email Address"
//             className="h-[54px] rounded-md"
//           />
//           <Input.Password
//             size="large"
//             placeholder="Password"
//             className="h-[54px] rounded-md"
//           />

//           <div className="flex items-center justify-between">
//             <Checkbox>Keep me logged in</Checkbox>
//             <button
//               className="text-[#1677FF] text-sm font-medium hover:text-[#1668DC]"
//               onClick={() => (window.location.hash = "#/admin/reset-password")}
//             >
//               Forgot Password?
//             </button>
//           </div>

//           <Button
//             type="primary"
//             size="large"
//             className="w-full !h-[50px] !bg-[#1677FF] hover:!bg-[#1668DC] !rounded-md !font-[600]"
//           >
//             Sign In to Admin Panel
//           </Button>

//           {/* Divider */}
//           <div className="flex items-center my-2">
//             <div className="flex-grow border-t border-gray-300" />
//             <span className="mx-3 text-gray-500 text-sm">or</span>
//             <div className="flex-grow border-t border-gray-300" />
//           </div>

//           {/* Google button */}
//           <Button
//             size="large"
//             className="w-full !h-[50px] bg-white border border-gray-300 hover:bg-gray-50 !rounded-md"
//           >
//             <span className="flex items-center gap-2 justify-center font-[600] text-[#374151]">
//               <svg
//                 width="20"
//                 height="20"
//                 viewBox="0 0 24 25"
//                 fill="none"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   d="M20.16 12.6932C20.16 12.0905 20.1059 11.511 20.0054 10.9546H12V14.2425H16.5745C16.3775 15.3051 15.7786 16.2053 14.8784 16.808V18.9407H17.6254C19.2327 17.461 20.16 15.2819 20.16 12.6932Z"
//                   fill="#4285F4"
//                 />
//                 <path
//                   d="M12 21C14.295 21 16.2191 20.2389 17.6254 18.9407L14.8784 16.8079C14.1173 17.3179 13.1436 17.6193 12 17.6193C9.78611 17.6193 7.91224 16.1241 7.24383 14.115H4.40405V16.3173C5.80269 19.0952 8.67724 21 12 21Z"
//                   fill="#34A853"
//                 />
//                 <path
//                   d="M7.24384 14.1151C7.07384 13.6051 6.97725 13.0603 6.97725 12.5001C6.97725 11.9399 7.07384 11.3951 7.24384 10.8851V8.6828H4.40406C3.82838 9.8303 3.49997 11.1285 3.49997 12.5001C3.49997 13.8717 3.82838 15.1699 4.40406 16.3174L7.24384 14.1151Z"
//                   fill="#FBBC05"
//                 />
//                 <path
//                   d="M12 7.38075C13.2479 7.38075 14.3684 7.80961 15.2493 8.65189L17.6873 6.21393C16.2152 4.84234 14.2911 4.00006 12 4.00006C8.67724 4.00006 5.80269 5.90484 4.40405 8.6828L7.24383 10.8851C7.91224 8.87598 9.78611 7.38075 12 7.38075Z"
//                   fill="#EA4335"
//                 />
//               </svg>
//               Sign in with Google
//             </span>
//           </Button>
//         </div>

//         {/* Footer */}
//         <div className="text-center mt-6 text-xs text-gray-500">
//           © 2024 Bounty Board. All rights reserved. <br />
//           <a className="underline">Privacy Policy</a> ·{" "}
//           <a className="underline">Terms of Service</a> ·{" "}
//           <a className="underline">Support</a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLogin;




// src/pages/admin/AdminLogin.js
import { Input, Button, Checkbox, Typography } from "antd";
import LogoIcon from "logo.svg"; 
const { Title, Text } = Typography;

const AdminLogin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center bg-[#FAFAFA]">
      {/* ===== Header ===== */}
      <div className="w-full pt-6">
        <div className="w-fit mx-auto">
          <div className="flex items-center gap-2">
            <img src={LogoIcon} alt="Logo" className="h-10 w-10" />
            <span className="text-[20px] font-bold text-[#2563EB] font-['Inter']">
              Bounty <span className="text-[#111827]">Board</span>
            </span>
          </div>

          <div className="pl-[54px] -mt-1 text-[13px] leading-[16px] text-[#6B7280]">
            Admin Panel
          </div>
        </div>
      </div>

      {/* ===== Card ===== */}
      <div className="mt-8 bg-white shadow-md rounded-2xl p-8 w-[420px]">
        <Title
          level={3}
          className="!m-0 !text-[26px] !text-center !font-[700] text-[#111827]"
        >
          Admin Login
        </Title>
        <Text className="block text-center text-gray-500 mt-1 mb-6">
          Access your admin dashboard securely
        </Text>

        <div className="flex flex-col gap-4">
          <Input size="large" placeholder="Email Address" className="h-[54px]" />
          <Input.Password size="large" placeholder="Password" className="h-[54px]" />

          <div className="flex items-center justify-between">
            <Checkbox>Keep me logged in</Checkbox>
            <button
              className="text-[#1677FF] text-sm font-medium hover:text-[#1668DC]"
              onClick={() => (window.location.hash = "#/admin/reset-password")}
            >
              Forgot Password?
            </button>
          </div>

          <Button
            type="primary"
            size="large"
            className="w-full !h-[50px] !bg-[#1677FF] hover:!bg-[#1668DC] !rounded-md !font-[600]"
          >
            Sign In to Admin Panel
          </Button>

          {/* Divider */}
          <div className="flex items-center my-2">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-3 text-gray-500 text-sm">or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

          {/* Google button */}
          <Button
            size="large"
            className="w-full !h-[50px] bg-white border border-gray-300 hover:bg-gray-50 !rounded-md"
          >
            <span className="flex items-center gap-2 justify-center font-[600] text-[#374151]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.16 12.6932C20.16 12.0905 20.1059 11.511 20.0054 10.9546H12V14.2425H16.5745C16.3775 15.3051 15.7786 16.2053 14.8784 16.808V18.9407H17.6254C19.2327 17.461 20.16 15.2819 20.16 12.6932Z"
                  fill="#4285F4"
                />
                <path
                  d="M12 21C14.295 21 16.2191 20.2389 17.6254 18.9407L14.8784 16.8079C14.1173 17.3179 13.1436 17.6193 12 17.6193C9.78611 17.6193 7.91224 16.1241 7.24383 14.115H4.40405V16.3173C5.80269 19.0952 8.67724 21 12 21Z"
                  fill="#34A853"
                />
                <path
                  d="M7.24384 14.1151C7.07384 13.6051 6.97725 13.0603 6.97725 12.5001C6.97725 11.9399 7.07384 11.3951 7.24384 10.8851V8.6828H4.40406C3.82838 9.8303 3.49997 11.1285 3.49997 12.5001C3.49997 13.8717 3.82838 15.1699 4.40406 16.3174L7.24384 14.1151Z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 7.38075C13.2479 7.38075 14.3684 7.80961 15.2493 8.65189L17.6873 6.21393C16.2152 4.84234 14.2911 4.00006 12 4.00006C8.67724 4.00006 5.80269 5.90484 4.40405 8.6828L7.24383 10.8851C7.91224 8.87598 9.78611 7.38075 12 7.38075Z"
                  fill="#EA4335"
                />
              </svg>
              Sign in with Google
            </span>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center mt-6 text-xs text-gray-500">
          © 2024 Bounty Board. All rights reserved. <br />
          <a className="underline">Privacy Policy</a> ·{" "}
          <a className="underline">Terms of Service</a> ·{" "}
          <a className="underline">Support</a>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;

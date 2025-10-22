// import InputText from "../../shared/Inputs/InputText";
// import Input from "antd/es/input/Input";
// import { Checkbox} from "antd";
// import CustomCheckbox from "../../shared/Buttons/CustomCheckbox";
// import StanderButton from "../../shared/Buttons/StanderButton";
// import GoogleSignInButton from "./GoogleSignIn";

// const SignInForm = () => {
//     return (
//         <div className="flex flex-col gap-[20px]">
//             <InputText 
//                 placeholder={"Email"} 
//                 className="text-[16px] h-[59px]" 
//             />
//             <Input.Password 
//                 placeholder={"Password"} 
//                 type="password" 
//                 className="text-[16px] h-[59px]" 
//             />
//             <div className="flex items-center justify-between">
//             <Checkbox>Keep me logged in</Checkbox>
//             <button
//               className="text-[#1677FF] text-sm font-medium hover:text-[#1668DC]"
//               onClick={() => (window.location.hash = "")}
//             >
//               Forgot Password?
//             </button>
//           </div>
//             <StanderButton 
//                 text="Sign In" 
//                 className="w-full text-[16px] font-[600] h-[54px]" 
//             />
//             <div className="relative flex items-center">
//                 <div className="flex-grow border-t border-gray-300"></div>
//                 <span className="flex-shrink mx-3 my-3 text-gray-500 text-xs font-medium">or</span>
//                 <div className="flex-grow border-t border-gray-300"></div>
//             </div>
//             <GoogleSignInButton />
//             <div className="text-center mt-3">
//                 <span className="text-gray-500 text-xs">
//                     Need an account?{' '}
//                     <button
//                         className="text-blue-500 hover:text-blue-600 font-medium underline focus:outline-none transition-colors duration-200"
//                     >
//                         Create one
//                     </button>
//                 </span>
//             </div>
//         </div>
//     );
// }

// export default SignInForm;



// src/components/Login/SignInForm.jsx
import { useState } from "react";
import { Input, Checkbox } from "antd";
import { Link, useNavigate, useLocation } from "react-router-dom";
import StanderButton from "../../shared/Buttons/StanderButton";
import GoogleSignInButton from "./GoogleSignIn";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../context/ProfileContext";
import { showMessage } from "../../utils/toast";
import CreativeButton from "../../shared/Buttons/CreativeButton";
import CreativeInput from "../../shared/Inputs/CreativeInput";

const SignInForm = () => {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [keep, setKeep] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { signIn } = useAuth();
  const { setProfile } = useProfile();
  
  // Get redirect path from state (if user came from Create Bounty button or Apply Now)
  const from = location.state?.from || "/";
  const openApply = location.state?.openApply || false;

  const onSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!email || !pwd) {
      showMessage.error("Please enter both email and password");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      showMessage.error("Please enter a valid email address");
      return;
    }

    setLoading(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const result = signIn(email, pwd, keep);
      
      if (result.success) {
        // Also set profile for compatibility
        setProfile(result.user);
        
        showMessage.success("Successfully signed in! 🎉");
        
        // Navigate to redirect path or landing page
        setTimeout(() => {
          if (openApply) {
            // If user came from Apply Now button, pass openApply flag
            navigate(from, { state: { openApply: true } });
          } else {
            navigate(from);
          }
        }, 500);
      } else if (result.needsSetup) {
        // User needs to complete account setup
        showMessage.warning("Please complete your account setup first");
        setTimeout(() => {
          navigate("/account");
        }, 500);
      } else {
        showMessage.error(result.error || "Sign in failed");
      }
    } catch (error) {
      showMessage.error("Sign in failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-[20px] w-full">
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="text-[16px] h-[59px]"
        type="email"
      />

      <Input.Password
        placeholder="Password"
        value={pwd}
        onChange={(e) => setPwd(e.target.value)}
        className="text-[16px] h-[59px]"
      />

      <div className="flex items-center justify-between">
        <Checkbox checked={keep} onChange={(e) => setKeep(e.target.checked)}>
          Keep me logged in
        </Checkbox>

        <button
          type="button"
          className="text-[#1677FF] text-sm font-medium hover:text-[#1668DC]"
          onClick={() => navigate("/forgot-password")}
        >
          Forgot Password?
        </button>
      </div>

      <StanderButton
        htmlType="submit"
        text={loading ? "Signing in..." : "Sign in"}
        className="w-full text-[16px] font-[600] h-[54px]"
        disabled={loading}
        divClassName="w-full"
      />

      <div className="relative flex items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-3 my-3 text-gray-500 text-xs font-medium">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>

      <GoogleSignInButton />

      <div className="text-center mt-3">
        <span className="text-gray-500 text-xs">
          Need an account?{" "}
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-600 font-medium underline"
          >
            Create one
          </Link>
        </span>
      </div>
    </form>
  );
};

export default SignInForm;

// src/pages/Login.jsx
import { useLocation } from "react-router-dom";
import SignInContainer from "../components/Login/SignInContainer";
import WelcomeSection from "../shared/WelcomeSection";
import ForgetPasswordContainer from "../components/Login/ForgetPasswordContainer";
import BountyBoard from "../assets/logos/BountyBoard.svg";


const Login = () => {
  const { pathname } = useLocation();
  const isForgotPassword = pathname.endsWith("/forgot-password");

  return (
    <div className="flex flex-col md:flex-row justify-center items-center md:items-start mx-6">
      {/* Left: fixed panel */}
      <div className="flex flex-col bg-white w-[591px] mt-5 ml-4">
        <div className="flex justify-center md:justify-start h-[66px] w-[371px]">
          <img src={BountyBoard} alt="Bounty Board" />
        </div>

        <div className="flex flex-col justify-center h-full px-[80px] mt-[10vh]">
          <div className="flex justify-center items-center w-full">
            {isForgotPassword ? <ForgetPasswordContainer /> : <SignInContainer />}
          </div>
        </div>
      </div>

      {/* Right: welcome / carousel */}
      <div className="flex-1 h-[100vh] bg-gray-50 pt-[25px] pb-[23px] pr-[13px] pl-[10px]">
        <WelcomeSection />
      </div>
    </div>
  );
};

export default Login;

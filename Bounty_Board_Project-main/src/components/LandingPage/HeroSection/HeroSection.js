/** @format */

import { PlusOutlined } from "@ant-design/icons";
import Desk from "../../../assets/LandingPage/HeroSection/Desk.svg";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import StanderButton from "../../../shared/Buttons/StanderButton";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../context/ProfileContext";
import { useAuth } from "../../../context/AuthContext";
import CreativeButton from "../../../shared/Buttons/CreativeButton";


const HeroSection = () => {
    const navigate = useNavigate();
    const { profile } = useProfile() || {};
    const { isAuthenticated } = useAuth();

    const handleBrowseBounties = () => {
      const exploreBountiesSection = document.getElementById('explore-bounties');
      if (exploreBountiesSection) {
        exploreBountiesSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const handleCreateBounty = () => {
      if (isAuthenticated || profile) {
        // User is logged in, go to post-bounty page
        navigate("/dashboard/post-bounty");
      } else {
        // User is not logged in, go to login page with redirect info
        navigate("/login", { state: { from: "/dashboard/post-bounty" } });
      }
    };

  return (
    <div className='flex flex-col lg:flex-row max-w-[100rem] w-full px-4 sm:px-6 lg:w-[90%] xl:w-[70%] m-auto py-8 sm:py-12'>
      {/* Text Content */}
      <div className='w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1'>
        <div className='space-y-4 sm:space-y-6 animate-slide-in-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold lg:w-[90%] xl:w-[80%]'>
            Turn Ideas into Reality with <span className="text-gradient">Top Creators</span>.
          </h1>
          <p className='text-gray-600 text-base sm:text-lg lg:w-[80%] xl:w-[60%]'>
            Post a Bounty or Apply to Solve One. All proposals are reviewed to
            ensure quality and impact.
          </p>
          {/* Buttons row */}
          <div className="mt-6 flex flex-wrap gap-4">
            {/* Primary button */}
            <CreativeButton
              variant="primary"
              size="lg"
              onClick={handleBrowseBounties}
            >
              Browse Bounties 🚀
            </CreativeButton>

            {/* Outlined button with + */}
            <CreativeButton
              variant="outline"
              size="lg"
              onClick={handleCreateBounty}
            >
              <PlusOutlined /> Create a Bounty
            </CreativeButton>
          </div>

          <p className='text-gray-500 text-xs sm:text-sm font-semibold animate-fade-in' style={{animationDelay: '0.3s'}}>
            ✨ Start building or get help from top talents today.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className='w-full lg:w-1/2 flex justify-center order-1 lg:order-2 mb-8 lg:mb-0 animate-slide-in-right'>
        <img
          src={Desk}
          alt='Collaborative workspace'
          className='w-full max-w-md lg:max-w-full h-auto object-contain animate-float'
        />
      </div>
    </div>
  );
};

export default HeroSection;

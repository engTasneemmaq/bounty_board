import ArrowButton from "../../../shared/Buttons/ArrowButton";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/AuthContext";
import { useProfile } from "../../../context/ProfileContext";
import { showMessage } from "../../../utils/toast";

export const FinalPageForProfile = ({ allFormData }) => {
    const navigate = useNavigate();
    const { completeAccountSetup } = useAuth();
    const { setProfile } = useProfile();

    const handleComplete = () => {
        // Complete account setup and log in
        const result = completeAccountSetup(allFormData);
        
        if (result.success) {
            // Set profile for compatibility
            setProfile(result.user);
            
            showMessage.success("🎉 Account setup complete! Welcome to Bounty Board!");
            
            // Navigate to dashboard
            setTimeout(() => {
                navigate("/dashboard");
            }, 500);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-[32px] mt-[200px] mb-[200px]">
            <div className="flex items-center justify-center w-[126px] h-[126px] rounded-full bg-[#E7F0FA]">
                <svg xmlns="http://www.w3.org/2000/svg"
                    
                    width="48"
                    height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" 
                    className="lucide lucide-check-check-icon text-[#0A65CC]"><path d="M18 6 7 17l-5-5" /><path d="m22 10-7.5 7.5L13 16" />
                </svg>
            </div>
            <div className="flex flex-col items-center">
                <h2 className="mb-[16px] text-[20px] font-medium px-3 text-center sm:text-[24px] ">🎉 Congratulations, Your profile is 100% complete!</h2>
                <p className="text-[#5E6670] text-[16px] font-normal text-center" >You're now ready to explore bounties, apply to projects, <br />
                    or post your own.
                </p>
            </div>
            <div className="flex flex-col gap-[16px] justify-center items-center sm:flex-row ">
                <Button 
                    className="w-[191px] h-[56px] text-[#0A65CC] bg-[#E7F0FA] font-semibold"
                    onClick={handleComplete}
                > 
                    Go to Dashboard 
                </Button>
                <ArrowButton 
                    divClassName={'w-[210px] h-[56px]'} 
                    className={'w-full h-full text-[16px] font-[600]'} 
                    text={'Post a bounty'}
                    onClick={() => {
                        handleComplete();
                        setTimeout(() => navigate("/dashboard/post-bounty"), 600);
                    }}
                />
            </div>
        </div>
    )
}
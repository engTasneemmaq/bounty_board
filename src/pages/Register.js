// Register.js
import BountyBoard from "../assets/logos/BountyBoard.svg"
import WelcomeSection from "../shared/WelcomeSection";
import SignUpContainer from "../components/Register/SignUpContainer";

const Register = () => {
    return (
        <div className="flex h-[100vh]">
            <div className="flex flex-col ml-8">
                <div className="h-[66px] w-[371px]">
                    <img src={BountyBoard} alt="Bounty Board" />
                </div>

                <div className="mx-[52px] mt-[45px]">
                    <SignUpContainer />
                </div>
            </div>
            <div className="flex-1 h-[100vh] bg-gray-50 pt-[25px] pb-[23px] pr-[13px] pl-[10px]">
                <WelcomeSection />
            </div>
        </div>
    )
}

export default Register;
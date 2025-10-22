import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import InputText from "../../shared/Inputs/InputText";
import InputPassword from "../../shared/Inputs/InputPassword";
import CustomCheckbox from "../../shared/Buttons/CustomCheckbox";
import StanderButton from "../../shared/Buttons/StanderButton";
import GoogleSignInButton from "./GoogleSignIn";
import { useAuth } from "../../context/AuthContext";
import { useProfile } from "../../context/ProfileContext";
import { showMessage } from "../../utils/toast";

const SignUpForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const navigate = useNavigate();
    const { signUp } = useAuth();
    const { setProfile } = useProfile();

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Form submitted!"); // Debug log

        // Validation
        if (!firstName || !lastName || !email || !password || !confirmPassword) {
            showMessage.error("Please fill in all fields");
            console.log("Validation failed: Missing fields");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            showMessage.error("Please enter a valid email address");
            console.log("Validation failed: Invalid email");
            return;
        }

        if (password.length < 8) {
            showMessage.error("Password must be at least 8 characters long");
            console.log("Validation failed: Password too short");
            return;
        }

        if (password !== confirmPassword) {
            showMessage.error("Passwords do not match");
            console.log("Validation failed: Passwords don't match");
            return;
        }

        if (!agreeToTerms) {
            showMessage.error("Please agree to the Terms and Privacy Policy");
            console.log("Validation failed: Terms not agreed");
            return;
        }

        console.log("All validation passed! Creating account...");
        setLoading(true);

        try {
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 1000));

            const result = signUp({
                firstName,
                lastName,
                email,
                password,
            });

            console.log("Sign up result:", result);

            if (result.success) {
                showMessage.success("Account created successfully! Please complete your profile setup. 🎉");
                console.log("Navigating to /account...");

                // Navigate to account setup page
                setTimeout(() => {
                    navigate("/account");
                }, 800);
            } else {
                showMessage.error("Sign up failed. Please try again.");
                console.error("Sign up failed:", result);
            }
        } catch (error) {
            console.error("Error during sign up:", error);
            showMessage.error("Sign up failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex flex-col font-sans">
                <div className="flex gap-[24px]">
                    <div className="flex flex-col w-[358px]">
                        <span className="text-sm">First Name</span>
                        <InputText 
                            label={""} 
                            className="h-[47px]" 
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter your first name"
                        />
                    </div>

                    <div className="flex flex-col w-[358px]">
                        <span className="text-sm">Last Name</span>
                        <InputText 
                            label={""} 
                            className="h-[47px]" 
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter your last name"
                        />
                    </div>
                </div>

                <div className="flex gap-[24px] mt-[31px]">
                    <div className="flex flex-col w-[358px]">
                        <span className="text-sm">Email</span>
                        <InputText 
                            label={""} 
                            className="h-[47px]" 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                    </div>

                    <div className="flex flex-col w-[358px]">
                        <span className="text-sm">Password</span>
                        <InputPassword 
                            label={""} 
                            placeholder="Enter password" 
                            visibilityToggle={true} 
                            className="h-[47px]"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex mt-[31px]">
                    <div className="flex flex-col w-[358px]">
                        <span className="text-sm">Confirm Password</span>
                        <InputPassword 
                            label={""} 
                            placeholder="Confirm password" 
                            visibilityToggle={true} 
                            className="h-[47px]"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-[19px] mt-[32px]">
                <div className="flex gap-[12px] items-center">
                    <CustomCheckbox 
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                    />
                    Remember me
                </div>
                <div className="flex gap-[12px] items-center">
                    <CustomCheckbox 
                        checked={agreeToTerms}
                        onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                    I agree to all the <Link to="/terms" className="text-blue-600 mx-1">Terms</Link> and <Link to="/privacy-policy" className="text-blue-600 mx-1">Privacy policy</Link>
                </div>
            </div>

            <div className="flex gap-[31.35px] mt-[36px]">
                <div className="w-full">
                    <StanderButton 
                        className="w-full h-[51.56px]" 
                        text={loading ? "Creating account..." : "Create account"} 
                        htmlType="submit"
                        disabled={loading}
                        divClassName="w-full"
                    />
                </div>
                <GoogleSignInButton className="w-full h-[51.56px]" />
            </div>

            <div className="flex justify-center items-center mt-[34.4px]">
                Already have an account? <Link to="/login" className="text-blue-600 ml-1">Log in</Link>
            </div>
        </form>
    );
}

export default SignUpForm;
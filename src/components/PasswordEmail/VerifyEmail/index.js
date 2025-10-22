import { useNavigate } from "react-router";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import InputText from "../../../shared/Inputs/InputText";
import CustomBreadcrub from "../../../shared/Links/CustomBreadcrub";
import PassEmailTemp from "../PassEmailTemp";
const Index = () => {
  const navigate = useNavigate();

  const Resend = () => {
    console.log("Resend");
  };

  return (
    <PassEmailTemp
      title={"Verify Your Email Address"}
      Children={
        <div className="mt-5">
          <div className="flex justify-center">
            <div className="text-center space-y-5">
              <CustomBreadcrub
                routes={[{ breadcrumbName: "1" }, { breadcrumbName: "2" }]}
              />
              <div>
                <h1 className="text-3xl mb-4">Verify Your Email Address</h1>

                <p className="text-gray-400">
                  We’ve sent a verification link to your email address:
                  <p className="text-black">youremail@example.com</p>
                  Please check your inbox and click the link to verify your
                  account.
                </p>
              </div>
              <InputText
                placeholder={"Verification Code"}
                className={"h-[48px]"}
              />
              <ArrowButton
                text="Verify My Account"
                ClassName={"w-full"}
                onClick={() => {
                  navigate("/reset-password");
                }}
              />
              <h3 className="text-xs">
                Didn’t receive the email?{" "}
                <a className="cursor-pointer text-blue-500" onClick={Resend}>
                  Resend
                </a>{" "}
              </h3>
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Index;

import { useNavigate } from "react-router";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import InputPassword from "../../../shared/Inputs/InputPassword";
import CustomBreadcrub from "../../../shared/Links/CustomBreadcrub";
import PassEmailTemp from "../PassEmailTemp";
import { showMessage } from "../../../utils/toast";
const Index = () => {
  const navigate = useNavigate();


  return (
    <PassEmailTemp
      title={"Verify Your Email Address"}
      Children={
        <div className="mt-5">
          <div className="flex justify-center">
            <div className="text-center space-y-5">
              <CustomBreadcrub
                routes={[{ breadcrumbName: "2" }, { breadcrumbName: "2" }]}
              />
              <div>
                <h1 className="text-3xl mb-4">Reset Password</h1>

                <p className="text-gray-400">
                  Duis luctus interdum metus, ut consectetur ante consectetur
                  sed. <br />
                  Suspendisse euismod viverra massa sit amet mollis.
                </p>
              </div>

              <InputPassword
                placeholder={"New Password"}
                label=""
                className={"h-[38px]"}
              />
              <InputPassword
                placeholder={"Confirm Password"}
                label=""
                className={"h-[38px]"}
              />
              <ArrowButton
                text="Reset Password"
                ClassName={"w-full"}
                onClick={() => {
                  showMessage.success('Password reset successfully! 🔒');
                }}
              />
            </div>
          </div>
        </div>
      }
    />
  );
};

export default Index;

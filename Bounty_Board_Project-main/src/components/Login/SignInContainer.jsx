// import { Typography } from 'antd';
// import SignInForm from './SignInForm';

// const { Title, Text } = Typography;

// const SignInContainer = () => {
//     return (
//         <div className="flex flex-col w-full">
//             <div className="font-['Inter'] flex flex-col gap-2">
//                 <Title level={1} className="!text-[40px] !font-[700] text-black-700 !m-0">
//                     Sign in
//                 </Title>
//                 <Text className="text-gray-400 text-sm font-['Inter'] !m-0">
//                     Please login to continue to your account.
//                 </Text>
//             </div>

//             <SignInForm />
//         </div>
//     );
// };


// export default SignInContainer;



// src/components/Login/SignInContainer.jsx
import { Typography } from "antd";
import SignInForm from "./SignInForm";

const { Title, Text } = Typography;

const SignInContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <div className="font-['Inter'] flex flex-col gap-2">
        <Title level={1} className="!text-[40px] !font-[700] !m-0">
          Sign in
        </Title>
        <Text className="text-gray-400 text-sm font-['Inter'] !m-0">
          Please login to continue to your account.
        </Text>
      </div>

      <div className="mt-6">
        <SignInForm />
      </div>
    </div>
  );
};

export default SignInContainer;

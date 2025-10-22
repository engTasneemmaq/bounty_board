// import { Typography } from 'antd';
// import ForgetPaasswordForm from './ForgetPasswordForm';

// const { Title, Text } = Typography;


// const ForgetPasswordContainer = () => {
//     return (
//         <div className="flex flex-col w-full">
//             <Title level={1} className="!text-[40px] !font-[700] text-black-700 !m-0">
//                 Forget Password
//             </Title>

//             <div className="flex flex-col gap-2 mt-6">
//                 <div className="flex items-center gap-1">
//                     <Text className='text-gray-500'>Go back to </Text>
//                     <button
//                         className="text-blue-500 hover:text-blue-600 font-medium underline focus:outline-none transition-colors duration-200"
//                     > Sign In</button>
//                 </div>

//                 <div className="flex items-center gap-1">
//                     <Text className="text-gray-500">Don't have account?</Text>
//                     <button
//                         className="text-blue-500 hover:text-blue-600 font-medium underline focus:outline-none transition-colors duration-200"
//                     >Create One</button>
//                 </div>
//             </div>

//             <ForgetPaasswordForm/>
//         </div>
//     );
// }

// export default ForgetPasswordContainer;



// src/components/Login/ForgetPasswordContainer.jsx
import { Typography } from "antd";
import { Link } from "react-router-dom";
import ForgetPasswordForm from "./ForgetPasswordForm";

const { Title, Text } = Typography;

const ForgetPasswordContainer = () => {
  return (
    <div className="flex flex-col w-full">
      <Title level={1} className="!text-[40px] !font-[700] !m-0">
        Forget Password
      </Title>

      <div className="flex flex-col gap-2 mt-6">
        <div className="flex items-center gap-1">
          <Text className="text-gray-500">Go back to</Text>
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-600 font-medium underline"
          >
            Sign In
          </Link>
        </div>

        <div className="flex items-center gap-1">
          <Text className="text-gray-500">Don’t have account?</Text>
          <Link
            to="/register"
            className="text-blue-500 hover:text-blue-600 font-medium underline"
          >
            Create one
          </Link>
        </div>
      </div>

      <div className="mt-6">
        <ForgetPasswordForm />
      </div>
    </div>
  );
};

export default ForgetPasswordContainer;

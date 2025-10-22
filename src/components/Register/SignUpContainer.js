import SignUpForm from '../Register/SignUpForm';
import { Typography } from 'antd';

const { Title, Text } = Typography;

const SignUpContainer = () => {
    return (
        <div className="flex flex-col">
            <div className="flex flex-col gap-2">
                <Title level={1} className="!text-[40px] !font-[700] text-black-700 !m-0">
                    Sign Up
                </Title>
                <Text className="text-gray-400 text-sm font-['Inter'] !m-0">
                    Sign up to enjoy the feature of Bounty Board
                </Text>
            </div>
            <div className="mt-[45px]">
                <SignUpForm />
            </div>
        </div>
    );
}

export default SignUpContainer;


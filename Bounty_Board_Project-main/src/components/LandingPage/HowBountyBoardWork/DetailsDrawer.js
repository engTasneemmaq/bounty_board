import { Avatar, Col, Divider, Row, Space, Typography } from "antd";
import {
    BackEn,
    Bag,
    Calendar,
    CheckCircle,
    ClockCircle,
    User,
    Wallet,
} from "../../../assets/LandingPage";
import defualtimage from "../../../assets/LandingPage/default.png";
import StanderButton from "../../../shared/Buttons/StanderButton";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../../../context/ProfileContext";
import { useAuth } from "../../../context/AuthContext";

const { Title, Text, Paragraph, Link } = Typography;

const DetailsDrawer = ({ bountyId = "123" }) => {
  const navigate = useNavigate();
  const { profile } = useProfile() || {};
  const { isAuthenticated } = useAuth();

  const handleApplyNow = () => {
    // Navigate to bounty details page where user can apply
    const targetPath = `/details/${bountyId}`;
    
    if (isAuthenticated || profile) {
      // User is logged in, go to bounty details with openApply flag
      navigate(targetPath, { state: { openApply: true } });
    } else {
      // User is not logged in, redirect to login with return path
      navigate("/login", { 
        state: { 
          from: targetPath,
          openApply: true 
        } 
      });
    }
  };
  return (
    <div>
      <>
        <div className="max-w-full w-[70%] m-auto text-center">
          <div className="flex justify-center">
            <img
              src={defualtimage}
              alt="Project"
              style={{ width: "90%", borderRadius: 10 }}
            />
          </div>
          <h2 className="text-[20px] text-[#5060FF] font-semibold my-[16px]">
            Convert Yolo World model to TFLite
          </h2>
          <div className="mb-16 space-x-2">
            <Text>Posted by: </Text>
            <Space>
              <Avatar
                size="small"
                src="https://randomuser.me/api/portraits/women/44.jpg"
              />
              <Text strong>Susan Jeans</Text>
            </Space>
          </div>

          <Divider />
          <Title level={4} className="text-start pb-5 ps-5">
            Bounty Overview
          </Title>
          <Row gutter={[16, 16]}>
            <Col span={8}>
              <div className="flex justify-center">
                <Calendar />
              </div>
              <br />
              <Text type="secondary">Job Posted:</Text>
              <br />
              <Text strong>14 June, 2025</Text>
            </Col>
            <Col span={8}>
              <div className="flex justify-center">
                <ClockCircle />
              </div>
              <br />
              <Text type="secondary">Expires:</Text>
              <br />
              <Text strong>14 July, 2025</Text>
            </Col>
            <Col span={8}>
              <div className="flex justify-center">
                <BackEn />
              </div>
              <br />
              <Text type="secondary">Category:</Text>
              <br />
              <Text strong>Back-end</Text>
            </Col>
            <Col span={8}>
              <div className="flex justify-center">
                <Wallet />
              </div>
              <br />
              <Text type="secondary">Price:</Text>
              <br />
              <Text strong>$50k-80k</Text>
            </Col>
            <Col span={8}>
              <div className="flex justify-center">
                <CheckCircle />
              </div>
              <br />
              <Text type="secondary">Status:</Text>
              <br />
              <Text strong>Active</Text>
            </Col>
            <Col span={8}>
              <div className="flex justify-center">
                <User />
              </div>
              <br />
              <Text type="secondary">Applicants:</Text>
              <br />
              <Text strong>120</Text>
            </Col>

            <Col span={8}>
              <div className="flex justify-center">
                <Bag />
              </div>
              <br />
              <Text type="secondary">Languages:</Text>
              <br />
              <Text strong>JavaScript</Text>
            </Col>
          </Row>

          <Divider />
          <div className="text-start">
            <Title level={5}>Project Description</Title>
            <Paragraph>
              We are trying to add{" "}
              <Link
                href="https://github.com/microsoft/onnxruntime"
                target="_blank"
              >
                onnxruntime
              </Link>{" "}
              to our UE 5.4 project for iOS. The plugin works in development
              builds but crashes in distribution builds.
            </Paragraph>

            <Title level={5}>Project Requirements</Title>
            <Paragraph>
              • Have a working iOS distribution build that uses the plugin.
            </Paragraph>
            <Divider />

            <Title level={5}>Technical Details</Title>
            <Paragraph>
              We created a minimal example to test this. Also, we created
              threads on Unreal Engine forums and on the plugin's GitHub that
              explain the issue ...
              <Link onClick={() => navigate("/details/123")} style={{ cursor: 'pointer' }}>
                Read More
              </Link>
            </Paragraph>
          </div>
        </div>

        <div className="pt-12 flex items-center gap-3 w-[70%] m-auto">
          <StanderButton
            type="primary"
            block
            size="large"
            onClick={handleApplyNow}
            style={{ backgroundColor: "#3C52EE" }}
            className="rounded-full w-full py-6"
            text="Apply Now"
          />
        </div>
      </>
    </div>
  );
};

export default DetailsDrawer;

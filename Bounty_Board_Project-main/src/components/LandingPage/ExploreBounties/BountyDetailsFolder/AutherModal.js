import {
  FacebookFilled,
  GithubFilled,
  InstagramFilled,
  LinkedinFilled,
  MailOutlined,
  PhoneOutlined,
  TwitterSquareFilled,
  UserOutlined,
  YoutubeFilled,
} from "@ant-design/icons";
import { Avatar, Divider, Modal } from "antd";
import {
  Birth,
  Bounties,
  Educations,
  Experience,
  FacebookSvg,
  Gender,
  LinkedinSvg,
  Marital,
  Nationality,
  Participated,
  PhoneSvg,
} from "../../../../assets/LandingPage";
import {
  DownloadSvg,
  EmailSvg,
  EmptyFile,
  GlobalSvg,
} from "../../../../assets/LandingPage/HeroSection";
import ArrowButton from "../../../../shared/Buttons/ArrowButton";

const AutherModal = ({ handleCancel, isModalOpen }) => {
  return (
    <>
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        footer={null}
        closable={true}
        width={1000}
        styles ={{ padding: 0 }}
      >
        <div className="flex flex-col md:flex-row w-full">
          <div className="w-full md:w-2/3 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Avatar size={64} icon={<UserOutlined />} />
              <div>
                <h1 className="text-xl font-bold">Susan Jeans</h1>
                <p className="text-gray-500">Website Designer (UI/UX)</p>
              </div>
            </div>

            <div className="mb-6">
              <h2 className="font-semibold text-gray-800 mb-2">Biography</h2>
              <p className="text-sm text-gray-700 w-[76%]">
                I've been passionate about graphic design and digital art from
                an early age with a keen interest in Website and Mobile
                Application User Interfaces. I can create high-quality and
                aesthetically pleasing designs in a quick turnaround time. Check
                out the portfolio section of my profile to see samples of my
                work and feel free to discuss your designing needs. I mostly use
                Adobe Photoshop, Illustrator, XD and Figma. *Website User
                Experience and Interface (UI/UX) Design - for all kinds of
                Professional and Personal websites. *Mobile Application User
                Experience and Interface Design - for all kinds of IOS/Android
                and Hybrid Mobile Applications. *Wireframe Designs.
              </p>
            </div>
<Divider/>
            <div>
              <h2 className="font-semibold text-gray-800 mb-2">Cover Letter</h2>
              <p className="text-sm text-gray-700 w-[76%]">
                Dear Sir, <br /><br />I am writing to express my interest in the fourth
                grade instructional position that is currently available in the
                Fort Wayne Community School System. I learned of the opening
                through a notice posted on JobZone, IPFW’s job database. I am
                confident that my academic background and curriculum development
                skills would be successfully utilized in this teaching position.
                <br /><br />
                I have just completed my Bachelor of Science degree in
                Elementary Education and have successfully completed Praxis I
                and Praxis II. During my student teaching experience, I
                developed and initiated a three-week curriculum sequence on
                animal species and earth resources. This collaborative unit
                involved working with three other third grade teachers within my
                team, and culminated in a field trip to the Indianapolis Zoo
                Animal Research Unit.
              </p>
              <p className="mt-4 text-sm">
                Sincerely, <br /><br /> Esther Howard
              </p>
            </div>
            <Divider />
            <div className="mt-8">
              <h3 className="font-semibold text-gray-700 mb-2">
                Follow me Social Media
              </h3>
              <div className="flex gap-3 text-xl text-blue-600">
                <FacebookSvg />
                <LinkedinSvg />
                <InstagramFilled />
                <YoutubeFilled/>
              </div>
            </div>
          </div>

          <div className="w-full md:w-1/3 p-6 space-y-6">
            <div className=" flex gap-3  items-end justify-end">
              <ArrowButton
                text="Apply Now"
                size="large"
                className="px-6"
                divClassName=""
              />
            </div>

            <div className="p-6 border border-[#CEE0F5B2] rounded-xl flex justify-between">
              <div className="space-y-5">
                <div className="space-y-1">
                  <Birth />
                  <h3 className="text-sm text-gray-600">
                    Date of Birth
                  </h3>
                  <p className="font-semibold text-black">14 June, 2021</p>
                </div>
                <div className="space-y-1"> 
                  <Marital />
                  <h3 className="text-sm text-gray-600">
                    marital Status
                  </h3>
                  <p className="font-semibold text-black">Single</p>
                </div>
                <div className="space-y-1"> 
                  <Experience />
                  <h3 className="text-sm text-gray-600">
                    Experience
                  </h3>
                  <p className="font-semibold text-black">7 Years</p>
                </div>
                <div className="space-y-1"> 
                  <Bounties />
                  <h3 className="text-sm text-gray-600">
                    Bounties Created
                  </h3>
                  <p className="font-semibold text-black">9</p>
                </div>
              </div>
              <div className="space-y-5">
                <div className="m-0">
                  <Nationality />
                  <h3 className="text-sm text-gray-600">
                    Nationality
                  </h3>
                  <p className="font-semibold text-black">Bangladesh</p>
                </div>

                <div className="space-y-1"> 
                  <Gender />
                  <h3 className="text-sm text-gray-600">
                    Gender
                  </h3>
                  <p className="font-semibold text-black">Male</p>
                </div>

                <div className="space-y-1"> 
                  <Educations />
                  <h3 className="text-sm text-gray-600">
                    Educations
                  </h3>
                  <p className="font-semibold text-black">Master Degree</p>
                </div>

                <div className="space-y-1"> 
                  <Participated />
                  <h3 className="text-sm text-gray-600">
                    Participated In
                  </h3>
                  <p className="font-semibold text-black">14</p>
                </div>
              </div>
            </div>

            <div className="space-y-5 p-6 border border-[#CEE0F5B2] rounded-xl">
              <h3 className="font-semibold mb-2">Download My Resume</h3>

              <div className="flex justify-between items-center">
                <div className="flex gap-2 items-center text-xs">
                  <EmptyFile />
                  <div>
                    <h1 className="text-[#5E6670]">Esther Howard</h1>
                    <p>PDF</p>
                  </div>
                </div>
                <ArrowButton icon={<DownloadSvg />} text="" divClassName="" />
              </div>
            </div>

            <div className="space-y-5 p-6 border border-[#CEE0F5B2] rounded-xl">
              <h3 className="font-semibold mb-2">Contact Information</h3>

              <div className="flex gap-4 text-xs">
                <GlobalSvg />
                <div>
                  <h1 className="text-[#5E6670]">Website</h1>
                  <a
                    href="https://www.estherhoward.com"
                    className="text-blue-600"
                  >
                    www.estherhoward.com
                  </a>
                </div>
              </div>

              <Divider />

              <div className="flex gap-4 text-xs">
                <PhoneSvg />
                <div>
                  <h1 className="text-[#5E6670]">Phone</h1>
                  <a href="+1-202-555-0141" className="text-blue-600">
                    +1-202-555-0141
                  </a>
                  <br />
                  <br />
                  <h1 className="text-[#5E6670]">Secondary Phone</h1>
                  <a href="+1-202-555-0141" className="text-blue-600">
                    +1-202-555-0189{" "}
                  </a>
                </div>
              </div>

              <Divider />

              <div className="flex gap-4 text-xs">
                <EmailSvg />
                <div>
                  <h1 className="text-[#5E6670]">Email Address</h1>
                  <a href="esther.howard@gmail.com" className="text-blue-600">
                    esther.howard@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AutherModal;

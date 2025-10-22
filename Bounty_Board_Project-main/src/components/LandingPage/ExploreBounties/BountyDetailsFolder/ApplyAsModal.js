/** @format */

import {
  ArrowRightOutlined,
  CloseOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useState } from "react";
import { CheckSvg } from "../../../../assets/LandingPage";
import ArrowButton from "../../../../shared/Buttons/ArrowButton";
import StanderButton from "../../../../shared/Buttons/StanderButton";
import CustomModal from "../../../../shared/CustomModal";
import DropDown from "../../../../shared/Inputs/DropDown";
import IndividualModal from "./IndividualModal";

const ApplyAsModal = ({
  selected,
  isModalApplyAsOpen,
  handleCancelApplyAs,
  setSelected,
  onChange,
  lightNext,
  setLightNext,
  selectValue,
  setSelectValue,
}) => {
  const [isIndividualModalOpen, setIsIndividualModalOpen] = useState(false);
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  const onClickNext = () => {
    if (selected === "individual") {
      setIsIndividualModalOpen(true);
    }
    if (selected === "team") {
      setIsTeamModalOpen(true);
    }
  };

  const handleCancelIndividualModal = () => {
    setIsIndividualModalOpen(false);
    setIsTeamModalOpen(false);
  };

  return (
    <>
      <CustomModal
        open={isModalApplyAsOpen}
        onCancel={handleCancelApplyAs}
        footer={null}
        width={700}
        className='!p-0'
        styles={{ padding: 0, borderRadius: "16px" }}
        closeIcon={
          <div className='w-8 h-8 rounded-full border flex items-center justify-center hover:bg-gray-100'>
            <CloseOutlined />
          </div>
        }
        children={
          <div className='relative rounded-xl bg-white p-8'>
            <h2 className='text-2xl font-semibold text-blue-700 mb-6'>
              Apply as
            </h2>

            <div className='absolute inset-0 z-0 pointer-events-none'>
              <div className='absolute top-10 left-0 right-0 mx-auto w-3/4 h-64 bg-blue-100 rounded-full blur-3xl opacity-50'></div>
            </div>

            <div className='relative z-10 flex flex-col md:flex-row justify-center gap-6'>
              <div
                onClick={() => {
                  setSelected("team");
                  selectValue !== "" ? setLightNext(true) : setLightNext(false);
                }}
                className={`w-full md:w-1/2 cursor-pointer rounded-lg bg-white p-6   text-center shadow-md border-2 ${
                  selected === "team" ? "border-blue-600" : "border-transparent"
                } hover:border-blue-400 transition`}
              >
                <TeamOutlined className='text-blue-600 text-4xl mb-4' />
                {selected == "team" ? (
                  <div>
                    <DropDown
                      placeholder='Select Team'
                      variant='outlined'
                      options={[
                        { value: "Team 1", label: "Team 1" },
                        { value: "Team 2", label: "Team 2" },
                        { value: "Team 3", label: "Team 3" },
                      ]}
                      onChange={onChange}
                    />
                    <div className='flex justify-end'>
                      <CheckSvg />
                    </div>
                  </div>
                ) : (
                  <p className='text-lg font-medium'>Team</p>
                )}
              </div>

              <div
                onClick={() => {
                  setSelected("individual");
                  setLightNext(true);
                  setSelectValue("");
                }}
                className={`w-full md:w-1/2 cursor-pointer rounded-lg bg-white p-6  text-center shadow-md border-2 ${
                  selected === "individual"
                    ? "border-blue-600"
                    : "border-transparent"
                } hover:border-blue-400 transition`}
              >
                <UserOutlined className='text-blue-600 text-4xl mb-4' />
                <p className='text-lg font-medium'>Individual</p>
                {selected == "individual" && (
                  <div className='flex justify-end'>
                    <CheckSvg />
                  </div>
                )}
              </div>
            </div>

            <div className='flex justify-between items-center mt-8'>
              <StanderButton
                onClick={handleCancelApplyAs}
                className='bg-blue-50 text-blue-600 border-blue-100'
                text='Cancel'
                divClassName=''
                type=''
              />
              <ArrowButton
                type='primary'
                disabled={!lightNext}
                icon={<ArrowRightOutlined />}
                className=''
                divClassName=''
                text='Next'
                onClick={onClickNext}
              >
                Next
              </ArrowButton>
            </div>
          </div>
        }
      />

      <IndividualModal
        isIndividualModalOpen={isIndividualModalOpen}
        handleCancelIndividualModal={handleCancelIndividualModal}
        setIsIndividualModalOpen={setIsIndividualModalOpen}
      />
    </>
  );
};

export default ApplyAsModal;

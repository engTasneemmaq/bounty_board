import React from "react";
import { Button, DatePicker, Select } from "antd";
import DropDown from "../../../shared/Inputs/DropDown";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import { EditorMarkDown } from "../../../shared/EditorMarkDown/EditiorMarkDown";
import SocialRolesLinks from "../../../shared/SocialRolesLinks.js/SocialRolesLinks";

const Profile = ({
  formData,
  setFormData,
  errors,
  setErrors,
  navigatePersonal,
  navigateContact,
}) => {
  const options = [
    { value: "option1", label: "option1" },
    { value: "option2", label: "option2" },
    { value: "option3", label: "option3" },
  ];
  const optionsLanguages = [
    { value: "english", label: "English" },
    { value: "arabic", label: "Arabic" },
    { value: "spanish", label: "Spanish" },
    { value: "french", label: "French" },
    { value: "german", label: "German" },
    { value: "mandarin", label: "Mandarin" },
    { value: "russian", label: "Russian" },
    { value: "japanese", label: "Japanese" },
    { value: "hindi", label: "Hindi" },
    { value: "italian", label: "Italian" },
  ];
  const optionsGender = [
    { value: "male", label: "male" },
    { value: "female", label: "female" },
  ];
  const optionsMaritalStatus = [
    { value: "single", label: "Single" },
    { value: "married", label: "Married" },
    { value: "divorced", label: "Divorced" },
    { value: "widowed", label: "Widowed" },
  ];

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const validators = {
    nationality: (value) => (value ? "" : "Select nationality"),
    dateOfBirth: (value) => (value ? "" : "Select date of birth"),
    gender: (value) => (value ? "" : "Select gender"),
    maritalStatus: (value) => (value ? "" : "Select marital status"),
    languages: (value) =>
      value && value.length > 0 ? "" : "Select at least one language",
    country: (value) => (value ? "" : "Select country"),
    biography: (value) =>
      value && value.trim().length >= 20
        ? ""
        : "Biography must be at least 20 characters",
  };

  const validate = (field, value) => {
    const validator = validators[field];
    return validator ? validator(value) : "";
  };

  const handleChange = (field) => (value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validate(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const newErrors = {};
    for (const key in validators) {
      newErrors[key] = validate(key, formData[key]);
    }

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((e) => e);
    if (!hasError) {
      navigateContact();
    }
  };

  return (
    <div className="flex flex-col gap-[18px]">
      <div className="flex flex-col items-start gap-[18px] lg:flex-row">
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Nationality</span>
          <DropDown
            value={formData.nationality}
            options={options}
            placeholder="Select..."
            className="h-[48px] w-[340px]"
            onChange={handleChange("nationality")}
          />
          {errors.nationality && (
            <span className="text-red-500 text-xs">{errors.nationality}</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Date of Birth</span>
          <DatePicker
            value={formData.dateOfBirth}
            format={dateFormatList}
            placeholder="dd/mm/yyyy"
            className="h-[48px] w-[340px]"
            onChange={handleChange("dateOfBirth")}
          />
          {errors.dateOfBirth && (
            <span className="text-red-500 text-xs">{errors.dateOfBirth}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[18px] lg:flex-row">
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Gender</span>
          <DropDown
            value={formData.gender}
            options={optionsGender}
            placeholder="Select..."
            className="h-[48px] w-[340px]"
            onChange={handleChange("gender")}
          />
          {errors.gender && (
            <span className="text-red-500 text-xs">{errors.gender}</span>
          )}
        </div>

        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Marital Status</span>
          <DropDown
            value={formData.maritalStatus}
            options={optionsMaritalStatus}
            placeholder="Select..."
            className="h-[48px] w-[340px]"
            onChange={handleChange("maritalStatus")}
          />
          {errors.maritalStatus && (
            <span className="text-red-500 text-xs">
              {errors.maritalStatus}
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col items-start gap-[18px] lg:flex-row">
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Languages</span>
          <Select
            mode="multiple"
            placeholder="Please select"
            className="custom-select-profile"
            options={optionsLanguages}
            style={{ width: "340px" }}
            value={formData.languages}
            onChange={handleChange("languages")}
          />
          {errors.languages && (
            <span className="text-red-500 text-xs">{errors.languages}</span>
          )}
        </div>
        <div className="flex flex-col gap-[8px]">
          <span className="text-[14px]">Country</span>
          <DropDown
            value={formData.country}
            options={options}
            placeholder="Select..."
            className="h-[48px] w-[340px]"
            onChange={handleChange("country")}
          />
          {errors.country && (
            <span className="text-red-500 text-xs">{errors.country}</span>
          )}
        </div>
      </div>
      <div className="flex flex-col gap-[8px] rounded-[6px] mb-[50px]">
        <span className="text-[14px]">Biography</span>
        <EditorMarkDown
          onChange={(text) => handleChange("biography")(text)}
          divClassName="relative min-h-[248px] border border-gray-300 p-4 rounded focus-within:ring-2 focus-within:ring-blue-500"
          placeholder={'Write down your biography here. Let the employers know who you are...'}
          value={formData.biography}
        />
        {errors.biography && (
          <span className="text-red-500 text-xs">{errors.biography}</span>
        )}
      </div>
      <SocialRolesLinks />
      <div className="flex flex-row gap-[12px] mb-[50px]">
        <Button
          type="primary"
          className="bg-[#F1F2F4] w-[132px] h-[56px] text-[16px] font-semibold text-black"
          onClick={navigatePersonal}
        >
          Previous
        </Button>
        <ArrowButton
          divClassName={"w-[193px] h-[56px]"}
          className={"w-full h-full text-[16px] font-[600]"}
          text={"Save & Next"}
          onClick={handleSubmit}
        />
      </div>

      <style>
        {`
          .custom-select-profile .ant-select-selector {
            min-height: 48px;
            padding-top: 10px;
          }
        `}
      </style>
    </div>
  );
};

export default Profile;

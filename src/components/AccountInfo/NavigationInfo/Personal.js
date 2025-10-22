import InputText from "../../../shared/Inputs/InputText";
import DropDown from "../../../shared/Inputs/DropDown";
import { LinkOutlined } from '@ant-design/icons';
import { UploadImage } from "../../../shared/UpladeImage/UploadImage";
import ArrowButton from "../../../shared/Buttons/ArrowButton";
import { Divider, Select } from 'antd';
import { UploadDocuments } from "../../../shared/uploadCv/UploadDocuments";

const Personal = ({ formData, setFormData, errors, setErrors, navigateToProfile }) => {
    const options = ["HTML", "CSS", "JavaScript", "TypeScript", "Python", "C++"].map(item => ({
        value: item,
        label: item
    }));


    const validators = {
        fullName: (value) => {
            if (!value) return 'Full name is required';
            if (!/^[A-Za-z\s]+$/.test(value)) return 'Only letters and spaces are allowed';
            return '';
        },
        jobTitle: (value) => {
            if (!value) return 'Full name is required';
            if (!/^[A-Za-z\s]+$/.test(value)) return 'Only letters and spaces are allowed';
            return '';
        },
        education: (value) => {
            if (!value) return 'Full name is required';
            if (!/^[A-Za-z\s]+$/.test(value)) return 'Only letters and spaces are allowed';
            return '';
        },
        experience: (value) => value ? '' : 'Select your experience',
        skills: (value) => {
            if (value.length === 0) return 'Select at least one skill'
        },
        currentPosition: (value) => {
            if (!value) return 'Full name is required';
            if (!/^[A-Za-z\s]+$/.test(value)) return 'Only letters and spaces are allowed';
            return '';
        },
    };

    const validate = (field, value) => {
        const validator = validators[field];
        return validator ? validator(value) : '';
    };

    const handleInputChange = (field) => (e) => {
        const value = e?.target?.value || e;
        setFormData(prev => ({ ...prev, [field]: value }));
        const error = validate(field, value);
        setErrors(prev => ({ ...prev, [field]: error }));
    };

    const handleSkillsChange = (value) => {
        setFormData(prev => ({ ...prev, skills: value }));
        const error = validate('skills', value);
        setErrors(prev => ({ ...prev, skills: error }));
    };


    const handleSubmit = () => {
        const newErrors = {};
        for (const field in validators) {
            newErrors[field] = validate(field, formData[field]);
        }

        setErrors(newErrors);

        const hasError = Object.values(newErrors).some(error => error);
        if (!hasError) {
            navigateToProfile();
        }
    };


    return (
        <form className="flex flex-col gap-8">
            <h3 className="text-[18px] font-medium">Basic Information</h3>

            <div className="flex flex-col gap-10 lg:flex-row">
                <div className="flex flex-col gap-[8px] items-center lg:items-start">
                    <span className="text-[14px] font-normal">Profile Picture</span>
                    <UploadImage />
                </div>

                <div className="flex flex-col gap-[18px]">
                    <div className="flex flex-col gap-[18px] lg:flex-row ">
                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-normal">Full name</span>
                            <InputText
                                defaultValue={formData?.fullName || ''}
                                className="w-[340px] h-[48px]"
                                onChange={handleInputChange('fullName')}
                            />
                            {errors.fullName && <span className="text-red-500 text-xs">{errors.fullName}</span>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-normal">Job Title</span>
                            <InputText
                                defaultValue={formData?.jobTitle || ''}
                                className="w-[340px] h-[48px]"
                                onChange={handleInputChange('jobTitle')}

                            />
                            {errors.jobTitle && <span className="text-red-500 text-xs">{errors.jobTitle}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col  gap-[18px] items-start lg:flex-row">
                        <div className="flex flex-col gap-2">
                            <span className="text-[14px] font-normal">Experience</span>
                            <DropDown
                                value={formData.experience}
                                options={options}
                                placeholder="Select..."
                                className="h-[48px] w-[340px]"
                                onChange={handleInputChange('experience')}
                            />
                            {errors.experience && <span className="text-red-500 text-xs">{errors.experience}</span>}
                        </div>

                        <div className="flex flex-col gap-1 w-full">
                            <span className="text-[14px] font-normal">Education</span>
                            <InputText
                                defaultValue={formData?.education || ''}
                                className="w-[340px] h-[48px]"
                                onChange={handleInputChange('education')}
                            />
                            {errors.education && <span className="text-red-500 text-xs">{errors.education}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-[18px] items-start lg:flex-row">
                        <div className="flex flex-col gap-2">
                            <span className="text-[14px] font-normal">Skills</span>
                            <Select
                                mode="multiple"
                                placeholder="Please select"
                                className="custom-select"
                                options={options}
                                style={{ width: '340px', minHeight: '48px' }}
                                onChange={handleSkillsChange}
                                value={formData.skills}
                            />
                            {errors.skills && <span className="text-red-500 text-xs">{errors.skills}</span>}
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-[14px] font-normal">Current Position</span>
                            <InputText
                                defaultValue={formData?.currentPosition || ''}
                                className="w-[340px] h-[48px]"
                                onChange={handleInputChange('currentPosition')}
                            />
                            {errors.currentPosition && <span className="text-red-500 text-xs">{errors.currentPosition}</span>}
                        </div>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-[14px] font-normal">Personal Website</span>
                        <InputText
                            className="w-full h-[48px]"
                            prefix={<LinkOutlined style={{ color: '#196ecf', marginRight: '10px' }} />}
                            placeholder="Website url..."
                            onChange={handleInputChange('website')}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-start flex-col mb-[80px]">
                <div className="flex flex-col gap-[18px] items-center lg:items-start">
                    <h3 className="text-[18px] font-medium">Your CV/Resume</h3>
                    <UploadDocuments condition={'cv'} />
                </div>
                <Divider />
                <ArrowButton
                    divClassName="w-[193px] h-[56px]"
                    className="w-full h-full text-[16px] font-[600]"
                    text="Save & Next"
                    onClick={handleSubmit}
                />
            </div>

            <style>
                {
                    `
                    .custom-select .ant-select-selector {
                        min-height: 48px;
                        padding-top: 10px;
                    }
                    `
                }
            </style>
        </form>
    );
};

export default Personal;
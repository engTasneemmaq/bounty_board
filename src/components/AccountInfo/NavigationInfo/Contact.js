import InputText from '../../../shared/Inputs/InputText';
import { MailOutlined } from '@ant-design/icons';
import ArrowButton from '../../../shared/Buttons/ArrowButton';
import { Button } from 'antd';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = ({
  formData,
  setFormData,
  errors,
  setErrors,
  navigateBackToProfile,
  showFinalPage,
}) => {

  const validateField = (field, value) => {
    switch (field) {
      case 'phone':
        return value.trim() ? '' : 'Phone number is required';
      case 'primaryEmail':
        return emailRegex.test(value) ? '' : 'Invalid email format';
      case 'secondaryEmail':
        return value.trim() === '' || emailRegex.test(value)
          ? ''
          : 'Invalid email format';
      default:
        return '';
    }
  };

  const handleChange = (field) => (e) => {
    const value = e.target ? e.target.value : e; 
    setFormData((prev) => ({ ...prev, [field]: value }));
    const error = validateField(field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = () => {
    const newErrors = {
      phone: validateField('phone', formData.phone),
      // primaryEmail is read-only, no need to validate
      secondaryEmail: validateField('secondaryEmail', formData.secondaryEmail),
    };

    setErrors(newErrors);

    const hasError = Object.values(newErrors).some((e) => e);
    if (!hasError) showFinalPage();
  };

  return (
    <div className="flex flex-col gap-[18px] w-[80%] items-center md:items-start md:w-full">
      <div className="flex flex-col gap-2 custom-phone relative">
        <span className="text-[14px] font-normal">Phone</span>
        <PhoneInput
          country={'ps'}
          value={formData.phone}
          onChange={handleChange('phone')}
        />
        {errors.phone && <span className="text-red-500 text-xs mt-1">{errors.phone}</span>}
      </div>

      <div className="flex flex-col">
        <span className="text-[14px] font-normal mb-[8px]">Primary Email</span>
        <div className="flex gap-3 items-center">
          <div className="border shadow rounded w-[48px] h-[42px] flex items-center justify-center">
            <MailOutlined className="text-blue-500" />
          </div>
          <InputText
            border
            placeholder="Primary Email address"
            className="border-none bg-gray-100"
            value={formData.primaryEmail}
            disabled={true}
            readOnly={true}
          />
        </div>
        {errors.primaryEmail && <span className="text-red-500 text-xs mt-1">{errors.primaryEmail}</span>}
      </div>

      <div className="flex flex-col">
        <span className="text-[14px] font-normal mb-[8px]">Secondary Email</span>
        <div className="flex gap-3 items-center">
          <div className="border shadow rounded w-[48px] h-[42px] flex items-center justify-center">
            <MailOutlined className="text-blue-500" />
          </div>
          <InputText
            border
            placeholder="Secondary Email address"
            className="border-none"
            value={formData.secondaryEmail}
            onChange={handleChange('secondaryEmail')}
          />
        </div>
        {errors.secondaryEmail && <span className="text-red-500 text-xs mt-1">{errors.secondaryEmail}</span>}
      </div>

      <div className="flex flex-row gap-[12px] mb-[50px] mt-[20px]">
        <Button
          type="primary"
          className="bg-[#F1F2F4] w-[132px] h-[56px] text-[16px] font-semibold  text-black"
          onClick={navigateBackToProfile}
        >
          Previous
        </Button>
        <ArrowButton
          divClassName={'w-[193px] h-[56px]'}
          className={'w-full h-full text-[16px] font-[600]'}
          text={'Finish Editing'}
          onClick={handleSubmit}
        />
      </div>

      <style>
        {`
          .form-control {
            height: 50px !important;
            border: none !important;
            width:250px !important;
            position: relative !important;
            padding-left:20px !important;
            transform: translateX(50px) !important;
          }
          .custom-phone::after {
            content: '' !important;
            position: absolute !important;
            width: 1px !important;
            height: 30px !important;
            background-color: #E4E5E8 !important;
            left: 52px !important;
            top: 37px !important;
          }

          .custom-phone .flag-dropdown {
            height:50px !important;
            font-size:22px !important;
            background-color: transparent !important;
            border-radius: 5px !important;
          }
        `}
      </style>
    </div>
  );
};

export default Contact;

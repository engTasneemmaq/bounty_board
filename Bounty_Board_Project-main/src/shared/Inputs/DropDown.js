import { Select } from 'antd';

const DropDown = ({ options, onChange, onSearch, placeholder, className, variant, value}) => {
  return (
    <Select
      showSearch
      placeholder={placeholder}
      optionFilterProp="label"
      onChange={onChange}
      onSearch={onSearch}
      options={options}
      className={className}
      variant={variant}
      value={value}
    />
  );
};

export default DropDown;

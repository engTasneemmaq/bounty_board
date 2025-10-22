import { Checkbox } from "antd";
import React from "react";

const CustomCheckbox = ({ label,  onChange, className, checked, ...rest }) => {
  return (
    <Checkbox 
      onChange={onChange} 
      className={className} 
      checked={checked}
      {...rest}
    >
      {label}
    </Checkbox>
  );
};

export default CustomCheckbox;

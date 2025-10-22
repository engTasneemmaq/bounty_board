import { Input } from "antd";
import React from "react";

const InputText = ({ 
  label = "", 
  defaultValue = "", 
  placeholder = "", 
  className = "", 
  variant = "outlined", 
  prefix = null, 
  onChange = () => {}, 
  addonAfter = null,
  value = undefined,
  type = "text",
  ...rest
}) => {
  return (
    <>
      {label && <label>{label}</label>}

      <Input
        type={type}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder}
        className={className}
        variant={variant}
        prefix={prefix}
        onChange={onChange}
        addonAfter={addonAfter}
        {...rest}
      />
    </>
  );
};

export default InputText;

import { Input } from "antd";
import React from "react";

const InputPassword = ({
  placeholder = "password",
  label = "password",
  visibilityToggle = true,
  className,
  value,
  onChange,
  ...rest
}) => {
  return (
    <>
      {label && <label>{label}</label>}
      <Input.Password 
        placeholder={placeholder} 
        className={className} 
        visibilityToggle={visibilityToggle}
        value={value}
        onChange={onChange}
        {...rest}
      />
    </>
  );
};

export default InputPassword;

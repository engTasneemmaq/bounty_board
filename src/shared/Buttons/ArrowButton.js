import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

const ArrowButton = ({
  text = "submit",
  type = "primary",
  onClick = {},
  disabled = false,
  className = "",
  icon = <ArrowRightOutlined />,
  divClassName = "flex justify-center w-full",
  size = "",
  variant = "",
  color = "",
  iconPosition="end",
  
}) => {
  return (
    <div className={divClassName}>
      <Button
        onClick={onClick}
        disabled={disabled}
        type={type}
        className={`rounded-[3px] ${className}`}
        icon={icon}
        iconPosition={iconPosition}
        size={size}
        color={color}
        variant={variant}
      >
        {text}
      </Button>
    </div>
  );
};
export default ArrowButton;

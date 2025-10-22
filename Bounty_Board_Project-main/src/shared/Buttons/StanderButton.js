import { Button } from "antd";

 const StanderButton = ({
  text = "submit",
  type = "primary",
  htmlType = "button",
  onClick = () => {},
  disabled = false,
  className,
  divClassName = "flex justify-center w-full",
  size='',
  as,
  ...rest
}) => {
  return (
    <div className={divClassName}>
      <Button
        onClick={onClick}
        disabled={disabled}
        type={type}
        htmlType={htmlType}
        className={`btn-register ${className}`}
        size={size}
        style={{
          fontWeight: 700,
          fontSize: '16px',
          lineHeight: '1.5',
          transition: 'all 0.3s ease',
        }}
        {...rest}
      >
        {text}
      </Button>
    </div>
  );
};

export default StanderButton;

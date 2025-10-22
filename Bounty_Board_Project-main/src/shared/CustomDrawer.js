import { Drawer } from "antd";
const CustomDrawer = ({
  open,
  onClose,
  Children,
  title,
  extra = <></>,
  width,
  size,closeIcon
}) => {
  return (
    <>
      <Drawer
        title={title}
        closable={{ "aria-label": "Close Button" }}
        closeIcon={closeIcon}
        onClose={onClose}
        open={open}
        width={width}
        size={size}
        extra={extra}
        styles={{
    header: {
      backgroundColor: '#F7F7F8',
      border:'none'
    },
  }}
        
      >
        {Children}
      </Drawer>
    </>
  );
};
export default CustomDrawer;

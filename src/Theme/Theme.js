import { ConfigProvider } from 'antd';

export const customColors = {
  colorPrimary: '#008AFF',
  darkBlue: '#0A65CC',
  notificationColor: "#E05151", 
  lightBlue: '#E7E0FA',
  textColor: '#767F8C',
};

const Theme = ({ children }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: customColors.colorPrimary, 
        },
      }}
    >
      {children}
    </ConfigProvider>
  );
};

export default Theme;

import { createContext, useContext, useState } from "react";

const DashboardContext = createContext();

export const useDashboard = () => useContext(DashboardContext);

export const DashboardProvider = ({ children }) => {
    const [selectedLabel, setSelectedLabel] = useState("Overview");

  return (
    <DashboardContext.Provider value={{ selectedLabel, setSelectedLabel }}>
      {children}
    </DashboardContext.Provider>
  );
};

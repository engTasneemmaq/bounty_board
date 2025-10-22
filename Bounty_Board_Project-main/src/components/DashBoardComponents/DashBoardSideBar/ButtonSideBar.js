import { Button } from "antd";
import { NavLink } from 'react-router-dom';

export const ButtonSideBar = ({ labelButtons }) => {
    return (
        <>
            {labelButtons.map((btn) => (
                <NavLink 
                    key={btn.label} 
                    to={btn.to} 
                    end
                    className={({ isActive }) =>
                        `block w-full` 
                    }
                >
                    {({ isActive }) => (
                        <Button
                            icon={btn.icon}
                            size="large"
                            className={`w-full rounded-none h-[44px] flex justify-start items-center gap-4 px-[20px] text-[14px] font-medium 
                                ${isActive 
                                    ? "bg-[#E7F0FA] text-[#008AFF] border-l-[4px] border-l-[#008AFF]" 
                                    : "bg-transparent text-[#5C5C5C] border-0"
                                }`}
                        >
                            {btn.label}
                        </Button>
                    )}
                </NavLink>
            ))}
        </>
    );
};

import { Select } from "antd"
export const SelectWithLabels = ({divClassName, size, handleChange, style, options,className,label, defaultValue, placeholder  }) => {
    return (
        <div className={divClassName}>
            <p className="mb-[10px] font-normal text-[16px]"> {label} </p>
            <Select
                size={size}
                defaultValue={defaultValue}
                onChange={handleChange}
                style={style}
                options={options}
                className={className}
                placeholder = {placeholder}
            />
        </div>
    )
}
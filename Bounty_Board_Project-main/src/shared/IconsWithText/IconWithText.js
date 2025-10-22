export const IconWithText = ({ icon, text, span, color, size,font }) => {
    return (
        <div className="flex flex-row flex-warp gap-[4px]">
            <div style={{color : color}} className={`text-[${color}]`}> {icon} </div>
            <p style={{color : color}} className={`text-[${color}]  text-[${size}px] font-${font}`}> <span>{span}</span> {text} </p>
        </div>
    )
}
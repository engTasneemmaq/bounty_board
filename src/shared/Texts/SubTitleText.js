export const SubTitleText = ({text, size, font, hover, color, divClassName}) => {
    return(
        <div className={divClassName}>
            <p className={`text-[${size}px] text-[${color}] font-${font} hover:text-[${hover}]`} style={{fontSize:`${size}px`}} >{text}</p>
        </div>
    )
}
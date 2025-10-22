export const ParagraphText = ({text, size, font, hover, color, divClassName}) => {
    return(
        <div className={divClassName}>
            <p className={`text-[${size}px] text-[#94A3B8] font-${font} hover:text-[${hover}]`} style={{fontSize:`${size}px`}} >{text}</p>
        </div>
    )
}
import { SubTitleText } from "../../../shared/Texts/SubTitleText"
export const SectionHeader = ({ span, text, font, size, color, spanSize }) => {
    return (
        <div className="flex flex-row gap-[10px] items-center">
            <SubTitleText text={text} font={font} size={size} color={color} />
            <span className={`text-[#9199A3] font-normal text-[${spanSize}px] `}>
                ({span})
            </span>
        </div>

    )
}
import { SubTitleText } from "../Texts/SubTitleText";
export const IconWithTitleAndSubTitle = ({title, subTitle, icon }) => {
    return (
        <div className="flex flex-row gap-[12px]">
            {icon}
            <div className="flex flex-col gap-[5px]">
                <SubTitleText text={title} size={12} color={'#767F8C'} />
                <SubTitleText text={subTitle} size={14} font={'medium'} />
            </div>
        </div>

    )
}
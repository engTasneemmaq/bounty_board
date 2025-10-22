import { SubTitleText } from "../../../shared/Texts/SubTitleText"
export const UserInformationPopup = ({icon, title, text}) => {
    return (
        <div className="flex flex-col gap-[12px]">
            {icon}
            <SubTitleText size={12} color={'#767F8C'} text={title} />
            <SubTitleText size={14} text={text} font={'medium'} />
        </div>
    )
}
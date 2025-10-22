import { SubTitleText } from "../../../shared/Texts/SubTitleText";

export const LabelItems = ({ icon, textOne }) => {
    return (
        <div className="flex flex-row items-center justify-start w-full gap-[15px] hover:text-[#367AFF]">
            {icon}
            <SubTitleText size={14} font={"medium"} text={textOne} />
        </div>
    );
};

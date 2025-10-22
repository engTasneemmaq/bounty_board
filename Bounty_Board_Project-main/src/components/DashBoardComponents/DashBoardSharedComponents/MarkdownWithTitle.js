import { EditorMarkDown } from "../../../shared/EditorMarkDown/EditiorMarkDown";
import { SubTitleText } from "../../../shared/Texts/SubTitleText";

export const MarkDownWithTitle = ({ change, placeholder, paragraph, width, bg, divClassName }) => {
    return (
        <div className={divClassName ? divClassName : 'w-full'}>
            <div className="mb-[10px] mt-[20px]">
                <SubTitleText text={paragraph} size={14} font={'normal'} />
            </div>
            <EditorMarkDown

                divClassName={`relative  w-[${width}] min-h-[170px] border border-gray-300 p-4 rounded focus-within:ring-2 focus-within:ring-blue-500`}
                placeholder={placeholder}
                onChange={change}
                bg={bg}

            />
        </div>
    )
}
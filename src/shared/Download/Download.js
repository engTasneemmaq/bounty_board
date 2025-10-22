import { SubTitleText } from "../Texts/SubTitleText"; 
import { StickyNote, Download } from "lucide-react";
import { Button } from "antd";
export const DownloadComponent = () => {
    return (
        <div className="flex flex-row justify-between" >
            <div className="flex flex-row gap-[12px]">
                <StickyNote size={48} />
                <div className="flex flex-col gap-[5px]">
                    <SubTitleText text={'Esther Howard'} size={12} color={'#767F8C'} />
                    <SubTitleText text={'PDF'} size={14} font={'medium'} />
                </div>
            </div>
            <Button className="bg-[#E7F0FA] h-[48px] w-[48px] text-[#0A65CC] rounded-[4px]  hover:text-[#ffffff] hover:bg-[#0A65CC] gap-0" icon={<Download size={24} />}  >  </Button>

        </div>
    )
}
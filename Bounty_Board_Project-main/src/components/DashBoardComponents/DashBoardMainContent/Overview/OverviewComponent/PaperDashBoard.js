import { Presentation, BriefcaseBusiness  } from 'lucide-react';
import CreativeCard from '../../../../../shared/Cards/CreativeCard';

export const PaperDashBoard = ({ icon, bg, text, value }) => {
    return (
        <CreativeCard className="w-[312px] h-[104px] flex flex-row p-[20px] animate-pop" style={{background: `${bg}`}}>
            <div className="w-full">
                <h2 className="font-bold text-[28px] text-gradient"> {value} </h2>
                <p className="text-[#18191C] text-[14px] font-medium"> {text} </p>
            </div>
            <div className="bg-white rounded-[10px] w-[64px] h-[64px] flex justify-center items-center shadow-md">
                {icon === 'presentation' ? <Presentation className='text-[#FFA500]' size={32} /> : <BriefcaseBusiness className='text-[#0A65CC]' size={32} />}
            </div>
        </CreativeCard>
    )
}
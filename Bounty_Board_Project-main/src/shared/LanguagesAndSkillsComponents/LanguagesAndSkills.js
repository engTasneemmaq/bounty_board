export const LanguagesAndSkills = ({ data = [] }) => {
    // Ensure data is always an array
    const safeData = Array.isArray(data) ? data : [];
    
    // If no data, show a default message
    if (safeData.length === 0) {
        return (
            <div className="flex flex-row w-full flex-wrap gap-[12px]">
                <div className="bg-[#F4F6F8] px-[25px] py-[10px] rounded-[3px] text-gray-500 text-sm">
                    No data available
                </div>
            </div>
        );
    }
    
    const renderData = safeData.map((languageOrSkill, index) =>
        <div
            key={index}
            className="bg-[#EFEFEF] px-[25px] py-[10px] rounded-[3px] font-medium"
        >
            {languageOrSkill}
        </div>
    );

    return (
        <div className="flex flex-row w-full flex-wrap gap-[12px]">
            {renderData}
        </div>
    );
};

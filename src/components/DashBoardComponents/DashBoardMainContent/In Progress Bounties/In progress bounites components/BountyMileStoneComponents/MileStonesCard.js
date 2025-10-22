import { Avatar, Divider } from "antd";
import { SubTitleText } from "../../../../../../shared/Texts/SubTitleText";
import { CalendarDays, Link, CheckCheck } from "lucide-react";
import { ParagraphText } from "../../../../../../shared/Texts/ParagraphText";
import { IconWithText } from "../../../../../../shared/IconsWithText/IconWithText";
import { useNavigate } from "react-router-dom";

export const MileStoneCard = ({ useOutletContext, status }) => {
    const bountyDetails = useOutletContext();
    const navigate = useNavigate();

    const handleCardClick = (milestone) => {
        // Navigate based on milestone status
        if (status === 'in progress') {
            navigate(`/dashboard/assigned/milestone/${milestone.id || '1'}`);
        } else if (status === 'awaiting review') {
            navigate(`/dashboard/assigned/milestone/${milestone.id || '1'}/awaiting`);
        } else if (status === 'back to queue') {
            navigate(`/dashboard/assigned/milestone/${milestone.id || '1'}/resubmit`);
        } else if (status === 'completed') {
            navigate(`/dashboard/completed/${milestone.id || '1'}`);
        }
    };

    const roleColor = {
        'Frontend Developer': {
            bg: '#FFF6F0',
            color: '#FFB580',
        },
        'Backend Developer': {
            bg: '#F0FAFF',
            color: '#33BFFF',
        },
        'DevOps Engineer': {
            bg: '#F0F4FF',
            color: '#306BFF',
        },
        'QA Engineer': {
            bg: '#F3FAF0',
            color: '#78C552',
        },
        'ML Engineer': {
            bg: '#FFF6F0',
            color: '#FFB580',
        },
        'Data Scientist': {
            bg: '#FFF6F0',
            color: '#FFB580',
        },
    };

    const renderCard = () => {
        return bountyDetails.milestoneDetails
            .filter((milestone) => milestone.status === status)
            .map((milestone) => {
                const { bg, color } = roleColor[milestone.role] || {
                    bg: '#FFF6F0',
                    color: '#FFB580',
                };

                return (
                    <div
                        key={milestone.name}
                        onClick={() => handleCardClick(milestone)}
                        className="relative z-10 border border-[#E2E8F0] rounded-[8px] flex flex-col bg-white
                            after:content-[''] after:absolute after:bottom-[1px] after:left-[0.5%] after:w-[99%]
                            after:border-b after:border-[#E2E8F0] after:rounded-[8px] after:z-[-1] mb-[25px]
                            cursor-pointer hover:shadow-lg transition-shadow duration-200"
                    >
                        <SubTitleText
                            text={milestone.name}
                            font="bold"
                            divClassName="px-[17px] mt-[12px]"
                        />
                        <ParagraphText
                            text={milestone.description}
                            size={12}
                            divClassName="px-[17px] mt-[12px] h-[54px] line-clamp-3"
                        />
                        <div className="flex flex-row justify-between px-[17px] mt-[10px]">
                            <div
                                className="rounded-[5px] h-[24px] p-[5px] flex items-center justify-center text-[12px]"
                                style={{ backgroundColor: bg, color }}
                            >
                                {milestone.role}
                            </div>
                            <Avatar>{milestone.assignedTo}</Avatar>
                        </div>
                        <Divider className="mb-[10px]" />
                        <div className="flex flex-row justify-between items-center mt-[6px] px-[17px] pb-[22px]">
                            <IconWithText
                                color="#94A3B8"
                                icon={<Link size={12} className="mt-[3px]" />}
                                text="0"
                                size={12}
                            />
                            <IconWithText
                                color={status === 'completed' ? '#78C552' : "#94A3B8"}
                                icon={
                                    status === 'completed' ? (
                                        <CheckCheck size={12} className="mt-[3px]" />
                                    ) : (
                                        <CalendarDays size={12} className="mt-[3px]" />
                                    )
                                }
                                text={status === 'completed' ? 'Done' : 'Nov 30'}
                                size={12}
                            />
                        </div>
                    </div>
                );
            });
    };

    return <>{renderCard()}</>;
};

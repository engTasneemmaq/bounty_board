import { useState } from "react";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Dropdown } from "antd";
import { EllipsisVertical, CirclePlus, PenLine, CircleX} from 'lucide-react';
import { AddMileStone } from "../../PostBounty/postbountyComponents/AddMileStone";
import { ViewMilestoneModal } from "../../PostBounty/postbountyComponents/ViewMilestoneModal";
import { LabelItems } from "../../../DashBoardSharedComponents/LabelItems";
import { PostBountyFooter } from "../../../DashBoardSharedComponents/PostBountyFooter";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";

export const DefineMileStones = ({ navigateToDefineMileStone, navigateToPostABounty, navigateToAddMileStones, setNavigateToAddMileStones, bountyData }) => {
    const [milestones, setMilestones] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null);
    const [viewingMilestone, setViewingMilestone] = useState(null);
    const [isViewModalOpen, setIsViewModalOpen] = useState(false);

    const handleSaveMilestone = (newMilestone) => {
        if (editingIndex !== null) {
            // Update existing milestone
            const updatedMilestones = [...milestones];
            updatedMilestones[editingIndex] = newMilestone;
            setMilestones(updatedMilestones);
            setEditingIndex(null);
        } else {
            // Add new milestone
            setMilestones([...milestones, newMilestone]);
        }
        setNavigateToAddMileStones(false);
    };

    const handleDuplicate = (index) => {
        const milestoneToDuplicate = { ...milestones[index] };
        setMilestones([...milestones, milestoneToDuplicate]);
    };

    const handleEdit = (index) => {
        setEditingIndex(index);
        setNavigateToAddMileStones(true);
    };

    const handleDelete = (index) => {
        const updatedMilestones = milestones.filter((_, i) => i !== index);
        setMilestones(updatedMilestones);
    };

    const handleViewMilestone = (index) => {
        setViewingMilestone(milestones[index]);
        setIsViewModalOpen(true);
    };

    const handleCloseViewModal = () => {
        setIsViewModalOpen(false);
        setViewingMilestone(null);
    };

    const getMenuItems = (index) => [
        {
            key: '1',
            label: (
                <div onClick={() => handleDuplicate(index)} className="cursor-pointer">
                    <LabelItems icon={<CirclePlus />} textOne={'Duplicate'} />
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => handleEdit(index)} className="cursor-pointer">
                    <LabelItems icon={<PenLine />} textOne={'Edit'} />
                </div>
            ),
        },
        {
            key: '3',
            label: (
                <div onClick={() => handleDelete(index)} className="cursor-pointer">
                    <LabelItems icon={<CircleX />} textOne={'Delete'} />
                </div>
            ),
        },
    ];

    return (
        <div>
            <div className="flex flex-col gap-[10px]">
                <SubTitleText text={'Define Milestones'} size={24} font={'medium'} />
                <SubTitleText text={'Break your bounty into clear, high-level milestones.'} size={14} font={'normal'} />
            </div>
            {milestones.length > 0 && (
                <div className="mt-4">
                    {milestones.map((milestone, index) => (
                        <div key={index} className="bg-[#E4E5E8] rounded-[6px] p-4 mb-4">
                            <div className="flex flex-row justify-between items-start">
                                <div className="flex-1">
                                    <h3 className="font-medium text-[16px] mb-2">Milestone Name</h3>
                                    <p className="text-[14px] text-gray-600">{milestone.title || 'Role name'} | {milestone.duration || '5 Days'}</p>
                                </div>
                                <div className="flex gap-2 items-center">
                                    <CreativeButton 
                                        variant="primary" 
                                        size="sm"
                                        onClick={() => handleViewMilestone(index)}
                                        className="h-[40px] px-4"
                                    >
                                        View Milestone
                                    </CreativeButton>
                                    <div className="dropdown-mileStone cursor-pointer">
                                        <Dropdown
                                            menu={{ items: getMenuItems(index) }}
                                            dropdownRender={(menu) => (
                                                <div className="custom-dropdown w-[250px]">
                                                    {menu}
                                                </div>
                                            )}
                                            placement="bottomRight"
                                        >
                                            <EllipsisVertical className="cursor-pointer hover:text-blue-600" />
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {navigateToAddMileStones ?
                <AddMileStone
                    navigateToPostABounty={navigateToPostABounty}
                    navigateToDefineMileStone={navigateToDefineMileStone}
                    setNavigateToAddMileStones={setNavigateToAddMileStones}
                    onSave={handleSaveMilestone}
                    editingMilestone={editingIndex !== null ? milestones[editingIndex] : null}
                />
                :
                <>
                    <div className="flex justify-end w-full mt-[20px]">
                        <CreativeButton 
                            variant="primary" 
                            size="md" 
                            onClick={navigateToDefineMileStone} 
                            className="h-[48px] w-[175px] flex items-center gap-2"
                        >
                            <CirclePlus size={18} />
                            Add Milestone
                        </CreativeButton>
                    </div>         

                    <PostBountyFooter 
                        navigateTo={navigateToPostABounty} 
                        bountyData={bountyData}
                        milestones={milestones}
                    />

                 
                </>
            }

            {/* View Milestone Modal */}
            <ViewMilestoneModal
                open={isViewModalOpen}
                onClose={handleCloseViewModal}
                milestone={viewingMilestone}
            />

            <style>
                {`
                    .custom-dropdown .ant-dropdown-menu-item:hover {
                        background-color: #E7F0FA !important;
                    }
                    `}
            </style>
        </div>
    )
}
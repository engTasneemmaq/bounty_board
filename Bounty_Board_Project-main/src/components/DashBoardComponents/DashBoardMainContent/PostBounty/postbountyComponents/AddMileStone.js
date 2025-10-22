import { useState, useEffect } from "react";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Select } from "antd";
import InputText from "../../../../../shared/Inputs/InputText";
import { X } from 'lucide-react';
import { MarkDownWithTitle } from "../../../DashBoardSharedComponents/MarkdownWithTitle";
import { PostBountyFooter } from "../../../DashBoardSharedComponents/PostBountyFooter";
import { showMessage } from "../../../../../utils/toast";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";

export const AddMileStone = ({ setNavigateToAddMileStones, onSave, editingMilestone }) => {
    const [title, setTitle] = useState(editingMilestone?.title || '');
    const [description, setDescription] = useState(editingMilestone?.description || '');
    const [duration, setDuration] = useState(editingMilestone?.duration || '');
    const [role, setRole] = useState(editingMilestone?.role || '');

    // Update form when editingMilestone changes
    useEffect(() => {
        if (editingMilestone) {
            setTitle(editingMilestone.title || '');
            setDescription(editingMilestone.description || '');
            setDuration(editingMilestone.duration || '');
            setRole(editingMilestone.role || '');
        } else {
            // Reset form for new milestone
            setTitle('');
            setDescription('');
            setDuration('');
            setRole('');
        }
    }, [editingMilestone]);

    const navigateToDefineMileStone = () => {
        setNavigateToAddMileStones(false);
    }

    const handleSave = () => {
        if (!title.trim()) {
            showMessage.error('Please enter a milestone title');
            return;
        }
        
        const newMilestone = {
            title,
            description,
            duration,
            role
        };
        onSave(newMilestone);
        
        // Reset form
        setTitle('');
        setDescription('');
        setDuration('');
        setRole('');
    };

    return (
        <div>
            <div className="bg-[#E4E5E8] w-full rounded-[6px] mt-[30px]">
                <div className="w-full flex justify-end">
                    <button className="bg-transparent border-0 flex items-center justify-center shadow-none hover:text-[#367AFF]" >
                        <X className="mx-[20px] mt-[20px]" onClick={navigateToDefineMileStone}  />
                    </button>
                </div>
                <div className="mx-[20px]">
                    <SubTitleText text={'Milestone Title'} size={14} font={'normal'}  />
                    <InputText
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder={'Add milestone title...'}
                        className={'w-full h-[48px]  mt-[10px]'}
                        divClassName={''}
                    />
                </div>
                <div className="mx-[20px] pb-[50px] flex flex-row flex-wrap gap-[8px] ">
                    <MarkDownWithTitle
                        value={description}
                        change={setDescription}
                        placeholder={'Explain what needs to be done, and what the hunter should deliver for this phase....'}
                        paragraph={'Description'}
                        width={"100%"}
                        bg={'#FFFFFF'}
                        divClassName={'w-full lg:w-[70%]'}
                    />
                    <div className="w-full lg:w-[29%] flex flex-col flex-wrap ">
                        <div className={'w-[100%] mt-[20px] mb-[20px]'}>
                            <p className="mb-[10px] font-normal text-[14px]">Suggested Duration</p>
                            <Select
                                className={'w-[100%] h-[48px]'}
                                placeholder={'Select...'}
                                value={duration || undefined}
                                onChange={setDuration}
                                options={[
                                    { value: '3 days', label: '3 Days' },
                                    { value: '5 days', label: '5 Days' },
                                    { value: '1 week', label: '1 Week' },
                                    { value: '2 weeks', label: '2 Weeks' },
                                    { value: '1 month', label: '1 Month' },
                                ]}
                            />
                        </div>
                        <div className={'w-[100%]'}>
                            <p className="mb-[10px] font-normal text-[14px]">Assigned Role</p>
                            <Select
                                className={'w-[100%] h-[48px]'}
                                placeholder={'Select...'}
                                value={role || undefined}
                                onChange={setRole}
                                options={[
                                    { value: 'Front-end', label: 'Front-end' },
                                    { value: 'Back-end', label: 'Back-end' },
                                    { value: 'Full-stack', label: 'Full-stack' },
                                    { value: 'Designer', label: 'Designer' },
                                    { value: 'DevOps', label: 'DevOps' },
                                    { value: 'Marketing Officer', label: 'Marketing Officer' },
                                    { value: 'Role name', label: 'Role name' },
                                ]}
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="flex justify-between w-full mt-[20px] flex-wrap gap-[20px]">
                    <CreativeButton
                        variant="primary"
                        size="md"
                        onClick={handleSave}
                        className="w-[160px] h-[48px]"
                    >
                        Save changes
                    </CreativeButton>
                </div>
            </div>



            <PostBountyFooter navigateTo={navigateToDefineMileStone}  />
        </div>
    )
}
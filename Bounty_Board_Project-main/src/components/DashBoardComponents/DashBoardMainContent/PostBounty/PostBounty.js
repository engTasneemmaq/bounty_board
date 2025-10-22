import react, { useState } from "react";
import { SubTitleText } from "../../../../shared/Texts/SubTitleText";
import { UploadImage } from "../../../../shared/UpladeImage/UploadImage";
import InputText from "../../../../shared/Inputs/InputText";
import {  DatePicker, Input, Select } from "antd";
import SocialRolesLinks from "../../../../shared/SocialRolesLinks.js/SocialRolesLinks";
import { UploadDocuments } from "../../../../shared/uploadCv/UploadDocuments";
import { GlobalOutlined } from "@ant-design/icons";
import { MarkDownWithTitle } from "../../DashBoardSharedComponents/MarkdownWithTitle";
import { DefineMileStones } from "./postbountyComponents/DefineMileStones";
import { showMessage } from "../../../../utils/toast";
import CreativeButton from "../../../../shared/Buttons/CreativeButton";
import { ArrowRight, PlusCircle } from "lucide-react";


export const PostBounty = ({ }) => {
    // Form state
    const [projectTitle, setProjectTitle] = useState("");
    const [expirationDate, setExpirationDate] = useState(null);
    const [category, setCategory] = useState(null);
    const [salary, setSalary] = useState("");
    const [languages, setLanguages] = useState([]);
    const [projectLink, setProjectLink] = useState("");
    const [description, setDescription] = useState("");
    const [requirements, setRequirements] = useState("");
    const [technical, setTechnical] = useState("");
    const [coverImage, setCoverImage] = useState("");
    
    // Navigation state
    const [navigateToMilestone, setNavigateToMileStone] = useState(false);
    const [navigateToAddMileStones, setNavigateToAddMileStones] = useState(false);

    // Get all bounty data
    const getBountyData = () => ({
        projectTitle,
        expirationDate,
        category,
        salary,
        languages,
        projectLink,
        description,
        requirements,
        technical,
        coverImage
    });

    const navigateToMilestonecomponent = () => {
        // Basic validation before proceeding
        if (!projectTitle.trim()) {
            showMessage.error('Please enter a project title');
            return;
        }
        if (!expirationDate) {
            showMessage.error('Please select an expiration date');
            return;
        }
        if (!category) {
            showMessage.error('Please select a category');
            return;
        }
        if (!salary.trim()) {
            showMessage.error('Please enter a price amount');
            return;
        }
        if (languages.length === 0) {
            showMessage.error('Please select at least one language');
            return;
        }
        setNavigateToMileStone(() => true);
    }

    const navigateToPostABounty = () => {
        setNavigateToMileStone(() => false)
    }
    
    const navigateToDefineMileStone = () => { 
        setNavigateToAddMileStones(()=> true)
    }

    const dateFormatList = ["DD/MM/YYYY"];
    
    const optionsLanguages = [
        { value: "english", label: "English" },
        { value: "arabic", label: "Arabic" },
        { value: "spanish", label: "Spanish" },
        { value: "french", label: "French" },
        { value: "german", label: "German" },
        { value: "mandarin", label: "Mandarin" },
        { value: "russian", label: "Russian" },
        { value: "japanese", label: "Japanese" },
        { value: "hindi", label: "Hindi" },
        { value: "italian", label: "Italian" },
    ];

    const categoryOptions = [
        { value: 'web-development', label: 'Web Development' },
        { value: 'mobile-development', label: 'Mobile Development' },
        { value: 'design', label: 'Design' },
        { value: 'marketing', label: 'Marketing' },
        { value: 'content-creation', label: 'Content Creation' },
        { value: 'data-science', label: 'Data Science' },
        { value: 'other', label: 'Other' },
    ];

    return (
        <div>
            {navigateToMilestone ?
                <DefineMileStones 
                    navigateToPostABounty={navigateToPostABounty} 
                    setNavigateToAddMileStones={setNavigateToAddMileStones} 
                    navigateToDefineMileStone={navigateToDefineMileStone} 
                    navigateToAddMileStones={navigateToAddMileStones}
                    bountyData={getBountyData()}
                />
                :
                <>
                    <div className="flex items-center gap-3 mb-6">
                        <PlusCircle className="w-8 h-8 text-blue-600" />
                        <h2 className="text-3xl font-bold text-gradient">Post a Bounty</h2>
                    </div>
                    <div className="flex flex-row flex-wrap w-full items-center gap-[32px]">
                        <div className="mt-[32px]">
                            <div className="flex flex-col gap-[20px]">
                                <SubTitleText text={'Picture'} size={14} font={'normal'} />
                                <UploadImage onImageChange={setCoverImage} />
                            </div>
                        </div>
                        <div className="w-[70%] mt-[22px]">
                            <div className="flex flex-col gap-[8px] mb-[40px]">
                                <InputText 
                                    label={'Project Tittle'} 
                                    placeholder={'Add project title'} 
                                    className={'h-[48px]'}
                                    value={projectTitle}
                                    onChange={(e) => setProjectTitle(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col lg:flex-row gap-[18px] w-full">
                                <div className="flex flex-col gap-[8px] w-full lg:w-[50%]">
                                    <SubTitleText text={'Expiration Date'} size={14} font={'normal'} />
                                    <DatePicker
                                        placeholder="DD/MM/YYYY"
                                        format={dateFormatList}
                                        className="h-[48px]"
                                        value={expirationDate}
                                        onChange={setExpirationDate}
                                    />
                                </div>
                                <div className="flex flex-col gap-[8px] w-full lg:w-[50%]">
                                    <SubTitleText text={'Category'} size={14} font={'normal'} />
                                    <Select 
                                        options={categoryOptions}
                                        className="h-[48px]"
                                        placeholder="Select..."
                                        value={category}
                                        onChange={setCategory}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mb-[40px] flex flex-col lg:flex-row gap-[20px] mt-[40px]">
                        <div className="flex flex-col gap-[8px] w-full lg:w-[30%] relative after:content-['USD'] after:absolute after:w-[66px] after:h-[48px] after:right-[0px] after:bg-[#F1F2F4B2] after:flex after:items-center after:justify-center after:text-[#000] after:text-sm after:rounded-r after:top-[40%]">
                            <InputText 
                                label={'Price'} 
                                placeholder="Enter total bounty reward..." 
                                className={'h-[48px]'}
                                value={salary}
                                onChange={(e) => setSalary(e.target.value)}
                                type="number"
                            />
                        </div>
                        <div className="flex flex-col gap-[9px] w-full lg:w-[63%] inputEdit">
                            <SubTitleText text={'Languages'} size={14} font={'normal'} />
                            <Select
                                mode="multiple"
                                placeholder="Select all required languages.."
                                className="custom-select-profile"
                                options={optionsLanguages}
                                style={{ height: 48 }}
                                value={languages}
                                onChange={setLanguages}
                            />
                        </div>

                    </div>
                    <div>
                        <div className="mb-[20px]">

                            <SubTitleText text={'Roles & Technologies'} size={18} font={'medium'} />
                        </div>
                        <SubTitleText text={'Required Roles & Technologies'} size={14} font={'normal'} />
                        <SocialRolesLinks condition={'role'} />
                    </div>
                    <div className="mt-[20px] mb-[20px]">
                        <SubTitleText text={'Project Resources'} size={18} font={'medium'} />
                        <div className="flex flex-row flex-wrap gap-[80px]">
                            <div className="flex flex-col">
                                <div className="mb-[20px] mt-[20px]">
                                    <SubTitleText text={'Project docs'} size={14} font={'normal'} />
                                </div>
                                <UploadDocuments />
                            </div>
                            <div className="flex flex-col w-[69%]" >
                                <div className="mb-[20px] mt-[20px]">
                                    <SubTitleText text={'Link to Project'} size={14} font={'normal'} />
                                </div>
                                <Input 
                                    placeholder="Project link/url..." 
                                    className="h-[82px] w-full relative after:content-[''] after:absolute after:w-[1px] after:h-[40px] after:bg-[#E4E5E8] after:left-[55px] after:top-[24%]" 
                                    prefix={<GlobalOutlined size={24} className="text-[#0A65CC] w-[48px] flex items-center justify-center " />}
                                    value={projectLink}
                                    onChange={(e) => setProjectLink(e.target.value)}
                                />
                            </div>
                            <div className="flex flex-col w-full">
                                <div className="mb-[20px] mt-[20px]">
                                    <SubTitleText text={'Description & Requirements'} size={18} font={'medium'} />
                                </div>
                                <MarkDownWithTitle change={setDescription} header={'Description & Requirements'} paragraph={'Description'} placeholder={'Add your project description...'} />
                                <MarkDownWithTitle change={setRequirements} paragraph={'Requirements'} placeholder={'Add your project Requirements...'} />
                                <MarkDownWithTitle change={setTechnical} paragraph={'Technical Details'} placeholder={'Add your project Technical Details...'} />

                                <div className="flex justify-start mt-[30px]">
                                    <CreativeButton 
                                        variant="primary" 
                                        size="md" 
                                        onClick={navigateToMilestonecomponent}
                                        className="w-[137px] h-[56px] flex items-center gap-2"
                                    >
                                        Next
                                        <ArrowRight size={18} />
                                    </CreativeButton>
                                </div>

                            </div>

                        </div>
                    </div>
                </>
            }
        </div>
    )
}
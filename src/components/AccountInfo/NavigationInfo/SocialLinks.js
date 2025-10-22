import DropDown from "../../../shared/Inputs/DropDown";
import InputText from "../../../shared/Inputs/InputText";
import { Button } from "antd";
import { ReactComponent as Facebook } from '../../../assets/logos/facebook.svg';
import { ReactComponent as Twitter } from '../../../assets/logos/twitter.svg';
import { ReactComponent as LinkedIn } from '../../../assets/logos/linkedIn.svg';
import { ReactComponent as Youtube } from '../../../assets/logos/youtube.svg';
import { ReactComponent as XCircle } from '../../../assets/Profile/XCircle.svg'
import { ReactComponent as PlusCircle } from '../../../assets/Profile/PlusCircle.svg'
import { useState } from "react";

const options = [
    { value: 'Facebook', label: 'Facebook' },
    { value: 'Twitter', label: 'Twitter' },
    { value: 'LinkedIn', label: 'LinkedIn' },
    { value: 'Youtube', label: 'Youtube' }
];

const iconMap = {
    Facebook: Facebook,
    Twitter: Twitter,
    LinkedIn: LinkedIn,
    Youtube: Youtube,
};



const SocialSelector = () => {
    const [selected, setSelected] = useState('Facebook');
    const IconComponent = iconMap[selected];

    return (
        <div className="flex items-center">
            {IconComponent && <IconComponent className="w-5 h-5" />}
            <DropDown
                options={options}
                value={selected}
                onChange={(val) => setSelected(val)}
                className="border-none w-[220px]"
                variant="borderless"
            />
        </div>
    );
};


const SocialLinks = () => {
    return (
        <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-2 w-full">
                <span>Social Link 1</span>
                <div className="flex gap-3 items-center w-full">
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-2 py-1 h-[50px] w-full">
                        <SocialSelector />
                        <div className="h-5 w-px bg-gray-300 mx-2" />
                        <InputText
                            placeholder="Profile link/url..."
                            variant=""
                            className="flex-1"
                        />
                    </div>
                    <div className="flex h-[50px] w-[50px] justify-center items-center bg-[#F1F2F4] rounded-[5px]">
                        <XCircle />
                    </div>
                </div>
            </div>

            <div className="flex  flex-col gap-3">
                <span>Social Link 2</span>
                <div className="flex gap-3 w-full">
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-2 py-1 h-[50px] w-full">
                        <SocialSelector />
                        <div className="h-5 w-px bg-gray-300 mx-2" />
                        <InputText
                            placeholder="Profile link/url..."
                            variant=""
                            className="flex-1"
                        />
                    </div>
                    <div className="flex h-[50px] w-[50px] justify-center items-center bg-[#F1F2F4] rounded-[5px]">
                        <XCircle />
                    </div>
                </div>
            </div>
            <div className="flex  flex-col gap-3">
                <span>Social Link 3</span>
                <div className="flex gap-3">
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-2 py-1 h-[50px] w-full">
                        <SocialSelector />
                        <div className="h-5 w-px bg-gray-300 mx-2" />
                        <InputText
                            placeholder="Profile link/url..."
                            variant=""
                            className="flex-1"
                        />
                    </div>
                    <div className="flex h-[50px] w-[50px] justify-center items-center bg-[#F1F2F4] rounded-[5px]">
                        <XCircle />
                    </div>
                </div>
            </div>

            <div className="flex  flex-col gap-3">
                <span>Social Link 4</span>
                <div className="flex gap-3">
                    <div className="flex items-center border border-gray-300 rounded-md overflow-hidden px-2 py-1 h-[50px] w-full">
                        <SocialSelector />
                        <div className="h-5 w-px bg-gray-300 mx-2" />
                        <InputText
                            placeholder="Profile link/url..."
                            variant=""
                            className="flex-1"
                        />
                    </div>
                    <div className="flex h-[50px] w-[50px] justify-center items-center bg-[#F1F2F4] rounded-[5px]">
                        <XCircle />
                    </div>
                </div>
            </div>

            <Button className="flex justify-center items-center bg-[#F1F2F4] h-[44px]">
                <PlusCircle/>
                <span>Add New Social Link</span>

            </Button>

        </div>

    );
};

export default SocialLinks;

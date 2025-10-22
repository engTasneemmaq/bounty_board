import { Tabs } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Personal from './NavigationInfo/Personal';
import Profile from './NavigationInfo/Profile';
import Contact from './NavigationInfo/Contact';
import { useState } from 'react';
import { FinalPageForProfile } from './NavigationInfo/FinalPageForProfile';

const Index = ({ percentForProgress, setPercentForProgress }) => {
    const { TabPane } = Tabs;
    const [activeKey, setActiveKey] = useState("1");
    const [openTab, setOpenTab] = useState(false)
    const [contactTab, setContactTab] = useState(false)
    const [revelFinalPage, setRevelFinalPage] = useState(false);


    const [formData, setFormData] = useState({
        fullName: '',
        jobTitle: '',
        experience: '',
        education: '',
        skills: [],
        currentPosition: '',
        website: ''
    });

    const [formDataProfile, setFormDataProfile] = useState({
        nationality: '',
        dateOfBirth: null,
        gender: '',
        maritalStatus: '',
        languages: [],
        country: '',
        biography: ''
    });

    const [formDataContact, setFormDataContact] = useState({
        phone: '',
        primaryEmail: '',
        secondaryEmail: '',
    });

    const [errorsContact, setErrorsContact] = useState({});
    const [errorsProfile, setErrorsProfile] = useState({});
    const [errors, setErrors] = useState({});

    const navigateToProfile = () => {
        setOpenTab(() => true);
        setActiveKey("2");
        setPercentForProgress(() => percentForProgress + 25)
    }

    const navigatePersonal = () => {
        setActiveKey("1");
        setPercentForProgress(() => percentForProgress - 25)
    }
    const navigateContact = () => {
        setActiveKey("4");
        setContactTab(() => true);
        setPercentForProgress(() => percentForProgress + 50)
    }
    const navigateBackToProfile = () => {
        setActiveKey("2");
        setPercentForProgress(() => percentForProgress - 50)
    }

    const showFinalPage = () => {
        setRevelFinalPage(() => true);
        setPercentForProgress(() => percentForProgress + 25)
    }



    const infoMap = {
        1: (
            <Personal
                formData={formData}
                setFormData={setFormData}
                errors={errors}
                setErrors={setErrors}
                navigateToProfile={navigateToProfile}
            />
        ),
        2: (
            <Profile
                formData={formDataProfile}
                setFormData={setFormDataProfile}
                errors={errorsProfile}
                setErrors={setErrorsProfile}
                navigatePersonal={navigatePersonal}
                navigateContact={navigateContact}
            />
        ),
        4: (
            <Contact
                formData={formDataContact}
                setFormData={setFormDataContact}
                errors={errorsContact}
                setErrors={setErrorsContact}
                navigateBackToProfile={navigateBackToProfile}
                showFinalPage={showFinalPage}
            />
        ),
    };

    // Combine all form data
    const allFormData = {
        ...formData,
        ...formDataProfile,
        ...formDataContact,
    };

    return (
        revelFinalPage ?
            <>
                <FinalPageForProfile allFormData={allFormData} />

            </>

            :


            <div>
                <div
                    className={`flex flex-col px-4 md:px-12 ${activeKey === '4'
                        ? 'lg:w-[984px] relative before:content-[""] before:absolute before:w-full before:h-[1px] before:top-11 before:bg-[#E5E6E9]'
                        : ''
                        }`}
                >

                    <div
                        className={`flex  custom-tabs-wrapper justify-center items-center relative w-full    
                            
                            
                        ${activeKey === "1"
                                ? 'lg:transform lg:translate-x-[-15%] lg:before:translate-x-[15%]  lg:w-full relative before:content-[""] before:absolute before:w-full before:h-[1px] before:top-11 before:bg-[#E5E6E9]'
                                : activeKey === "2" ? 
                                    'lg:w-full relative before:content-[""] before:absolute before:w-full before:h-[1px] before:top-11 before:bg-[#E5E6E9]'
                                : ''
                            
                            }`
                        }
                    >
                        <Tabs activeKey={activeKey} onChange={(key) => setActiveKey(key)}>
                            <TabPane
                                key="1"
                                tab={
                                    <div className="py-[0px] px-[20px] flex items-center gap-2">
                                        <UserOutlined />
                                        Personal
                                    </div>

                                }
                            />
                            <TabPane
                                tab={
                                    <div className="py-[0px] px-[20px] flex items-center gap-2 ">
                                        <UserOutlined />
                                        Profile
                                    </div>
                                }
                                key="2"
                                disabled={openTab ? false : true}
                            />
                            <TabPane tab={
                                <div className="py-[0px] px-[20px] flex items-center gap-2 ">
                                    <UserOutlined />
                                    Contact
                                </div>
                            }
                                key="4"
                                disabled={contactTab ? false : true}
                            />

                        </Tabs>
                    </div>
                    <div className='flex items-center justify-center'>
                        {infoMap[activeKey]}
                    </div>
                </div>

                <style>
                    {`
                        @media (max-width: 768px) {
                        .custom-tabs-wrapper .ant-tabs-tab {
                            margin: 0 !important;
                        }
                        }
                    `}
                </style>

            </div>
    )
}

export default Index
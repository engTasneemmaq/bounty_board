import { bounties } from "../PostedBounties";
import { useParams, Link } from "react-router-dom";
import { Avatar, Button, Divider, Dropdown, Pagination } from 'antd';
import { showMessage } from "../../../../../utils/toast";
import { SubTitleText } from "../../../../../shared/Texts/SubTitleText";
import { Ellipsis, Mail, Download } from 'lucide-react';
import ArrowButton from "../../../../../shared/Buttons/ArrowButton";
import { useEffect, useState } from "react";
import { CustomPaginationS } from "../../../DashBoardSharedComponents/CustomPagination";
import {CustomModal} from "../../../../../shared/Modal/CustomModal";
import { ViewUserDetails } from "./ViewUserDetails";
import { ViewTeamDetails } from "./ViewTeamDetails";
import SendEmailModal from "../../../../LandingPage/ExploreBounties/SendEmailModal";



export const ApplicationCard = ({ viewAllApplication, havePagination, isSaved, filteredApplications }) => {
    const [savedApplication, setSavedApplication] = useState(bounties);
    const [getId, setGetId] = useState(0);
    const [open, setOpen] = useState(false);
    const [showEmailModal, setShowEmailModal] = useState(false);
    const [selectedApplicant, setSelectedApplicant] = useState(null);
    const [viewingApplication, setViewingApplication] = useState(null)

    const getIdForApp = (appId) => {
        setGetId(appId)
    }

    const doUnsave = () => {
        setSavedApplication(prevState =>
            prevState.map(b =>
                b.id === id
                    ? {
                        ...b,
                        application: b.application.map(app =>
                            app.id === getId ? { ...app, saved: false } : app
                        )
                    }
                    : b
            )
        );
        showMessage.success('Application removed from saved ❤️');
    };

    const doSave = () => {
        setSavedApplication(prevState =>
            prevState.map(b =>
                b.id === id
                    ? {
                        ...b,
                        application: b.application.map(app =>
                            app.id === getId ? { ...app, saved: true } : app
                        )
                    }
                    : b
            )
        );
        showMessage.success('Application saved successfully ❤️');
    }

    const handleSendEmail = (appId) => {
        console.log('Send email to application:', appId);
        // Find the applicant details from all bounties
        const bounty = savedApplication.find(b => b.id === id);
        if (bounty) {
            const applicant = bounty.application.find(app => app.id === appId);
            if (applicant) {
                setSelectedApplicant(applicant);
                setShowEmailModal(true);
            }
        }
    };

    const handleDownloadCV = (appId) => {
        console.log('Download CV for application:', appId);
        showMessage.loading('Downloading CV...');
        setTimeout(() => {
            showMessage.success('CV downloaded successfully! 📥');
        }, 500);
    };

    const getMenuItems = () => [
        {
            key: '1',
            label: (
                <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                    <Mail className='text-[#5E6670]' size={16} />
                    Send Email
                </div>
            ),
            onClick: () => handleSendEmail(getId),
        },
        {
            key: '2',
            label: (
                <div className='flex flex-row items-center gap-[10px] text-[#5E6670] font-medium text-[14px]'>
                    <Download className='text-[#5E6670]' size={16} />
                    Download CV
                </div>
            ),
            onClick: () => handleDownloadCV(getId),
        },
    ];

    const { id } = useParams();
    const bounty = savedApplication.find(b => b.id === id);

    if (!bounty) {
        return <div>Bounty not found</div>;
    }

    // Use filtered applications if provided, otherwise use original data
    const applicationsData = filteredApplications || bounty.application;
    
    const savedApplications = applicationsData.filter(app => app.saved);
    const allApplications = applicationsData;
    const applicationsToShow = viewAllApplication ? allApplications : savedApplications;


    const openPopUp = (app) => {
        setViewingApplication(app);
        setOpen(true);
    };
    
    const onCancel = () => {
        setOpen(false);
        setViewingApplication(null);
    };

    return (
        <>
            <div className="grid xl:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4  gap-[20px] pb-[20px]">
                {applicationsToShow.map((app) => (
                    <div
                        key={app.id}
                        className={`flex flex-col gap-[12px] px-[20px] py-[20px] rounded-[6px] ${app.teamName ? 'bg-gradient-to-r from-[#FFF6E6] to-[#ffffff]' : 'bg-[#FFFFFF]'} `}
                    >
                        <div className="flex justify-end ">
                            <Dropdown 
                                menu={{ items: getMenuItems() }} 
                                placement="bottomRight"
                                trigger={['click']}
                            >
                                <Ellipsis 
                                    onClick={() => getIdForApp(app.id)} 
                                    className="cursor-pointer hover:text-blue-600"
                                    size={20}
                                />
                            </Dropdown>
                        </div>
                        <div className="flex flex-row gap-[12px] ">
                            <Avatar size={48}>{(app.userName || app.teamName)?.charAt(0) || 'T'}</Avatar>
                            <div className="flex flex-col">
                                <SubTitleText text={app.userName || app.teamName} size={14} color={'#18191C'} font={'medium'} />
                                <SubTitleText text={app.position} size={14} color={'#767F8C'} font={'normal'} />
                            </div>
                        </div>
                        <Divider className="my-[10px]" />
                        <div>
                            {app.experience && <SubTitleText text={`• ${app.experience} Years Experience`} size={14} color={'#5E6670'} font={'normal'} />}
                            {app.teamName && app.member && (
                                <SubTitleText text={`• Members: ${app.member}`} size={14} color={'#5E6670'} font={'normal'} />
                            )}
                            <SubTitleText text={`• Role: ${app.role}`} size={14} color={'#5E6670'} font={'normal'} />
                            <SubTitleText text={`• Applied: ${app.dateOfApply}`} size={14} color={'#5E6670'} font={'normal'} />
                        </div>
                        <ArrowButton 
                            text={"View Details"} 
                            className="w-[127px] h-[27px] bg-[transparent] text-[#0A65CC] border-0 shadow-none px-0 translate-x-[-10px]" 
                            divClassName="flex flex-start px-0" 
                            onClick={() => openPopUp(app)} 
                        />
                    </div>
                ))}
            </div>
            <CustomModal  
                open={open} 
                onCancel={onCancel} 
                width={'60%'} 
                content={
                    viewingApplication?.teamName 
                        ? <ViewTeamDetails teamData={viewingApplication} />
                        : <ViewUserDetails userData={viewingApplication} />
                } 
            />
            
            {/* Send Email Modal */}
            {showEmailModal && selectedApplicant && (
                <SendEmailModal
                    open={showEmailModal}
                    onClose={() => {
                        setShowEmailModal(false);
                        setSelectedApplicant(null);
                    }}
                    recipientName={selectedApplicant.userName || selectedApplicant.teamName || 'Applicant'}
                    recipientEmail={selectedApplicant.email || 'applicant@example.com'}
                />
            )}
            
            {havePagination ?
                <div className="flex justify-center items-center w-full">
                    <CustomPaginationS />
                </div>
                :
                ''
            }

        </>
    );
};


import React, { useState } from 'react';
import { message, Upload } from 'antd';

export const UploadImage = () => {
    const [fileList, setFileList] = useState([]);

    const UploadIcon = () => (
        <svg
            width="48"
            height="49"
            viewBox="0 0 48 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M32 32.5L24 24.5L16 32.5"
                stroke="#ADB2BA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M24 24.5V42.5"
                stroke="#ADB2BA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M40.7809 37.2809C42.7316 36.2175 44.2726 34.5347 45.1606 32.4982C46.0487 30.4617 46.2333 28.1874 45.6853 26.0343C45.1373 23.8812 43.8879 21.972 42.1342 20.6078C40.3806 19.2437 38.2226 18.5024 36.0009 18.5009H33.4809C32.8755 16.1594 31.7472 13.9856 30.1808 12.1429C28.6144 10.3002 26.6506 8.83664 24.4371 7.86216C22.2236 6.88767 19.818 6.42766 17.4011 6.51671C14.9843 6.60576 12.619 7.24154 10.4833 8.37628C8.34747 9.51101 6.49672 11.1152 5.07014 13.0681C3.64356 15.0211 2.67828 17.272 2.24686 19.6517C1.81544 22.0314 1.92911 24.478 2.57932 26.8075C3.22954 29.1369 4.39938 31.2887 6.0009 33.1009"
                stroke="#ADB2BA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M32 32.5L24 24.5L16 32.5"
                stroke="#ADB2BA"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const props = {
        name: 'file',
        multiple: true,
        accept: 'image/*',
        fileList,
        customRequest: ({ file, onSuccess }) => {
            setTimeout(() => {
                onSuccess("ok");
            }, 1000);
        },
        onChange(info) {
            let newFileList = [...info.fileList];
            newFileList = newFileList.map((file) => {
                if (file.response === "ok") {
                    file.status = "done";
                }
                return file;
            });

            setFileList(newFileList);

            const { status } = info.file;
            if (status === 'done') {
                message.success(`${info.file.name} file uploaded successfully.`);
            } else if (status === 'error') {
                message.error(`${info.file.name} file upload failed.`);
            }
        },
        onRemove: (file) => {
            setFileList((prevList) => prevList.filter((f) => f.uid !== file.uid));
        },
    };

    return (
        <Upload.Dragger {...props} className="h-[240px] w-[240px]">
            <p className="ant-upload-drag-icon flex flex-col gap-4 justify-center items-center">
                <UploadIcon />
            </p>
            <p className="ant-upload-text">
                <span className="font-medium text-[14px]">Browse photo</span> or drop here
            </p>
            <p className="ant-upload-hint">
                A photo larger than 400 pixels works best. Max photo size 5 MB.
            </p>
        </Upload.Dragger>
    );
};


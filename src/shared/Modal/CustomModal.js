import { Modal, Button } from "antd";
import { X } from 'lucide-react';

export const CustomModal = ({ open, onCancel, content, width }) => {
    return (
        <Modal
            open={open}
            footer={null}
            closable={false}
            onCancel={onCancel}
            
        >
            <Button 
                className="rounded-full h-[48px] w-[48px] absolute right-[-24px] top-[-24px] bg-[#E7F0FA] border-[2px] border-[#ffffff]"
                onClick={onCancel}
            >
                <X />
            </Button>
            {content}
            <style>
                {
                    `
                    .ant-modal{
                    width: ${width} !important;
                    
                    }
                    `
                }
            </style>
        </Modal>
    );
};

import { Table } from "antd";
import { useMediaQuery } from 'react-responsive';
import { MoveLeft, MoveRight } from 'lucide-react';

export const TableDashboard = ({ havePagination, data, columns }) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1057px)' });

    const itemRender = (page, type, originalElement) => {
        if (type === 'page') {
            return <span>{page.toString().padStart(2, '0')}</span>;
        }
        if (type === 'prev') {
            return <MoveLeft size={20} />;
        }
        if (type === 'next') {
            return <MoveRight size={20} />;
        }
        return originalElement;
    };

    return (
        <>
            <Table
                columns={
                    isTabletOrMobile
                        ? columns.filter(col => col.dataIndex !== 'status' && col.dataIndex !== 'application')
                        : columns
                }
                dataSource={data}
                pagination={
                    havePagination
                        ? { 
                            position: ['bottomCenter'], 
                            className: 'custom-pagination',
                            itemRender
                          }
                        : false
                }
            />
            <style>
                {`
                    .custom-pagination.ant-pagination {
                        align-items: center !important; 
                    }
                    /* Default page styles (no background) */
                    .custom-pagination .ant-pagination-item {
                        border-radius: 50% !important; 
                        background-color: transparent !important; 
                        color: #0A65CC !important; 
                        width: 48px !important;
                        height: 48px !important; 
                        display: flex !important;
                        justify-content: center !important;
                        align-items: center !important;  
                        border: 1px solid #ccc !important;
                        transition: background-color 0.3s ease;
                    }
                    /* Active page */
                    .custom-pagination .ant-pagination-item-active {
                        background-color: #0A65CC !important;
                        color: white !important;
                        border-color: #0A65CC !important;
                    }
                    /* Hover effect for non-active pages */
                    .custom-pagination .ant-pagination-item:hover:not(.ant-pagination-item-active) {
                        background-color: #ccc !important;
                        color: white !important;
                    }
                    /* Prev & Next arrows */
                    .custom-pagination .ant-pagination-prev,
                    .custom-pagination .ant-pagination-next {
                        display: flex !important;
                        align-items: center !important;
                        justify-content: center !important;
                        width: 48px !important;
                        height: 48px !important;
                        border-radius: 50% !important;
                        transition: background-color 0.3s ease;
                        background-color: #E7F0FA !important; 
                        color:  #0A65CC !important;
                    }
                    /* Disabled arrows */
                    .custom-pagination .ant-pagination-prev.ant-pagination-disabled,
                    .custom-pagination .ant-pagination-next.ant-pagination-disabled {
                        opacity: 0.4 !important;
                        cursor: not-allowed !important;
                        border-color: #ddd !important;
                    }
                `}
            </style>
        </>
    );
};

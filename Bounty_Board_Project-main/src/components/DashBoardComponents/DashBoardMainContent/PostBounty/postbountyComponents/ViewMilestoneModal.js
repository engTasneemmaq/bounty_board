import { Modal } from "antd";
import { X } from "lucide-react";

export const ViewMilestoneModal = ({ open, onClose, milestone }) => {
    if (!milestone) return null;

    return (
        <Modal
            open={open}
            onCancel={onClose}
            footer={null}
            width={900}
            closeIcon={
                <div className="h-8 w-8 rounded-full bg-[#E7F0FA] grid place-items-center hover:bg-[#D0E3FF] transition-colors">
                    <X size={16} className="text-[#2A64D6]" />
                </div>
            }
            className="view-milestone-modal"
        >
            <div className="p-2">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">View Milestone</h2>
                
                {/* Milestone Title */}
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Milestone Title
                    </label>
                    <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                        <p className="text-gray-900">{milestone.title || 'Untitled Milestone'}</p>
                    </div>
                </div>

                {/* Description and Details */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-6">
                    {/* Description - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>
                        <div className="p-4 bg-gray-50 rounded-md border border-gray-200 min-h-[200px]">
                            <p className="text-gray-700 whitespace-pre-wrap">
                                {milestone.description || 'No description provided'}
                            </p>
                        </div>
                    </div>

                    {/* Details - Takes 1 column */}
                    <div className="space-y-4">
                        {/* Suggested Duration */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Suggested Duration
                            </label>
                            <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-gray-900">{milestone.duration || 'Not specified'}</p>
                            </div>
                        </div>

                        {/* Assigned Role */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Assigned Role
                            </label>
                            <div className="p-3 bg-gray-50 rounded-md border border-gray-200">
                                <p className="text-gray-900">{milestone.role || 'Not assigned'}</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="flex justify-end pt-4 border-t border-gray-200">
                    <button
                        onClick={onClose}
                        className="px-6 py-2 bg-[#0A65CC] text-white rounded-md hover:bg-[#0854B3] transition-colors font-medium"
                    >
                        Close
                    </button>
                </div>
            </div>

            <style jsx global>{`
                .view-milestone-modal .ant-modal-content {
                    border-radius: 12px;
                }
                .view-milestone-modal .ant-modal-header {
                    border-bottom: none;
                    padding: 20px 24px 0;
                }
                .view-milestone-modal .ant-modal-body {
                    padding: 20px 24px;
                }
            `}</style>
        </Modal>
    );
};


/** @format */

import React from 'react';
import { Modal } from 'antd';
import { AlertCircle, CheckCircle, XCircle, Info, AlertTriangle } from 'lucide-react';
import './ConfirmModal.css';

const iconMap = {
  warning: <AlertTriangle size={64} />,
  danger: <XCircle size={64} />,
  success: <CheckCircle size={64} />,
  info: <Info size={64} />,
  question: <AlertCircle size={64} />,
};

const gradientMap = {
  warning: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
  danger: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  success: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  info: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  question: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
};

const ConfirmModal = ({
  visible,
  title,
  message,
  type = 'question',
  okText = 'Confirm',
  cancelText = 'Cancel',
  onOk,
  onCancel,
  showCancel = true,
}) => {
  const icon = iconMap[type] || iconMap.question;
  const gradient = gradientMap[type] || gradientMap.question;

  return (
    <Modal
      open={visible}
      onCancel={onCancel}
      footer={null}
      centered
      closeIcon={null}
      className="creative-confirm-modal"
      width={480}
      maskStyle={{
        backdropFilter: 'blur(8px)',
        WebkitBackdropFilter: 'blur(8px)',
      }}
    >
      <div className="confirm-modal-content">
        {/* Icon with gradient background */}
        <div 
          className="confirm-modal-icon-wrapper"
          style={{ background: gradient }}
        >
          <div className="confirm-modal-icon">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="confirm-modal-title">{title}</h3>

        {/* Message */}
        <p className="confirm-modal-message">{message}</p>

        {/* Buttons */}
        <div className="confirm-modal-buttons">
          {showCancel && (
            <button 
              className="confirm-modal-btn confirm-modal-btn-cancel"
              onClick={onCancel}
            >
              {cancelText}
            </button>
          )}
          <button 
            className="confirm-modal-btn confirm-modal-btn-ok"
            onClick={onOk}
            style={{ background: gradient }}
          >
            {okText}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ConfirmModal;


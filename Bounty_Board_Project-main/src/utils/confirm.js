/** @format */

import React from 'react';
import { createRoot } from 'react-dom/client';
import ConfirmModal from '../components/shared/ConfirmModal';

/**
 * Show a beautiful confirmation modal
 * @param {Object} options - Modal options
 * @returns {Promise<boolean>} - Resolves to true if confirmed, false if cancelled
 */
export const showConfirm = ({
  title = 'Are you sure?',
  message = 'This action cannot be undone.',
  type = 'question',
  okText = 'Confirm',
  cancelText = 'Cancel',
  showCancel = true,
} = {}) => {
  return new Promise((resolve) => {
    const div = document.createElement('div');
    document.body.appendChild(div);
    const root = createRoot(div);

    const handleOk = () => {
      root.unmount();
      document.body.removeChild(div);
      resolve(true);
    };

    const handleCancel = () => {
      root.unmount();
      document.body.removeChild(div);
      resolve(false);
    };

    root.render(
      <ConfirmModal
        visible={true}
        title={title}
        message={message}
        type={type}
        okText={okText}
        cancelText={cancelText}
        showCancel={showCancel}
        onOk={handleOk}
        onCancel={handleCancel}
      />
    );
  });
};

/**
 * Quick confirm helpers
 */
export const confirm = {
  // Warning confirmation (yellow/orange theme)
  warning: (message, title = '⚠️ Warning') =>
    showConfirm({
      title,
      message,
      type: 'warning',
      okText: 'Continue',
      cancelText: 'Cancel',
    }),

  // Danger confirmation (red/pink theme)
  danger: (message, title = '🚨 Danger') =>
    showConfirm({
      title,
      message,
      type: 'danger',
      okText: 'Yes, Delete',
      cancelText: 'Cancel',
    }),

  // Success confirmation (purple theme)
  success: (message, title = '✅ Success') =>
    showConfirm({
      title,
      message,
      type: 'success',
      okText: 'OK',
      showCancel: false,
    }),

  // Info confirmation (blue theme)
  info: (message, title = 'ℹ️ Information') =>
    showConfirm({
      title,
      message,
      type: 'info',
      okText: 'Got it',
      showCancel: false,
    }),

  // Question confirmation (default)
  question: (message, title = '❓ Confirm Action') =>
    showConfirm({
      title,
      message,
      type: 'question',
      okText: 'Yes',
      cancelText: 'No',
    }),
};

export default showConfirm;


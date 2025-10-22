/** @format */

import toast from 'react-hot-toast';
import { CheckCircle, XCircle, AlertCircle, Info, Loader } from 'lucide-react';

// Custom toast styles with creative gradients
const toastStyles = {
  base: {
    padding: '18px 28px',
    borderRadius: '16px',
    fontWeight: '600',
    fontSize: '15px',
    maxWidth: '500px',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.1) inset',
    display: 'flex',
    alignItems: 'center',
    gap: '14px',
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  },
  success: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  error: {
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  warning: {
    background: 'linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)',
    color: '#2d3748',
    border: '2px solid rgba(252, 182, 159, 0.3)',
  },
  info: {
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
    color: '#fff',
    border: '2px solid rgba(255, 255, 255, 0.2)',
  },
  loading: {
    background: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
    color: '#2d3748',
    border: '2px solid rgba(254, 214, 227, 0.3)',
  },
};

// Icon components mapping
const icons = {
  success: CheckCircle,
  error: XCircle,
  warning: AlertCircle,
  info: Info,
  loading: Loader,
};

// Custom toast function
const showToast = (type, message, options = {}) => {
  const Icon = icons[type];
  const style = { ...toastStyles.base, ...toastStyles[type] };

  return toast.custom(
    (t) => (
      <div
        className={`${t.visible ? 'animate-enter' : 'animate-leave'} pointer-events-auto`}
        style={style}
      >
        <Icon size={24} className={type === 'loading' ? 'animate-spin' : ''} />
        <span>{message}</span>
      </div>
    ),
    {
      duration: type === 'loading' ? Infinity : options.duration || 3000,
      position: options.position || 'top-center',
      ...options,
    }
  );
};

// Export easy-to-use functions
export const showMessage = {
  success: (message, options) => showToast('success', message, options),
  error: (message, options) => showToast('error', message, options),
  warning: (message, options) => showToast('warning', message, options),
  info: (message, options) => showToast('info', message, options),
  loading: (message, options) => showToast('loading', message, options),
  dismiss: (toastId) => toast.dismiss(toastId),
  dismissAll: () => toast.dismiss(),
};

// Promise-based toast for async operations
export const showPromise = (promise, messages) => {
  return toast.promise(
    promise,
    {
      loading: messages.loading || 'Loading...',
      success: messages.success || 'Success!',
      error: messages.error || 'Error!',
    },
    {
      style: toastStyles.base,
      success: {
        style: { ...toastStyles.base, ...toastStyles.success },
        icon: <CheckCircle size={24} />,
      },
      error: {
        style: { ...toastStyles.base, ...toastStyles.error },
        icon: <XCircle size={24} />,
      },
      loading: {
        style: { ...toastStyles.base, ...toastStyles.loading },
        icon: <Loader size={24} className="animate-spin" />,
      },
    }
  );
};

export default showMessage;


/** @format */
import { X, Mail, Send } from "lucide-react";
import { useState } from "react";
import { showMessage } from "../../../utils/toast";
import CreativeButton from "../../../shared/Buttons/CreativeButton";

const SendEmailModal = ({ open, onClose, recipientName, recipientEmail }) => {
  const [formData, setFormData] = useState({
    senderEmail: "",
    subject: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.senderEmail || !formData.subject || !formData.message) {
      showMessage.error('Please fill in all required fields!');
      return;
    }
    
    setIsSending(true);
    
    // Simulate sending email
    setTimeout(() => {
      showMessage.success(`Email sent successfully to ${recipientName}!`);
      console.log("Sending email:", formData);
      setIsSending(false);
      onClose();
      // Reset form
      setFormData({
        senderEmail: "",
        subject: "",
        message: "",
      });
    }, 1000);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />
      <div className="relative w-full max-w-[650px] bg-white rounded-3xl shadow-2xl animate-scale-in overflow-hidden">
        {/* Decorative gradient overlay */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600" />
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b-2 border-gray-100 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-lg">
              <Mail size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gradient">Send Email</h2>
              <p className="text-sm text-gray-600 font-medium mt-1">Contact {recipientName}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-xl hover:bg-red-100 flex items-center justify-center transition-all hover:scale-110 group"
          >
            <X size={22} className="text-gray-600 group-hover:text-red-600 transition-colors" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* To Field (Read-only) */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              To
            </label>
            <div className="h-12 px-4 flex items-center gap-3 bg-gradient-to-r from-blue-50/50 to-purple-50/50 rounded-xl border-2 border-gray-200">
              <Mail size={18} className="text-blue-600" />
              <span className="text-[15px] text-gray-700 font-medium">{recipientEmail}</span>
            </div>
          </div>

          {/* From Field */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              Your Email <span className="text-red-600">*</span>
            </label>
            <input
              type="email"
              required
              value={formData.senderEmail}
              onChange={(e) =>
                setFormData({ ...formData, senderEmail: e.target.value })
              }
              placeholder="your.email@example.com"
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              Subject <span className="text-red-600">*</span>
            </label>
            <input
              type="text"
              required
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              placeholder="Enter email subject"
              className="w-full h-12 px-4 rounded-xl border-2 border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-base font-bold text-gray-900 mb-3">
              Message <span className="text-red-600">*</span>
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Write your message here..."
              rows={7}
              className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-blue-400 focus:shadow-lg transition-all resize-none"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-4 pt-4">
            <CreativeButton
              type="button"
              variant="outline"
              size="md"
              onClick={onClose}
              disabled={isSending}
              className="h-[50px] px-8"
            >
              Cancel
            </CreativeButton>
            <CreativeButton
              type="submit"
              variant="primary"
              size="md"
              disabled={isSending}
              loading={isSending}
              className="h-[50px] px-8 flex items-center gap-2"
            >
              <Send size={18} />
              {isSending ? 'Sending...' : 'Send Email'}
            </CreativeButton>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SendEmailModal;



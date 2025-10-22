/** @format */
import React from "react";
import { X, Trash2, AlertTriangle } from "lucide-react";
import { showMessage } from "../../../../../utils/toast";
import CreativeButton from "../../../../../shared/Buttons/CreativeButton";

export default function DeleteConfirmModal({ title, message, onCancel, onConfirm }) {
  return (
    <div className="fixed inset-0 z-[70] bg-black/50 backdrop-blur-sm grid place-items-center p-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
        {/* Header */}
        <div className="flex items-center justify-between p-6 bg-gradient-to-r from-red-50 to-rose-50 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="bg-gradient-to-r from-red-500 to-rose-600 rounded-lg p-2">
              <AlertTriangle className="h-5 w-5 text-white" />
            </div>
            <div className="text-sm font-semibold text-red-700 uppercase tracking-wide">Delete Confirmation</div>
          </div>
          <button 
            onClick={onCancel} 
            className="h-9 w-9 grid place-items-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-red-100 rounded-full p-3">
              <Trash2 className="h-6 w-6 text-red-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-700 leading-relaxed">{message}</p>
            </div>
          </div>

          {/* Warning Message */}
          <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-4 border border-red-200 mb-6">
            <div className="flex items-center gap-2">
              <AlertTriangle className="h-4 w-4 text-red-600" />
              <p className="text-sm text-red-700 font-medium">
                This action cannot be undone. All bounty data will be permanently deleted.
              </p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center justify-end gap-3">
            <CreativeButton
              variant="outline"
              size="md"
              onClick={onCancel}
              className="flex items-center gap-2"
            >
              Cancel
            </CreativeButton>
            <CreativeButton
              variant="error"
              size="md"
              onClick={() => {
                showMessage.success("Bounty deleted successfully! 🗑️");
                onConfirm();
              }}
              className="flex items-center gap-2"
            >
              <Trash2 className="h-4 w-4" />
              Delete Bounty
            </CreativeButton>
          </div>
        </div>
      </div>
    </div>
  );
}

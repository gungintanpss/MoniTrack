import React from "react";
import Button from "../button/Button";

interface ConfirmationModalProps {
  isOpen: boolean;
  title?: string;
  message?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  isOpen,
  title = "Konfirmasi",
  message = "Apakah Anda yakin?",
  onConfirm,
  onCancel,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm w-full text-center relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
          onClick={onCancel}
        >
          ×
        </button>
        <h2 className="text-lg font-semibold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <Button variant="primary" onClick={onConfirm}>
            Simpan
          </Button>
          <Button variant="outline" onClick={onCancel}>
            Batal
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

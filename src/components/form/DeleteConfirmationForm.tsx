import { X } from "lucide-react";
import Button from "../ui/button/Button";

interface DeleteConfirmationFormProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  message?: string;
}

export default function DeleteConfirmationForm({
  isOpen,
  onClose,
  onConfirm,
  title = "Hapus Rekening",
  message = "Apakah anda yakin untuk menghapus rekening ini?",
}: DeleteConfirmationFormProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-xl w-full max-w-sm text-center relative shadow-xl">
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          onClick={onClose}
        >
          <X />
        </button>

        <h2 className="text-lg font-bold mb-2">{title}</h2>
        <p className="text-sm text-gray-600 mb-6">{message}</p>

        <div className="flex flex-col gap-2 items-center">
          <Button
            className="bg-red-500 text-white px-5 py-2 rounded-full"
            onClick={onConfirm}
          >
            Hapus
          </Button>
          <button
            onClick={onClose}
            className="text-sm text-blue-600 hover:underline mt-1"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

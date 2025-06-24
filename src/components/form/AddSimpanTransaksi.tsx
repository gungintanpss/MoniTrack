interface Props {
  isOpen: boolean;
  title: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function ConfirmationModal({ isOpen, title, message, onConfirm, onCancel }: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-2xl px-8 py-10 w-full max-w-md text-center">
        <h2 className="text-xl font-bold text-[#3A3F63] mb-4">{title}</h2>
        <p className="text-sm text-[#3A3F63] mb-6">{message}</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-6 py-2 text-white rounded-full bg-gradient-to-r from-[#5F6FFF] to-[#2E4BFF] hover:opacity-90"
            onClick={onConfirm}
          >
            Simpan
          </button>
          <button
            className="px-6 py-2 rounded-full border border-gray-300 text-[#3A3F63] hover:bg-gray-100"
            onClick={onCancel}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

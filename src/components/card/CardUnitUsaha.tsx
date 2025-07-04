import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import { StatusDropdown } from "../ui/dropdown/StatusDropdown";
import DeleteConfirmationForm from "../form/DeleteConfirmationForm";

export default function CardUnitUsaha() {
  const [status, setStatus] = useState("Aktif");
  const statusOptions = ["Aktif", "Nonaktif", "Ditangguhkan"];

  const [showDelete, setShowDelete] = useState(false);

  const handleDelete = () => {
    console.log("Unit usaha dihapus");
    setShowDelete(false);
  };

  return (
    <>
      <div className="w-full rounded-xl border border-gray-200 bg-white p-6 relative dark:border-gray-700 dark:bg-white/[0.03]">
        <div className="text-center">
          <div className="text-base font-bold text-indigo-800 mb-1">Bakmie Mantap</div>
          <div className="text-sm text-gray-500 mb-2">F&B</div>

          <StatusDropdown
            value={status}
            options={statusOptions}
            onChange={(val) => setStatus(val)}
          />

          <p className="text-sm text-gray-600 mt-3">
            Lorem ipsum sit dolor amet, lorem ipsum sit dolor amet. Lorem ipsum sit dolor amet.
          </p>
        </div>

        {/* Tombol hapus */}
        <button
          className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500 transition"
          onClick={() => setShowDelete(true)}
        >
          <Trash2Icon className="w-5 h-5" />
        </button>
      </div>

      {/* Popup hapus */}
      <DeleteConfirmationForm
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
        title="Hapus Unit Usaha"
        message="Apakah anda yakin untuk menghapus unit usaha ini?"
      />
    </>
  );
}

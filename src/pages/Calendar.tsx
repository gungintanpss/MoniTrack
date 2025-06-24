import { useState } from "react";
import CardKas from "../components/ecommerce/CardKas";
import PageMeta from "../components/common/PageMeta";
import { PlusIcon } from "../icons";
import Button from "../components/ui/button/Button";

export default function Calendar() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />

      {/* Modal (Popup) */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-xl bg-white p-6 shadow-2xl w-[90%] max-w-md">
            <h2 className="text-xl font-bold mb-4">Form Tambah Kas/Rekening</h2>
            <p className="mb-6 text-gray-700">
              Ini adalah konten popup. Kamu bisa meletakkan form input di sini.
            </p>
            <button
              onClick={closeModal}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Tutup
            </button>
          </div>
        </div>
      )}

      {/* Konten Utama */}
      <div className="space-y-6 px-4 md:px-8 pt-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
            Manajemen Kas dan Rekening
          </h2>

          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusIcon />}
            className="px-4 py-2"
            onClick={openModal}
          >
            Tambah
          </Button>
        </div>

        <CardKas />
      </div>
    </>
  );
}

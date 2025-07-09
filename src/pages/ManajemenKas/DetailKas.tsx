import { useNavigate, useParams } from "react-router";
import { useState } from "react";
import { Trash2Icon, Edit } from "lucide-react";
import Button from "../../components/ui/button/Button";
import TabelKasDetail from "../../components/tables/BasicTables/TabelKasDetail";
import TransferDanaForm from "../../components/form/TransferDanaForm";
import EditRekeningForm from "../../components/form/EditRekeningForm";
import DeleteConfirmationForm from "../../components/form/DeleteConfirmationForm";
import { PlusIcon } from "../../icons";
import PageMeta from "../../components/common/PageMeta";

export default function DetailKas() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [modalType, setModalType] = useState<"transfer" | "edit" | null>(null);
  const [showDelete, setShowDelete] = useState(false);

  const openModal = (type: "transfer" | "edit") => setModalType(type);
  const closeModal = () => setModalType(null);

  const rekeningData = {
    nama: "Lorem ipsum",
    jenis: "Bank BCA",
    nomor: "0879898989898989",
    saldo: "Rp 1.000.000,00",
    deskripsi:
      "Rekening untuk kebutuhan operasional perusahaan dan transaksi harian.",
  };

  const handleDelete = () => {
    console.log("Rekening berhasil dihapus!");
    setShowDelete(false);
  };

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      
      <div className="px-4 md:px-10 py-8 space-y-6">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold text-[#3A3F63]">
            MANAJEMEN KAS & REKENING
          </h2>

          <Button
            size="sm"
            variant="primary"
            startIcon={<PlusIcon />}
            className="px-4 py-2"
            onClick={() => openModal("transfer")}
          >
            Transfer Dana
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="text-lg font-bold text-gray-800 mb-4">
                Ni Lorem Ipsum
              </div>
              <div className="text-sm text-gray-600 mb-2">
                {rekeningData.nomor}
              </div>
              <div className="text-sm text-gray-600 mb-4">
                Rekening Operasional - {rekeningData.jenis}
              </div>
              <p className="text-sm text-gray-600">{rekeningData.deskripsi}</p>

              <div className="absolute bottom-4 right-4 flex space-x-3 text-gray-400">
                <button
                  className="hover:text-blue-500 transition"
                  onClick={() => openModal("edit")}
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  className="hover:text-red-500 transition"
                  onClick={() => setShowDelete(true)}
                >
                  <Trash2Icon className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="md:col-span-2">
            <TabelKasDetail />
          </div>
        </div>

        <div className="text-right">
          <Button
            variant="primary"
            className="px-6 py-2"
            onClick={() => navigate(-1)}
          >
            Kembali
          </Button>
        </div>
      </div>

      {modalType === "transfer" && (
        <TransferDanaForm isOpen={true} onClose={closeModal} />
      )}

      {modalType === "edit" && (
        <EditRekeningForm
          isOpen={true}
          onClose={closeModal}
          existingData={rekeningData}
        />
      )}

      <DeleteConfirmationForm
        isOpen={showDelete}
        onClose={() => setShowDelete(false)}
        onConfirm={handleDelete}
      />
    </>
  );
}

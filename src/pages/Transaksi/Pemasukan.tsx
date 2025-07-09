import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import TabelPemasukan, { PemasukanData } from "../../components/tables/BasicTables/TabelPemasukan";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import DatePicker from "../../components/form/date-picker";
import { PlusIcon } from "../../icons";
import AddDataTransaksi from "../../components/form/AddDataTransaksi";
import HapusTransaksi from "../../components/form/HapusTransaksi";
import EditDataPemasukan from "../../components/form/EditDataPemasukan";
import LihatDataPemasukan from "../../components/form/LihatDataPemasukan"; 

export default function PemasukanPage() {
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedTransactionId, setSelectedTransactionId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSelectedTransactionId(id);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    if (selectedTransactionId !== null) {
      console.log("Menghapus transaksi dengan ID:", selectedTransactionId);
      setShowDeleteModal(false);
      setSelectedTransactionId(null);
    }
  };

  const [showEditModal, setShowEditModal] = useState(false);
  const [editData, setEditData] = useState<PemasukanData | null>(null);

  const handleEdit = (data: PemasukanData) => {
    setEditData(data);
    setShowEditModal(true);
  };

  const [showDetailModal, setShowDetailModal] = useState(false);
  const [detailData, setDetailData] = useState<PemasukanData | null>(null);

  const handleView = (data: PemasukanData) => {
    setDetailData(data);
    setShowDetailModal(true);
  };

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[22px] font-semibold text-[#3A3F63]">
          TRANSAKSI PEMASUKAN
        </h1>
        <Button
          size="sm"
          variant="primary"
          startIcon={<PlusIcon />}
          className="px-4 py-2"
          onClick={() => setShowModal(true)}
        >
          Tambah
        </Button>
      </div>

      <div className="space-y-6">
        <ComponentCard title="">
          <div className="flex flex-wrap gap-4 items-center justify-start mb-6">
            <div className="relative w-full max-w-sm">
              <Input
                type="text"
                placeholder="Cari invoice"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-[#3A3F63]"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3F63]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>

            <div className="w-full max-w-[220px]">
              <DatePicker
                id="filter-date"
                placeholder="Date filter"
                onChange={(dates, currentDateString) =>
                  console.log({ dates, currentDateString })
                }
              />
            </div>
          </div>

          <TabelPemasukan
            onDelete={handleDelete}
            onEdit={handleEdit}
            onView={handleView}
          />
        </ComponentCard>
      </div>

      <AddDataTransaksi isOpen={showModal} onClose={() => setShowModal(false)} />

      <HapusTransaksi
        isOpen={showDeleteModal}
        onConfirm={confirmDelete}
        onCancel={() => setShowDeleteModal(false)}
      />

      {editData && (
        <EditDataPemasukan
          isOpen={showEditModal}
          onClose={() => setShowEditModal(false)}
          data={editData}
        />
      )}

      {detailData && (
        <LihatDataPemasukan
          isOpen={showDetailModal}
          onClose={() => setShowDetailModal(false)}
          data={detailData}
        />
      )}
    </>
  );
}

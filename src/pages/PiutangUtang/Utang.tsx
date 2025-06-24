import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import TabelUtang from "../../components/tables/BasicTables/TabelUtang";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import DatePicker from "../../components/form/date-picker";
import { PlusIcon } from "../../icons";

export default function UtangPage() {
  const [search, setSearch] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false); // ✅ tambahan modal konfirmasi

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const filterOptions = [
    { value: "semua", label: "Semua" },
    { value: "lunas", label: "Lunas" },
    { value: "belum-lunas", label: "Belum Lunas" },
  ];

  return (
    <>
      <PageMeta title="Manajemen Utang" description="Dashboard Utang" />

      {/* Modal Tambah Utang */}
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-xl bg-white p-6 shadow-2xl w-full max-w-3xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#3A3F63]">Tambah Utang</h2>
              <button onClick={closeModal} className="text-gray-500 hover:text-gray-700 text-xl font-bold">
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Nama Supplier</label>
                <Input type="text" placeholder="Masukkan nama supplier" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Tanggal Jatuh Tempo</label>
                <DatePicker id="due-date" placeholder="Pilih tanggal jatuh tempo" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Tanggal Terbit Tagihan</label>
                <DatePicker id="invoice-date" placeholder="Pilih tanggal terbit tagihan" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Keterangan</label>
                <Input type="text" placeholder="Masukkan keterangan" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Nomor Tagihan</label>
                <Input type="text" placeholder="Masukkan nomor tagihan" />
              </div>

              <div>
                <label className="block mb-1 text-sm text-[#3A3F63]">Status</label>
                <Select
                  options={filterOptions}
                  placeholder="Pilih Status"
                  className="text-[#3A3F63] appearance-none pr-10"
                  onChange={(val) => console.log("Filter selected:", val)}
                />
              </div>

              <div className="md:col-span-2">
                <label className="block mb-1 text-sm text-[#3A3F63]">Jumlah Utang</label>
                <Input type="number" placeholder="Masukkan jumlah utang" />
              </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeModal}
                className="rounded-full px-6 py-2 bg-white text-[#3A3F63] border hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={() => setIsConfirmOpen(true)} // ✅ buka modal konfirmasi
                className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600"
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ✅ Modal Konfirmasi Simpan */}
      {isConfirmOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#3A3F63] mx-auto">Simpan Utang</h3>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <p className="mb-6 text-[#3A3F63]">
              Apakah anda yakin untuk menambahkan utang ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setIsConfirmOpen(false);
                  setIsOpen(false); // ✅ tutup form & modal konfirmasi
                }}
                className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600"
              >
                Simpan
              </button>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="rounded-full px-6 py-2 bg-white text-blue-600 border hover:bg-gray-100"
              >
                Batal
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Header: Judul & Tombol Tambah */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[22px] font-semibold text-[#3A3F63]">
          MANAJEMEN UTANG
        </h1>
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

      {/* Table */}
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

            <div className="relative w-full max-w-[180px]">
              <Select
                options={filterOptions}
                placeholder="Filter"
                className="text-[#3A3F63] appearance-none pr-10"
                onChange={(val) => console.log("Filter selected:", val)}
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#3A3F63]">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
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

          <TabelUtang />
        </ComponentCard>
      </div>
    </>
  );
}
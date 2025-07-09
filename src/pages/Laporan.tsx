import { useState } from "react";
import PageMeta from "../components/common/PageMeta";
import ComponentCard from "../components/common/ComponentCard";
import TabelLaporan from "../components/tables/BasicTables/TabelLaporan";
import Button from "../components/ui/button/Button";
import Input from "../components/form/input/InputField";
import Select from "../components/form/Select";
import DatePicker from "../components/form/date-picker";

export default function LaporanPage() {
  const [search, setSearch] = useState("");
  const [isExportOpen, setIsExportOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const openExportModal = () => setIsExportOpen(true);
  const closeExportModal = () => setIsExportOpen(false);
  const openConfirmModal = () => setIsConfirmOpen(true);
  const closeConfirmModal = () => setIsConfirmOpen(false);

  const filterOptions = [
    { value: "semua", label: "Semua" },
    { value: "pemasukan", label: "Pemasukan" },
    { value: "pengeluaran", label: "Pengeluaran" },
    { value: "utang", label: "Utang" },
    { value: "piutang", label: "Piutang" },
  ];

  const periodeOptions = [
    { value: "Bulan ini", label: "Bulan ini" },
    { value: "Bulan lalu", label: "Bulan lalu" },
    { value: "Triwulan ini", label: "Triwulan ini" },
    { value: "Tahun ini", label: "Tahun ini" },
  ];

  const dokumenOptions = [
    { value: "pdf", label: "PDF" },
    { value: "excel", label: "Excel (.xlsx)" },
  ];

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[22px] font-semibold text-[#3A3F63]">LAPORAN KEUANGAN</h1>
        <Button variant="primary" className="px-5 py-2" onClick={openExportModal}>
          Ekspor
        </Button>
      </div>

      <div className="space-y-6">
        <ComponentCard title="">
          <div className="flex flex-wrap gap-4 items-center justify-start mb-6">
            <div className="relative w-full max-w-sm">
              <Input
                type="text"
                placeholder="Cari Transaksi"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-[#3A3F63]"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3F63]">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z" />
                </svg>
              </div>
            </div>

            <div className="w-full max-w-[180px]">
              <Select
                options={filterOptions}
                placeholder="Filter"
                className="text-[#3A3F63] appearance-none pr-10"
                onChange={(val) => console.log("Filter selected:", val)}
              />
            </div>

            <div className="w-full max-w-[220px]">
              <DatePicker
                id="filter-date"
                placeholder="Date filter"
                onChange={(dates, currentDateString) => console.log({ dates, currentDateString })}
              />
            </div>
          </div>

          <TabelLaporan />
        </ComponentCard>
      </div>

      {isExportOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-8 w-full max-w-3xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#3A3F63] mx-auto">Ekspor Laporan Keuangan</h2>
              <button onClick={closeExportModal} className="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <div>
                    <label className="block text-sm text-[#3A3F63] mb-1">Rentang Periode Laporan</label>
                    <Select
                    options={periodeOptions}
                    placeholder="Please select"
                    className="text-[#3A3F63] appearance-none pr-10"
                    onChange={(val) => console.log("Periode:", val)}
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#3A3F63] mb-1">Kategori Laporan</label>
                    <Select
                    options={filterOptions}
                    placeholder="Please select"
                    className="text-[#3A3F63] appearance-none pr-10"
                    onChange={(val) => console.log("Kategori:", val)}
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#3A3F63] mb-1">Rentang Tanggal Laporan</label>
                    <DatePicker
                    id="export-date"
                    placeholder="Pilih tanggal laporan"
                    onChange={(currentDateString) =>
                        console.log("Tanggal dipilih:", currentDateString)
                    }
                    />
                </div>
                <div>
                    <label className="block text-sm text-[#3A3F63] mb-1">Bentuk Dokumen Laporan</label>
                    <Select
                    options={dokumenOptions}
                    placeholder="Please select"
                    className="text-[#3A3F63] appearance-none pr-10"
                    onChange={(val) => console.log("Dokumen:", val)}
                    />
                </div>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={closeExportModal}
                className="rounded-full px-6 py-2 bg-white text-[#3A3F63] border hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={openConfirmModal}
                className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600"
              >
                Unduh
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmOpen && (
        <div className="fixed inset-0 z-[10001] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-md text-center shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#3A3F63] mx-auto">Unduh Laporan Keuangan</h3>
              <button onClick={closeConfirmModal} className="text-gray-400 hover:text-gray-600 text-xl font-bold">&times;</button>
            </div>
            <p className="text-[#3A3F63] mb-6">
              Apakah anda yakin untuk mengunduh laporan keuangan ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  closeConfirmModal();
                  closeExportModal();
                }}
                className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600"
              >
                Ya
              </button>
              <button
                onClick={closeConfirmModal}
                className="rounded-full px-6 py-2 bg-white text-blue-600 border hover:bg-gray-100"
              >
                Tidak
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
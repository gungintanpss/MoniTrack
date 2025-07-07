import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";
import { Eye, Edit, Trash2 } from "lucide-react";
import Input from "../../form/input/InputField";
import Select from "../../form/Select";
import DatePicker from "../../form/date-picker";

interface InvoiceData {
  invoiceNumber: string;
  pelanggan: string;
  jatuhTempo: string;
  jumlah: string;
  status: "Lunas" | "Belum Lunas";
  sisa: string;
}

const tableData: InvoiceData[] = [
  {
    invoiceNumber: "15261819178",
    pelanggan: "Lorem Ipsum hohoho",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 250.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819178",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 100.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819178",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819178",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819178",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 355.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 150.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 250.000,00",
    status: "Belum Lunas",
    sisa: "Rp 100.000,00",
  },
  {
    invoiceNumber: "15261819179",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819180",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819180",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 100.000,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819181",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819181",
    pelanggan: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Belum Lunas",
    sisa: "Rp 100.000,00",
  },
];

const filterOptions = [
  { value: "lunas", label: "Lunas" },
  { value: "belum-lunas", label: "Belum Lunas" },
];

const filterOptions2 = [
  { value: "BNI", label: "BNI" },
  { value: "BCA", label: "BCA" },
];

const ITEMS_PER_PAGE = 10;

export default function TabelPiutang() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showDetail, setShowDetail] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [selectedData, setSelectedData] = useState<InvoiceData | null>(null);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const openDetailModal = (data: InvoiceData) => {
    setSelectedData(data);
    setShowDetail(true);
  };

  const openEditModal = (data: InvoiceData) => {
    setSelectedData(data);
    setShowEdit(true);
  };

  const openDeleteConfirm = (data: InvoiceData) => {
    setSelectedData(data);
    setShowDeleteConfirm(true);
  };

  const closeAllModals = () => {
    setShowDetail(false);
    setShowEdit(false);
    setShowDeleteConfirm(false);
    setSelectedData(null);
  };

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        (i >= currentPage - 1 && i <= currentPage + 1)
      ) {
        pages.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-3 py-1 rounded-md text-sm ${
              currentPage === i
                ? "bg-blue-600 text-white"
                : "text-blue-600 hover:bg-blue-100 dark:hover:bg-gray-700"
            }`}
          >
            {i}
          </button>
        );
      } else if (i === currentPage - 2 || i === currentPage + 2) {
        pages.push(
          <span key={i} className="px-2 text-gray-400">
            ...
          </span>
        );
      }
    }
    return pages;
  };

  return (
    <>
      <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
        <div className="max-w-full overflow-x-auto">
          <Table>
            <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
              <TableRow>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Nomor Invoice</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Pelanggan</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Tanggal Jatuh Tempo</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Jumlah</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Status</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Sisa Piutang</TableCell>
                <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Aksi</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
              {currentData.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.invoiceNumber}</TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.pelanggan}</TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.jatuhTempo}</TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.jumlah}</TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <Badge color={item.status === "Lunas" ? "success" : "warning"} size="sm">
                      {item.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.sisa}</TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex gap-2">
                      <button onClick={() => openDetailModal(item)} title="Lihat">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button onClick={() => openEditModal(item)} title="Edit">
                        <Edit className="w-4 h-4" />
                      </button>
                      <button onClick={() => openDeleteConfirm(item)} title="Hapus">
                        <Trash2 className="w-4 h-4 text-red-500" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-white/[0.05]">
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-2 py-1 text-gray-600 dark:text-gray-300 disabled:opacity-40"
            >
              &larr;
            </button>
            {renderPageNumbers()}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-2 py-1 text-gray-600 dark:text-gray-300 disabled:opacity-40"
            >
              &rarr;
            </button>
          </div>
          <span className="text-sm text-gray-500 dark:text-gray-400">
            {tableData.length} Results
          </span>
        </div>
      </div>

      {showDetail && selectedData && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="rounded-xl bg-white p-6 shadow-2xl w-full max-w-3xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#3A3F63] mx-auto">Detail Piutang</h2>
              <button onClick={closeAllModals} className="text-gray-500 hover:text-gray-700 text-xl font-bold">
                &times;
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm text-[#3A3F63]">
              <div>
                <label className="block mb-1 font-medium">Nama Pelanggan</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.pelanggan}</p>
              </div>
              <div>
                <label className="block mb-1 font-medium">Tanggal Jatuh Tempo</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.jatuhTempo}</p>
              </div>
              <div>
                <label className="block mb-1 font-medium">Tanggal Terbit Invoice</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">10/1/20xx</p>
              </div>
              <div>
                <label className="block mb-1 font-medium">Keterangan</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">Lorem ipsum</p>
              </div>
              <div>
                <label className="block mb-1 font-medium">Nomor Invoice</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.invoiceNumber}</p>
              </div>
              <div>
                <label className="block mb-1 font-medium">Status</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.status}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Jumlah Piutang</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.jumlah}</p>
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-medium">Sisa Piutang</label>
                <p className="px-4 py-2 bg-gray-100 rounded-md">{selectedData.sisa}</p>
              </div>
            </div>

            <div className="flex justify-end">
              <button onClick={closeAllModals} className="rounded-full px-6 py-2 bg-white text-[#4458FE] border hover:bg-gray-100">
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {showEdit && selectedData && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white rounded-xl p-6 w-full max-w-4xl shadow-xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-[#3A3F63] mx-auto">Edit Piutang</h2>
              <button onClick={closeAllModals} className="text-gray-500 text-xl font-bold">&times;</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-sm text-[#3A3F63]">
              <div>
                <label className="block mb-1 text-sm">Nama Pelanggan</label>
                <Input value={selectedData.pelanggan} disabled />
              </div>
              <div>
                <label className="block mb-1 text-sm">Tanggal Pembayaran</label>
                <DatePicker id="tanggal-bayar" placeholder="Tanggal" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Nomor Invoice</label>
                <Input value={selectedData.invoiceNumber} disabled />
              </div>
              <div>
                <label className="block mb-1 text-sm">Diterima ke Rekening/Kas</label>
                <Select
                  options={filterOptions2}
                  placeholder="Pilih Rekening/Kas"
                  className="text-[#3A3F63] appearance-none pr-10"
                  onChange={(val) => console.log("Filter selected:", val)}
                />
              </div>
              <div>
                <label className="block mb-1 text-sm">Sisa Piutang</label>
                <Input value={selectedData.sisa} disabled />
              </div>
              <div>
                <label className="block mb-1 text-sm">Keterangan</label>
                <Input type="text" placeholder="Keterangan" />
              </div>
              <div>
                <label className="block mb-1 text-sm">Jumlah Pembayaran</label>
                <Input type="number" placeholder="Rp ..." />
              </div>
              <div>
                <label className="block mb-1 text-sm">Status</label>
                <Select
                  options={filterOptions}
                  placeholder="Pilih Status"
                  className="text-[#3A3F63] appearance-none pr-10"
                  onChange={(val) => console.log("Filter selected:", val)}
                />
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <button
                onClick={closeAllModals}
                className="rounded-full px-6 py-2 bg-white text-[#3A3F63] border hover:bg-gray-100"
              >
                Batal
              </button>
              <button
                onClick={() => {
                  setIsConfirmOpen(true); 
                }}
                className="rounded-full px-6 py-2 bg-blue-500 text-white hover:bg-blue-600"
                >
                  Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {isConfirmOpen && (
        <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-sm text-center shadow-2xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-[#3A3F63] mx-auto">Simpan Piutang</h3>
              <button
                onClick={() => setIsConfirmOpen(false)}
                className="text-gray-500 hover:text-gray-700 text-xl font-bold"
              >
                &times;
              </button>
            </div>
            <p className="mb-6 text-[#3A3F63]">
              Apakah anda yakin untuk mengubah piutang ini?
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => {
                  setIsConfirmOpen(false);
                  setShowEdit(false);
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

      {showDeleteConfirm && selectedData && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-xl shadow-xl text-center w-full max-w-sm">
            <h2 className="text-lg font-bold text-[#3A3F63] mb-2">Hapus Piutang</h2>
            <p className="text-sm text-gray-600 mb-6">
              Apakah anda yakin untuk menghapus piutang ini?
            </p>
            <div className="flex flex-col items-center gap-2">
              <button
                onClick={closeAllModals}
                className="bg-red-500 text-white px-6 py-2 rounded-full shadow hover:bg-red-600"
              >
                Hapus
              </button>
              <button onClick={closeAllModals} className="rounded-full px-6 py-2 bg-white text-[#4458FE] border hover:bg-gray-100">
                Batal
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
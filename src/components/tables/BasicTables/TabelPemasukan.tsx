import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Eye, Edit, Trash2 } from "lucide-react";

export interface PemasukanData {
  tanggal: string;
  kategori: string;
  keterangan: string;
  jumlah: string;
  unitUsaha: string;
  sumberDana: string;
  invoice?: string;
  bukti?: string;
}

interface Props {
  onDelete: (id: string) => void;
  onEdit: (data: PemasukanData) => void;
  onView: (data: PemasukanData) => void; // 👈 Tambahkan ini
}

const tableData: PemasukanData[] = [
  {
    tanggal: "9 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 250.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Penerimaan Piutang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 100.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 155.520,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 355.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pendanaan Investor",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 150.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Penerimaan Piutang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 250.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Penerimaan Piutang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 155.520,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Penjualan Produk",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
];

const ITEMS_PER_PAGE = 10;

export default function TabelPemasukan({ onDelete, onEdit, onView }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
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
    }
    return pages;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell className="px-5 py-3 font-medium">Tanggal</TableCell>
              <TableCell className="px-5 py-3 font-medium">Kategori</TableCell>
              <TableCell className="px-5 py-3 font-medium">Keterangan</TableCell>
              <TableCell className="px-5 py-3 font-medium">Jumlah</TableCell>
              <TableCell className="px-5 py-3 font-medium">Unit Usaha</TableCell>
              <TableCell className="px-5 py-3 font-medium">Sumber Dana</TableCell>
              <TableCell className="px-5 py-3 font-medium">Aksi</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentData.map((item, idx) => {
              const actualIndex = startIndex + idx;
              return (
                <TableRow key={actualIndex}>
                  <TableCell className="px-4 py-3">{item.tanggal}</TableCell>
                  <TableCell className="px-4 py-3">{item.kategori}</TableCell>
                  <TableCell className="px-4 py-3">{item.keterangan}</TableCell>
                  <TableCell className="px-4 py-3">{item.jumlah}</TableCell>
                  <TableCell className="px-4 py-3">{item.unitUsaha}</TableCell>
                  <TableCell className="px-4 py-3">{item.sumberDana}</TableCell>
                  <TableCell className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <button title="Lihat" onClick={() => onView(item)}>
                        <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500" />
                      </button>
                      <button title="Edit" onClick={() => onEdit(item)}>
                        <Edit className="w-4 h-4 text-black hover:text-black" />
                      </button>
                      <button title="Hapus" onClick={() => onDelete(actualIndex.toString())}>
                        <Trash2 className="w-4 h-4 text-red-600 hover:text-red-700" />
                      </button>
                    </div>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-between px-5 py-4 border-t border-gray-100 dark:border-white/[0.05]">
        <div className="flex items-center space-x-1">{renderPageNumbers()}</div>
        <span className="text-sm text-gray-500">{tableData.length} Results</span>
      </div>
    </div>
  );
}

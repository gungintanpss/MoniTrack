import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import Badge from "../../ui/badge/Badge";

interface LaporanData {
  tanggal: string;
  keterangan: string;
  jumlah: string;
  unitUsaha: string;
  sumberDana: string;
  kategori: "Pemasukan" | "Pengeluaran" | "Utang" | "Piutang";
}

const tableData: LaporanData[] = [
  { tanggal: "9 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 250.000,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pemasukan" },
  { tanggal: "9 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 100.000,00", unitUsaha: "Lorem Ipsum", sumberDana: "E-Wallet", kategori: "Pengeluaran" },
  { tanggal: "9 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 155.520,00", unitUsaha: "Lorem Ipsum", sumberDana: "E-Wallet", kategori: "Utang" },
  { tanggal: "9 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 276.500,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Piutang" },
  { tanggal: "9 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 355.000,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pemasukan" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 150.500,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pemasukan" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 250.000,00", unitUsaha: "Lorem Ipsum", sumberDana: "E-Wallet", kategori: "Pemasukan" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 276.500,00", unitUsaha: "Lorem Ipsum", sumberDana: "E-Wallet", kategori: "Pemasukan" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 155.520,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pengeluaran" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 276.500,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pemasukan" },
  { tanggal: "8 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 100.000,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pengeluaran" },
  { tanggal: "7 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 155.520,00", unitUsaha: "Lorem Ipsum", sumberDana: "Bank", kategori: "Pengeluaran" },
  { tanggal: "7 Juni 2025", keterangan: "Lorem Ipsum", jumlah: "Rp 276.500,00", unitUsaha: "Lorem Ipsum", sumberDana: "E-Wallet", kategori: "Pemasukan" },
];

const ITEMS_PER_PAGE = 10;

export default function TabelLaporan() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const renderPageNumbers = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
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
        pages.push(<span key={i} className="px-2 text-gray-400">...</span>);
      }
    }
    return pages;
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Tanggal</TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Keterangan</TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Jumlah</TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Unit Usaha</TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Sumber Dana</TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">Kategori</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.tanggal}</TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.keterangan}</TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.jumlah}</TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.unitUsaha}</TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">{item.sumberDana}</TableCell>
                <TableCell className="px-5 py-3 text-start">
                    <TableCell className="px-5 py-3 text-start">
                        <Badge
                            variant="light"
                            color={
                                item.kategori === "Pemasukan" ? "success" :
                                item.kategori === "Pengeluaran" ? "error" :
                                item.kategori === "Utang" ? "warning" :
                                "info"
                            }
                            size="md"
                        >
                            {item.kategori}
                        </Badge>
                    </TableCell>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {/* Pagination */}
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
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="px-2 py-1 text-gray-600 dark:text-gray-300 disabled:opacity-40"
          >
            &rarr;
          </button>
        </div>
        <span className="text-sm text-gray-500 dark:text-gray-400">{tableData.length} Results</span>
      </div>
    </div>
  );
}
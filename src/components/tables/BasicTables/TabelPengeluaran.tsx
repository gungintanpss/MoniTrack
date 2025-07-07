import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";
import { Eye, Edit, Trash2 } from "lucide-react";

export interface PengeluaranData {
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
  onEdit: (data: PengeluaranData) => void;
  onView: (data: PengeluaranData) => void;
}

const tableData: PengeluaranData[] = [
  {
    tanggal: "9 Juni 2025",
    kategori: "Gaji Karyawan",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 250.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Biaya Sewa",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 100.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Biaya Listrik",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 155.520,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Biaya Air",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "9 Juni 2025",
    kategori: "Biaya Telepon",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 355.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pembelian Bahan Baku",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 150.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pembayaran Utang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 250.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pemasaran",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pembelian Bahan Baku",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 155.520,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pembelian Bahan Baku",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "8 Juni 2025",
    kategori: "Pembayaran Utang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 100.000,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "7 Juni 2025",
    kategori: "Pembelian Bahan Baku",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 155.520,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "Bank",
  },
  {
    tanggal: "7 Juni 2025",
    kategori: "Pembayaran Utang",
    keterangan: "Lorem Ipsum",
    jumlah: "Rp 276.500,00",
    unitUsaha: "Lorem Ipsum",
    sumberDana: "E-Wallet",
  },
];

const ITEMS_PER_PAGE = 10;

export default function TabelPengeluaran({ onDelete, onEdit, onView }: Props) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(tableData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = tableData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

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
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Tanggal
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Kategori
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Keterangan
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Jumlah
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Unit Usaha
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Sumber Dana
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Aksi
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentData.map((item, idx) => {
              const actualIndex = startIndex + idx; 
              return (
                <TableRow key={actualIndex}>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.tanggal}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.kategori}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.keterangan}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.jumlah}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.unitUsaha}
                  </TableCell>
                  <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                    {item.sumberDana}
                  </TableCell>
                  <TableCell className="px-5 py-4 text-start">
                    <div className="flex items-center gap-2">
                      <button 
                        title="Lihat"
                        onClick={() => {
                          console.log(`Lihat detail baris ke-${actualIndex + 1}:`, item);
                          onView(item);
                        }}
                      >
                        <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500 dark:text-gray-300" />
                      </button>
                      <button
                        title="Edit"
                        onClick={() => {
                          console.log(`Edit baris ke-${actualIndex + 1}:`, item);
                          console.log('currentPage:', currentPage, 'startIndex:', startIndex, 'idx:', idx);
                          onEdit(item);
                        }}
                      >
                        <Edit className="w-4 h-4 text-gray-600 hover:text-yellow-500 dark:text-gray-300" />
                      </button>
                      <button
                        title="Hapus"
                        onClick={() => onDelete(actualIndex.toString())}
                      >
                        <Trash2 className="w-4 h-4 text-red-600 hover:text-red-700 dark:text-red-400" />
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
  );
}
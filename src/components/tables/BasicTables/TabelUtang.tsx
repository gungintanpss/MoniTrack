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

interface InvoiceData {
  invoiceNumber: string;
  supplier: string;
  jatuhTempo: string;
  jumlah: string;
  status: "Lunas" | "Belum Lunas";
  sisa: string;
}

const tableData: InvoiceData[] = [
  {
    invoiceNumber: "15261819178",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 250.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819178",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 100.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819178",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819178",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819178",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 355.000,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 150.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 250.000,00",
    status: "Belum Lunas",
    sisa: "Rp 100.000,00",
  },
  {
    invoiceNumber: "15261819179",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819179",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819180",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819180",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 100.000,00",
    status: "Belum Lunas",
    sisa: "Rp 30.000,00",
  },
  {
    invoiceNumber: "15261819181",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 155.520,00",
    status: "Lunas",
    sisa: "Rp 0",
  },
  {
    invoiceNumber: "15261819181",
    supplier: "Lorem Ipsum",
    jatuhTempo: "12/1/20xx",
    jumlah: "Rp 276.500,00",
    status: "Belum Lunas",
    sisa: "Rp 100.000,00",
  },
];

const ITEMS_PER_PAGE = 10;

export default function TabelUtang() {
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
                Nomor Tagihan
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Supplier
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Tanggal Jatuh Tempo
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Jumlah
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Status
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Sisa Utang
              </TableCell>
              <TableCell className="px-5 py-3 font-medium text-start text-theme-xs text-gray-500 dark:text-gray-400">
                Aksi
              </TableCell>
            </TableRow>
          </TableHeader>

          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {currentData.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.invoiceNumber}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.supplier}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.jatuhTempo}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.jumlah}
                </TableCell>
                <TableCell className="px-5 py-4 text-start">
                  <Badge
                    color={item.status === "Lunas" ? "success" : "warning"}
                    size="sm"
                  >
                    {item.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {item.sisa}
                </TableCell>
                <TableCell className="px-5 py-4 text-start">
                  <div className="flex items-center gap-2">
                    <button title="Lihat">
                      <Eye className="w-4 h-4 text-gray-600 hover:text-blue-500 dark:text-gray-300" />
                    </button>
                    <button title="Edit">
                      <Edit className="w-4 h-4 text-gray-600 hover:text-yellow-500 dark:text-gray-300" />
                    </button>
                    <button title="Hapus">
                      <Trash2 className="w-4 h-4 text-red-600 hover:text-red-700 dark:text-red-400" />
                    </button>
                  </div>
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
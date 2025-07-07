import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

export default function TabelKasDetail() {
  const data = [
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pemasukan",
      saldo: "Rp 130.000.000,00",
    },
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pengeluaran",
      saldo: "Rp 130.000.000,00",
    },
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pemasukan",
      saldo: "Rp 130.000.000,00",
    },
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pengeluaran",
      saldo: "Rp 130.000.000,00",
    },
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pemasukan",
      saldo: "Rp 130.000.000,00",
    },
    {
      keterangan: "Lorem Ipsum Sit",
      kategori: "Penjualan Produk",
      tanggal: "1/1/20xx",
      jumlah: "Rp 200.000",
      jenis: "Pengeluaran",
      saldo: "Rp 130.000.000,00",
    },
  ];

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm w-full">
      <h3 className="text-sm font-bold text-[#3A3F63] mb-4 uppercase">
        DETAIL KAS / REKENING
      </h3>

      <div className="overflow-x-auto w-full">
        <div className="min-w-[800px]">
          <Table className="w-full">
            <TableHeader>
              <TableRow className="bg-gray-50">
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Keterangan</TableCell>
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Kategori</TableCell>
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Tanggal</TableCell>
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Jumlah</TableCell>
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Jenis</TableCell>
                <TableCell isHeader className="font-semibold text-[#3A3F63]">Sisa Saldo</TableCell>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.map((item, index) => (
                <TableRow key={index} className="hover:bg-gray-50">
                  <TableCell className="text-gray-600">{item.keterangan}</TableCell>
                  <TableCell className="text-gray-600">{item.kategori}</TableCell>
                  <TableCell className="text-gray-600">{item.tanggal}</TableCell>
                  <TableCell className="text-gray-600">{item.jumlah}</TableCell>
                  <TableCell className="text-gray-600">{item.jenis}</TableCell>
                  <TableCell className="text-gray-600">{item.saldo}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <div className="text-right font-semibold text-sm mt-4 text-[#3A3F63]">
        TOTAL SALDO:{" "}
        <span className="text-indigo-800 font-bold text-base">
          Rp. 134.768.987,32
        </span>
      </div>
    </div>
  );
}

import { useState } from "react";
import Label from "./Label";
import Input from "./input/InputField";
import Select from "./Select";
import Button from "../ui/button/Button";
import ConfirmationModal from "./AddSimpanTransaksi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  data: {
    tanggal: string;
    kategori: string;
    keterangan: string;
    jumlah: string;
    unitUsaha: string;
    sumberDana: string;
    invoice?: string;
    bukti?: string;
  };
}

export default function EditDataPengeluaran({ isOpen, onClose, data }: Props) {
  // Debug log untuk melihat data yang diterima
  console.log('EditDataPengeluaran menerima data:', data);
  
  // Fungsi untuk mengkonversi nama bulan ke angka
  const getMonthNumber = (monthName: string): string => {
    const months: { [key: string]: string } = {
      'Januari': '01', 'Februari': '02', 'Maret': '03', 'April': '04',
      'Mei': '05', 'Juni': '06', 'Juli': '07', 'Agustus': '08',
      'September': '09', 'Oktober': '10', 'November': '11', 'Desember': '12'
    };
    return months[monthName] || '01';
  };

  // Parse tanggal dengan benar
  const parsedDate = data.tanggal.split(" ");
  console.log('Parsed date:', parsedDate); // Debug log
  
  const [tanggal, setTanggal] = useState(parsedDate[0] || "");
  const [bulan, setBulan] = useState(getMonthNumber(parsedDate[1]) || "01");
  const [tahun, setTahun] = useState(parsedDate[2] || "");

  const [kategori, setKategori] = useState(data.kategori);
  const [keterangan, setKeterangan] = useState(data.keterangan);
  const [jumlah, setJumlah] = useState(data.jumlah);
  const [unitUsaha, setUnitUsaha] = useState(data.unitUsaha);
  const [sumberDana, setSumberDana] = useState(data.sumberDana);
  const [invoice, setInvoice] = useState(data.invoice || "");
  const [bukti, setBukti] = useState<File | null>(null);

  const [showConfirm, setShowConfirm] = useState(false);

  const kategoriOptions = [
    { value: "Gaji Karyawan", label: "Gaji Karyawan" },
    { value: "Biaya Sewa", label: "Biaya Sewa" },
    { value: "Biaya Listrik", label: "Biaya Listrik" },
    { value: "Biaya Air", label: "Biaya Air" },
    { value: "Biaya Telepon", label: "Biaya Telepon" },
    { value: "Pembelian Bahan Baku", label: "Pembelian Bahan Baku" },
    { value: "Pembayaran Utang", label: "Pembayaran Utang" },
    { value: "Pemasaran", label: "Pemasaran" },
  ];

  const sumberDanaOptions = [
    { value: "Bank", label: "Bank" },
    { value: "E-Wallet", label: "E-Wallet" },
  ];

  const unitUsahaOptions = [
    { value: "Unit Usaha 1", label: "Unit Usaha 1" },
    { value: "Unit Usaha 2", label: "Unit Usaha 2" },
    { value: "Lorem Ipsum", label: "Lorem Ipsum" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">Edit Pengeluaran</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label>Tanggal Transaksi</Label>
              <div className="flex gap-2">
                <Input placeholder="DD" value={tanggal} onChange={(e) => setTanggal(e.target.value)} className="w-[70px]" />
                <Input placeholder="MM" value={bulan} onChange={(e) => setBulan(e.target.value)} className="w-[70px]" />
                <Input placeholder="YYYY" value={tahun} onChange={(e) => setTahun(e.target.value)} className="w-[100px]" />
              </div>

              <Label>Kategori</Label>
              <Select options={kategoriOptions} value={kategori} onChange={(val) => setKategori(val)} />

              <Label>Sumber Dana</Label>
              <Select options={sumberDanaOptions} value={sumberDana} onChange={(val) => setSumberDana(val)} />

              <Label>Jumlah</Label>
              <Input type="text" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
            </div>

            <div className="space-y-4">
              <Label>Keterangan</Label>
              <Input value={keterangan} onChange={(e) => setKeterangan(e.target.value)} />

              <Label>Unit Usaha</Label>
              <Select options={unitUsahaOptions} value={unitUsaha} onChange={(val) => setUnitUsaha(val)} />

              <Label>Nomor Invoice (opsional)</Label>
              <Input value={invoice} onChange={(e) => setInvoice(e.target.value)} />

              <Label>Bukti Transaksi (opsional)</Label>
              <Input type="file" onChange={(e) => setBukti(e.target.files?.[0] || null)} />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={() => setShowConfirm(true)}>
              Simpan
            </Button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        title="Simpan Perubahan"
        message="Apakah anda yakin ingin menyimpan perubahan pada data pengeluaran ini?"
        onConfirm={() => {
          console.log("Data pengeluaran diperbarui:", {
            tanggal,
            bulan,
            tahun,
            kategori,
            sumberDana,
            unitUsaha,
            invoice,
            jumlah,
            keterangan,
            bukti,
          });
          setShowConfirm(false);
          onClose();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}
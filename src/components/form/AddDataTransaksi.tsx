import { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import Button from "../ui/button/Button";
import ConfirmationModal from "./AddSimpanTransaksi";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddDataPemasukan({ isOpen, onClose }: Props) {
  const [tanggal, setTanggal] = useState("");
  const [bulan, setBulan] = useState("");
  const [tahun, setTahun] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [kategori, setKategori] = useState("");
  const [sumberDana, setSumberDana] = useState("");
  const [unitUsaha, setUnitUsaha] = useState("");
  const [invoice, setInvoice] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [bukti, setBukti] = useState<File | null>(null);

  const [showConfirm, setShowConfirm] = useState(false);

  const kategoriOptions = [
    { value: "", label: "Please select" },
    { value: "penjualan", label: "Penjualan Produk" },
    { value: "piutang", label: "Penerimaan Piutang" },
    { value: "pendanaan", label: "Pendanaan Investor" },
  ];

  const sumberDanaOptions = [
    { value: "", label: "Please select" },
    { value: "bank", label: "Bank" },
    { value: "e-wallet", label: "E-Wallet" },
  ];

  const unitUsahaOptions = [
    { value: "", label: "Please select" },
    { value: "unit1", label: "Unit Usaha 1" },
    { value: "unit2", label: "Unit Usaha 2" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-2xl font-bold text-center mb-6">Tambah Transaksi</h2>

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
              <Input type="number" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
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
        title="Simpan Transaksi"
        message="Apakah anda yakin untuk menambahkan transaksi ini?"
        onConfirm={() => {
          console.log("Data disimpan:", {
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

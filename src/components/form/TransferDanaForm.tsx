import { useState } from "react";
import Label from "./Label";
import Input from "./input/InputField";
import Select from "./Select";
import TextArea from "./input/TextArea";
import Button from "../ui/button/Button";
import ConfirmationModal from "../ui/modal/ConfirmationModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function TransferDanaForm({ isOpen, onClose }: Props) {
  const [tanggal, setTanggal] = useState({ dd: "", mm: "", yyyy: "" });
  const [sumber, setSumber] = useState("");
  const [tujuan, setTujuan] = useState("");
  const [jumlah, setJumlah] = useState("");
  const [keterangan, setKeterangan] = useState("");

  const [showConfirm, setShowConfirm] = useState(false);

  const options = [
    { value: "", label: "Pilih" },
    { value: "rekening1", label: "Rekening A" },
    { value: "rekening2", label: "Rekening B" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6">Transfer Dana</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label>Tanggal Transfer</Label>
              <div className="flex gap-2">
                <Select
                  id="dd"
                  value={tanggal.dd}
                  onChange={(val: string) => setTanggal({ ...tanggal, dd: val })}
                  options={[{ value: "", label: "DD" }, ...Array.from({ length: 31 }, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }))]}
                />
                <Select
                  id="mm"
                  value={tanggal.mm}
                  onChange={(val: string) => setTanggal({ ...tanggal, mm: val })}
                  options={[{ value: "", label: "MM" }, ...Array.from({ length: 12 }, (_, i) => ({ value: `${i + 1}`, label: `${i + 1}` }))]}
                />
                <Select
                  id="yyyy"
                  value={tanggal.yyyy}
                  onChange={(val: string) => setTanggal({ ...tanggal, yyyy: val })}
                  options={[{ value: "", label: "YYYY" }, { value: "2025", label: "2025" }, { value: "2024", label: "2024" }]}
                />
              </div>

              <Label htmlFor="sumber">Sumber Dana</Label>
              <Select id="sumber" value={sumber} onChange={setSumber} options={options} />

              <Label htmlFor="tujuan">Tujuan Dana</Label>
              <Select id="tujuan" value={tujuan} onChange={setTujuan} options={options} />

              <Label htmlFor="jumlah">Jumlah</Label>
              <Input id="jumlah" value={jumlah} onChange={(e) => setJumlah(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="keterangan">Keterangan</Label>
              <TextArea
                id="keterangan"
                value={keterangan}
                onChange={(val: string) => setKeterangan(val)}
                rows={10}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" onClick={onClose}>Batal</Button>
            <Button variant="primary" onClick={() => setShowConfirm(true)}>Simpan</Button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        title="Konfirmasi Transfer"
        message="Apakah anda yakin ingin melakukan transfer dana ini?"
        onConfirm={() => {
          console.log("Transfer Dana:", {
            tanggal,
            sumber,
            tujuan,
            jumlah,
            keterangan,
          });
          setShowConfirm(false);
          onClose();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}



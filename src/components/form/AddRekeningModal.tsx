import { useState } from "react";
import Label from "../form/Label";
import Input from "../form/input/InputField";
import Select from "../form/Select";
import TextArea from "../form/input/TextArea";
import Button from "../ui/button/Button";
import ConfirmationModal from "../ui/modal/ConfirmationModal"; 
interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddRekeningModal({ isOpen, onClose }: Props) {
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [nomor, setNomor] = useState("");
  const [saldo, setSaldo] = useState("");
  const [deskripsi, setDeskripsi] = useState("");

  const [showConfirm, setShowConfirm] = useState(false); 

  const jenisOptions = [
    { value: "", label: "Please select" },
    { value: "bank", label: "Bank" },
    { value: "kas", label: "Kas" },
    { value: "e-wallet", label: "E-Wallet" },
  ];

  if (!isOpen) return null;

  return (
    <>
      {/* Main Modal */}
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6">Tambah Rekening</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <Label htmlFor="nama">Nama Rekening/Kas</Label>
              <Input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />

              <Label htmlFor="jenis">Jenis Rekening</Label>
              <Select
                id="jenis"
                options={jenisOptions}
                value={jenis}
                onChange={(val: string) => setJenis(val)}
              />

              <Label htmlFor="nomor">Nomor Rekening</Label>
              <Input id="nomor" value={nomor} onChange={(e) => setNomor(e.target.value)} />

              <Label htmlFor="saldo">Saldo Awal</Label>
              <Input id="saldo" value={saldo} onChange={(e) => setSaldo(e.target.value)} />
            </div>

            <div>
              <Label htmlFor="deskripsi">Deskripsi</Label>
              <TextArea
                id="deskripsi"
                value={deskripsi}
                rows={7}
                onChange={(val: string) => setDeskripsi(val)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button
              variant="primary"
              onClick={() => setShowConfirm(true)} 
            >
              Simpan
            </Button>
          </div>
        </div>
      </div>

      {/* Konfirmasi Popup */}
      <ConfirmationModal
        isOpen={showConfirm}
        title="Simpan Rekening"
        message="Apakah anda yakin untuk menambahkan rekening ini?"
        onConfirm={() => {
          console.log("Simpan data rekening:", {
            nama,
            jenis,
            nomor,
            saldo,
            deskripsi,
          });
          setShowConfirm(false);
          onClose();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}

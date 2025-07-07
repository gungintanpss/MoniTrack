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
  existingData: {
    nama: string;
    jenis: string;
    nomor: string;
    saldo: string;
    deskripsi: string;
  };
}

export default function EditRekeningForm({ isOpen, onClose, existingData }: Props) {
  const [nama, setNama] = useState(existingData.nama);
  const [jenis, setJenis] = useState(existingData.jenis);
  const [nomor, setNomor] = useState(existingData.nomor);
  const [saldo] = useState(existingData.saldo); 
  const [deskripsi, setDeskripsi] = useState(existingData.deskripsi);

  const [showConfirm, setShowConfirm] = useState(false);

  const jenisOptions = [
    { value: "", label: "Pilih jenis" },
    { value: "Bank BCA", label: "Bank BCA" },
    { value: "Bank BRI", label: "Bank BRI" },
    { value: "Kas", label: "Kas" },
    { value: "E-Wallet", label: "E-Wallet" },
  ];

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6">Edit Rekening</h2>

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

              <Label htmlFor="nomor">Nomor Rekening/Identifikasi</Label>
              <Input id="nomor" value={nomor} onChange={(e) => setNomor(e.target.value)} />

              <Label htmlFor="saldo">Saldo Awal</Label>
              <Input id="saldo" value={saldo} disabled />
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
            <Button variant="primary" onClick={() => setShowConfirm(true)}>
              Simpan
            </Button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        title="Simpan Perubahan"
        message="Apakah Anda yakin ingin menyimpan perubahan pada rekening ini?"
        onConfirm={() => {
          console.log("Edit data rekening:", { nama, jenis, nomor, saldo, deskripsi });
          setShowConfirm(false);
          onClose();
        }}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}

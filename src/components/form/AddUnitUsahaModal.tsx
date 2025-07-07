import { useState } from "react";
import Label from "./Label";
import Input from "./input/InputField";
import TextArea from "./input/TextArea";
import Button from "../ui/button/Button";
import ConfirmationModal from "../ui/modal/ConfirmationModal";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddUnitUsahaModal({ isOpen, onClose }: Props) {
  const [nama, setNama] = useState("");
  const [jenis, setJenis] = useState("");
  const [keterangan, setKeterangan] = useState("");
  const [showConfirm, setShowConfirm] = useState(false); 

  const handleSimpan = () => {
    setShowConfirm(true); 
  };

  const handleConfirm = () => {
    console.log({ nama, jenis, keterangan });
    setShowConfirm(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
        <div className="w-full max-w-3xl bg-white p-8 rounded-xl shadow-2xl">
          <h2 className="text-xl font-bold text-center mb-6">Tambah Unit Usaha</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <Label htmlFor="nama">Nama Usaha</Label>
                <Input id="nama" value={nama} onChange={(e) => setNama(e.target.value)} />
              </div>
              <div>
                <Label htmlFor="jenis">Jenis Usaha</Label>
                <Input id="jenis" value={jenis} onChange={(e) => setJenis(e.target.value)} />
              </div>
            </div>
            <div>
              <Label htmlFor="keterangan">Keterangan Usaha</Label>
              <TextArea
                id="keterangan"
                value={keterangan}
                rows={6}
                onChange={(val) => setKeterangan(val)}
              />
            </div>
          </div>

          <div className="flex justify-end gap-4 mt-8">
            <Button variant="outline" onClick={onClose}>
              Batal
            </Button>
            <Button variant="primary" onClick={handleSimpan}>
              Simpan
            </Button>
          </div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={showConfirm}
        title="Simpan Unit Usaha"
        message="Apakah anda yakin untuk menambahkan unit usaha ini?"
        onConfirm={handleConfirm}
        onCancel={() => setShowConfirm(false)}
      />
    </>
  );
}

import Label from "./Label";
import Button from "../ui/button/Button";

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
  onEdit?: () => void;
}

export default function LihatDataPengeluaran({ isOpen, onClose, data, onEdit }: Props) {
  if (!isOpen) return null;

  let displayTanggal = data.tanggal;
  if (data.tanggal && data.tanggal.includes(" ")) {
    displayTanggal = data.tanggal;
  }

  const dateParts = displayTanggal.split(" ");
  const day = dateParts[0] || "";
  const month = dateParts[1] || "";
  const year = dateParts[2] || "";

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm">
      <div className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Detail Transaksi Pengeluaran</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <Label className="text-gray-700 font-medium">Tanggal Transaksi</Label>
              <div className="flex gap-2">
                <div className="w-[70px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-gray-900">{day}</span>
                </div>
                <div className="w-[70px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-gray-900">{month}</span>
                </div>
                <div className="w-[100px] px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-gray-900">{year}</span>
                </div>
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Kategori</Label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <span className="text-gray-900">{data.kategori}</span>
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Sumber Dana</Label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <span className="text-gray-900">{data.sumberDana}</span>
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Jumlah</Label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <span className="text-gray-900">{data.jumlah}</span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <Label className="text-gray-700 font-medium">Keterangan</Label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <span className="text-gray-900">{data.keterangan}</span>
              </div>
            </div>

            <div>
              <Label className="text-gray-700 font-medium">Unit Usaha</Label>
              <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                <span className="text-gray-900">{data.unitUsaha}</span>
              </div>
            </div>

            {data.invoice && (
              <div>
                <Label className="text-gray-700 font-medium">Nomor Invoice</Label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-gray-900">{data.invoice}</span>
                </div>
              </div>
            )}

            {data.bukti && (
              <div>
                <Label className="text-gray-700 font-medium">Bukti Transaksi</Label>
                <div className="px-3 py-2 bg-gray-50 border border-gray-300 rounded-lg">
                  <span className="text-gray-900">{data.bukti}</span>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-8">
          <Button variant="outline" onClick={onClose}>
            Tutup
          </Button>
          {onEdit && (
            <Button variant="primary" onClick={onEdit}>
              Edit
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
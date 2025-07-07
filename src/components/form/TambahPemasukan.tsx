import { useEffect } from "react";

interface TambahPemasukanProps {
  isOpen: boolean;
  onClose: () => void;
}

const TambahPemasukan: React.FC<TambahPemasukanProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="relative w-[900px] rounded-xl bg-white p-10 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">Tambah Transaksi</h2>

        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Tanggal Transaksi</label>
            <div className="flex gap-2">
              <select className="w-1/3 border text-sm rounded px-3 py-2 text-gray-700">
                <option>DD</option>
              </select>
              <select className="w-1/3 border text-sm rounded px-3 py-2 text-gray-700">
                <option>MM</option>
              </select>
              <select className="w-1/3 border text-sm rounded px-3 py-2 text-gray-700">
                <option>YYYY</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Keterangan</label>
            <input type="text" className="border rounded px-3 py-2 text-sm text-gray-700" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Kategori</label>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Please select</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Unit Usaha</label>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Please select</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Sumber Dana</label>
            <select className="border rounded px-3 py-2 text-sm text-gray-700">
              <option>Please select</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Nomor Invoice <span className="text-gray-400 text-xs">(optional)</span></label>
            <input type="text" className="border rounded px-3 py-2 text-sm text-gray-700" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Jumlah</label>
            <input type="text" className="border rounded px-3 py-2 text-sm text-gray-700" />
          </div>

          <div className="flex flex-col">
            <label className="text-sm text-gray-600 font-medium mb-1">Bukti Transaksi <span className="text-gray-400 text-xs">(optional)</span></label>
            <div className="relative">
              <input type="file" className="border rounded px-3 py-2 text-sm text-gray-700 w-full" />
              <div className="absolute top-1/2 right-3 transform -translate-y-1/2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M3 3a1 1 0 000 2h14a1 1 0 100-2H3z" />
                  <path fillRule="evenodd" d="M3 6a1 1 0 011-1h12a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V6zm7 1a1 1 0 00-1 1v2.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V8a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-10">
          <button onClick={onClose} className="px-6 py-2 rounded-md border border-gray-300 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Batal
          </button>
          <button className="px-6 py-2 rounded-md bg-blue-600 text-white text-sm font-semibold shadow-md hover:bg-blue-700">
            Simpan
          </button>
        </div>

        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-gray-600 text-xl hover:text-gray-800"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TambahPemasukan;

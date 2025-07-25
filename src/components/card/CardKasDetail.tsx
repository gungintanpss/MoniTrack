// pages/kas/CardKasDetail.tsx
import { useNavigate, useParams } from "react-router";
import { Trash2Icon, Edit } from "lucide-react";
import Button from "../../components/ui/button/Button";
import TabelKasDetail from "../../components/tables/BasicTables/TabelKasDetail";

export default function CardKasDetail() {
  const navigate = useNavigate();
  const { id } = useParams();

  const kasData = {
    id: "1",
    bank: "Bank BCA",
    namaRekening: "Rekening Operasional",
    noRekening: "0879898989898989",
    pemilik: "Ni Lorem Ipsum",
    deskripsi:
      "Rekening untuk kebutuhan operasional perusahaan dan transaksi harian.",
  };

  return (
    <div className="px-6 py-4 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          MANAJEMEN KAS & REKENING
        </h2>

        <Button variant="primary" className="px-5 py-2 rounded-full">
          Transfer Dana
        </Button>
      </div>

      <div className="flex gap-6">
        <div className="w-80 flex-shrink-0">
          <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
            <div className="text-lg font-bold text-gray-800 mb-4">
              {kasData.pemilik}
            </div>
            <div className="text-sm text-gray-600 mb-2">
              {kasData.noRekening}
            </div>
            <div className="text-sm text-gray-600 mb-4">
              {kasData.namaRekening} - {kasData.bank}
            </div>
            <p className="text-sm text-gray-600">{kasData.deskripsi}</p>
            
            <button className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500 transition">
              <Trash2Icon className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="absolute bottom-4 right-4 flex space-x-3 text-gray-400">
              <button className="hover:text-blue-500 transition">
                <Edit className="w-4 h-4" />
              </button>
              <button className="hover:text-red-500 transition">
                <Trash2Icon className="w-5 h-5" />
              </button>
          </div>
      </div>

      <div className="flex justify-end">
        <Button onClick={() => navigate("/manajemen-kas")} variant="outline">
          Kembali
        </Button>
      </div>
    </div>
  );
}
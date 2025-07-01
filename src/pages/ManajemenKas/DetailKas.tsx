import { useNavigate, useParams } from "react-router";
import { Trash2Icon } from "lucide-react";
import Button from "../../components/ui/button/Button";
import TabelKasDetail from "../../components/tables/BasicTables/TabelKasDetail";

export default function DetailKas() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="space-y-6 px-4 md:px-8 pt-4 pb-10">
      {/* Header + Tombol Transfer Dana */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          MANAJEMEN KAS & REKENING
        </h2>

        <Button size="sm" variant="primary" className="px-4 py-2">
          Transfer Dana
        </Button>
      </div>

      {/* Layout dengan Card di kiri dan Tabel di kanan */}
      <div className="flex gap-6">
        {/* Informasi Kas - Sisi Kiri */}
        <div className="w-80 flex-shrink-0">
          <div className="relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-white/[0.03]">
            <div className="text-lg font-bold text-gray-800 mb-4">
              Ni Lorem Ipsum
            </div>
            <div className="text-sm text-gray-600 mb-2">
              0879898989898989
            </div>
            <div className="text-sm text-gray-600 mb-4">
              Rekening Operasional - Bank BCA
            </div>
            <p className="text-sm text-gray-600">
              Rekening untuk kebutuhan operasional perusahaan dan transaksi harian.
            </p>
            
            {/* Tombol Hapus */}
            <button className="absolute bottom-4 right-4 text-gray-400 hover:text-red-500 transition">
              <Trash2Icon className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Tabel Kas Detail - Sisi Kanan */}
        <div className="flex-1">
          <TabelKasDetail />
        </div>
      </div>

      <div className="text-right">
        <Button
          variant="primary"
          className="px-6 py-2"
          onClick={() => navigate(-1)} // tombol kembali
        >
          Kembali
        </Button>
      </div>
    </div>
  );
}
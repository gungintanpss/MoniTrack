import { useNavigate } from "react-router";
import { CopyIcon } from "../../icons";

const kasList = [
  {
    id: "1",
    bank: "Bank BCA",
    namaRekening: "Rekening Operasional",
    noRekening: "0879898989898989",
    pemilik: "Ni Lorem Ipsum",
    saldo: "Rp. 134.768.987,32",
  },
  {
    id: "2",
    bank: "Bank Mandiri",
    namaRekening: "Rekening Bisnis",
    noRekening: "082134567891234",
    pemilik: "Ni Komang Sari",
    saldo: "Rp. 89.000.000,00",
  },
  {
    id: "3",
    bank: "Bank BRI",
    namaRekening: "Rekening Operasional",
    noRekening: "08111112223333",
    pemilik: "Made Gunawan",
    saldo: "Rp. 45.500.000,00",
  },
  {
    id: "4",
    bank: "Bank BNI",
    namaRekening: "Rekening Cadangan",
    noRekening: "081234567890",
    pemilik: "I Gede Satria",
    saldo: "Rp. 25.000.000,00",
  },
  {
    id: "5",
    bank: "Bank Danamon",
    namaRekening: "Rekening Operasional",
    noRekening: "089876543210",
    pemilik: "Dewi Lestari",
    saldo: "Rp. 150.000.000,00",
  },
  {
    id: "6",
    bank: "Bank CIMB Niaga",
    namaRekening: "Rekening Investasi",
    noRekening: "087123456789",
    pemilik: "Ketut Adi",
    saldo: "Rp. 75.000.000,00",
  },
];

export default function CardKas() {
  const navigate = useNavigate();

  const handleCopy = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const goToDetail = (id: string) => {
    navigate(`/manajemen-kas/detail/${id}`);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {kasList.map((kas) => (
        <div
          key={kas.id}
          className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]"
        >
          <div className="text-xs text-indigo-600 font-medium">{kas.bank}</div>
          <div className="mt-1 text-sm text-indigo-800 font-semibold flex items-center gap-1">
            {kas.namaRekening}
          </div>
          <div className="text-sm text-indigo-800 flex items-center gap-1">
            {kas.noRekening}
            <span
              className="text-indigo-500 cursor-pointer"
              onClick={() => handleCopy(kas.noRekening)}
            >
              <CopyIcon className="w-4 h-4" />
            </span>
          </div>

          <div className="mt-4 text-base font-semibold text-gray-800 dark:text-white">
            {kas.pemilik}
          </div>

          <div className="mt-2 text-4xl font-bold text-black dark:text-white">
            {kas.saldo}
          </div>

          <button
            onClick={() => goToDetail(kas.id)}
            className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer block ml-auto"
          >
            Detail →
          </button>
        </div>
      ))}
    </div>
  );
}
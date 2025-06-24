export default function CardUnit() {
    const data = [
      {
        kategori: "F&B",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        status: "Aktif",
        nama: "Bakmie Mantap",
        warnaStatus: "text-green-600",
      },
      {
        kategori: "Clothes",
        deskripsi:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna",
        status: "Tidak Aktif",
        nama: "PopUp Store",
        warnaStatus: "text-red-600",
      },
    ];
  
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((item, idx) => (
          <div
            key={idx}
            className="w-full rounded-xl border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-white/[0.03]"
          >
            <div className="text-xs text-gray-600 font-medium">{item.kategori}</div>
  
            <p className="mt-1 text-sm text-indigo-800 font-semibold">
              {item.deskripsi}
            </p>
  
            <div className={`mt-2 text-base font-bold ${item.warnaStatus}`}>
              {item.status}
            </div>
  
            <div className="mt-1 text-3xl font-extrabold text-slate-800 dark:text-white">
              {item.nama}
            </div>
  
            <div className="mt-6 text-sm text-right text-gray-700 dark:text-white cursor-pointer">
              Detail →
            </div>
          </div>
        ))}
      </div>
    );
  }
  
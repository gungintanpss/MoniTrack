import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import TabelPengeluaran from "../../components/tables/BasicTables/TabelPengeluaran";
import Button from "../../components/ui/button/Button";
import Input from "../../components/form/input/InputField";
import Select from "../../components/form/Select";
import DatePicker from "../../components/form/date-picker";
import { PlusIcon } from "../../icons";

export default function PengeluaranPage() {
  const [search, setSearch] = useState("");
  const filterOptions = [
    { value: "semua", label: "Semua" },
    { value: "lunas", label: "Lunas" },
    { value: "belum-lunas", label: "Belum Lunas" },
  ];

  return (
    <>
      <PageMeta title="Manajemen Piutang" description="Dashboard Piutang" />

      {/* Header: Judul & Tombol Tambah */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-[22px] font-semibold text-[#3A3F63]">
          TRANSAKSI PENGELUARAN
        </h1>
        <Button
          size="sm"
          variant="primary"
          startIcon={<PlusIcon />}
          className="px-4 py-2"
        >
          Tambah
        </Button>
      </div>

      {/* Table */}
      <div className="space-y-6">
        <ComponentCard title="">
          {/* Filter Section */}
          <div className="flex flex-wrap gap-4 items-center justify-start mb-6">
            {/* Input Pencarian Invoice dengan Search Icon */}
            <div className="relative w-full max-w-sm">
              <Input
                type="text"
                placeholder="Cari invoice"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="pl-10 text-[#3A3F63]"
              />
              <div className="absolute left-3 top-1/2 -translate-y-1/2 text-[#3A3F63]">
                {/* Search Icon (inline SVG) */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Dropdown Filter Status dengan Down Arrow Icon */}
            <div className="relative w-full max-w-[180px]">
              <Select
                options={filterOptions}
                placeholder="Filter"
                className="text-[#3A3F63] appearance-none pr-10"
                onChange={(val) => console.log("Filter selected:", val)}
              />
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-[#3A3F63]">
                {/* Down Arrow Icon (inline SVG) */}
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>

            {/* Date Picker */}
            <div className="w-full max-w-[220px]">
              <DatePicker
                id="filter-date"
                placeholder="Date filter"
                onChange={(dates, currentDateString) =>
                  console.log({ dates, currentDateString })
                }
              />
            </div>
          </div>

          {/* Table */}
          <TabelPengeluaran />
        </ComponentCard>
      </div>
    </>
  );
}
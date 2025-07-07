import PageBreadcrumb from "../../common/PageBreadCrumb";
import PageMeta from "../../common/PageMeta";
import Table from "../../tables/BasicTables/Table";
import { PlusIcon } from "../../../icons";
import Button from "../../ui/button/Button";

export default function TablePengeluaran() {
  return (
    <>
      <PageMeta
        title="Transaksi Pengeluaran | Monitrack Dashboard"
        description="Halaman tabel pengeluaran untuk sistem dashboard Monitrack"
      />
      <PageBreadcrumb pageTitle="TRANSAKSI PENGELUARAN" />

      <div className="flex justify-end mb-4 px-6">
        <Button
          size="sm"
          variant="primary"
          startIcon={<PlusIcon />}
          className="px-4 py-2"
        >
          Tambah
        </Button>
      </div>

      <Table />
    </>
  );
}

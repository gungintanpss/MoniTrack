import { useNavigate } from "react-router";
import CardUnitDetail from "../../components/card/CardUnitUsaha";
import TabelKeuanganUnit from "../../components/tables/BasicTables/TabelKeuanganUnit";
import Button from "../../components/ui/button/Button";
import PageMeta from "../../components/common/PageMeta";

export default function DetailUnit() {
  const navigate = useNavigate();

  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />

      <div className="px-4 md:px-10 py-8 space-y-6">
        <h1 className="text-lg font-semibold text-[#3A3F63]">DETAIL UNIT USAHA</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <CardUnitDetail />
          </div>

          <div className="md:col-span-2">
            <TabelKeuanganUnit />
          </div>
        </div>

        <div className="text-right">
          <Button
            variant="primary"
            className="px-6 py-2"
            onClick={() => navigate(-1)}
          >
            Kembali
          </Button>
        </div>
      </div>
    </>
  );
}

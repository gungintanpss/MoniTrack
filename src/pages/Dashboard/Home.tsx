import EcommerceMetrics from "../../components/card/CardDashboard";
import StatisticsChart from "../../components/card/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="MoniTrack"
        description=""
      />
      <div className="space-y-6 px-4 md:px-8 pt-4">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h2>

        <EcommerceMetrics />
        <StatisticsChart />
      </div>
    </>
  );
}

import EcommerceMetrics from "../../components/ecommerce/EcommerceMetrics";
import StatisticsChart from "../../components/ecommerce/StatisticsChart";
import PageMeta from "../../components/common/PageMeta";

export default function Home() {
  return (
    <>
      <PageMeta
        title="React.js Ecommerce Dashboard | TailAdmin - React.js Admin Dashboard Template"
        description="This is React.js Ecommerce Dashboard page for TailAdmin - React.js Tailwind CSS Admin Dashboard Template"
      />
      <div className="space-y-6 px-4 md:px-8 pt-4">
        {/* Judul Dashboard */}
        <h2 className="text-xl font-semibold text-gray-800 dark:text-white">
          Dashboard
        </h2>

        <EcommerceMetrics />
        <StatisticsChart />
      </div>
    </>
  );
}

import Graph from "./Graph";
import PieChart from "./PieChart";
import Table from "./Table";

const DashboardComponent: React.FC = () => {
  return (
    <section id="overview-section" className="mt-4 flex-1 w-full">
      <div className="border-2 flex flex-row gap-2 items-center">
        <div id="left-col" className="flex flex-col gap-5 w-1/2">
          <Table />
          <Graph />
        </div>
        <div id="right-col" className="flex flex-col items-center gap-5 w-1/2">
          <PieChart />
        </div>
      </div>
    </section>
  );
};

export default DashboardComponent;

const PieChart: React.FC = () => {
  return (
    <div>
      <div id="pie-legend" className="flex gap-2">
        <p>#el1</p>
        <p>#el2</p>
        <p>#el3</p>
        <p>#el4</p>
        <p>#el5</p>
      </div>
      <div className="w-72 h-72 border-2 border-black   rounded-full flex justify-center items-center">
        <p>PIE</p>
      </div>
    </div>
  );
};

export default PieChart;

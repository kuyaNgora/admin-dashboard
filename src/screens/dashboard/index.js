import React from "react";
import DevTable from "./dev.table";
import CheckTable from "./check.table";
import ColumnTable from "./column.table";
import ComplexTable from "./complex.table";

const App = () => {
  return (
    <div className="main-containers dark:border-l dark:border-white">
      <div className="content-wrapper">
        <div className="flexbox-container">
          <DevTable />
          <CheckTable />
          <ColumnTable />
          <ComplexTable />
        </div>
      </div>
    </div>
  );
};

export default App;

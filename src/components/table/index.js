/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import TableRender from "./table";
import React from "react";
import { initialize } from "../../service/table/slice";

const useTable = (name, config) => {
  const dispatch = useDispatch();
  const StateTable = useSelector((state) => state?.Table?.data[name]);

  const Render = () => {
    return <TableRender name={name} columns={config?.columns} />;
  };

  const init = async () => {
    let table = StateTable;

    if (typeof StateTable === "undefined") {
      table = config;
    }

    dispatch(initialize({ name, table }));
  };

  React.useEffect(() => {
    init();
  }, [name, config]);

  return {
    Render,
  };
};

export default useTable;

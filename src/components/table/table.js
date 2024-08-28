/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { useSelector } from "react-redux";

const TableRender = ({ name, columns }) => {
  const table = useSelector((state) => state?.Table?.data[name]);
  const StateTable = useSelector((state) => state?.Table?.data[name]?.data);
  const StateFiltered = useSelector(
    (state) => state?.Table?.data[name]?.filtered
  );

  console.log(StateTable, "render");
  console.log(table, "table");

  const Th = ({ field, column }) => {
    return (
      <th colSpan={1} role="columnheader" className="th">
        <div className="title">{column?.title}</div>
      </th>
    );
  };

  const Td = ({ field, column, data }) => {
    if (column?.component && React.isValidElement(column?.component(data))) {
      return (
        <td role="cell" width={column?.width} className="td">
          {column?.component(data)}
        </td>
      );
    }

    const value = () => {
      return data[field];
    };

    return (
      <td role="cell" width={column?.width} className="td">
        {value()}
      </td>
    );
  };

  return (
    <table className="table">
      <thead>
        <tr role="row" className="border-b">
          {Object.keys(columns).map((i, c) => (
            <Th key={c} column={columns[i]} field={i} />
          ))}
        </tr>
      </thead>
      <tbody role="rowgroup">
        {table?.textSearch !== ""
          ? StateFiltered?.map((d, i) => (
              <tr role="row" key={i}>
                {Object.keys(columns).map((c, x) => (
                  <Td column={columns[c]} field={c} data={d} key={x} />
                ))}
              </tr>
            ))
          : StateTable?.map((d, i) => (
              <tr role="row" key={i}>
                {Object.keys(columns).map((c, x) => (
                  <Td column={columns[c]} field={c} data={d} key={x} />
                ))}
              </tr>
            ))}
        {/* {StateTable?.map((d, i) => (
          <tr role="row" key={i}>
            {Object.keys(columns).map((c, x) => (
              <Td column={columns[c]} field={c} data={d} key={x} />
            ))}
          </tr>
        ))} */}
      </tbody>
    </table>
  );
};

export default TableRender;

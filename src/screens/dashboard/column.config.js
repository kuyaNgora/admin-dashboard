import config from "../../service/table/const";
import { initialColumnData } from "./const";
import Action from "./column.action";

let table = { ...config };
table.data = initialColumnData;
table.columns = {
  name: {
    title: "name",
    width: 200,
    component: (row) => {
      return <div>{row?.name}</div>;
    },
  },
  progress: {
    title: "progress",
    width: 120,
    component: (row) => {
      return (
        <div className="flex items-center">
          <span className="mr-2">{row?.progress}%</span>
        </div>
      );
    },
  },
  quantity: {
    title: "quantity",
    width: 120,
    component: (row) => {
      return <div>{row?.quantity}</div>;
    },
  },
  date: {
    title: "date",
    width: 150,
    component: (row) => {
      return <div>{row?.date}</div>;
    },
  },
  action: {
    title: "",
    width: 80,
    component: (row) => {
      return <Action data={row} />;
    },
  },
};

export default table;

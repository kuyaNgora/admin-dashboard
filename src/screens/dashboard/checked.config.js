import config from "../../service/table/const";
import { initialCheckData } from "./const";
import Checked from "./check";
import Action from "./action.check";

let table = { ...config };
table.data = initialCheckData;
table.columns = {
  name: {
    title: "name",
    width: 200,
    component: (row) => {
      return <Checked data={row} />;
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

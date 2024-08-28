import config from "../../service/table/const";
import { initialComplexData } from "./const";
import Action from "./complex.action";
import { RiErrorWarningFill } from "react-icons/ri";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

let table = { ...config };
table.data = initialComplexData;
table.columns = {
  name: {
    title: "name",
    width: 200,
    component: (row) => {
      return <div>{row?.name}</div>;
    },
  },
  status: {
    title: "status",
    width: 120,
    component: (row) => {
      return (
        <div className="capitalize  flex gap-1 items-center">
          {row?.status === "error" ? (
            <RiErrorWarningFill className="fill-orange-500" size={22} />
          ) : row?.status === "disabled" ? (
            <FaTimesCircle className="fill-red-500" size={20} />
          ) : row?.status === "approved" ? (
            <FaCheckCircle className="fill-green-500" size={20} />
          ) : null}{" "}
          {row?.status}
        </div>
      );
    },
  },
  date: {
    title: "date",
    width: 150,
    component: (row) => {
      return <div>{row?.date}</div>;
    },
  },
  progress: {
    title: "progress",
    width: 120,
    component: (row) => {
      return (
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-secondary h-2 rounded-full"
            style={{ width: `${row?.progress}%` }}
          ></div>
        </div>
      );
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

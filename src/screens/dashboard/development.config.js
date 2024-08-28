import { FaApple, FaWindows } from "react-icons/fa6";
import config from "../../service/table/const";
import { GrAndroid } from "react-icons/gr";
import { initialDevelopmentData } from "./const";
import Action from "./action";

let table = { ...config };
table.data = initialDevelopmentData;
table.columns = {
  name: {
    title: "name",
    width: 120,
    component: (row) => {
      return <div>{row?.name}</div>;
    },
  },
  tech: {
    title: "tech",
    width: 120,
    component: (row) => {
      return (
        <div className="flex gap-2 items-center content-center ">
          {row?.tech.includes("apple") && (
            <FaApple className="text-inactive" size={18} />
          )}
          {row?.tech.includes("android") && (
            <GrAndroid className="text-inactive" />
          )}
          {row?.tech.includes("windows") && (
            <FaWindows className="text-inactive" />
          )}
        </div>
      );
    },
  },
  date: {
    title: "date",
    width: 120,
    component: (row) => {
      return <div>{row?.date}</div>;
    },
  },
  progress: {
    title: "progress",
    width: 250,
    component: (row) => {
      return (
        <div className="flex items-center">
          <span className="mr-2">{row?.progress}%</span>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-secondary h-2 rounded-full"
              style={{ width: `${row?.progress}%` }}
            ></div>
          </div>
        </div>
      );
    },
  },
  action: {
    title: "",
    width: 80,
    component: (row) => {
      return <Action data={row} name={"development"} />;
    },
  },
};

export default table;

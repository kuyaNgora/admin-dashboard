import React from "react";
import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../service/table/slice";

const Action = ({ data }) => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state?.Table?.data["development"]);

  const remove = (id) => {
    const updateData = [...initial?.data];

    const idx = updateData.findIndex((item) => item?.id === id);

    if (idx !== -1) {
      updateData.splice(idx, 1);

      dispatch(
        initialize({
          name: "development",
          table: {
            ...initial,
            data: updateData,
          },
        })
      );
    }
  };

  return (
    <div
      className="bg-red-600 h-[20px] w-[20px] flex items-center justify-center rounded-md cursor-pointer"
      onClick={() => remove(data?.id)}
    >
      <FaTimes className="fill-white" size={12} />
    </div>
  );
};

export default Action;

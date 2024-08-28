import { Checkbox, Label } from "flowbite-react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../service/table/slice";

const Checked = ({ data }) => {
  const dispatch = useDispatch();
  const initial = useSelector((state) => state?.Table?.data["check"]);

  const onCheck = async (v) => {
    let val = [...initial?.data];

    const updateData = val?.map((item) =>
      item?.id === data?.id ? { ...item, checked: v } : item
    );

    dispatch(
      initialize({
        name: "check",
        table: {
          ...initial,
          data: updateData,
        },
      })
    );
  };

  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={data?.id}
        onChange={(e) => onCheck(e?.target?.checked)}
        checked={data?.checked}
      />
      <Label htmlFor={data?.id}>{data?.name}</Label>
    </div>
  );
};

export default Checked;

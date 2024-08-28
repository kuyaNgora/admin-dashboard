import React from "react";
import useTable from "../../components/table";

import table from "./development.config";
import { useDispatch, useSelector } from "react-redux";
import { initialize } from "../../service/table/slice";
import moment from "moment";
import {
  Checkbox,
  Datepicker,
  Dropdown,
  Label,
  TextInput,
} from "flowbite-react";
import { FaEllipsis, FaPlus, FaRegLightbulb, FaRegUser } from "react-icons/fa6";
import { GoBriefcase, GoGear } from "react-icons/go";
import Search from "../../components/input/search";
import Modal from "../../components/modal";

const DevTable = () => {
  const dispatch = useDispatch();
  const stateDev = useSelector((state) => state?.Table?.data["development"]);
  const devTable = useTable("development", table);

  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const [form, setForm] = React.useState({
    name: "",
    date: moment(new Date()).format("DD.MMM.YYYY"),
    tech: [],
  });

  const onSave = async () => {
    const updateData = [...stateDev?.data];

    const payload = {
      id: updateData?.length + 1,
      ...form,
      progress: Math.floor(Math.random() * 100),
    };

    updateData.push(payload);

    dispatch(
      initialize({
        name: "development",
        table: {
          ...stateDev,
          data: updateData,
        },
      })
    );

    setForm({
      name: "",
      date: moment(new Date()).format("DD.MMM.YYYY"),
      tech: [],
    });

    setIsModalOpen(false);
  };

  const onSearched = async (e) => {
    const query = e.toLowerCase();
    let initialData = [...stateDev?.data];

    if (query) {
      initialData = initialData.filter((item) =>
        item.name.toLowerCase().includes(query)
      );

      dispatch(
        initialize({
          name: "development",
          table: {
            ...stateDev,
            textSearch: query,
            data: stateDev?.data,
            filtered: initialData,
          },
        })
      );
    } else {
      dispatch(
        initialize({
          name: "development",
          table: {
            ...stateDev,
            data: stateDev?.data,
            filtered: [],
            textSearch: "",
          },
        })
      );
    }
  };

  return (
    <div direction="column" className="table-container">
      <div className="header-container">
        <div className="title">Development Table</div>
        <div>
          <Dropdown
            label=""
            dismissOnClick={true}
            renderTrigger={() => (
              <span className="action-button">
                <FaEllipsis />
              </span>
            )}
            className="!p-[5px] !border-none !shadow-dx rounded-2xl !min-w-[150px] dark:bg-primaryDark "
          >
            <Dropdown.Item
              icon={FaRegUser}
              as="div"
              className="text-th font-semibold hover:!bg-transparent hover:text-primary "
            >
              Panel 1
            </Dropdown.Item>
            <Dropdown.Item
              icon={GoBriefcase}
              as="div"
              className="text-th font-semibold hover:!bg-transparent hover:text-primary "
            >
              Panel 2
            </Dropdown.Item>
            <Dropdown.Item
              icon={FaRegLightbulb}
              as="div"
              className="text-th font-semibold hover:!bg-transparent hover:text-primary "
            >
              Panel 3
            </Dropdown.Item>
            <Dropdown.Item
              icon={GoGear}
              as="div"
              className="text-th font-semibold hover:!bg-transparent hover:text-primary "
            >
              Panel 4
            </Dropdown.Item>
          </Dropdown>
        </div>
      </div>

      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <Search
            value={stateDev?.textSearch}
            onChange={(e) => onSearched(e?.target?.value)}
          />
        </div>
        <button
          onClick={() => setIsModalOpen(true)}
          className="flex items-center bg-secondary text-white rounded-md px-3 py-1 text-sm gap-2 transition-colors hover:bg-primary"
        >
          <FaPlus /> Add Data
        </button>
      </div>

      <devTable.Render />

      <Modal
        isOpen={isModalOpen}
        onClose={() => {
          setForm({
            name: "",
            date: moment(new Date()).format("DD.MMM.YYYY"),
            tech: [],
          });

          setIsModalOpen(false);
        }}
        onSave={onSave}
        title="Add Data"
      >
        <div className="flex max-w-md flex-col gap-4">
          <div className="flex items-center justify-between">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="small" value="Name" />
              </div>
              <TextInput
                id="small"
                type="text"
                sizing="sm"
                onChange={(e) => setForm({ ...form, name: e?.target?.value })}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="base" value="Date" />
              </div>
              <Datepicker
                onSelectedDateChanged={(e) => {
                  const date = moment(e).format("DD.MMM.YYYY");
                  setForm({ ...form, date: date });
                }}
              />
            </div>
          </div>

          <div>
            <div className="mb-2 block">
              <Label htmlFor="base" value="Tech" />
            </div>
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Checkbox
                  id="apple"
                  onChange={(e) => {
                    if (e?.target?.checked) {
                      setForm({
                        ...form,
                        tech: [...form?.tech, "apple"],
                      });
                    } else {
                      setForm({
                        ...form,
                        tech: [
                          ...form?.tech.filter((tech) => tech !== "apple"),
                        ],
                      });
                    }
                  }}
                />
                <Label htmlFor="apple">Apple</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="android"
                  onChange={(e) => {
                    if (e?.target?.checked) {
                      setForm({
                        ...form,
                        tech: [...form?.tech, "android"],
                      });
                    } else {
                      setForm({
                        ...form,
                        tech: [
                          ...form?.tech.filter((tech) => tech !== "android"),
                        ],
                      });
                    }
                  }}
                />
                <Label htmlFor="android">Android</Label>
              </div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="windows"
                  onChange={(e) => {
                    if (e?.target?.checked) {
                      setForm({
                        ...form,
                        tech: [...form?.tech, "windows"],
                      });
                    } else {
                      setForm({
                        ...form,
                        tech: [
                          ...form?.tech.filter((tech) => tech !== "windows"),
                        ],
                      });
                    }
                  }}
                />
                <Label htmlFor="windows">Windows</Label>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default DevTable;

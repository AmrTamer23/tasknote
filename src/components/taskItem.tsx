import { FaCheck } from "react-icons/fa";
import "../App.css";
import { TaskValues } from "../utils/interfaces";
import { CountdownDays } from "../utils/helpers";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { useState } from "react";
import Modal from "./ui/modal";
import ModalBody from "./modalBody";

interface TaskItemProps {
  task: TaskValues;
  onDel: (id: number) => void;
}

const TaskItem = (props: TaskItemProps) => {
  const { fetchCategoriesById } = useLocalStorageContext();

  const category = fetchCategoriesById(props.task.categoryId);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const headingStyle =
    "text-3xl font-normal self-start py-1 text-[#E0E0E0] mt-2";

  return (
    <>
      <div
        className="bg-[#333333] h-20 w-full rounded-lg flex justify-between mb-5 select-none"
        onClick={handleModal}
      >
        <div className="flex flex-col w-5/6 py-1">
          <div className="flex px-5 items-center gap-3">
            <h4 className="text-xl font-normal text-white">
              {props.task.name}
            </h4>
            <span className="h-1.5 w-1.5 bg-[#797575] rounded-full self-center"></span>
            <h4 className="text-xl font-light text-gray-400">
              Due {CountdownDays(new Date(props.task.due))}
            </h4>
            {category ? (
              <>
                <span
                  className="h-1.5 w-1.5 rounded-full self-center"
                  style={{
                    backgroundColor: category.color,
                  }}
                ></span>
                <h4 className="text-xl font-light text-gray-400">
                  {category.name}
                </h4>
              </>
            ) : (
              <></>
            )}
          </div>
          <p className="text-sm font-normal text-gray-300 px-5 mb-1 overflow-y-hidden overflow-ellipsis">
            {props.task.desc}
          </p>
        </div>

        <div
          className="bg-emerald-800 opacity-80 w-1/12 rounded-r-lg h-full flex justify-center items-center cursor-pointer"
          onClick={() => props.onDel(props.task.id)}
        >
          <FaCheck className="text-white" size={"30"} />
        </div>
      </div>
      {isModalOpen && (
        <Modal
          onBackgroundClick={handleModal}
          children={
            <ModalBody
              item={props.task}
              category={category}
              onDel={props.onDel}
              icon={FaCheck}
              handleModal={handleModal}
            />
          }
        />
      )}
    </>
  );
};

export default TaskItem;

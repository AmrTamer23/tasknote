import { FaCheck } from "react-icons/fa";
import "../App.css";
import TaskValues from "../interfaces/task";
import { CountdownDays } from "../utils/helpers";

const TaskItem = (props: TaskValues) => {
  return (
    <div className="bg-[#333333] h-20 w-full rounded-lg flex justify-between mb-5">
      <div className="flex flex-col">
        <div className="flex px-5 py-1.5 items-center gap-3 h-2/4">
          <h4 className="text-xl font-normal text-white">{props.name}</h4>
          <span className="h-1.5 w-1.5 bg-[#797575] rounded-full self-center"></span>
          <h4 className="text-xl font-light text-gray-400">
            Due In {CountdownDays(new Date(props.due))}
          </h4>
        </div>
        <div className="h-2/4 s">
          <p className="text-sm font-normal text-gray-300 px-5">{props.desc}</p>
        </div>
      </div>
      <div className="flex flex-col w-11">
        <div
          className="bg-emerald-800 opacity-80 h-full flex justify-center items-center task-btns-check cursor-pointer"
          onClick={() => console.log("Check")}
        >
          <FaCheck className="text-white" size={"25"} />
        </div>
      </div>
    </div>
  );
};

export default TaskItem;

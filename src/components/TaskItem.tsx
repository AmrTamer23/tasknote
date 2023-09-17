import React from 'react';
import { FaCheck } from 'react-icons/fa';
import '../App.css';

interface TaskItemProps {
    taskName: string;
    taskDue: string;
    taskDesc: string;
}

const TaskItem = (props: TaskItemProps) => {
    return (
        <div className="bg-[#5C8374] h-20 w-full rounded-lg flex justify-between mb-5">

            <div className="flex flex-col">
                <div className="flex px-5 py-1.5 items-center gap-3 h-2/4">
                    <h4 className="text-xl font-normal text-black">{props.taskName}</h4>
                    <span className="h-1.5 w-1.5 bg-[#1E1E1E] rounded-full self-center"></span>
                    <h4 className="text-xl font-thin text-gray-800">Due {props.taskDue}</h4>
                </div>
                <div className="h-2/4 s">
                    <p className="text-sm font-normal text-gray-800 px-5">
                        {props.taskDesc}
                    </p>
                </div>
            </div>
            <div className="flex flex-col w-11">
                <div className="bg-emerald-800 h-3/5 flex justify-center items-center task-btns-check cursor-pointer"
                    onClick={() => console.log("Check")}
                >
                    <FaCheck className="text-white" />
                </div>
                <div className="bg-red-600 h-2/5 flex justify-center items-center p-1 task-btns-del cursor-pointer"
                    onClick={() => console.log("Delete")}
                >
                    <p className="p-2 text-xs">Delete</p>
                </div>
            </div>

        </div >
    )
};

export default TaskItem;
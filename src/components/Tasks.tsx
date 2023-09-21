import React, { useState, useEffect } from "react";
import { TimeOfDay } from "../utilities/timeOfDay";
import '../App.css';
import TaskItem from "./TaskItem";
import { FaAngleLeft, FaAngleDown, FaPlus } from "react-icons/fa";
import FloatingButton from "./FloatingButton";

const Tasks = () => {

    const [timeOfDay, setTimeOfDay] = useState(TimeOfDay());
    useEffect(() => {
        setTimeOfDay(TimeOfDay());
    }, []);

    const [isTodayTasksOpen, setIsTodayTasksOpen] = useState(true);

    const handleTodayTasks = () => {
        setIsTodayTasksOpen(!isTodayTasksOpen);
        const tasksSection = document.querySelector(".tasks.today");
        tasksSection?.classList.toggle("open");
    }

    const [isUpTasksOpen, setIsUpTasksOpen] = useState(true);

    const handleUpTasks = () => {
        setIsUpTasksOpen(!isUpTasksOpen);
        const tasksSection = document.querySelector(".tasks.upcoming");
        tasksSection?.classList.toggle("open");
    }

    const taskListsStyle = 'flex flex-col pt-3 mt-3 tasks';

    const textFieldsStyle = 'bg-[#1E1E1E] text-white border-none px-2.5 py-5 rounded-lg text-lg cursor-pointer';

    return (
        <div className="flex flex-col px-14 py-5 w-full ml-52 min-h-screen  bg-[#1E1E1E]">
            <h1>Good {timeOfDay}!</h1>
            <div className={'py-12 px-24'}>
                <span className="flex justify-between pb-3">
                    <h2 className="text-3xl font-normal self-start">Today</h2>
                    <div className="flex justify-center items-end cursor-pointer"
                        onClick={handleTodayTasks}
                    >
                        {
                            isTodayTasksOpen ?
                                <FaAngleDown size={'25'} className="text-white " />
                                :
                                <FaAngleLeft size={'25'} className="text-white " />
                        }

                    </div>
                </span>
                <hr />
                <div className={`${taskListsStyle} today`}>
                    <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                </div>

            </div>
            <div className="py-12 px-24">
                <span className="flex justify-between pb-3">
                    <h2 className="text-3xl font-normal self-start">Upcoming</h2>
                    <div className="flex justify-center items-end cursor-pointer"
                        onClick={handleUpTasks}
                    >
                        {
                            isUpTasksOpen ?
                                <FaAngleDown size={'25'} className="text-white " />
                                :
                                <FaAngleLeft size={'25'} className="text-white " />
                        }

                    </div>
                </span>
                <hr />

                <div className="flex flex-col pt-3 mt-3 tasks upcoming">
                    <TaskItem taskName="Learn React And Apply" taskDue="in 2 days" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="in 2 days" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="in 9 days" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="in 8 days" taskDesc="Wassap" />
                    <TaskItem taskName="Learn React And Apply" taskDue="in 11 days" taskDesc="Wassap" />
                </div>

            </div>
            <FloatingButton Icon={FaPlus} onClick={() => { }}
                children={
                    <>
                        <div className="flex gap-5">
                            <input type="text" placeholder="Task Name" className={`${textFieldsStyle} grow`} />
                            <input
                                type="date"
                                placeholder="Task Due"
                                className={textFieldsStyle}
                                min={new Date().toISOString().split("T")[0]}

                            />
                        </div>
                        <textarea placeholder="Task Description" className={`${textFieldsStyle} h-52`} />
                    </>
                }
            />
        </div>
    );
};

export default Tasks;
import React, { useState, useEffect } from "react";
import { TimeOfDay } from "../utilities/timeOfDay";
import '../App.css';
import TaskItem from "./TaskItem";
import { FaAngleLeft, FaAngleDown } from "react-icons/fa";

const Tasks = () => {

    const [timeOfDay, setTimeOfDay] = useState(TimeOfDay());
    useEffect(() => {
        setTimeOfDay(TimeOfDay());
    }, []);

    const [isTodayTasksOpen, setIsTodayTasksOpen] = useState(true);

    const handleTodayTasks = () => {
        setIsTodayTasksOpen(!isTodayTasksOpen);
    }

    const [isUpTasksOpen, setIsUpTasksOpen] = useState(true);

    const handleUpTasks = () => {
        setIsUpTasksOpen(!isUpTasksOpen);
    }

    return (
        <div className="flex flex-col px-14 py-5 w-full ml-52 min-h-screen  bg-[#1E1E1E]">
            <h1>Good {timeOfDay}!</h1>
            <div className="py-12 px-24">
                <span className="flex justify-between pb-3">
                    <h2 className="text-3xl font-normal self-start">Today</h2>
                    <div className="flex justify-center items-end"
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
                {
                    isTodayTasksOpen &&
                    (<>
                        <div className="flex flex-col pt-3">
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                        </div>
                    </>)
                }
            </div>
            <div className="py-12 px-24">
                <span className="flex justify-between pb-3">
                    <h2 className="text-3xl font-normal self-start">UpComing</h2>
                    <div className="flex justify-center items-end"
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
                {
                    isUpTasksOpen &&
                    (<>
                        <div className="flex flex-col pt-3">
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                            <TaskItem taskName="Learn React And Apply" taskDue="Today" taskDesc="Wassap" />
                        </div>
                    </>)
                }
            </div>


        </div>
    );
};

export default Tasks;
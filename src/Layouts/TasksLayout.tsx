import React, { useState } from "react";
import { TimeOfDay } from "../utilities/timeOfDay";
import TaskItem from "../components/TaskItem";
import { FaAngleLeft, FaAngleDown, FaPlus } from "react-icons/fa";
import FloatingButton from "../components/FloatingButton";
import Modal from "../components/Modal";

const TasksLayout = () => {

    const [isTodayTasksOpen, setIsTodayTasksOpen] = useState(true);

    const handleTodayTasks = () => {
        setIsTodayTasksOpen(!isTodayTasksOpen);
        const tasksSection = document.querySelector(".tasks.today");
        tasksSection?.classList.toggle("open");
    }

    const [isUpTasksOpen, setIsUpTasksOpen] = useState(false);

    const handleUpTasks = () => {
        setIsUpTasksOpen(!isUpTasksOpen);
        const tasksSection = document.querySelector(".tasks.upcoming");
        tasksSection?.classList.toggle("open");
    }

    const [showModal, setShowModal] = useState(false);

    const handleModal = () => {
        setShowModal(!showModal);
    }

    const taskListsStyle = 'flex flex-col pt-3 mt-3 tasks';

    const textFieldsStyle = 'text-white border-none px-2.5 py-5 rounded-lg text-lg cursor-pointer';

    return (
        <div className="flex flex-col">
            <div className='py-12 px-24'>
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
                <div className={`${taskListsStyle} today open`}>
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
            <FloatingButton Icon={FaPlus} onClick={handleModal}
                children=

                {
                    showModal && (
                        <Modal
                            onBackgroundClick={handleModal}
                            children={
                                <>
                                    <h4 className="text-2xl self-center">Add a Task</h4>
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
                                    <button
                                        className={`bg-green-800 text-white border-none px-2.5 py-3 text-lg cursor-pointer rounded-2xl `}
                                    >Submit</button>
                                    <span className='cursor-pointer self-center text-gray-400'
                                        onClick={handleModal}
                                    >Cancel</span>
                                </>
                            }
                        />)
                }
            />
        </div>
    );
};

export default TasksLayout;
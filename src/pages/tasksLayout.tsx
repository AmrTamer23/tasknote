import React, { useRef, useState } from "react";
import TaskItem from "../components/taskItem";
import { FaAngleLeft, FaAngleDown, FaPlus } from "react-icons/fa";
import FloatingButton from "../components/ui/floatingButton";
import Modal from "../components/ui/modal";
import { TaskValues } from "../utils/interfaces";
import { Formik } from "formik";
import TaskCreationForm from "../components/taskCreationForm";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { CountdownDays, TimeOfDay } from "../utils/helpers";
import doneSound from "../assets/sounds/done-sound.mp3";

const TasksLayout = () => {
  const [isTodayTasksOpen, setIsTodayTasksOpen] = useState(true);

  const handleTodayTasks = () => {
    setIsTodayTasksOpen(!isTodayTasksOpen);
    const tasksSection = document.querySelector(".tasks.today");
    tasksSection?.classList.toggle("open");
  };

  const [isUpTasksOpen, setIsUpTasksOpen] = useState(false);

  const handleUpTasks = () => {
    setIsUpTasksOpen(!isUpTasksOpen);
    const tasksSection = document.querySelector(".tasks.upcoming");
    tasksSection?.classList.toggle("open");
  };

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  const { tasks, addTask, lastTaskId, deleteTask } = useLocalStorageContext();

  const todayTasks = tasks.filter((task) => {
    if (CountdownDays(new Date(task.due)) === "Today") return task;
  });

  const upcomingTasks = tasks.filter((task) => {
    if (CountdownDays(new Date(task.due)) !== "Today") return task;
  });

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    audioRef.current!.volume = 0.2;
    audioRef.current?.play();
  };

  const taskListsStyle = "flex flex-col pt-3 mt-3 tasks";

  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-semibold text-4xl">Good {TimeOfDay()}!</h1>
        <div className="py-12 lg:px-24">
          <span
            className="flex justify-between pb-3"
            onClick={handleTodayTasks}
          >
            <h2 className="text-3xl font-normal self-start cursor-pointer">
              Today
            </h2>
            <div className="flex justify-center items-end cursor-pointer">
              {isTodayTasksOpen ? (
                <FaAngleDown size={"25"} className="text-white " />
              ) : (
                <FaAngleLeft size={"25"} className="text-white " />
              )}
            </div>
          </span>
          <hr />
          <div className={`${taskListsStyle} today open`}>
            {todayTasks.length === 0 ? (
              <p className="text-xl text-center italic text-gray-400">
                Looks like a task-free day today!
              </p>
            ) : (
              todayTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={
                    {
                      id: task.id,
                      name: task.name,
                      due: task.due,
                      desc: task.desc,
                      categoryId: task.categoryId,
                    } as TaskValues
                  }
                  onDel={() => {
                    deleteTask(task.id);
                    playSound();
                  }}
                />
              ))
            )}
          </div>
        </div>
        <div className="py-12 lg:px-24">
          <span className="flex justify-between pb-3" onClick={handleUpTasks}>
            <h2 className="text-3xl font-normal self-start cursor-pointer">
              Upcoming
            </h2>
            <div className="flex justify-center items-end cursor-pointer">
              {isUpTasksOpen ? (
                <FaAngleDown size={"25"} className="text-white " />
              ) : (
                <FaAngleLeft size={"25"} className="text-white " />
              )}
            </div>
          </span>
          <hr />

          <div className="flex flex-col pt-3 mt-3 tasks upcoming open">
            {upcomingTasks.length === 0 ? (
              <p className="text-xl text-center italic text-gray-400">
                Nothing on the horizon yet, stay prepared!
              </p>
            ) : (
              upcomingTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={
                    {
                      id: task.id,
                      name: task.name,
                      due: task.due,
                      desc: task.desc,
                      categoryId: task.categoryId,
                    } as TaskValues
                  }
                  onDel={() => {
                    deleteTask(task.id);
                    playSound();
                  }}
                />
              ))
            )}
          </div>
        </div>
        <FloatingButton Icon={FaPlus} onClick={handleModal} text="Add a Task" />
      </div>
      {showModal && (
        <Modal
          onBackgroundClick={handleModal}
          isFit={true}
          children={
            <>
              <h4 className="text-2xl self-center">Add a Task</h4>
              <Formik<TaskValues>
                initialValues={{
                  id: lastTaskId() + 1,
                  name: "",
                  due: new Date(),
                  desc: "",
                  categoryId: 0,
                }}
                onSubmit={(values) => {
                  addTask({
                    id: values.id,
                    name: values.name,
                    due: values.due,
                    desc: values.desc,
                    categoryId: values.categoryId,
                  });

                  if (values.name) handleModal();
                }}
                component={TaskCreationForm}
              />
            </>
          }
        />
      )}
      <audio ref={audioRef} src={doneSound}></audio>
    </>
  );
};

export default TasksLayout;

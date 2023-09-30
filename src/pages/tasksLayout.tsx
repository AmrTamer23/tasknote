import React, { useEffect, useState } from "react";
import TaskItem from "../components/taskItem";
import { FaAngleLeft, FaAngleDown, FaPlus } from "react-icons/fa";
import FloatingButton from "../components/ui/floatingButton";
import Modal from "../components/ui/modal";
import TaskValues from "../interfaces/task";
import { Formik } from "formik";
import taskCreationForm from "../components/taskCreationForm";
import useLocalStorage from "../hooks/useLocalStorage";
import { CountdownDays } from "../utils/helpers";

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

  const { tasks, addTask, lastTaskId, deleteTask } = useLocalStorage();

  const todayTasks = tasks.filter((task) => {
    if (CountdownDays(new Date(task.due)) === "Today") return task;
  });

  const upcomingTasks = tasks.filter((task) => {
    if (CountdownDays(new Date(task.due)) !== "Today") return task;
  });

  const taskListsStyle = "flex flex-col pt-3 mt-3 tasks";

  return (
    <div className="flex flex-col">
      <div className="py-12 px-24">
        <span className="flex justify-between pb-3" onClick={handleTodayTasks}>
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
          {todayTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={
                {
                  id: task.id,
                  name: task.name,
                  due: task.due,
                  desc: task.desc,
                  category: task.categoryId,
                } as TaskValues
              }
              onDel={deleteTask}
            />
          ))}
        </div>
      </div>
      <div className="py-12 px-24">
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

        <div className="flex flex-col pt-3 mt-3 tasks upcoming">
          {upcomingTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={
                {
                  id: task.id,
                  name: task.name,
                  due: task.due,
                  desc: task.desc,
                  category: task.categoryId,
                } as TaskValues
              }
              onDel={deleteTask}
            />
          ))}
        </div>
      </div>
      <FloatingButton
        Icon={FaPlus}
        onClick={handleModal}
        children={
          showModal && (
            <Modal
              onBackgroundClick={handleModal}
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
                    component={taskCreationForm}
                  />
                </>
              }
            />
          )
        }
      />
    </div>
  );
};

export default TasksLayout;

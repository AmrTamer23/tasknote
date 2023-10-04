import React, { useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import NoteItem from "../components/noteItem";
import TaskItem from "../components/taskItem";
import TabSwitcher from "../components/tabSwitcher";
import { RiDeleteBin6Line } from "react-icons/ri";
import FloatingButton from "../components/ui/floatingButton";
import removeSound from "../assets/sounds/remove-sound.mp3";
import doneSound from "../assets/sounds/done-sound.mp3";
import TaskAddModal from "../components/taskAddModal";
import NoteAddModal from "../components/noteAddModal";

const CategoryLayout = () => {
  let { categoryId } = useParams<{ categoryId: string }>();
  const {
    fetchCategoriesById,
    fetchTasksByCategoryId,
    fetchNotesByCategoryId,
    deleteTask,
    deleteNote,
    deleteCategory,
  } = useLocalStorageContext();

  const navigate = useNavigate();

  const category = fetchCategoriesById(parseInt(categoryId || ""));

  const handleDeleteCategory = () => {
    setTimeout(() => {
      deleteCategory(parseInt(categoryId || ""));
      navigate("/");
    }, 300);
  };

  const tasks = fetchTasksByCategoryId(parseInt(categoryId || ""));
  const notes = fetchNotesByCategoryId(parseInt(categoryId || ""));

  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  const [activeTab, setActiveTab] = useState<"tasks" | "notes">("tasks");

  const handleTabClick = (tab: "tasks" | "notes") => {
    setActiveTab(tab);
  };

  const doneAudioRef = useRef<HTMLAudioElement | null>(null);

  const playDoneSound = () => {
    doneAudioRef.current!.volume = 0.2;
    doneAudioRef.current?.play();
  };
  const delAudioRef = useRef<HTMLAudioElement | null>(null);

  const playDelSound = () => {
    delAudioRef.current!.volume = 0.2;
    delAudioRef.current?.play();
  };

  return (
    <>
      <div className="flex flex-col gap-5">
        <span className="flex justify-between items-end">
          <span className="flex items-end gap-2">
            <h1 className="mt-2 text-5xl">{category?.name}</h1>
            <RiDeleteBin6Line
              size={"19"}
              color="red"
              className="cursor-pointer"
              onClick={() => {
                playDelSound();
                handleDeleteCategory();
              }}
            />
          </span>
          <TabSwitcher
            activeTab={activeTab}
            handleTabClick={handleTabClick}
            activeColor={category?.color || "#FFFFF"}
          />
        </span>

        <div
          className="h-0.5 w-full"
          style={{
            backgroundColor: category?.color,
          }}
        ></div>
        {
          {
            tasks: (
              <div className="py-5 px-36 flex flex-col items-between justify-items-center align-items-center gap-2">
                {tasks?.map((task) => {
                  return (
                    <TaskItem
                      key={task.id}
                      task={task}
                      onDel={() => {
                        deleteTask(task.id);
                        playDoneSound();
                      }}
                    />
                  );
                })}
              </div>
            ),
            notes: (
              <div className="p-5 grid grid-cols-2 items-between justify-items-center align-items-center gap-5">
                {notes?.map((note) => {
                  return (
                    <NoteItem
                      key={note.id}
                      note={note}
                      onDel={() => {
                        deleteNote(note.id);
                        playDelSound();
                      }}
                    />
                  );
                })}
              </div>
            ),
          }[activeTab]
        }
        <FloatingButton
          onClick={handleModal}
          text={activeTab === "tasks" ? "Add a Task" : "Add a Note"}
        />
        {showModal && activeTab === "tasks" && (
          <TaskAddModal
            handleModal={handleModal}
            initCategoryId={parseInt(categoryId || "")}
          />
        )}
        {showModal && activeTab === "notes" && (
          <NoteAddModal
            handleModal={handleModal}
            initCategoryId={parseInt(categoryId || "")}
          />
        )}
      </div>
      <audio ref={doneAudioRef} src={doneSound}></audio>
      <audio ref={delAudioRef} src={removeSound}></audio>
    </>
  );
};
export default CategoryLayout;

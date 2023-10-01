import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";
import NoteItem from "../components/noteItem";
import TaskItem from "../components/taskItem";
import TabSwitcher from "../components/tabSwitcher";

const CategoryLayout = () => {
  let { categoryId } = useParams<{ categoryId: string }>();
  const {
    fetchCategoriesById,
    fetchTasksByCategoryId,
    fetchNotesByCategoryId,
    deleteTask,
    deleteNote,
  } = useLocalStorage();

  const category = fetchCategoriesById(parseInt(categoryId || ""));

  const [activeTab, setActiveTab] = useState<"tasks" | "notes">("tasks");

  const handleTabClick = (tab: "tasks" | "notes") => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-5">
      <span className="flex justify-between items-end">
        <h1 className="mt-8 text-5xl">{category?.name}</h1>
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
    </div>
  );
};
export default CategoryLayout;

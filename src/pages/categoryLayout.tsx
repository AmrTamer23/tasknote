import React, { useState } from "react";
import { NavLink, Navigate, useNavigate, useParams } from "react-router-dom";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import NoteItem from "../components/noteItem";
import TaskItem from "../components/taskItem";
import TabSwitcher from "../components/tabSwitcher";
import { RiDeleteBin6Line } from "react-icons/ri";

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

  const [activeTab, setActiveTab] = useState<"tasks" | "notes">("tasks");

  const handleTabClick = (tab: "tasks" | "notes") => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col gap-5">
      <span className="flex justify-between items-end">
        <span className="flex items-end gap-2">
          <h1 className="mt-8 text-5xl">{category?.name}</h1>
          <RiDeleteBin6Line
            size={"19"}
            color="red"
            className="cursor-pointer"
            onClick={() => {
              deleteCategory(parseInt(categoryId || ""));
              navigate("/");
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
    </div>
  );
};
export default CategoryLayout;

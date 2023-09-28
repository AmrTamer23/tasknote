import { useState } from "react";

import Category from "../interfaces/category";
import NoteValues from "../interfaces/note";
import TaskValues from "../interfaces/task";

function useLocalStorage() {
  const [notes, setNotes] = useState<NoteValues[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes")!)
      : []
  );

  const [categories, setCategories] = useState<Category[]>(
    localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories")!)
      : []
  );

  const [tasks, setTasks] = useState<TaskValues[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks")!)
      : []
  );

  const addNote = (note: NoteValues) => {
    if (!note.name || !note.desc) {
      alert("Note Name and Note Description are required!");
      return;
    }

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const addCategory = (category: Category) => {
    if (!category.name || !category.color) {
      alert("Category Name and Category Color are required!");
      return;
    }

    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const addTask = (task: TaskValues) => {
    if (!task.name) {
      alert("Task Name Is required!");
      return;
    }

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  return {
    notes,
    addNote,
    categories,
    addCategory,
    tasks,
    addTask,
  };
}

export default useLocalStorage;

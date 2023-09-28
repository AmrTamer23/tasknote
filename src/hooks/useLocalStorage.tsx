import { useState } from "react";
import Category from "../interfaces/category";
import NoteValues from "../interfaces/note";
import TaskValues from "../interfaces/task";

/*
This Custom hook is used to add, delete and get Tasks, Notes and Categories from the local storage.
*/
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

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const deleteCategory = (id: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const lastNoteId = () => {
    if (notes.length === 0) {
      return 0;
    }
    return notes[notes.length - 1].id;
  };

  const lastCategoryId = () => {
    if (categories.length === 0) {
      return 0;
    }
    return categories[categories.length - 1].id;
  };

  const lastTaskId = () => {
    if (tasks.length === 0) {
      return 0;
    }
    return tasks[tasks.length - 1].id;
  };

  return {
    notes,
    lastNoteId,
    addNote,
    deleteNote,
    categories,
    lastCategoryId,
    addCategory,
    deleteCategory,
    tasks,
    lastTaskId,
    addTask,
    deleteTask,
  };
}

export default useLocalStorage;

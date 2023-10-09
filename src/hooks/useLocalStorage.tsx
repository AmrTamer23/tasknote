import { useState } from "react";
import { NoteValues, CategoryValues, TaskValues } from "../utils/interfaces";

function useLocalStorage() {
  const [notes, setNotes] = useState<NoteValues[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes")!)
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

  const deleteNote = (id: number) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  const lastNoteId = () => {
    if (notes.length === 0) {
      return 0;
    }
    return notes[notes.length - 1].id;
  };

  const [tasks, setTasks] = useState<TaskValues[]>(
    localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks")!)
      : []
  );

  const addTask = (task: TaskValues) => {
    if (!task.name) {
      alert("Task Name Is required!");
      return;
    }

    const updatedTasks = [...tasks, task];
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const deleteTask = (id: number) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const lastTaskId = () => {
    if (tasks.length === 0) {
      return 0;
    }
    return tasks[tasks.length - 1].id;
  };

  const [categories, setCategories] = useState<CategoryValues[]>(
    localStorage.getItem("categories")
      ? JSON.parse(localStorage.getItem("categories")!)
      : []
  );

  const addCategory = (category: CategoryValues) => {
    if (!category.name || !category.color) {
      alert("Category Name and Category Color are required!");
      return;
    }

    const updatedCategories = [...categories, category];
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const deleteCategory = (id: number) => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
    localStorage.setItem("categories", JSON.stringify(updatedCategories));
  };

  const lastCategoryId = () => {
    if (categories.length === 0) {
      return 0;
    }
    return categories[categories.length - 1].id;
  };

  const fetchCategoriesById = (id: number) => {
    const category = categories.find((category) => category.id == id);

    return category ? category : undefined;
  };

  const fetchTasksByCategoryId = (id: number) => {
    const cateTasks: TaskValues[] = tasks.filter(
      (task) => task.categoryId == id
    );
    cateTasks.forEach((task) => {
      task.due = new Date(task.due);
    });
    cateTasks.sort((a, b) => {
      return a.due.getTime() - b.due.getTime();
    });
    return cateTasks ? cateTasks : undefined;
  };

  const fetchNotesByCategoryId = (id: number) => {
    const cateNotes: NoteValues[] = notes.filter(
      (note) => note.categoryId == id
    );
    return cateNotes ? cateNotes : undefined;
  };

  return {
    notes,
    lastNoteId,
    addNote,
    deleteNote,
    tasks,
    lastTaskId,
    addTask,
    deleteTask,
    categories,
    lastCategoryId,
    addCategory,
    fetchCategoriesById,
    deleteCategory,
    fetchTasksByCategoryId,
    fetchNotesByCategoryId,
  };
}

export default useLocalStorage;

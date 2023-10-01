// context/LocalStorageContext.tsx
import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { CategoryValues, NoteValues, TaskValues } from "../utils/interfaces";

// Define your context type
interface LocalStorageContextType {
  notes: NoteValues[];
  lastNoteId: () => number;
  addNote: (note: NoteValues) => void;
  deleteNote: (id: number) => void;
  tasks: TaskValues[];
  lastTaskId: () => number;
  addTask: (task: TaskValues) => void;
  deleteTask: (id: number) => void;
  categories: CategoryValues[];
  lastCategoryId: () => number;
  addCategory: (category: CategoryValues) => void;
  fetchCategoriesById: (id: number) => CategoryValues | undefined;
  deleteCategory: (id: number) => void;
  fetchTasksByCategoryId: (id: number) => TaskValues[] | undefined;
  fetchNotesByCategoryId: (id: number) => NoteValues[] | undefined;
}

// Create the context
const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined
);

// Create a custom hook to access the context
export function useLocalStorageContext(): LocalStorageContextType {
  const context = useContext(LocalStorageContext);
  if (context === undefined) {
    throw new Error(
      "useLocalStorageContext must be used within a LocalStorageProvider"
    );
  }
  return context;
}

// Export the context itself
export const LocalStorageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  // Use your custom hook to get the data and functions
  const {
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
  } = useLocalStorage();

  // Provide the data and functions through the context
  return (
    <LocalStorageContext.Provider
      value={{
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
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  );
};

import React, { createContext, useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { LocalStorageContextType } from "../utils/interfaces";

const LocalStorageContext = createContext<LocalStorageContextType | undefined>(
  undefined
);

export function useLocalStorageContext(): LocalStorageContextType {
  const context = useContext(LocalStorageContext);
  if (context === undefined) {
    throw new Error(
      "useLocalStorageContext must be used within a LocalStorageProvider"
    );
  }
  return context;
}

export const LocalStorageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
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

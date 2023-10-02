import { createContext } from "react";

export interface CategoryValues {
  id: number;
  name: string;
  color: string;
}

export interface NoteValues {
  id: number;
  createdAt: Date;
  name: string;
  desc: string;
  categoryId: number;
  color: string;
}

export interface TaskValues {
  id: number;
  name: string;
  due: Date;
  desc: string;
  categoryId: number;
}

export interface LocalStorageContextType {
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

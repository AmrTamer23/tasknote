import Category from "./category";

export default interface NoteValues {
    id: number;
    name: string;
    desc: string;
    categoryId?: number;
    color: string;
  }
  
import Category from "./category";

export default interface NoteValues {
    id: number;
    name: string;
    desc: string;
    category?: Category;
    color: string;
  }
  
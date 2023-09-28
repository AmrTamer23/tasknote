import Category from "./category";

export default interface TaskValues {
    id: number;  
    name: string;
    due: Date;
    desc: string;
    category?: Category;
  }
  
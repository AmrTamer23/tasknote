export interface CategoryValues {
  id: number;
  name: string;
  color: string;
}

export interface NoteValues {
  id: number;
  name: string;
  desc: string;
  categoryId?: number;
  color: string;
}

export interface TaskValues {
  id: number;
  name: string;
  due: Date;
  desc: string;
  categoryId: number;
}

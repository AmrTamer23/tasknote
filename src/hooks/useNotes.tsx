import { useState } from "react";

import noteValues from "../interfaces/note";

function useNotes() {
  const [notes, setNotes] = useState<noteValues[]>(
    localStorage.getItem("notes")
      ? JSON.parse(localStorage.getItem("notes")!)
      : []
  );

  const addNote = (note: noteValues) => {
    if (!note.noteName || !note.noteDesc) {
      alert("Note Name and Note Description are required!");
      return;
    }

    const updatedNotes = [...notes, note];
    setNotes(updatedNotes);
    localStorage.setItem("notes", JSON.stringify(updatedNotes));
  };

  console.log(notes);
  return {
    notes,
    addNote,
  };
}

export default useNotes;

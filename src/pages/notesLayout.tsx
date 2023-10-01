import { useState } from "react";
import { Formik } from "formik";
import FloatingButton from "../components/ui/floatingButton";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/noteItem";
import Modal from "../components/ui/modal";
import useLocalStorage from "../hooks/useLocalStorage";
import { NoteValues } from "../utils/interfaces";
import noteCreationForm from "../components/noteCreationForm";
import { on } from "events";

function NotesLayout() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  let { notes, addNote, lastNoteId, deleteNote } = useLocalStorage();

  return (
    <div className="py-12 px-24 grid grid-cols-2 items-between justify-items-center align-items-center gap-5">
      {notes &&
        notes.map((note) => {
          return (
            <NoteItem
              key={note.id}
              note={
                {
                  id: note.id,
                  name: note.name,
                  desc: note.desc,
                  category: note.categoryId,
                  color: note.color,
                } as NoteValues
              }
              onDel={deleteNote}
            />
          );
        })}

      <FloatingButton
        Icon={FaPlus}
        onClick={handleModal}
        children={
          showModal && (
            <Modal
              onBackgroundClick={handleModal}
              children={
                <>
                  <h4 className="text-2xl self-center">Add a Note</h4>
                  <Formik<NoteValues>
                    initialValues={{
                      id: lastNoteId() + 1,
                      name: "",
                      desc: "",
                      categoryId: 0,
                      color: "#333333",
                    }}
                    onSubmit={(values) => {
                      addNote({
                        id: values.id,
                        name: values.name,
                        desc: values.desc,
                        categoryId: values.categoryId,
                        color: values.color,
                      });

                      if (values.name && values.desc) handleModal();
                    }}
                    component={noteCreationForm}
                  />
                </>
              }
            />
          )
        }
      />
    </div>
  );
}

export default NotesLayout;

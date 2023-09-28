import { useState } from "react";
import { Formik } from "formik";
import FloatingButton from "../components/ui/floatingButton";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/noteItem";
import Modal from "../components/ui/modal";
import useLocalStorage from "../hooks/useLocalStorage";
import NoteValues from "../interfaces/note";
import noteCreationForm from "../components/noteCreationForm";

function NotesLayout() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  let { notes, addNote } = useLocalStorage();

  return (
    <div className="py-12 px-24 grid grid-cols-2 items-between justify-items-center align-items-center gap-5">
      {notes &&
        notes.map((note, i) => {
          return (
            <NoteItem
              key={note.id}
              name={note.name}
              desc={note.desc}
              color={note.color}
              category={note.category}
              id={note.id}
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
                      id: 0,
                      name: "",
                      desc: "",
                      category: {
                        id: 0,
                        name: "",
                        color: "",
                      },
                      color: "#333333",
                    }}
                    onSubmit={(values) => {
                      addNote({
                        id: values.id,
                        name: values.name,
                        desc: values.desc,
                        category: values.category,
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

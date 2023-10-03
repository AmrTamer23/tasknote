import { useRef, useState } from "react";
import { Formik } from "formik";
import FloatingButton from "../components/ui/floatingButton";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/noteItem";
import Modal from "../components/ui/modal";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { NoteValues } from "../utils/interfaces";
import NoteCreationForm from "../components/noteCreationForm";
import removeSound from "../assets/sounds/remove-sound.mp3";
import { TimeOfDay } from "../utils/helpers";

function NotesLayout() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  let { notes, addNote, lastNoteId, deleteNote } = useLocalStorageContext();

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = () => {
    audioRef.current!.volume = 0.2;
    audioRef.current?.play();
  };

  return (
    <>
      <div className="flex flex-col">
        <h1 className="font-semibold text-4xl">Good {TimeOfDay()}!</h1>
        <div className="py-12 lg:px-24 grid lg:grid-cols-2 items-between justify-items-center align-items-center gap-5">
          {notes &&
            notes.map((note) => {
              return (
                <NoteItem
                  key={note.id}
                  note={
                    {
                      id: note.id,
                      createdAt: note.createdAt,
                      name: note.name,
                      desc: note.desc,
                      categoryId: note.categoryId,
                      color: note.color,
                    } as NoteValues
                  }
                  onDel={() => {
                    deleteNote(note.id);
                    playSound();
                  }}
                />
              );
            })}

          <FloatingButton
            Icon={FaPlus}
            onClick={handleModal}
            text="Add a Note"
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
                          createdAt: new Date(),
                          name: "",
                          desc: "",
                          categoryId: 0,
                          color: "#333333",
                        }}
                        onSubmit={(values) => {
                          addNote({
                            id: values.id,
                            createdAt: new Date(),
                            name: values.name,
                            desc: values.desc,
                            categoryId: values.categoryId,
                            color: values.color,
                          });

                          if (values.name && values.desc) handleModal();
                        }}
                        component={NoteCreationForm}
                      />
                    </>
                  }
                />
              )
            }
          />
        </div>
      </div>
      <audio src={removeSound} ref={audioRef}></audio>
    </>
  );
}

export default NotesLayout;

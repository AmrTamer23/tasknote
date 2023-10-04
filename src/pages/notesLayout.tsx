import { useRef, useState } from "react";
import FloatingButton from "../components/ui/floatingButton";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/noteItem";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { NoteValues } from "../utils/interfaces";
import removeSound from "../assets/sounds/remove-sound.mp3";
import { TimeOfDay } from "../utils/helpers";
import NoteAddModal from "../components/noteAddModal";

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
      <div className="flex flex-col h-full">
        <h1 className="font-semibold text-4xl">Good {TimeOfDay()}!</h1>
        {notes.length === 0 ? (
          <div className="flex flex-col justify-center items-center gap-4  h-full">
            <p className="text-xl text-center italic">
              Your notes are as empty as a blank canvas.
            </p>
            <button
              className="bg-[#28822C] hover:bg-[#299c2f] transition-all duration-200 rounded-lg text-black px-2 py-4 cursor-pointer flex gap-3 sliderBtn"
              onClick={handleModal}
            >
              <FaPlus size={30} color="white" />
              <p className="text-lg">Add Your First Note</p>
            </button>
          </div>
        ) : (
          <div className="py-12 lg:px-24 grid lg:grid-cols-2 items-between justify-items-center align-items-center gap-5">
            {notes.map((note) => {
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

            <FloatingButton onClick={handleModal} text="Add a Note" />
          </div>
        )}
        {showModal && <NoteAddModal handleModal={handleModal} />}
      </div>
      <audio src={removeSound} ref={audioRef}></audio>
    </>
  );
}

export default NotesLayout;

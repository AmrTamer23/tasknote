import { useEffect, useState } from "react";
import { Formik, FormikProps } from "formik";
import FloatingButton from "../components/ui/FloatingButton";
import { FaPlus } from "react-icons/fa";
import NoteItem from "../components/NoteItem";
import Modal from "../components/ui/Modal";
import { NoteCategory } from "../components/NoteItem";
import useNotes from "../hooks/useNotes";
import noteValues from "../interfaces/note";

function NotesLayout() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => {
    setShowModal(!showModal);
  };

  let { notes, addNote } = useNotes();

  return (
    <div className="py-12 px-24 grid grid-cols-2 items-between justify-items-center align-items-center gap-5">
      {notes &&
        notes.map((note, i) => {
          return (
            <NoteItem
              key={i}
              noteName={note.noteName}
              noteDesc={note.noteDesc}
              color={note.noteColor}
              noteCategory={
                {
                  Category: note.noteCategory,
                  color: "red",
                } as NoteCategory
              }
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
                  <Formik<noteValues>
                    initialValues={{
                      noteName: "",
                      noteDesc: "",
                      noteCategory: "",
                      noteColor: "#333333",
                    }}
                    onSubmit={(values) => {
                      addNote({
                        noteName: values.noteName,
                        noteDesc: values.noteDesc,
                        noteCategory: values.noteCategory,
                        noteColor: values.noteColor,
                      });

                      if (values.noteName && values.noteDesc) handleModal();
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

let noteCreationForm: (props: FormikProps<noteValues>) => JSX.Element = ({
  values,
  handleChange,
  handleBlur,
  errors,
  handleSubmit,
}) => {
  const textFieldsStyle =
    " border-none p-4 rounded-lg text-lg  w-full p-2 rounded-md placeholder-gray-500 my-2";

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        name="noteName"
        placeholder="Note Name"
        value={values.noteName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={textFieldsStyle}
      />
      {errors.noteName && <div className="text-red-500">{errors.noteName}</div>}
      <span className="flex justify-between gap-3 items-center">
        <select
          name="noteCategory"
          value={values.noteCategory}
          onChange={handleChange}
          onBlur={handleBlur}
          className={textFieldsStyle}
        >
          <option value="">Select a Category</option>
          <option value="Design">Design</option>
          <option value="Marketing">Marketing</option>
        </select>

        <div className="relative">
          <select
            name="noteColor"
            onChange={handleChange}
            value={values.noteColor}
            className="opacity-0 absolute inset-0 w-full h-full"
          >
            <option value="#333333">Default</option>
            <option value="#008080">Teal</option>
            <option value="#800020">Red</option>
            <option value="#000080">Blue</option>
            <option value="#556B2F">Green</option>
          </select>
          <div
            className="w-6 h-6 rounded-full border border-gray-300 shadow-md cursor-pointer"
            style={{ backgroundColor: values.noteColor }}
          ></div>
        </div>
      </span>
      <textarea
        name="noteDesc"
        placeholder="Note Description"
        value={values.noteDesc}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${textFieldsStyle} h-40`}
      />
      {errors.noteDesc && <div className="text-red-500">{errors.noteDesc}</div>}

      <button
        type="submit"
        className="bg-green-800 text-white border-none px-2.5 py-3 text-lg cursor-pointer rounded-2xl "
      >
        Submit
      </button>
    </form>
  );
};

export default NotesLayout;

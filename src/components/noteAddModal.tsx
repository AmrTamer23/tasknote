import { Formik } from "formik";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { NoteValues, TaskValues } from "../utils/interfaces";
import TaskCreationForm from "./taskCreationForm";
import Modal from "./ui/modal";
import NoteCreationForm from "./noteCreationForm";

const NoteAddModal = ({
  handleModal,
  initCategoryId,
}: {
  handleModal: () => void;
  initCategoryId?: number;
}): JSX.Element => {
  const { addNote, lastNoteId } = useLocalStorageContext();
  return (
    <Modal
      onBackgroundClick={handleModal}
      isFit={true}
      children={
        <>
          <h4 className="text-2xl self-center">Add a Note</h4>
          <Formik<NoteValues>
            initialValues={{
              id: lastNoteId() + 1,
              createdAt: new Date(),
              name: "",
              desc: "",
              categoryId: initCategoryId ? initCategoryId : 0,
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
  );
};

export default NoteAddModal;

import { Formik } from "formik";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import { TaskValues } from "../utils/interfaces";
import TaskCreationForm from "./taskCreationForm";
import Modal from "./ui/modal";

const TaskAddModal = ({
  handleModal,
  initCategoryId,
}: {
  handleModal: () => void;
  initCategoryId?: number;
}): JSX.Element => {
  const { addTask, lastTaskId } = useLocalStorageContext();
  return (
    <Modal
      onBackgroundClick={handleModal}
      isFit={true}
      children={
        <>
          <h4 className="text-2xl self-center">Add a Task</h4>
          <Formik<TaskValues>
            initialValues={{
              id: lastTaskId() + 1,
              name: "",
              due: new Date(),
              desc: "",
              categoryId: initCategoryId ? initCategoryId : 0,
            }}
            onSubmit={(values) => {
              addTask({
                id: values.id,
                name: values.name,
                due: values.due,
                desc: values.desc,
                categoryId: values.categoryId,
              });

              if (values.name) handleModal();
            }}
            component={TaskCreationForm}
          />
        </>
      }
    />
  );
};

export default TaskAddModal;

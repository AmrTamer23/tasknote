import { FormikProps } from "formik";
import { TaskValues } from "../utils/interfaces";
import { useLocalStorageContext } from "../context/LocalStorageContext";

const TaskCreationForm: (props: FormikProps<TaskValues>) => JSX.Element = ({
  values,
  handleChange,
  handleBlur,
  errors,
  handleSubmit,
}) => {
  const textFieldsStyle =
    " border-none p-4 rounded-lg text-lg  w-full p-2 rounded-md placeholder-gray-500 my-2";

  const { categories } = useLocalStorageContext();

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex gap-5">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Task Name"
          className={`${textFieldsStyle} grow`}
        />
        <input
          type="date"
          name="due"
          value={values.due.toString()}
          min={new Date().toISOString().split("T")[0]}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`${textFieldsStyle} w-40`}
        />
      </div>
      <select
        name="categoryId"
        value={values.categoryId}
        onChange={handleChange}
        onBlur={handleBlur}
        className={textFieldsStyle}
      >
        <option value={undefined}>Select a Category</option>
        {categories.map((category) => (
          <option key={category.id} value={category.id}>
            {category.name}
          </option>
        ))}
      </select>

      <textarea
        placeholder="Task Description"
        name="desc"
        value={values.desc}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${textFieldsStyle} h-52`}
      />
      <button
        className={`bg-green-800 text-white border-none px-2.5 py-3 text-lg cursor-pointer rounded-2xl `}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default TaskCreationForm;

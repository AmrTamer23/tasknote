import { FormikProps } from "formik";
import { CategoryValues } from "../utils/interfaces";

const categoryAddForm: (props: FormikProps<CategoryValues>) => JSX.Element = ({
  values,
  handleChange,
  handleBlur,
  errors,
  handleSubmit,
}) => {
  const textFieldsStyle =
    " border-none p-4 rounded-lg text-lg  w-full p-2 rounded-md placeholder-gray-500 my-2";

  return (
    <form
      className="flex flex-col justify-center gap-4"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-5">
        <input
          type="text"
          name="name"
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Category Name"
          className={`${textFieldsStyle} grow`}
        />
        <div className="relative">
          <select
            name="color"
            onChange={handleChange}
            value={values.color}
            className="opacity-0 absolute inset-0 w-full h-full"
          >
            <option value="#FF5733">Red</option>
            <option value="#3366FF">Blue</option>
            <option value="#076718">Green</option>
            <option value="#9933FF">Purple</option>
            <option value="#FFA533">Orange</option>
            <option value="#FFFF33">Yellow</option>
          </select>
          <div
            className="w-6 h-6 rounded-full border border-gray-300 shadow-md cursor-pointer"
            style={{ backgroundColor: values.color ? values.color : "#FF5733" }}
          ></div>
        </div>
      </div>

      <button
        className={`bg-green-800 text-white border-none px-2.5 py-3 text-lg cursor-pointer rounded-2xl `}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default categoryAddForm;

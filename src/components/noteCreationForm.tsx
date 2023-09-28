import { FormikProps } from "formik";
import noteValues from "../interfaces/note";

const noteCreationForm: (props: FormikProps<noteValues>) => JSX.Element = ({
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
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        className={textFieldsStyle}
      />
      {errors.name && <div className="text-red-500">{errors.name}</div>}
      <span className="flex justify-between gap-3 items-center">
        <select
          name="noteCategory"
          value={values.category?.name}
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
            value={values.color}
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
            style={{ backgroundColor: values.color }}
          ></div>
        </div>
      </span>
      <textarea
        name="noteDesc"
        placeholder="Note Description"
        value={values.desc}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`${textFieldsStyle} h-40`}
      />
      {errors.desc && <div className="text-red-500">{errors.desc}</div>}

      <button
        type="submit"
        className="bg-green-800 text-white border-none px-2.5 py-3 text-lg cursor-pointer rounded-2xl "
      >
        Submit
      </button>
    </form>
  );
};

export default noteCreationForm;

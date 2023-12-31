import { Dispatch, SetStateAction, useState } from "react";
import logoW from "../assets/imgs/logoW.png";
import { BsAsterisk } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import "../App.css";
import { NavLink } from "react-router-dom";
import Modal from "./ui/modal";
import { Formik } from "formik";
import { CategoryValues } from "../utils/interfaces";
import categoryAddForm from "./categoryAddForm";
import { useLocalStorageContext } from "../context/LocalStorageContext";

const Sidebar = ({
  setIsSidebarOpen,
}: {
  setIsSidebarOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const menuItemStyle =
    "flex items-center h-16 w-full pr-2 py-2 gap-1.5 hover:bg-gray-700 hover:cursor-pointer select-none";

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
    const categories = document.querySelector(".categories");
    categories?.classList.toggle("open");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { categories, addCategory, lastCategoryId } = useLocalStorageContext();

  return (
    <aside
      className={`h-screen mt-14 md:mt-0 fixed md:flex shadow-black shadow-2xl `}
    >
      <nav className="bg-[#151617] w-52 flex flex-col">
        <div className="p-5 w-52 self-center">
          {" "}
          <img src={logoW} alt=" logo" />
        </div>
        <div className="flex flex-col items-start text-white">
          <NavLink
            to="/"
            className={`${menuItemStyle} pl-5`}
            onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
          >
            <MdTaskAlt size={"25"} />
            <p className="menuLabel">Tasks</p>
          </NavLink>

          <NavLink
            to="notes"
            className={`${menuItemStyle} pl-5`}
            onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
          >
            <BsAsterisk size={"25"} />
            <p className="menuLabel">Notes</p>
          </NavLink>

          <li
            className={`${menuItemStyle} pl-5 flex justify-between items-center `}
            onClick={handleCategoryMenu}
          >
            <h2 className="text-xl">Categories</h2>
            {isCategoryMenuOpen ? (
              <FaAngleDown className="text-white text-lg self-center" />
            ) : (
              <FaAngleLeft className="text-white text-lg self-center" />
            )}
          </li>

          <div className="flex flex-col w-full categories">
            {categories.map((category) => (
              <NavLink
                to={`/categories/${category.id}`}
                className={`${menuItemStyle} h-12 pl-10`}
                onClick={() => setIsSidebarOpen && setIsSidebarOpen(false)}
                key={category.id}
              >
                <div
                  className="w-5 h-5 rounded-full"
                  style={{ backgroundColor: category.color }}
                ></div>
                <p className="subMenuLabel select-none">{category.name}</p>
              </NavLink>
            ))}
            <li className={`${menuItemStyle} h-12 pl-10`} onClick={handleModal}>
              <IoMdAdd size={"20"} />
              <p className="subMenuLabel select-none">Add Category</p>
            </li>
          </div>
        </div>
      </nav>
      <div className="h-full w-0.5 bg-[#ffffff1b] invisible md:visible"></div>
      {isModalOpen && (
        <Modal
          onBackgroundClick={handleModal}
          isFit={true}
          children={
            <>
              <h4 className="text-2xl self-center">Add a Category</h4>
              <Formik<CategoryValues>
                initialValues={
                  {
                    id: lastCategoryId() + 1,
                    name: "",
                    color: "#FF5733",
                  } as CategoryValues
                }
                onSubmit={(values) => {
                  addCategory({
                    id: lastCategoryId() + 1,
                    name: values.name,
                    color: values.color,
                  });
                  if (values.name) handleModal();
                }}
                component={categoryAddForm}
              />
            </>
          }
        />
      )}
    </aside>
  );
};

export default Sidebar;

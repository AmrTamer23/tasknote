import { useEffect, useState } from "react";
import logoW from "../assets/logoW.png";
import { BsAsterisk } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { FaAngleDown, FaAngleLeft } from "react-icons/fa";
import { MdTaskAlt } from "react-icons/md";
import "../App.css";
import { NavLink } from "react-router-dom";
import Modal from "./ui/modal";
import { Formik } from "formik";
import { CategoryValues } from "../utils/interfaces";
import categoryCreationForm from "./categoryCreationForm";
import { useLocalStorageContext } from "../context/LocalStorageContext";

const Sidebar = () => {
  const menuItemStyle =
    "flex items-center h-16 w-full  px-5 py-2 gap-1.5 hover:bg-gray-700 hover:cursor-pointer disable-text-selection";
  const categoryItemStyle = `${menuItemStyle} h-12 pl-10`;

  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);

  const handleCategoryMenu = () => {
    setIsCategoryMenuOpen(!isCategoryMenuOpen);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { categories, addCategory, lastCategoryId } = useLocalStorageContext();

  return (
    <aside className="h-screen fixed hidden md:flex">
      <nav className="bg-[#222222] w-52 flex flex-col">
        <div className="p-5 w-52 self-center">
          {" "}
          <img src={logoW} alt=" logo" />
        </div>
        <div className="flex flex-col items-start text-white">
          <NavLink to="/" className={menuItemStyle}>
            <MdTaskAlt size={"25"} />
            <p className="menuLabel">Tasks</p>
          </NavLink>

          <NavLink to="notes" className={menuItemStyle}>
            <BsAsterisk size={"25"} />
            <p className="menuLabel">Notes</p>
          </NavLink>

          <li
            className={`${menuItemStyle} flex justify-between items-center `}
            onClick={handleCategoryMenu}
          >
            <h2 className="text-xl">Categories</h2>
            {isCategoryMenuOpen ? (
              <FaAngleLeft className="text-white text-lg self-center" />
            ) : (
              <FaAngleDown className="text-white text-lg self-center" />
            )}
          </li>
          {isCategoryMenuOpen && (
            <div className="flex flex-col w-full">
              {categories.map((category) => (
                <NavLink
                  to={`/categories/${category.id}`}
                  className={categoryItemStyle}
                  key={category.id}
                >
                  <div
                    className="w-5 h-5 rounded-full"
                    style={{ backgroundColor: category.color }}
                  ></div>
                  <p className="subMenuLabel disable-text-selection">
                    {category.name}
                  </p>
                </NavLink>
              ))}
              <li className={categoryItemStyle} onClick={handleModal}>
                <IoMdAdd size={"20"} />
                <p className="subMenuLabel disable-text-selection">
                  Add Category
                </p>
              </li>
            </div>
          )}
        </div>
      </nav>
      <div className="h-full w-0.5 bg-white"></div>
      {isModalOpen && (
        <Modal
          onBackgroundClick={handleModal}
          children={
            <>
              <h4 className="text-2xl self-center">Add a Category</h4>
              <Formik<CategoryValues>
                initialValues={
                  {
                    id: lastCategoryId() + 1,
                    name: "",
                    color: "",
                  } as CategoryValues
                }
                onSubmit={(values) => {
                  addCategory({
                    id: lastCategoryId() + 1,
                    name: values.name,
                    color: values.color,
                  });
                  handleModal();
                }}
                component={categoryCreationForm}
              />
            </>
          }
        />
      )}
    </aside>
  );
};

export default Sidebar;

import React, { useState } from "react";
import Modal from "./ui/modal";
import { NoteValues } from "../utils/interfaces";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocalStorageContext } from "../context/LocalStorageContext";

interface NoteItemProps {
  note: NoteValues;
  onDel: (id: number) => void;
}

function NoteItem(props: NoteItemProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const { fetchCategoriesById } = useLocalStorageContext();

  const category = fetchCategoriesById(props.note.categoryId);

  const noteHeading =
    "text-3xl font-normal self-start py-1 text-[#E0E0E0] mt-2";

  return (
    <>
      <div
        className="shadow-md p-8 rounded-lg mb-6 w-full md:w-2/3 lg:w-full xl:w-full flex flex-col justify-between select-none"
        style={{ backgroundColor: props.note.color }}
        onClick={handleModal}
      >
        <h2 className="text-3xl font-semibold mb-6">{props.note.name}</h2>
        <p className="text-xl text-gray-300 mb-6 overflow-hidden max-h-28 max-w-fit whitespace-pre-wrap">
          {props.note.desc}
        </p>
        <div
          className="text-lg overflow-hidden text-ellipsis max-h-12"
          style={{ color: category?.color, opacity: 0.8 }}
        >
          {category?.name}
        </div>
      </div>

      {isModalOpen && (
        <Modal
          onBackgroundClick={handleModal}
          children={
            <div className="bg-[#444444] w-full h-full overflow-y-scroll rounded-lg overflow-hidden p-5">
              <span className="flex justify-between items-center mb-5">
                <div>
                  <h2 className={`${noteHeading}`}>{props.note.name}</h2>

                  <span className="flex items-center py-1 gap-1 hover:opacity-80 hover:cursor-pointer select-none">
                    <span
                      className={`h-3 w-3 rounded-xl`}
                      style={{ backgroundColor: category?.color }}
                    ></span>
                    <p className="subMenuLabel select-none text-xs">
                      {category?.name}
                    </p>
                  </span>
                </div>
                <span className="flex flex-col items-end gap-3">
                  <RiDeleteBin6Line
                    size={"25"}
                    color="red"
                    onClick={() => {
                      props.onDel(props.note.id);
                      handleModal();
                    }}
                    className="cursor-pointer"
                  />
                  <p className="text-gray-200">
                    Created on <span className="text-gray-300">12/12/2021</span>
                  </p>
                </span>
              </span>
              <p className="text-base text-gray-300 pb-5 overflow-ellipsis whitespace-pre-wrap">
                {props.note.desc}
              </p>
            </div>
          }
        />
      )}
    </>
  );
}

export default NoteItem;

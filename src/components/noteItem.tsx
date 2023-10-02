import React, { useState } from "react";
import Modal from "./ui/modal";
import { NoteValues } from "../utils/interfaces";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useLocalStorageContext } from "../context/LocalStorageContext";
import ModalBody from "./modalBody";

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
            <ModalBody
              item={props.note}
              category={category}
              onDel={props.onDel}
              icon={RiDeleteBin6Line}
              handleModal={handleModal}
            />
          }
        />
      )}
    </>
  );
}

export default NoteItem;

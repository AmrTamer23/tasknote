import { IconType } from "react-icons";
import { CategoryValues, NoteValues, TaskValues } from "../utils/interfaces";
import { useNavigate } from "react-router";
import { isTask } from "../utils/helpers";

interface ModalBodyProps {
  item: TaskValues | NoteValues;
  category: CategoryValues | undefined;
  onDel: (id: number) => void;
  icon: IconType;
  iconColor: string;
  handleModal: () => void;
}

const ModalBody = (props: ModalBodyProps) => {
  const navigate = useNavigate();

  const headingStyle =
    "text-3xl font-normal self-start py-1 text-[#E0E0E0] mt-2";

  return (
    <div className="bg-[#444444] w-full h-full overflow-y-scroll rounded-lg overflow-hidden p-5">
      <span className="flex justify-between items-center mb-5">
        <div>
          <h2 className={`${headingStyle}`}>{props.item.name}</h2>

          <span
            className="flex items-center py-1 gap-1 hover:opacity-80 hover:cursor-pointer select-none"
            onClick={() => navigate(`/categories/${props.category?.id}`)}
          >
            <span
              className={`h-3 w-3 rounded-xl`}
              style={{ backgroundColor: props.category?.color }}
            ></span>
            <p className=" select-none text-xs">{props.category?.name}</p>
          </span>
        </div>
        <span className="flex flex-col items-end gap-3">
          <props.icon
            size={"25"}
            color={props.iconColor}
            onClick={() => {
              props.onDel(props.item.id);
              props.handleModal();
            }}
            className="cursor-pointer"
          />

          {isTask(props.item) ? (
            <p className="text-gray-200">
              Due on{" "}
              <span className="text-gray-300">
                {new Date(props.item.due).toLocaleDateString()}
              </span>
            </p>
          ) : (
            <p className="text-gray-200">
              Created on{" "}
              <span className="text-gray-300">
                {new Date(props.item.createdAt).toLocaleDateString()}
              </span>
            </p>
          )}
        </span>
      </span>
      <p className="text-base text-gray-300 pb-5 overflow-ellipsis whitespace-pre-wrap">
        {props.item.desc}
      </p>
    </div>
  );
};

export default ModalBody;

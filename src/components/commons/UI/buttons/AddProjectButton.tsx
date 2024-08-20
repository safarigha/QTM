import { IaddProjectButton } from "../../../../configs/interfaces";
import { getTailwindColor } from "../../../../helpers/getHexColor";

const addProjectButton: React.FC<IaddProjectButton> = ({ color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center cursor-pointer border-4 rounded-2xl border-${
        getTailwindColor(color).split("-")[1]
      }-${getTailwindColor(color).split("-")[2]}`}
    >
      <div
        className={`w-full bg-gradient-to-bl from-${color}-primary to-${color}-primary/50 `}
      >
        <div className="flex items-center justify-center py-4 px-2 rounded-2xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 20H6C4.895 20 4 19.105 4 18V6C4 4.895 4.895 4 6 4H18C19.105 4 20 4.895 20 6V18C20 19.105 19.105 20 18 20Z"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 8V16"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16 12H8"
              stroke={color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span
            className={`text-md font-black text-${
              getTailwindColor(color).split("-")[1]
            }-${getTailwindColor(color).split("-")[2]}`}
          >
            ساختن پروژه جدید
          </span>
        </div>
      </div>
    </button>
  );
};

export default addProjectButton;

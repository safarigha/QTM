///استفاده نشده

import { IaddProjectButton } from "../../../../configs/interfaces";

const addProjectButton: React.FC<IaddProjectButton> = ({ color }) => {
  return (
    <button className="flex items-center justify-center cursor-pointer">
      <div
        className={`w-full bg-gradient-to-bl from-${color}-primary to-${color}-primary/50 p-1 rounded-2xl`}
      >
        <div className="flex items-center justify-center gap-x-2 py-6 px-5 rounded-2xl">
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
          <span className={`text-2xl font-black text-${color}-primary`}>
            ساختن پروژه جدید
          </span>
        </div>
      </div>
    </button>
  );
};

export default addProjectButton;

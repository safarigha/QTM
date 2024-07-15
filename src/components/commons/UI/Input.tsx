import { forwardRef } from "react";
import clsx from "clsx";
import { IInput } from "../../../configs/interfaces";

const Input = forwardRef<HTMLInputElement, IInput>(
  ({ label, id, type }: IInput, ref) => {
    return (
      <div className="w-full">
        <label htmlFor={id} className="text-sm/6 font-medium text-black">
          {label}
        </label>
        <input
          id={id}
          type={type}
          ref={ref}
          className={clsx(
            "mt-3 block w-full h-10 rounded-lg border border-gray-primary px-4",
            "focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25 focus:border-blue-primary"
          )}
        />
      </div>
    );
  }
);

export default Input;

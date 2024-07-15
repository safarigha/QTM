import React from "react";
import { IInputForm } from "../../../configs/interfaces";
import Input from "../UI/Input";
import BrandColorButton from "../UI/buttons/BrandColorButton";

const InputForm: React.FC<IInputForm> = ({
  fields,
  submitText,
  errors,
}: IInputForm) => {
  return (
    <fieldset className="w-full">
      {fields.map((field) => (
        <div key={field.id}>
          <Input
            id={field.id}
            type={field.type}
            label={field.label}
            {...field.register}
          ></Input>
          {errors[field.id] && (
            <p className="text-red-500 text-xs mt-2">
              {errors[field.id].message}
            </p>
          )}
        </div>
      ))}
      <BrandColorButton
        type="submit"
        text={submitText}
        classNames="mt-6 w-full h-10"
      />
    </fieldset>
  );
};

export default InputForm;

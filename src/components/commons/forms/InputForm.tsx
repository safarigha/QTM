import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import BrandColorButton from "../UI/buttons/BrandColorButton";
import { IInputForm } from "../../../configs/interfaces";
import alignmentHelper from "../../../helpers/alignmentHelper";

const InputForm: React.FC<IInputForm> = ({
  onSubmit,
  fields,
  submitText,
  schema,
  includeCheckbox = false,
  onclick,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: any) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full">
      {fields.map((field) => (
        <div className="mt-2" key={field.id}>
          <label className="text-brand-primary">{field.label}</label>
          <input
            type={field.type}
            value={field.value}
            defaultValue={field.defaultValue}
            {...register(field.id)}
            className={`bg-taransparent mt-2 block w-full h-10 rounded-lg border border-gray-primary px-4 focus:outline-none focus:border-blue-primary ${alignmentHelper(
              field.defaultValue || "",
              field.type
            )}`}
          />
          {errors[field.id] && (
            <p className="text-red-500 text-xs mt-2 mb-2">
              {errors[field.id]?.message as string}
            </p>
          )}
        </div>
      ))}
      {includeCheckbox && (
        <div className="text-brand-primary flex w-full gap-1 mt-6 items-center">
          <input
            type="checkbox"
            {...register("isCheckedRule")}
            className="size-5 ml-1 checkbox brand-bg-checkbox"
          />
          <button className="underline font-medium" onClick={onclick}>
            قوانین و مقررات
          </button>
          <div className="font-medium">را می‌پذیرم.</div>
          {errors.isCheckedRule && (
            <p className="text-red-500 text-xs ml-2">
              {errors.isCheckedRule?.message as string}
            </p>
          )}
        </div>
      )}
      <BrandColorButton
        text={submitText}
        classNames="mt-6 w-full h-10"
        type="submit"
      />
    </form>
  );
};

export default InputForm;

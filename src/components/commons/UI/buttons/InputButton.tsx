import { useState } from "react";
import { IInputButton } from "../../../../configs/interfaces";

const InputButton: React.FC<IInputButton> = ({ onSubmit, className = "" }) => {
  const [email, setEmail] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(email);
    setEmail("");
  };

  return (
    <div className="text-center">
      <div className={`w-full items-center ${className}`}>
        <form onSubmit={handleSubmit} className="w-full flex">
          <input
            type="email"
            className="flex items-center justify-center font-normal text-sm w-[339px] h-10 pr-[11px] text-gray-primary rounded-r-lg bg-gray-secondary focus:outline-none focus:border-2 focus:border-brand-primary"
            placeholder="دعوت با ایمیل"
            value={email}
            onChange={handleInputChange}
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center font-normal text-sm w-[91px] h-10 text-white rounded-l-lg bg-brand-primary"
          >
            ارسال
          </button>
        </form>
      </div>
    </div>
  );
};

export default InputButton;

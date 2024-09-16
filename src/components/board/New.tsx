import React, { useState } from "react";
import NewTitle from "./NewTitle";
import {
  INewWorkspaceFormData,
  NewWorkspaceProps,
} from "../../configs/interfaces";
import CloseButton from "../commons/UI/buttons/CloseButton";
import { useNavigate } from "react-router-dom";
import NewlabelColor from "./NewlabelColor";

const New: React.FC<NewWorkspaceProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();

  const handleNext = (data: INewWorkspaceFormData) => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSuccess = () => {
    onClose();
    navigate("/dashboard");
  };

  return (
    <>
      <CloseButton
        className="transform translate-y-[42px] -translate-x-[18px]"
        onClick={onClose}
      />
      {step === 1 && <NewTitle onNext={handleNext} />}
      {step === 2 && (
        <NewlabelColor onSuccess={handleSuccess} onPrevious={handlePrevious} />
      )}
    </>
  );
};

export default New;

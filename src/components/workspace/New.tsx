import React, { useState } from "react";
import NewTitle from "./NewTitle";
import {
  INewWorkspaceFormData,
  NewWorkspaceProps,
} from "../../configs/interfaces";
import CloseButton from "../commons/UI/buttons/CloseButton";
import NewlabelColor from "./NewlabelColor";
import NewDisplayData from "./NewDisplayData";

const New: React.FC<NewWorkspaceProps> = ({ onClose }) => {
  const [step, setStep] = useState(1);

  const handleNext = (data: INewWorkspaceFormData) => {
    setStep(step + 1);
  };

  return (
    <>
      <CloseButton
        className="transform translate-y-[42px] -translate-x-[18px]"
        onClick={onClose}
      />
      {step === 1 && <NewTitle onNext={handleNext} />}
      {step === 2 && <NewlabelColor onNext={handleNext} />}
      {step === 3 && <NewDisplayData />}
    </>
  );
};

export default New;

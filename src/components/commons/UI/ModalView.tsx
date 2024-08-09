import React from "react";
import { ModalProps } from "../../../configs/interfaces";

const ModalView: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    //bg-black
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <div>
        {React.cloneElement(children as React.ReactElement<any>, { onClose })}
      </div>
    </div>
  );
};

export default ModalView;

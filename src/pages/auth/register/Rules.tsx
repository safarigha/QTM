import React, { useState } from "react";
import { IRules } from "../../../configs/interfaces";
import CloseButton from "../../../components/commons/UI/buttons/CloseButton";

const Rules: React.FC<IRules> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  const onCloseClick = () => {
    setIsOpen(false);
    onClose();
  };

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black/25 z-50 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <dialog
        open={isOpen}
        className="p-6 border flex flex-col rounded-lg bg-white"
      >
        <h2 className="font-extrabold text-center">
          قوانین و مقررات کیوتی منیجر (کوئرا تسک منیجر)
        </h2>
        <div className="mt-2">
          <h3 className="font-extrabold">استفاده از خدمات:</h3>
          <p className="text-base text-black">
            برای استفاده از خدمات کوئرا تسک منیجر، شما موظف به رعایت قوانین و
            شرایط استفاده از خدمات هستید.
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-extrabold">مسئولیت‌ها:</h3>
          <p className="text-base text-black">
            هرگونه فعالیت در محیط کوئرا تسک منیجر باید با رعایت قوانین و مقررات
            مربوطه صورت گیرد و مسئولیت این فعالیت‌ها با خود کاربر است.
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-extrabold">حریم خصوصی:</h3>
          <p className="text-base text-black">
            ما به حریم خصوصی کاربران اهمیت می دهیم و از هرگونه سوء استفاده از
            اطلاعات شخصی پرهیز می‌کنیم.
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-extrabold">تغییرات:</h3>
          <p className="text-base text-black">
            ما ممکن است بدون اطلاع قبلی، شرایط و قوانین خود را تغییر دهیم. برای
            اطلاعات بیشتر به آخرین نسخه قوانین و مقررات ما مراجعه کنید.
          </p>
        </div>
        <div className="mt-2">
          <h3 className="font-extrabold">تماس:</h3>
          <p className="text-base text-black">
            برای هرگونه سوال، ابهام یا درخواست اطلاعات بیشتر، می‌توانید با ما
            تماس بگیرید.
          </p>
        </div>
        <div className="absolute m-[0.5px]">
          <CloseButton onClick={onCloseClick} />
        </div>
      </dialog>
    </div>
  );
};

export default Rules;

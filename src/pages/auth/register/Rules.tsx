import React, { useState } from "react";
import dialog from "daisyui";
import button from "daisyui";
import { IRules } from "../../../configs/interfaces";

const Rules: React.FC<IRules> = ({ onClose }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <dialog
      open={isOpen}
      onClose={() => {
        setIsOpen(false);
        onClose();
      }}
      // اگر این ویژگی‌ها در کتابخانه daisyui وجود نداشته باشند، باید حذف شوند
      // size="large"
      // title="قوانین و مقررات"
    >
      <div className="p-6">
        <p className="text-base text-black">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
          استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در
          ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و
          کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می‌باشد.
        </p>
        <ul className="list-disc mt-4">
          <li>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ</li>
          <li>برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع</li>
          <li>شناخت فراوان جامعه و متخصصان را می‌طلبد</li>
          <li>در این صورت می‌توان امید داشت که تمام و دشواری موجود در ارائه</li>
          <li>
            جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
          </li>
        </ul>
      </div>
      <div className="absolute top-0 right-0 m-4">
        <button
          // اگر این ویژگی‌ها در کتابخانه daisyui وجود نداشته باشند، باید حذف شوند
          // variant="link"
          // size="sm"
          // icon="close"
          onClick={() => {
            setIsOpen(false);
            onClose();
          }}
        >
          بستن
        </button>
      </div>
    </dialog>
  );
};

export default Rules;

const alignmentHelper = (value: string): string => {
  const isNumberText = /\d/.test(value);
  const isPersianText = /[\u0600-\u06FF]/.test(value);

  if (!isNumberText && isPersianText) return "text-right rtl";
  if (isNumberText && isPersianText) return "text-right rtl";
  return "text-left ltr";

  // if (type === "email") return "text-left ltr";
  // if (isNumberText && !isEnglishText) return "text-left ltr";
  // if (!isNumberText && isEnglishText) return "text-left ltr";
  // if (isNumberText && isEnglishText) return "text-left ltr";

  // return "text-right rtl";

  ////////////////////////////////
  // اگر نوع اینپوت پسورد یا ایمیل باشد، همیشه چپ‌چین
  // if (type === "password" || type === "email") {
  //   return "text-left ltr";
  // }

  //   // بررسی اینکه آیا متن شامل حروف فارسی است
  //   const hasPersian = /[\u0600-\u06FF]/.test(value);

  //   // بررسی اینکه آیا متن شامل حروف انگلیسی است
  //   const hasEnglish = /[A-Za-z]/.test(value);

  //   // بررسی اینکه آیا متن شامل عدد است
  //   const hasNumber = /\d/.test(value);

  //   // تعیین جهت براساس شرایط مختلف
  //   if (hasPersian && !hasEnglish) {
  //     // اگر متن تنها فارسی باشد (بدون حروف انگلیسی)
  //     return "text-right rtl";
  //   } else if (hasPersian && hasNumber && !hasEnglish) {
  //     // اگر متن فارسی به همراه عدد باشد (بدون حروف انگلیسی)
  //     return "text-right rtl";
  //   } else if (hasEnglish && !hasPersian) {
  //     // اگر متن تنها انگلیسی باشد (بدون حروف فارسی)
  //     return "text-left ltr";
  //   } else if (hasEnglish && hasNumber && !hasPersian) {
  //     // اگر متن انگلیسی به همراه عدد باشد (بدون حروف فارسی)
  //     return "text-left ltr";
  //   } else if (!hasPersian && !hasEnglish && hasNumber) {
  //     // اگر متن تنها عدد باشد (بدون حروف فارسی و انگلیسی)
  //     return "text-left ltr";
  //   } else if (hasPersian && hasEnglish) {
  //     // اگر متن شامل هر دو حروف فارسی و انگلیسی باشد
  //     return "text-left ltr"; // در این حالت می‌توانیم تصمیم بگیریم که چپ‌چین یا راست‌چین باشد
  //   } else {
  //     // حالت پیش‌فرض
  //     return "text-left ltr";
  //   }
};

export default alignmentHelper;

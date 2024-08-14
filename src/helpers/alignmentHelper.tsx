const alignmentHelper = (value: string): string => {
  const isNumberText = /\d/.test(value);
  const isPersianText = /[\u0600-\u06FF]/.test(value);

  if (!isNumberText && isPersianText) return "text-right rtl";
  if (isNumberText && isPersianText) return "text-right rtl";
  return "text-left ltr";
};

export default alignmentHelper;

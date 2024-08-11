const alignmentHelper = (value: string, type: string): string => {
  if (type === "email") {
    return "text-left";
  }
  const isEnglishOrNumber = /^[A-Za-z0-9]*$/.test(value);
  return isEnglishOrNumber ? "text-left" : "text-right";
};

export default alignmentHelper;

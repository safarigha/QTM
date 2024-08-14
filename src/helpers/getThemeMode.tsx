const getThemeMode = (): string => {
  const theme = localStorage.getItem("theme");
  if (theme === "light") return "LM";
  if (theme === "dark") return "DM";
  return "none";
};

export default getThemeMode;

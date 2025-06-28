import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { setTheme } from "../redux/slices/themeStice";

const LOCAL_STORAGE_KEI = import.meta.env.VITE_LOCAL_STORAGE_THEME_KEY;

export const useTheme = () => {
  const { theme } = useAppSelector((state) => state.theme);

  const dispatch = useAppDispatch();

  const handleInitTheme = () => {
    const theme = localStorage.getItem(LOCAL_STORAGE_KEI);

    if (theme === "ligth") {
      dispatch(setTheme("light"));
    } else if (theme === "dark") {
      dispatch(setTheme("dark"));
    }
  };

  const handleToggleTheme = () => {
    if (theme === "dark") {
      dispatch(setTheme("light"));
      localStorage.setItem(LOCAL_STORAGE_KEI, "light");
    } else {
      dispatch(setTheme("dark"));
      localStorage.setItem(LOCAL_STORAGE_KEI, "dark");
    }
  };
  return { theme, handleInitTheme, handleToggleTheme };
};

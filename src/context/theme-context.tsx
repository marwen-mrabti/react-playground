import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

export type Theme = "light" | "dark" | "orange";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const defaultThemeContext: ThemeContextType = {
  theme: "light",
  setTheme: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

interface ThemeProviderProps {
  children: ReactNode;
  defaultTheme?: Theme;
}

export default function ThemeProvider({
  children,
  defaultTheme = "light",
}: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(defaultTheme);

  const setTheme = (newTheme: Theme) => {
    if (["light", "dark", "orange"].includes(newTheme)) {
      localStorage.setItem("theme", newTheme);
      setThemeState(newTheme);
    }
  };

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check localStorage for a saved theme
    const savedTheme = localStorage.getItem("theme") as Theme;
    if (["light", "dark", "orange"].includes(savedTheme)) {
      setThemeState(savedTheme);
      return;
    }

    // Check data-theme attribute for a theme
    const dataTheme = document.documentElement.getAttribute(
      "data-theme",
    ) as Theme;
    if (["light", "dark", "orange"].includes(dataTheme)) {
      setThemeState(dataTheme);
      return;
    }

    // Default to the provided defaultTheme
    setThemeState(defaultTheme);
  }, [defaultTheme]);

  useEffect(() => {
    // Update document classes when the theme changes
    const root = document.documentElement;
    root.classList.remove("light", "dark", "orange");
    root.classList.add(theme);
    root.setAttribute("data-theme", theme);
  }, [theme]);

  return <ThemeContext value={{ theme, setTheme }}>{children}</ThemeContext>;
}

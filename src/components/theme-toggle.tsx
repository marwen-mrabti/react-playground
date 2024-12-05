import { useTheme } from "@/context/theme-context";
import Select from "./select";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-[200px]">
      <Select
        options={["light", "dark", "orange"]}
        value={theme}
        handler={setTheme}
      />
    </div>
  );
};

export default ThemeToggle;

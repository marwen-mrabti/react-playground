import { cn } from "@/lib/utils";
import { MoonIcon, SunIcon } from "lucide-react";

type ToggleBtnProps = {
  toggleHandler: () => void;
};

export default function ToggleBtn({ toggleHandler }: ToggleBtnProps) {
  return (
    <label
      className="ring-primary relative inline-flex h-8 w-18 cursor-pointer items-center rounded-full inset-ring inset-shadow-sm ring shadow-md inset-shadow-slate-700 inset-ring-white/15 dark:inset-shadow-white/20"
      aria-label={`toggle mode`}
    >
      <input type="checkbox" name="theme" hidden onChange={toggleHandler} />
      <div
        className={cn(
          "bg-primary/90 dark:bg-primary/80 absolute left-0 flex h-8 w-8 items-center justify-center rounded-full transition-all duration-400 ease-linear dark:left-full dark:-translate-x-full",
        )}
      >
        <SunIcon className="block h-8 w-8 text-amber-100 drop-shadow-lg dark:hidden" />
        <MoonIcon className="hidden h-8 w-8 rotate-90 text-white transition-transform duration-200 ease-in-out dark:block dark:rotate-20" />
      </div>
    </label>
  );
}

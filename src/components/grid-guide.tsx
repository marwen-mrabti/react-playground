import { cn } from "@/lib/utils";
import { useState } from "react";

export default function GridGuide() {
  const [numberOfChildren, setNumberOfChildren] = useState(2);
  const handleChangeChildrenNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setNumberOfChildren(parseInt(e.target.value));
  };

  const children = Array.from({ length: numberOfChildren }, (_, i) => (
    <div
      key={i}
      className="aspect-square h-16 rounded-md bg-slate-400/75 text-center"
    >
      {i}
    </div>
  ));

  return (
    <section
      id="grid-guide"
      className="mx-auto min-h-dvh w-full max-w-7xl px-4 py-10"
    >
      <h1 className="text-primary text-center text-4xl">Grid Guide</h1>
      <input
        type="range"
        name="children number"
        max="10"
        min="2"
        value={numberOfChildren}
        onChange={handleChangeChildrenNumber}
        className="w-2/3 cursor-pointer"
      />
      <div
        className={cn(
          "divide-1 h-full min-h-[70dvh] w-full divide-amber-200 py-4 outline outline-lime-200",
          "transition-all duration-300 ease-in-out",
          "grid gap-4",
          // "grid-flow-col justify-evenly",
          "grid-cols-3 place-items-center",
        )}
      >
        {children}
        <div className="aspect-auto w-24 justify-self-end rounded-md bg-amber-300"></div>
      </div>
    </section>
  );
}

import { dragon1, happyAtom } from "@/assets";
import { cn } from "@/lib/utils";
import { useRef, useState } from "react";

export default function FilterAnimations() {
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);
  const [lensePosition, setLensePosition] = useState({
    x: 0,
    y: 0,
  });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!containerRef.current) return;
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const lenseX = e.clientX - rect.left;
      const lenseY = e.clientY - rect.top;
      if (lenseX <= rect.width && lenseY <= rect.height) {
        setLensePosition({ x: lenseX, y: lenseY });
      }
    }
  };

  return (
    <section
      id="filter-animations"
      className="isolate container grid h-dvh place-content-start place-items-center gap-10 overflow-x-clip rounded-2xl bg-radial-[at_10%_20%] from-slate-200 to-slate-900 to-95% px-4 py-4"
    >
      <h1 className="text-3xl font-bold">Filter Animations</h1>
      <div className="flex w-full flex-wrap items-center justify-evenly gap-4">
        <div
          className={cn(
            "size-64 rounded-b-md border-1 border-amber-200",
            "hover:animate-hue",
          )}
        >
          <img
            src={happyAtom}
            alt="joy of react mascot"
            className="h-full w-full object-contain"
          />
        </div>
        <div
          ref={containerRef}
          onMouseMove={(e) => handleMouseMove(e)}
          className="relative size-64 overflow-clip border-1 border-red-300"
        >
          <div
            className={cn(
              "size-30 rounded-full border-1 border-amber-100",
              "sepia-[var(--sepia)] backdrop-blur-[var(--blur)]",
              "pointer-events-none absolute top-[var(--top)] left-[var(--left)] -translate-x-[50%] -translate-y-[50%]",
              "transition-all duration-100 ease-out",
            )}
            style={
              {
                "--blur": `${blur}px`,
                "--sepia": `${sepia}%`,
                "--top": `${lensePosition.y}px`,
                "--left": `${lensePosition.x}px`,
              } as React.CSSProperties
            }
          />
          <img
            src={dragon1}
            alt="dragon 1"
            className={cn("h-full w-full object-cover")}
          />
        </div>
      </div>

      <div className="flex w-full flex-col items-center gap-4">
        <p
          className={cn(
            "w-2/3 bg-slate-200 p-4 text-center text-slate-800",
            "blur-[var(--blur)] sepia-[var(--sepia)]",
          )}
          style={
            {
              "--blur": `${blur}px`,
              "--sepia": `${sepia}%`,
            } as React.CSSProperties
          }
        >
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima modi
          iusto pariatur impedit! Illo molestiae perspiciatis, iste eum iusto
          minima tempora at vitae illum eos reiciendis veritatis, consectetur
          nobis et.
        </p>

        <div className="flex w-full items-center justify-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="blur">Blur</label>
            <input
              type="range"
              name="blur"
              id="blur"
              min={0}
              max={10}
              value={blur}
              onChange={(e) => setBlur(e.target.valueAsNumber)}
              className="accent-lime-500"
            />
          </div>
          <div className="flex flex-col items-center gap-2">
            <label htmlFor="sepia">Sepia</label>
            <input
              type="range"
              name="sepia"
              id="sepia"
              min={0}
              max={100}
              value={sepia}
              onChange={(e) => setSepia(e.target.valueAsNumber)}
              className="accent-amber-600"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

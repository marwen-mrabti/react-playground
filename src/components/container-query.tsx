import { useTheme } from "@/context/theme-context";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export default function ContainerQuery() {
  const { theme } = useTheme();
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState<number>(100);
  const [containerSize, setContainerSize] = useState<{
    width: number;
    height: number;
  }>({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    if (containerRef.current) {
      const { width, height } = containerRef.current.getBoundingClientRect();
      setContainerSize({ width, height });
    }
  }, [containerWidth]);

  return (
    <div data-theme="citrus" className={cn("isolate w-full", theme)}>
      <section
        id="container-query"
        className="bg-background-highlight container mx-auto flex min-h-dvh w-full flex-col items-center justify-start gap-8 rounded-2xl px-4 py-10"
      >
        <h1 className="text-primary text-center text-4xl font-bold">
          Container Query
        </h1>
        <span>{containerWidth}%</span>
        <input
          type="range"
          min="0"
          max="100"
          className="w-2/3"
          value={containerWidth}
          onChange={(e) => setContainerWidth(Number.parseInt(e.target.value))}
        />
        <div
          ref={containerRef}
          className={cn(
            "@container flex flex-col items-center justify-around rounded-lg border-2 border-green-300 px-2 py-4",
            "w-[clamp(20rem,100%,var(--container-width))]",
          )}
          style={
            {
              "--container-width": `${containerWidth}%`,
            } as React.CSSProperties
          }
        >
          <h3 className="text-lg">
            {containerSize.width} x {containerSize.height}
          </h3>
          <div className="grid grid-cols-1 gap-4 @min-sm:grid-cols-2 @min-lg:grid-cols-3">
            <div className="h-40 w-40 bg-red-500 @md:bg-indigo-500">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="h-full w-full object-cover @max-sm:size-20 @max-sm:rounded-full"
              />
              <span className="z-10 hidden text-blue-900 @max-sm:block">
                you can't see me if you are bigger than 600px
              </span>
            </div>
            <div className="h-40 w-40 bg-yellow-500" />
            <div className="h-40 w-40 bg-blue-500" />
            <div className="h-40 w-40 bg-green-500" />
            <div className="h-40 w-40 bg-cyan-500" />
            <div className="h-40 w-40 bg-pink-500" />
            <div className="h-40 w-40 bg-purple-500" />
            <div className="h-40 w-40 bg-teal-500" />
            <div className="h-40 w-40 bg-orange-500" />
          </div>
        </div>
      </section>
    </div>
  );
}

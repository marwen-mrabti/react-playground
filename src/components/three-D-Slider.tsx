import dragon1 from "@/assets/images/dragon_1.jpg";
import dragon2 from "@/assets/images/dragon_2.jpg";
import dragon3 from "@/assets/images/dragon_3.jpg";
import dragon4 from "@/assets/images/dragon_4.jpg";
import dragon5 from "@/assets/images/dragon_5.jpg";
import dragon6 from "@/assets/images/dragon_6.jpg";
import dragon7 from "@/assets/images/dragon_7.jpg";

import { cn } from "@/lib/utils";

export default function ThreeDSlider() {
  return (
    <section
      id="container-query"
      className={cn(
        "bg-background-secondary container flex min-h-dvh flex-col items-center justify-start gap-4 rounded-2xl py-10",
      )}
    >
      <h1 className="text-center text-4xl font-bold">3D slider </h1>

      <div
        className="relative flex h-dvh w-full items-center justify-center overflow-hidden"
        style={{ "--quantity": 7 } as React.CSSProperties}
      >
        <div
          className="slider absolute top-[10%] left-[calc(50%-(var(--slider-width)/2)] h-[var(--slider-height)] w-[var(--slider-width)] transform-3d"
          style={
            {
              "--slider-width": "200px",
              "--slider-height": "250px",
            } as React.CSSProperties
          }
        >
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70 shadow-md shadow-zinc-50"
            style={{ "--position": 1 } as React.CSSProperties}
          >
            <img
              src={dragon1}
              alt="dragon 1"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70 shadow-md shadow-zinc-50"
            style={{ "--position": 2 } as React.CSSProperties}
          >
            <img
              src={dragon2}
              alt="dragon 2"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70 shadow-md shadow-zinc-50"
            style={{ "--position": 3 } as React.CSSProperties}
          >
            <img
              src={dragon3}
              alt="dragon 3"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70 shadow-md shadow-zinc-50"
            style={{ "--position": 4 } as React.CSSProperties}
          >
            <img
              src={dragon4}
              alt="dragon 5"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70 shadow-md shadow-zinc-50"
            style={{ "--position": 5 } as React.CSSProperties}
          >
            <img
              src={dragon5}
              alt="dragon 5"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70"
            style={{ "--position": 6 } as React.CSSProperties}
          >
            <img
              src={dragon6}
              alt="dragon 6"
              className="h-full w-full object-cover"
            />
          </div>
          <div
            className="item absolute inset-0 overflow-hidden rounded-lg bg-cyan-300/70"
            style={{ "--position": 7 } as React.CSSProperties}
          >
            <img
              src={dragon7}
              alt="dragon 7"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";
import { useRef } from "react";
import LazyImage from "./lazy-image";

export default function ObserverApi() {
  const images = [
    "https://placehold.co/200?text=Hello&font=roboto",
    "https://placehold.co/200?text=World&font=roboto",
    "https://placehold.co/200?text=observer&font=roboto",
    "https://placehold.co/200?text=api&font=roboto",
    "https://placehold.co/200?text=Intersection&font=roboto",
    "https://placehold.co/200?text=is&font=roboto",
    "https://placehold.co/200?text=cool&font=roboto",
  ];

  const containerRef = useRef<HTMLDivElement>(null);

  const [box0Ref, isBox0Visible] = useIntersectionObserver({
    root: containerRef.current || null,
    rootMargin: "-15%",
    threshold: 0.45,
  });

  const [box1Ref, isBox1Visible] = useIntersectionObserver({
    root: containerRef.current || null,
    rootMargin: "-10% 0px",
    threshold: 0.35,
  });

  const [box2Ref, isBox2Visible] = useIntersectionObserver({
    root: containerRef.current || null,
    rootMargin: "-20%",
    threshold: 0.25,
  });

  const [box3Ref, isBox3Visible] = useIntersectionObserver({
    root: containerRef.current || null,
    rootMargin: "-30%",
    threshold: 0.4,
  });

  const [box4Ref, isBox4Visible] = useIntersectionObserver({
    root: containerRef.current || null,
    rootMargin: "-10%",
    threshold: 0.6,
  });

  return (
    <section
      id="observer-api"
      className="bg-grid relative isolate container flex min-h-[100dvh] w-full flex-col items-center justify-start gap-8 rounded-2xl px-4 py-10"
    >
      <h1 className="text-primary text-2xl font-bold">
        Intersection Observer API
      </h1>
      <div
        ref={containerRef}
        className="grid aspect-square h-[60dvh] grid-cols-1 place-items-center gap-4 overflow-x-clip overflow-y-scroll rounded border-2 border-slate-100 py-8"
      >
        <div
          ref={box0Ref}
          className={cn("invisible size-60 shrink-0 bg-slate-600", {
            visible: isBox0Visible,
          })}
        />
        <div
          ref={box1Ref}
          className={cn(
            "size-50 shrink-0 translate-x-full bg-lime-600 opacity-10",
            "transition-all duration-500 ease-in-out",
            {
              "translate-x-0 opacity-100": isBox1Visible,
            },
          )}
        />
        <div
          ref={box2Ref}
          className={cn(
            "size-50 shrink-0 bg-rose-600 opacity-30",
            "transition-all duration-300 ease-in-out",
            {
              "opacity-100": isBox2Visible,
            },
          )}
        />
        <div
          ref={box3Ref}
          className={cn(
            "size-50 shrink-0 bg-sky-600 opacity-30",
            "transition-all duration-300 ease-in-out",

            {
              "opacity-100": isBox3Visible,
            },
          )}
        />

        <div
          ref={box4Ref}
          className={cn(
            "size-50 shrink-0 bg-fuchsia-600 opacity-30",
            "transition-all duration-300 ease-in-out",
            {
              "opacity-100": isBox4Visible,
            },
          )}
        />
      </div>

      <ul className="grid w-full grid-cols-1 place-items-center gap-4 overflow-y-scroll bg-slate-50/20 px-4 py-4">
        {images.map((src, index) => (
          <LazyImage
            key={index}
            src={src}
            alt={`Image ${index + 1}`}
            className="!size-50"
          />
        ))}
      </ul>
    </section>
  );
}

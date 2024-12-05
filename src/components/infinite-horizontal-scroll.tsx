export default function InfiniteHorizontalScroll() {
  return (
    <section
      id="infinite-horizontal-scroll"
      className="bg-background-secondary container flex min-h-dvh w-full flex-wrap items-center justify-center gap-10 overflow-x-hidden rounded-2xl px-4 pb-20"
    >
      <h1 className="mb-20 w-full animate-pulse text-center text-3xl">
        Infinite Horizontal Scroll
      </h1>
      <div className="scroll-container mask-image flex w-full flex-col items-center gap-10 overflow-x-hidden border-2 border-orange-400 px-4 py-8">
        <div
          className="relative flex h-[100px] w-full min-w-[calc(var(--quantity)*var(--width))] items-center"
          style={
            {
              "--width": "150px",
              "--quantity": 9,
              "--direction": "reverse",
            } as React.CSSProperties
          }
        >
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-red-500"
            style={{ "--index": 0 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-yellow-500"
            style={{ "--index": 1 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-pink-500"
            style={{ "--index": 2 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-blue-500"
            style={{ "--index": 3 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-green-500"
            style={{ "--index": 4 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-cyan-500"
            style={{ "--index": 5 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-purple-500"
            style={{ "--index": 6 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-teal-500"
            style={{ "--index": 7 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-orange-500"
            style={{ "--index": 8 } as React.CSSProperties}
          />
        </div>
        <div
          className="relative flex h-[100px] w-full min-w-[calc(var(--quantity)*var(--width))] items-center"
          style={
            {
              "--width": "150px",
              "--quantity": 9,
              "--direction": "forwards",
            } as React.CSSProperties
          }
        >
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-red-500"
            style={{ "--index": 0 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-yellow-500"
            style={{ "--index": 1 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-pink-500"
            style={{ "--index": 2 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-blue-500"
            style={{ "--index": 3 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-green-500"
            style={{ "--index": 4 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-cyan-500"
            style={{ "--index": 5 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-purple-500"
            style={{ "--index": 6 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-teal-500"
            style={{ "--index": 7 } as React.CSSProperties}
          />
          <div
            className="scroll-item absolute h-[100px] w-[var(--width)] bg-orange-500"
            style={{ "--index": 8 } as React.CSSProperties}
          />
        </div>
      </div>
    </section>
  );
}

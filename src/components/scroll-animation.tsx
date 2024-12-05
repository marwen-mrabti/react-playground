export default function ScrollAnimation() {
  return (
    <section
      id="scroll-animation"
      className="bg-background-secondary container flex w-full [transform:perspective(1000px)] flex-wrap items-center justify-center gap-6 rounded-2xl px-4 pb-20 transform-3d"
    >
      <h1 className="mb-20 w-full animate-pulse text-center text-3xl">
        Scroll to see the animation
      </h1>

      <div className="animate-scrolling h-[200px] w-[300px] bg-red-500" />
      <div className="animate-scrolling h-[200px] w-[clamp(300px,100%,700px)] bg-yellow-500" />
      <div className="animate-scrolling h-[200px] w-[300px] bg-blue-500" />
      <div className="animate-scrolling h-[200px] w-[300px] bg-green-500" />
      <div className="animate-scrolling h-[200px] w-[300px] bg-cyan-500" />
      <div className="animate-scrolling h-[200px] w-[clamp(300px,100%,700px)] bg-pink-500" />
      <div className="animate-scrolling h-[200px] w-[300px] bg-purple-500" />
      <div className="animate-scrolling h-[200px] w-[clamp(300px,100%,700px)] bg-teal-500" />
      <div className="animate-scrolling h-[200px] w-[300px] bg-orange-500" />
    </section>
  );
}

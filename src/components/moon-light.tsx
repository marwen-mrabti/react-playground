export default function MoonLight() {
  return (
    <section
      id="moon-light"
      className="container flex h-dvh flex-col items-center justify-evenly gap-10 rounded-2xl bg-radial-[at_10%_20%] from-slate-200 to-slate-900 to-95% px-4 py-4"
    >
      <h1 className="text-3xl font-bold text-amber-200">Moon Light Effect</h1>
      <div aria-label="moon" className="moon size-56 rounded-full bg-black" />
    </section>
  );
}

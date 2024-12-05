export default function Draggable() {
  return (
    <section
      id="draggable"
      className="bg-background-secondary container h-dvh min-h-dvh rounded-2xl px-4 py-8"
    >
      <div className="min-h-full w-full border border-zinc-500 p-4">
        <div className="from-background-highlight/7 to-background-highlight/50 grid size-54 cursor-grabbing place-items-center rounded-lg border-2 border-orange-300 bg-gradient-to-br">
          <h1 className="text-center text-4xl font-bold">Draggable </h1>
        </div>
      </div>
    </section>
  );
}

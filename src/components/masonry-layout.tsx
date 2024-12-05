import laptop from "@/assets/laptop.jpg";

export default function MasonryLayout() {
  return (
    <section
      id="masonry-layout"
      className="bg-background-secondary container flex min-h-dvh w-full flex-col items-center justify-start gap-4 rounded-2xl px-4 py-10"
    >
      <h1 className="text-center text-4xl font-bold">Masonry Layout</h1>
      <ul className="w-full columns-[200px_4] space-y-4 space-x-4 rounded-md border-1 border-teal-500 px-2 py-2">
        <li className="h-32 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 1"
            className="h-full w-full object-cover"
          />
        </li>
        <li className="h-94 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 2"
            className="h-full w-full object-cover"
          />
        </li>
        <li className="h-48 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 3"
            className="h-full w-full object-cover"
          />
        </li>
        <li className="h-64 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 4"
            className="h-full w-full object-cover"
          />
        </li>
        <li className="h-48 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 5"
            className="h-full w-full object-cover"
          />
        </li>
        <li className="h-32 w-full break-inside-avoid border border-teal-800">
          <img
            src={laptop}
            loading="lazy"
            decoding="async"
            alt="Masonry item 6"
            className="h-full w-full object-cover"
          />
        </li>
      </ul>
    </section>
  );
}

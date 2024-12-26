import { cn } from "@/lib/utils";

const links = [
  "home",
  "about",
  "contact",
  "pricing",
  "settings",
  "help",
  "logout",
  "login",
  "signup",
];

export default function CircularMenu() {
  return (
    <section
      id="circular-menu"
      className="container grid min-h-dvh place-items-center overflow-x-clip px-2 py-6"
    >
      <nav
        className="relative grid size-[calc(var(--container-radius)*2)] place-items-center rounded-full bg-transparent text-slate-900"
        style={
          {
            "--container-radius": "200px",
          } as React.CSSProperties
        }
      >
        <ul className="border-primary grid h-full w-full place-items-center rounded-full border-2 border-dashed">
          <li className="absolute size-14 rounded-full bg-indigo-500"></li>
          {links.map((link, index) => (
            <li
              key={index}
              className={cn(
                "absolute size-12 rounded-full bg-orange-500/60",
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "flex items-center justify-center text-white",
              )}
              style={
                {
                  "--container-radius": "200px", //offset from center
                  "--position": index,
                  "--total": links.length,
                  "--angle": "calc(var(--position) * 360deg / var(--total))", //rotation angle
                  transform:
                    "translate(calc(cos(var(--angle))*var(--container-radius)),calc(sin(var(--angle))*var(--container-radius)))",
                  // translate x : cos(angle) * radius
                  // translate y : sin(angle) * radius
                } as React.CSSProperties
              }
            >
              {`${index}🐼`}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

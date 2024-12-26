import reactLogo from "./assets/react.svg";

import CircularMenu from "@/components/circular-menu";
import ContainerQuery from "@/components/container-query";
import Draggable from "@/components/draggable";
import FilterAnimations from "@/components/filter-animations";
import FlexBoxGuide from "@/components/flex-box-guide";
import InfiniteHorizontalScroll from "@/components/infinite-horizontal-scroll";
import MasonryLayout from "@/components/masonry-layout";
import MoonLight from "@/components/moon-light";
import ObserverApi from "@/components/observer-api";
import ScrollAnimation from "@/components/scroll-animation";
import ThemeToggle from "@/components/theme-toggle";
import ThreeDSlider from "@/components/three-D-Slider";
import GridGuide from "@/components/grid-guide";

function App() {
  return (
    <div suppressHydrationWarning={true}>
      <>
        <title>react playground</title>
        <meta name="author" content="marwen" />
        <link rel="author" href="https://marwen-mrabti-v2.vercel.app" />
        <meta
          name="keywords"
          content={
            "react, vite, ssr,tailwind v4, flexbox, masonry, 3D-slider, multi-theme, marquee, drag-and-drop, scroll animation"
          }
        />
      </>

      <main className="text-foreground bg-background relative flex min-h-dvh max-w-screen flex-col items-center justify-start gap-8">
        <header className="sticky top-0 left-0 z-100 w-full">
          <nav className="bg-background w-full py-6 opacity-75 drop-shadow-lg backdrop-blur-3xl">
            <div className="flex items-center justify-around">
              <img src={reactLogo} alt="React logo" />
              <ThemeToggle />
            </div>
          </nav>
        </header>

        <ScrollAnimation />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <MoonLight />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <InfiniteHorizontalScroll />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <FlexBoxGuide />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <MasonryLayout />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <ThreeDSlider />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <ContainerQuery />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <Draggable />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <FilterAnimations />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <CircularMenu />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <ObserverApi />

        <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
        <GridGuide />
      </main>
    </div>
  );
}

export default App;

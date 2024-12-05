import reactLogo from "./assets/react.svg";

import MoonLight from "@/components/moon-light";
import ScrollAnimation from "@/components/scroll-animation";
import ContainerQuery from "./components/container-query";
import Draggable from "./components/draggable";
import FlexBoxGuide from "./components/flex-box-guide";
import InfiniteHorizontalScroll from "./components/infinite-horizontal-scroll";
import MasonryLayout from "./components/masonry-layout";
import ThemeToggle from "./components/theme-toggle";
import ThreeDSlider from "./components/three-D-Slider";

function App() {
  return (
    <main className="bg-background text-foreground relative flex min-h-dvh max-w-screen flex-col items-center justify-start gap-4 px-4 py-4">
      <div className="sticky top-4 left-0 z-100 flex w-full items-center justify-center gap-4 border-b-2 border-slate-400 bg-amber-100/20 backdrop-blur-3xl">
        <img src={reactLogo} alt="React logo" />
        <ThemeToggle />
      </div>

      <hr className="my-4 w-full text-slate-300 dark:text-slate-800" />
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
    </main>
  );
}

export default App;

import {
  T_AlignItems,
  T_AlignSelf,
  T_FlexDirection,
  T_FlexWrap,
  T_JustifyContent,
} from "@/lib/flex.types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import Select from "./select";

export default function FlexBoxGuide() {
  const [containerWidth, setContainerWidth] = useState(100);
  const [flexDirection, setFlexDirection] =
    useState<T_FlexDirection>("flex-row");
  const [justifyContent, setJustifyContent] =
    useState<T_JustifyContent>("justify-start");
  const [alignItems, setAlignItems] = useState<T_AlignItems>("items-stretch");
  const [alignSelf, setAlignSelf] = useState<T_AlignSelf>("self-auto");
  const [flexWrap, setFlexWrap] = useState<T_FlexWrap>("flex-nowrap");

  const handleFlexDirectionChange = (value: T_FlexDirection) => {
    setFlexDirection(value);
  };
  const handleJustifyContentChange = (value: T_JustifyContent) => {
    setJustifyContent(value);
  };
  const handleAlignItemsChange = (value: T_AlignItems) => {
    setAlignItems(value);
  };
  const handleAlignSelfChange = (value: T_AlignSelf) => {
    setAlignSelf(value);
  };
  const handleFlexWrapChange = (value: T_FlexWrap) => {
    setFlexWrap(value);
  };

  return (
    <section
      id="flex-box-guide"
      className="container flex min-h-dvh w-full flex-col items-center justify-center gap-10 rounded-2xl bg-linear-45/oklch from-slate-700 to-slate-900 px-4 py-4"
      style={
        { "--container-width": `${containerWidth}%` } as React.CSSProperties
      }
    >
      <h1 className="text-3xl font-bold text-amber-200">Flex Box Guide</h1>
      <ul className="list-inside list-disc rounded-lg bg-red-100 p-4 text-zinc-700">
        <li>justify — to position something along the primary axis.</li>
        <li>align — to position something along the cross axis.</li>
        <li>content — a group of “stuff” that can be distributed.</li>
        <li>items — single items that can be positioned individually.</li>
      </ul>

      <div className={cn("flex w-full flex-col items-center gap-6")}>
        <span>{containerWidth}%</span>
        <input
          type="range"
          name="flex"
          min="0"
          max="100"
          step="1"
          value={containerWidth}
          onChange={(e) => setContainerWidth(Number.parseInt(e.target.value))}
          className="w-2/3 cursor-pointer"
        />
        <div
          className={cn(
            "flex h-[30svh] w-[var(--container-width)] min-w-[300px] flex-wrap content-center items-center justify-around gap-4 rounded-lg border-2 border-zinc-300 px-4 py-2",
          )}
        >
          <input
            type="text"
            placeholder="Name"
            className="shrink-0 grow-2 basis-[170px] border-1 border-amber-200"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="shrink-1 grow-1 basis-[30ch] border-1 border-amber-200"
          />
          <input
            type="submit"
            value="Subscribe"
            className="shrink-0 grow-1 basis-[70px] border-1 border-amber-200"
          />
        </div>
      </div>

      <div
        className={cn(
          "flex h-[50svh] w-[var(--container-width)] gap-4 border-2 border-blue-400 px-4 py-2",
          flexDirection,
          justifyContent,
          alignItems,
          flexWrap,
        )}
      >
        <div className={cn("size-32 border-1 border-amber-200")} />
        <div
          className={cn("h-auto w-fit border-1 border-amber-400", alignSelf)}
        >
          <h3 className="text-lg">
            with <span className="text-amber-200">align-self</span> set to{" "}
            <span className="text-amber-400">{alignSelf}</span>
            <br />
            <span>
              in order to work the with and height of the element must be set to
              auto
            </span>
          </h3>
        </div>
        <div className={cn("size-32 border-1 border-amber-600")} />
      </div>
      <div className="flex flex-wrap items-center justify-around gap-4">
        <Select
          options={[
            "flex-row",
            "flex-col",
            "flex-row-reverse",
            "flex-col-reverse",
          ]}
          value={flexDirection}
          handler={handleFlexDirectionChange}
          label="Flex Direction"
          className="w-48"
        />
        <Select
          options={[
            "justify-start",
            "justify-center",
            "justify-end",
            "justify-between",
            "justify-around",
            "justify-evenly",
          ]}
          value={justifyContent}
          handler={handleJustifyContentChange}
          label="Justify Content"
          className="w-48"
        />
        <Select
          options={[
            "items-stretch",
            "items-center",
            "items-start",
            "items-end",
          ]}
          value={alignItems}
          handler={handleAlignItemsChange}
          label="Align Items"
          className="w-48"
        />
        <Select
          options={[
            "self-auto",
            "self-start",
            "self-end",
            "self-center",
            "self-stretch",
          ]}
          value={alignSelf}
          handler={handleAlignSelfChange}
          label="Align Self"
          className="w-48"
        />
        <Select
          options={["flex-wrap", "flex-nowrap", "flex-wrap-reverse"]}
          value={flexWrap}
          handler={handleFlexWrapChange}
          label="Flex Wrap"
          className="w-48"
        />
      </div>
    </section>
  );
}

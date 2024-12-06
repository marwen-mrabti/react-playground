import { cn } from "@/lib/utils";
import {
  DndContext,
  DragEndEvent,
  useDraggable,
  useDroppable,
} from "@dnd-kit/core";
import { useState } from "react";

type T_columns = {
  id: "TODO" | "IN_PROGRESS" | "DONE";
  title: string;
};

type T_tasks = {
  id: string;
  title: string;
  status: "TODO" | "IN_PROGRESS" | "DONE";
};

const columns: T_columns[] = [
  {
    id: "TODO",
    title: "Todo",
  },
  {
    id: "IN_PROGRESS",
    title: "In Progress",
  },
  {
    id: "DONE",
    title: "Done",
  },
];

const INTIAL_TASKS: T_tasks[] = [
  {
    id: "task-1",
    title: "Task 1",
    status: "TODO",
  },
  {
    id: "task-2",
    title: "Task 2",
    status: "TODO",
  },
  {
    id: "task-3",
    title: "Task 3",
    status: "IN_PROGRESS",
  },
];

export default function Draggable() {
  const [tasks, setTasks] = useState<T_tasks[]>(() => {
    if (typeof window === "undefined") return INTIAL_TASKS;
    const storedTasks = localStorage.getItem("tasks");
    const parsedTasks = storedTasks ? JSON.parse(storedTasks) : INTIAL_TASKS;
    return parsedTasks;
  });

  const handleDragEnd = (event: DragEndEvent) => {
    const { over, active } = event;

    if (over && over.id !== active.id) {
      const activeTask = tasks.find((task) => task.id === active.id);
      const activeColumn = columns.find((column) => column.id === over.id);
      if (activeTask?.status !== activeColumn?.id) {
        const newTasks = tasks.map((task) => {
          if (task.id === active.id) {
            return { ...task, status: activeColumn?.id ?? "TODO" };
          }
          return task;
        });
        setTasks(newTasks);
        localStorage.setItem("tasks", JSON.stringify(newTasks));
      }
    }
  };

  return (
    <section
      id="draggable"
      className="bg-grid container flex min-h-dvh w-full flex-col items-center justify-start gap-4 rounded-2xl px-4 py-10"
    >
      <h1 className="text-center text-4xl font-bold">Draggable</h1>

      <DndContext onDragEnd={handleDragEnd}>
        <ul className="flex w-full flex-row flex-wrap gap-4">
          {columns.map((column) => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              tasks={tasks.filter((task) => task.status === column.id)}
            />
          ))}
        </ul>
      </DndContext>
    </section>
  );
}

function Column({ id, title, tasks }: T_columns & { tasks: T_tasks[] }) {
  const { isOver, setNodeRef } = useDroppable({
    id,
  });

  return (
    <li
      ref={setNodeRef}
      className={cn(
        "bg-background-secondary/50 min-h-dvh shrink-0 grow basis-[200px] rounded-2xl px-2 py-4 shadow-lg shadow-zinc-700",
        "flex flex-col items-center justify-start gap-2 border-2 border-transparent",
        "transition-all duration-300 ease-in-out",
        { "border-violet-500": isOver },
      )}
    >
      <h2 className="text-2xl font-bold">{title}</h2>

      <ul className="grid w-full place-items-center gap-4">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </li>
  );
}

function TaskCard({ task }: { task: T_tasks }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: task.id,
  });
  const style = transform
    ? {
        transform: `translate(${transform.x}px, ${transform.y}px)`,
      }
    : undefined;

  return (
    <li
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      draggable
      className="bg-background-highlight/80 w-full cursor-grabbing rounded-lg p-2 shadow-lg shadow-slate-800"
      style={style}
    >
      <h1 className="text-2xl font-bold">{task.title}</h1>
    </li>
  );
}

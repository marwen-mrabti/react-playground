import { cn } from "@/lib/utils";
import { DndContext, DragEndEvent, useDroppable } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { useState } from "react";

type T_columns = {
  id: T_tasks["status"];
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
    if (!over) return;

    const taskId = active.id as string;
    const overId = over.id as string;

    // Find the tasks that are being dragged and dropped
    const activeTask = active.data.current?.task;
    const overTask = tasks.find((task) => task.id === overId);

    if (!activeTask) return;

    // If dropping over a column
    if (columns.find((col) => col.id === overId)) {
      const newStatus = overId as T_tasks["status"];
      if (activeTask.status !== newStatus) {
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: newStatus };
          }
          return task;
        });
        updateTasks(newTasks);
      }
      return;
    }

    // If dropping over another task
    if (overTask) {
      const activeIndex = tasks.findIndex((t) => t.id === taskId);
      const overIndex = tasks.findIndex((t) => t.id === overId);

      // If tasks are in the same column, reorder them
      if (activeTask.status === overTask.status) {
        const newTasks = arrayMove(tasks, activeIndex, overIndex);
        updateTasks(newTasks);
      } else {
        // If tasks are in different columns, move to new column
        const newTasks = tasks.map((task) => {
          if (task.id === taskId) {
            return { ...task, status: overTask.status };
          }
          return task;
        });
        updateTasks(newTasks);
      }
    }
  };

  const updateTasks = (newTasks: T_tasks[]) => {
    setTasks(newTasks);
    try {
      localStorage.setItem("tasks", JSON.stringify(newTasks));
    } catch (error) {
      console.error("Failed to save tasks to localStorage:", error);
    }
  };

  return (
    <section
      id="draggable"
      className="bg-grid isolate container flex min-h-dvh w-full flex-col items-center justify-start gap-4 rounded-2xl px-4 py-10"
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
        "bg-background-secondary/50 min-h-dvh shrink-0 grow basis-[200px] rounded-2xl px-2 py-4 shadow-md shadow-zinc-700",
        "flex flex-col items-center justify-start gap-2 border-2 border-transparent",
        "transition-all duration-200 ease-in-out",
        { "border-primary": isOver },
      )}
    >
      <h2 className="text-primary text-2xl font-bold">{title}</h2>
      <ul className="grid w-full place-items-center gap-4">
        <SortableContext
          items={tasks.map((t) => t.id)}
          strategy={verticalListSortingStrategy}
        >
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </SortableContext>
      </ul>
    </li>
  );
}

function TaskCard({ task }: { task: T_tasks }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "task",
      task,
    },
  });

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      draggable={true}
      className={cn(
        "bg-background-highlight/80 w-full cursor-grabbing rounded-lg p-2 shadow-sm shadow-slate-800",
        "hover:bg-background-highlight transition-colors duration-75 ease-linear",
        "transform transition-transform duration-10 ease-out",
        {
          "opacity-50": isDragging,
        },
      )}
      style={style}
    >
      <h1 className="text-2xl font-bold">{task.title}</h1>
    </li>
  );
}

"use client";

import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { getTasks } from "./tasks/task.api";
import { TaskCard } from "../components/task-card";
import { Task } from "@/types/task";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "completed">("all");

  const reloadTasks = async () => {
    const data = await getTasks();
    setTasks(data);
  };

  useEffect(() => {
    async function load() {
      const data = await getTasks();
      setTasks(data);
    }
    load();
  }, []);

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(search.toLowerCase()))
    .filter((task) => {
      if (filter === "pending") return !task.completed;
      if (filter === "completed") return task.completed;
      return true;
    });

  return (
    <>
      <div className="flex justify-between">
        <h1 className="text-4xl font-bold m-2">NextNestApp</h1>
        <Link href="/tasks/new" className={buttonVariants()}>
          Create Task
        </Link>
      </div>

      <input
        type="text"
        placeholder="Buscar tarea..."
        className="border p-2 rounded w-full mb-4"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className="px-3 py-1 border rounded"
        >
          Todas
        </button>

        <button
          onClick={() => setFilter("pending")}
          className="px-3 py-1 border rounded"
        >
          Pendientes
        </button>

        <button
          onClick={() => setFilter("completed")}
          className="px-3 py-1 border rounded"
        >
          Completadas
        </button>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredTasks.map((task: Task) => (
          <TaskCard task={task} key={task.id} reload={reloadTasks} />
        ))}
      </div>
    </>
  );
}

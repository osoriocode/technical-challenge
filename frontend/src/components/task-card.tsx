"use client";

import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@base-ui/react";
import { deleteTask } from "@/app/tasks/task.api";
import { useRouter } from "next/navigation";

export function TaskCard({ task, reload }: any) {
  const router = useRouter();

  async function handleRemoveTask(id: string) {
    const confirmed = window.confirm("¿Seguro que deseas eliminar esta tarea?");
    if (!confirmed) return;

    await deleteTask(id);

    reload();
  }

  return (
    <Card onClick={() => router.push(`/tasks/${task.id}`)}>
      <CardHeader>
        <CardTitle className="text-xl font-bold flex justify-between">
          {task.title}
          <span className="text-sm font-bold text-gray-500">
            {task.completed ? "Completed" : "Pending"}
          </span>
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>{task.description}</p>
      </CardContent>

      <CardFooter className="flex justify-between">
        <Button
          className={buttonVariants()}
          onClick={(e) => {
            e.stopPropagation();
            router.push(`/tasks/${task.id}/edit`);
          }}
        >
          Update
        </Button>

        <Button
          className={buttonVariants({ variant: "destructive" })}
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveTask(task.id);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}

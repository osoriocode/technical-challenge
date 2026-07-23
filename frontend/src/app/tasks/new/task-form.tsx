"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { createTask, updateTask } from "../task.api";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export function TaskForm({ task }: any) {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      title: task?.title || "",
      description: task?.description || "",
      completed: task?.completed,
    },
  });

  const router = useRouter();
  const params = useParams<{ id: string }>();

  const onSubmit = handleSubmit(async (data) => {
    const payload = {
      ...data,
      completed: data.completed ? true : false,
    };

    if (params.id) {
      await updateTask(params.id, payload);
    } else {
      await createTask({
        ...data,
        completed: data.completed ? true : false,
      });
    }

    router.push("/");
    router.refresh();
  });

  return (
    <form onSubmit={onSubmit}>
      <Label className="m-2">Task Title</Label>
      <Input {...register("title")} />

      <Label className="m-2">Description</Label>
      <Input {...register("description")} />

      {task && (
        <div className="flex items-center gap-2 mt-4">
          <input type="checkbox" {...register("completed")} />
          <Label>Completed?</Label>
        </div>
      )}
      <footer className="flex justify-between mt-2">
        <Button type="submit">
          {params.id ? "Update Task" : "Create Task"}
        </Button>
        <Link className={buttonVariants()} href="/">
          Go Back
        </Link>
      </footer>
    </form>
  );
}

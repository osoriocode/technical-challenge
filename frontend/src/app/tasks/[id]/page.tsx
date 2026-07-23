import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getTask } from "../task.api";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default async function TaskDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const task = await getTask(id);

  return (
    <div className="flex justify-center items-center h-screen">
      <Card className="w-[300px] p-6">
        <CardHeader>
          <CardTitle className="flex justify-between">
            Task:{task.title}
            <span className="text-sm font-bold text-gray-500">
              {task.completed ? "Completed" : "Pending"}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p>{task.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Link className={buttonVariants()} href="/">
            Go Back
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}

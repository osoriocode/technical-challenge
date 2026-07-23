//export const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export async function createTask(taskData: any) {
  const res = await fetch("http://localhost:4000/api/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  const data = await res.json();
  console.log(data);
}

export async function updateTask(id: string, newTask: any) {
  const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
    cache: "no-store",
  });
}

export async function getTasks() {
  const res = await fetch("http://localhost:4000/api/tasks", {
    cache: "no-store",
  });
  return await res.json();
}

export async function deleteTask(id: string) {
  const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {
    method: "DELETE",
  });
  return await res.json();
}

export async function getTask(id: string) {
  const res = await fetch(`http://localhost:4000/api/tasks/${id}`, {});
  return await res.json();
}

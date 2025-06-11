import { useState } from "react"
import { dummyTasks } from "../types/task"

export default function useTaskManager() {
  const [tasks, setTasks] = useState(dummyTasks)
  const [editingTask, setEditingTask] = useState(null)

  const addOrUpdateTask = (task) => {
    setTasks((prev) =>
      prev.some((t) => t.id === task.id)
        ? prev.map((t) => (t.id === task.id ? task : t))
        : [...prev, task]
    )
    setEditingTask(null)
  }

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id))
  }

  const updateTask = (task) => {
    setEditingTask(task)
  }

  return { tasks, editingTask, addOrUpdateTask, deleteTask, updateTask, setEditingTask }
}

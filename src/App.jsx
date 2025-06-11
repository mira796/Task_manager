import React from "react"
import Sidebar from "./components/Sidebar"
import TaskForm from "./components/TaskForm"
import TaskList from "./components/TaskList"
import StatBox from "./components/StatBox"
import { dummyTasks } from "./types/task"
import useTaskManager from "./hooks/useTaskManager"
import "./App.css"

export default function App() {
  const {
    tasks,
    editingTask,
    addOrUpdateTask,
    deleteTask,
    updateTask,
  } = useTaskManager()

  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 p-8 space-y-6 bg-gray-50">
        <h1 className="text-3xl font-extrabold text-purple-700">Task Manager</h1>
        <StatBox tasks={tasks} />
        <div className="bg-white shadow-md rounded-lg p-6">
          <TaskForm addTask={addOrUpdateTask} editingTask={editingTask} />
        </div>
        <div className="bg-white shadow-md rounded-lg p-6">
          <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
        </div>
      </main>
    </div>
  )
}

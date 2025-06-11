import React from "react"
import { format } from "date-fns"
import { FaTrash, FaEdit } from "react-icons/fa"

export default function TaskCard({ task, updateTask, deleteTask }) {
  if (!task) return null

  const formattedDate = task.createdAt
    ? format(new Date(task.createdAt), "P")
    : "Unknown"

  const statusColor = {
    "to-do": "bg-yellow-100",
    "in-progress": "bg-blue-100",
    "done": "bg-green-100"
  }[task.status] || "bg-gray-100"

  const priorityColor = {
    low: "bg-green-200",
    medium: "bg-yellow-300",
    high: "bg-red-300"
  }[task.priority] || "bg-gray-200"

  return (
    <div className="border rounded p-4 flex justify-between items-start shadow bg-white">
      <div className="flex-1">
        <h2 className="font-semibold text-lg">{task.title || "(No Title)"}</h2>
        <p className="text-sm text-gray-500">{task.description || "(No Description)"}</p>
        <p className="text-xs text-gray-400 mt-1">
          Created: {formattedDate}
        </p>
      </div>

      <div className="flex flex-col items-end gap-2 ml-4">
        <div className="flex gap-2 text-xs">
          <span className={`px-2 py-1 rounded-full ${priorityColor}`}>
            {task.priority}
          </span>
          <span className={`px-2 py-1 rounded-full ${statusColor}`}>
            {task.status}
          </span>
        </div>
        <div className="flex gap-3 text-lg">
          <button onClick={() => updateTask(task)} title="Edit Task" aria-label="Edit Task">
            <FaEdit className="cursor-pointer hover:text-blue-600" />
          </button>
          <button onClick={() => deleteTask(task.id)} title="Delete Task" aria-label="Delete Task">
            <FaTrash className="cursor-pointer text-red-500 hover:text-red-700" />
          </button>
        </div>
      </div>
    </div>
  )
}

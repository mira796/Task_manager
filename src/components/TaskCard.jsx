<<<<<<< HEAD
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
=======
// === FILE: src/components/TaskCard.jsx ===
import React from 'react';
import { Pencil, Trash } from 'lucide-react';

const TaskCard = ({ task, onDelete, onUpdateStatus, onEdit }) => {
  const handleEdit = () => {
    if (onEdit) onEdit(task);
  };

  return (
    <div className="bg-white shadow p-4 rounded mb-4">
      <h3 className="font-bold text-lg">{task.title}</h3>
      {task.description && <p>{task.description}</p>}

      <div className="flex gap-2 mt-2 flex-wrap">
        {task.status && (
          <span className="bg-blue-200 px-2 rounded text-sm">{task.status}</span>
        )}
        {task.priority && (
          <span className="bg-yellow-200 px-2 rounded text-sm">{task.priority}</span>
        )}
        {task.dueDate && (
          <span className="bg-green-200 px-2 rounded text-sm">Due: {task.dueDate}</span>
        )}
      </div>

      <div className="mt-2 flex gap-2 items-center flex-wrap">
        {task.status !== 'in-progress' && (
          <button
            className="border px-2 py-1 rounded"
            onClick={() => onUpdateStatus(task.id, 'in-progress')}
          >
            In Progress
          </button>
        )}
        {task.status !== 'done' && (
          <button
            className="border px-2 py-1 rounded"
            onClick={() => onUpdateStatus(task.id, 'done')}
          >
            Done
          </button>
        )}
        {onEdit && (
          <button
            className="text-blue-500 flex items-center gap-1 ml-auto"
            onClick={handleEdit}
          >
            <Pencil size={16} />
          </button>
        )}
        <button
          className="text-red-500 flex items-center gap-1"
          onClick={() => onDelete(task.id)}
        >
          <Trash size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
>>>>>>> 2ca2546dcd354b278bcbb647febf4beccdb8cf53

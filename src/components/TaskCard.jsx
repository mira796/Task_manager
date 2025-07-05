import React from 'react';
import { format } from 'date-fns';
import { Pencil, Trash } from 'lucide-react';

const TaskCard = ({ task, onDelete, onUpdateStatus, onEdit }) => {
  if (!task) return null;

  const formattedDate = task.createdAt
    ? format(new Date(task.createdAt), 'P')
    : 'Unknown';

  const statusColor = {
    'todo': 'bg-yellow-100',
    'in-progress': 'bg-blue-100',
    'done': 'bg-green-100',
  }[task.status] || 'bg-gray-100';

  const priorityColor = {
    low: 'bg-green-200',
    medium: 'bg-yellow-300',
    high: 'bg-red-300',
  }[task.priority] || 'bg-gray-200';

  return (
    <div className="bg-white shadow p-4 rounded mb-4 flex justify-between items-start">
      <div className="flex-1">
        <h3 className="font-bold text-lg">{task.title || '(No Title)'}</h3>
        <p className="text-gray-500 text-sm">{task.description || '(No Description)'}</p>
        <p className="text-xs text-gray-400 mt-1">Created: {formattedDate}</p>
        {task.dueDate && (
          <p className="text-xs text-green-700 mt-1">Due: {task.dueDate}</p>
        )}
        <div className="flex gap-2 mt-2 flex-wrap text-xs">
          <span className={`px-2 py-1 rounded-full ${priorityColor}`}>{task.priority}</span>
          <span className={`px-2 py-1 rounded-full ${statusColor}`}>{task.status}</span>
        </div>
      </div>

      <div className="flex flex-col items-end gap-2 ml-4">
        <div className="flex gap-2 flex-wrap">
          {task.status !== 'in-progress' && (
            <button
              className="border px-2 py-1 rounded text-xs"
              onClick={() => onUpdateStatus(task.id, 'in-progress')}
            >
              In Progress
            </button>
          )}
          {task.status !== 'done' && (
            <button
              className="border px-2 py-1 rounded text-xs"
              onClick={() => onUpdateStatus(task.id, 'done')}
            >
              Done
            </button>
          )}
        </div>

        <div className="flex gap-3 text-lg">
          <button onClick={() => onEdit(task)} title="Edit Task" aria-label="Edit Task">
            <Pencil className="cursor-pointer hover:text-blue-600" size={16} />
          </button>
          <button onClick={() => onDelete(task.id)} title="Delete Task" aria-label="Delete Task">
            <Trash className="cursor-pointer text-red-500 hover:text-red-700" size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;

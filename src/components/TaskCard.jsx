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

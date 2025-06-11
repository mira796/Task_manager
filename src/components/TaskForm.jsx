// === FILE: src/components/TaskForm.jsx ===
import { useState, useEffect } from 'react';
import { Pencil } from 'lucide-react';

const TaskForm = ({ onAdd, onUpdate, isEditing, editingTask, cancelEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [dueDate, setDueDate] = useState('');

  useEffect(() => {
    if (isEditing && editingTask) {
      setTitle(editingTask.title || '');
      setDescription(editingTask.description || '');
      setPriority(editingTask.priority || 'medium');
      setDueDate(editingTask.dueDate || '');
    } else {
      setTitle('');
      setDescription('');
      setPriority('medium');
      setDueDate('');
    }
  }, [isEditing, editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const taskData = { title, description, priority, dueDate };

    if (isEditing) {
      onUpdate({ ...editingTask, ...taskData });
    } else {
      onAdd(taskData);
    }

    setTitle('');
    setDescription('');
    setPriority('medium');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-wrap gap-2 p-4 items-center">
      <input
        className="border p-2 rounded w-full md:w-1/4"
        placeholder="Task title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        className="border p-2 rounded w-full md:w-1/4"
        placeholder="Description (optional)"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <select
        className="border p-2 rounded"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="date"
        className="border p-2 rounded"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />
      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        {isEditing ? (
          <span className="flex items-center gap-1">
            <Pencil size={16} /> Update Task
          </span>
        ) : (
          'Add Task'
        )}
      </button>
      {isEditing && (
        <button
          type="button"
          onClick={cancelEdit}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Cancel
        </button>
      )}
    </form>
  );
};

export default TaskForm;

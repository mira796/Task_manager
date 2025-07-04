<<<<<<< HEAD
import React, { useState, useEffect } from "react"

/**
 * @param {{
 *  addTask: (task: object) => void,
 *  editingTask: object | null
 * }} props
 */
export default function TaskForm({ addTask, editingTask }) {
  const [title, setTitle] = useState("")
  const [desc, setDesc] = useState("")
  const [priority, setPriority] = useState("medium")
  const [status, setStatus] = useState("to-do")

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title || "")
      setDesc(editingTask.description || "")
      setPriority(editingTask.priority || "medium")
      setStatus(editingTask.status || "to-do")
    }
  }, [editingTask])

  const resetForm = () => {
    setTitle("")
    setDesc("")
    setPriority("medium")
    setStatus("to-do")
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (!title.trim()) return

    const task = {
      id: editingTask?.id ?? Date.now(),
      title: title.trim(),
      description: desc.trim(),
      priority,
      status,
      createdAt: editingTask?.createdAt ?? new Date().toISOString(),
    }

    addTask(task)

    // Hanya reset jika sedang menambah, bukan saat update
    if (!editingTask) resetForm()
  }

  return (
    <form onSubmit={onSubmit} className="flex gap-2 mb-4 flex-wrap">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 rounded flex-grow"
        placeholder="Title"
        required
      />
      <input
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 rounded flex-grow"
        placeholder="Description"
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        className="border p-2 rounded"
=======
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
>>>>>>> 2ca2546dcd354b278bcbb647febf4beccdb8cf53
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
<<<<<<< HEAD
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="to-do">To-Do</option>
        <option value="in-progress">In Progress</option>
        <option value="done">Completed</option>
      </select>
      <button
        type="submit"
        className="bg-purple-600 px-4 py-2 rounded text-white hover:bg-purple-700"
      >
        {editingTask ? "Update" : "+ Add"}
      </button>
    </form>
  )
}
=======
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
>>>>>>> 2ca2546dcd354b278bcbb647febf4beccdb8cf53

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
      >
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
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

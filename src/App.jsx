// === FILE: src/App.jsx ===
import { useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const addTask = (task) => {
    const newTask = { ...task, id: Date.now(), createdAt: new Date().toISOString(), status: task.status || 'to-do' };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
    setIsEditing(false);
    setEditingTask(null);
  };

  const startEditTask = (task) => {
    setIsEditing(true);
    setEditingTask(task);
  };

  const countByStatus = (status) => tasks.filter((task) => task.status === status).length;

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-purple-700 text-white p-6 space-y-6">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <span>📋</span> Task Manager
        </h1>
        <nav className="flex flex-col space-y-2">
          <button className="hover:bg-purple-600 p-2 rounded text-left">Dashboard</button>
          <button className="hover:bg-purple-600 p-2 rounded text-left">Tasks</button>
          <button className="hover:bg-purple-600 p-2 rounded text-left">Settings</button>
        </nav>
      </aside>

      {/* Content */}
      <main className="flex-1 p-6 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">Task Manager</h2>

        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-100 p-4 rounded text-center font-semibold">{countByStatus('to-do')} <br /> To Do</div>
          <div className="bg-blue-100 p-4 rounded text-center font-semibold">{countByStatus('in-progress')} <br /> In Progress</div>
          <div className="bg-green-100 p-4 rounded text-center font-semibold">{countByStatus('done')} <br /> Completed</div>
        </div>

        {/* Form */}
        <TaskForm
          onAdd={addTask}
          onUpdate={updateTask}
          isEditing={isEditing}
          editingTask={editingTask}
          cancelEdit={() => {
            setIsEditing(false);
            setEditingTask(null);
          }}
        />

        {/* Task List */}
        <TaskList tasks={tasks} onDelete={deleteTask} onUpdateStatus={updateTask} onEdit={startEditTask} />
      </main>
    </div>
  );
}

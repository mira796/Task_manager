// === FILE: src/App.jsx ===
import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { loadTasks, saveTasks } from './data/taskStorage';

function App() {
  const [tasks, setTasks] = useState([]);
  const [editingTask, setEditingTask] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setTasks(loadTasks());
  }, []);

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { ...task, id: uuidv4(), status: 'todo' }]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((t) => (t.id === updatedTask.id ? { ...t, ...updatedTask } : t)));
    setEditingTask(null);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const updateStatus = (id, status) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, status } : t)));
  };

  const handleEdit = (task) => {
    setEditingTask(task);
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-bold p-4">XP Task Manager</h1>

      <div className="px-4 pb-2">
        <input
          type="text"
          placeholder="Search by task name..."
          value={searchQuery}
          onChange={handleSearch}
          className="border p-2 rounded w-full md:w-1/3"
        />
      </div>

      <TaskForm
        onAdd={addTask}
        onUpdate={updateTask}
        editingTask={editingTask}
        isEditing={!!editingTask}
        cancelEdit={() => setEditingTask(null)}
      />
      <TaskList
        tasks={filteredTasks}
        onDelete={deleteTask}
        onUpdateStatus={updateStatus}
        onEdit={handleEdit}
      />
    </div>
  );
}

export default App;

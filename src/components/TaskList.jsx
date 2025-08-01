// === FILE: src/components/TaskList.jsx ===
import { useState } from 'react';
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onUpdateStatus, onEdit }) => {
  const [search, setSearch] = useState('');
  const [fStatus, setFStatus] = useState('all');
  const [fPriority, setFPriority] = useState('all');

  const filtered = tasks.filter((t) =>
    t.title.toLowerCase().includes(search.toLowerCase()) &&
    (fStatus === 'all' || t.status === fStatus) &&
    (fPriority === 'all' || t.priority === fPriority)
  );

  return (
    <>
      <div className="flex gap-2 mb-4 flex-wrap">
        <input
          type="text"
          placeholder="Search..."
          className="border p-2 rounded flex-grow"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2 rounded"
          value={fStatus}
          onChange={(e) => setFStatus(e.target.value)}
        >
          <option value="all">All Status</option>
          <option value="todo">To-Do</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Completed</option>
        </select>

        <select
          className="border p-2 rounded"
          value={fPriority}
          onChange={(e) => setFPriority(e.target.value)}
        >
          <option value="all">All Priority</option>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
      </div>

      <div className="space-y-4">
        {filtered.length === 0 ? (
          <p className="text-gray-500 italic">No tasks found.</p>
        ) : (
          filtered.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onDelete={onDelete}
              onUpdateStatus={onUpdateStatus}
              onEdit={onEdit}
            />
          ))
        )}
      </div>
    </>
  );
};

export default TaskList;

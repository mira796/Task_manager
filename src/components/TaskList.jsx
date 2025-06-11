// === FILE: src/components/TaskList.jsx ===
import TaskCard from './TaskCard';

const TaskList = ({ tasks, onDelete, onUpdateStatus, onEdit }) => {
  return (
    <div className="p-4">
      {tasks.map((task) => (
        <TaskCard
          key={task.id}
          task={task}
          onDelete={onDelete}
          onUpdateStatus={onUpdateStatus}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default TaskList;

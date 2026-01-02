import TaskItem from './TaskItem';

const TaskList = ({ tasks, onUpdate, onDelete, loading }) => {
  if (loading) {
    return <div className="loading">Loading tasks...</div>;
  }

  if (tasks.length === 0) {
    return (
      <div className="task-list">
        <h2>Your Tasks</h2>
        <div className="no-tasks">
          📋 No tasks yet. Create your first task above!
        </div>
      </div>
    );
  }

  // Separate tasks by status
  const pendingTasks = tasks.filter(task => task.status === 'pending');
  const completedTasks = tasks.filter(task => task.status === 'completed');

  return (
    <div className="task-list">
      <h2>Your Tasks ({tasks.length})</h2>
      
      {pendingTasks.length > 0 && (
        <div className="task-section">
          {pendingTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}

      {completedTasks.length > 0 && (
        <div className="task-section">
          {completedTasks.map((task) => (
            <TaskItem
              key={task._id}
              task={task}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
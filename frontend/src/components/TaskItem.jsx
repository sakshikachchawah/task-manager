import { useState } from 'react';

const TaskItem = ({ task, onUpdate, onDelete }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: task.title,
    description: task.description
  });

  const handleUpdate = async () => {
    await onUpdate(task._id, editData);
    setIsEditing(false);
  };

  const toggleStatus = async () => {
    const newStatus = task.status === 'pending' ? 'completed' : 'pending';
    await onUpdate(task._id, { status: newStatus });
  };

  if (isEditing) {
    return (
      <div className="task-item editing">
        <input
          type="text"
          value={editData.title}
          onChange={(e) => setEditData({ ...editData, title: e.target.value })}
        />
        <textarea
          value={editData.description}
          onChange={(e) => setEditData({ ...editData, description: e.target.value })}
          rows="3"
        />
        <div className="task-actions">
          <button onClick={handleUpdate} className="btn-save">Save</button>
          <button onClick={() => setIsEditing(false)} className="btn-cancel">Cancel</button>
        </div>
      </div>
    );
  }

  return (
    <div className={`task-item ${task.status}`}>
      <div className="task-content">
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        <span className="task-status">{task.status}</span>
        <small className="task-date">
          {new Date(task.createdAt).toLocaleString()}
        </small>
      </div>
      
      <div className="task-actions">
        <button onClick={toggleStatus} className="btn-toggle">
          {task.status === 'pending' ? '✓ Complete' : '↺ Undo'}
        </button>
        <button onClick={() => setIsEditing(true)} className="btn-edit">Edit</button>
        <button onClick={() => onDelete(task._id)} className="btn-delete">Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
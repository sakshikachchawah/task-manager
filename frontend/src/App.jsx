import { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { getTasks, createTask, updateTask, deleteTask } from './services/api';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Fetch tasks on component mount
  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    setLoading(true);
    setError('');
    
    try {
      const response = await getTasks();
      setTasks(response.data.data);
    } catch (err) {
      setError('Failed to fetch tasks. Make sure backend is running.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateTask = async (taskData) => {
    try {
      const response = await createTask(taskData);
      setTasks([response.data.data, ...tasks]); // Add new task to top
    } catch (err) {
      console.error(err);
      throw err;
    }
  };

  const handleUpdateTask = async (id, taskData) => {
    try {
      const response = await updateTask(id, taskData);
      setTasks(tasks.map(task => 
        task._id === id ? response.data.data : task
      ));
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      try {
        await deleteTask(id);
        setTasks(tasks.filter(task => task._id !== id));
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <div className="App">
      <header>
        <h1>📝 Task Manager</h1>
        <p>Manage your daily tasks efficiently</p>
      </header>

      <div className="container">
        {error && <div className="error-banner">{error}</div>}

        <TaskForm onTaskCreated={handleCreateTask} />
        
        <TaskList
          tasks={tasks}
          onUpdate={handleUpdateTask}
          onDelete={handleDeleteTask}
          loading={loading}
        />
      </div>
    </div>
  );
}

export default App;
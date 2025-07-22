import { useState } from 'react'
import TaskList from './components/TaskList'
import './App.css'
interface TaskType {
  id: number;
  title: string;
}
function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, title: 'Изучить React' },
    { id: 2, title: 'Создать Task Manager' },
    { id: 3, title: 'Добавить стили' }
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const handleAddTask = () => {
    if (newTaskTitle.trim()) {
      const newTask = {
        id: Date.now(),
        title: newTaskTitle.trim()
      };
      setTasks([...tasks, newTask]);
      setNewTaskTitle('');
    }
  };
  const handleEditTask = (updatedTask: TaskType) => {
    setTasks(tasks.map(task => task.id === updatedTask.id ? updatedTask : task));
  };
  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };
  return (
    <div className="container">
      <h1 className="app-title">Task Manager</h1>
      <div className="add-task-section">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Введите новую задачу..."
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleAddTask()}
          />
          <button
            className="btn btn-primary"
            onClick={handleAddTask}
            disabled={!newTaskTitle.trim()}
          >
            Добавить задачу
          </button>
        </div>
      </div>
      <div className="tasks-section">
        {tasks.length === 0 ? (
          <p className="no-tasks">Задач нет. Добавьте новую задачу!</p>
        ) : (
          <TaskList
            tasks={tasks}
            handleEditTask={handleEditTask}
            handleDeleteTask={handleDeleteTask}
          />
        )}
      </div>
    </div>
  )
}
export default App




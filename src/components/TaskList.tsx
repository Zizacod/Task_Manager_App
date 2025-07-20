import Task from './Task';

interface TaskType {
    id: number;
    title: string;
}

interface TaskListProps {
    tasks: TaskType[];
    handleEditTask: (task: TaskType) => void;
    handleDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, handleEditTask, handleDeleteTask }) => {
    return (
        <>
            {tasks.map((task) => (
                <div key={task.id} className="task-item">
                    <Task
                        task={task}
                        handleEditTask={handleEditTask}
                        handleDeleteTask={handleDeleteTask}
                    />
                </div>
            ))}
        </>
    )
}

export default TaskList;
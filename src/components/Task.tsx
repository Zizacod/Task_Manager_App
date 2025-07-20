import { useRef, useState, type FC } from "react";
interface TaskType {
    id: number;
    title: string;
}
interface IProps {
    task: TaskType;
    handleEditTask: (task: TaskType) => void;
    handleDeleteTask: (id: number) => void;
}
const Task: FC<IProps> = ({ task, handleEditTask, handleDeleteTask }) => {
    const [isEdit, setIsEdit] = useState(false);
    // const [task, setTask] = React.useState('Task 1');

    // 1. Создание абстрактной (не связанной с конкретным элементом) ссылки 
    const inputRef = useRef<HTMLInputElement | null>(null);

    return isEdit ? (
        <div className="input-group">
            {/* 2. Соединение абстрактной ссылки с конкретным элементом */}
            <input className="form-control" ref={inputRef} type="text" defaultValue={task.title} />
            <button onClick={() => {
                // setTask(inputRef.current.value);
                if (inputRef.current) {
                    handleEditTask({ ...task, title: inputRef.current.value });
                }
                setIsEdit(false);
            }} className="btn btn-success input-group-text">Save</button>
        </div>
    ) : (
        <>
            <p>{task.title}</p>
            <button className="btn btn-warning" onClick={() => setIsEdit(true)}>Edit</button>
            <button onClick={() => handleDeleteTask(task.id)} className="btn btn-danger">Delete</button>
        </>
    )
}


export default Task;
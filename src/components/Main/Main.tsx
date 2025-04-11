import styles from './Main.module.scss';
import TaskList from "../TaskList/TaskList.tsx";
import React, {FC, useState} from "react";
import {task, TasksList} from "../../types/types.ts";
import Modal from "../Modal/Modal.tsx";

type MainProps = {
    tasksList: TasksList;
    setTasksList: React.Dispatch<React.SetStateAction<TasksList>>;
}

const Main: FC<MainProps> = ({tasksList, setTasksList}) => {

    const [isOpened, setIsOpened] = useState<boolean>(false)
    const [taskTitle, setTaskTitle] = useState<string>('')
    const [taskDescription, setTaskDescription] = useState<string>('')

    const addTask = () => {
        const newTask: task = {
            id: Date.now(),
            title: taskTitle,
            description: taskDescription
        }
        setTasksList(prevTasks => [newTask, ...prevTasks]);
        setIsOpened(false)
        setTaskTitle('')
        setTaskDescription('')
    }

    return (
        <main className={styles.main}>
            <div className={styles.container}>
                <h1>
                    {tasksList.length
                        ? `Ваши задачи: ${tasksList.length}`
                        : 'Здесь будут ваши задачи'}
                </h1>
                <button onClick={() => setIsOpened(true)}>Добавить задачу</button>
            </div>
            <TaskList tasksList={tasksList} setTasksList={setTasksList}/>
            <Modal isOpened={isOpened} setIsOpened={setIsOpened}>
                <h2>Новая задача</h2>
                <div className={styles.inputContainer}>
                    <input
                        value={taskTitle}
                        className={styles.input}
                        type="text"
                        placeholder="Название задачи"
                        onChange={(e) => {setTaskTitle(e.target.value)}}
                    />
                    <input
                        value={taskDescription}
                        className={styles.input}
                        type="text"
                        placeholder="Описание задачи"
                        onChange={(e) => {setTaskDescription(e.target.value)}}
                    />
                </div>
                    <button onClick={addTask}>Добавить задачу</button>
            </Modal>
        </main>
    );
};

export default Main;
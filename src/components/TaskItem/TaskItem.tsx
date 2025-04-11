import styles from "./TaskItem.module.scss"
import React, {FC} from "react";
import {task, TasksList} from "../../types/types.ts";

type TaskItemProps = {
    taskItem: task;
    tasksList: TasksList;
    setTasksList: React.Dispatch<React.SetStateAction<TasksList>>;
}

const TaskItem: FC<TaskItemProps> = ({taskItem, tasksList, setTasksList}) => {

    const deleteTask = () => {
        setTasksList(tasksList.filter(task => taskItem.id !== task.id))
    }

    return (
        <li className={styles.task}>
            <div>
                <h3>{taskItem.title}</h3>
                <p>{taskItem.description}</p>
            </div>
            <button onClick={deleteTask}>Удалить</button>
        </li>
    );
};

export default TaskItem;
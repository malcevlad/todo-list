import styles from "./TaskItem.module.scss"
import {FC} from "react";
import {task} from "../../types/types.ts";

type TaskItemProps = {
    taskItem: task;
}

const TaskItem: FC<TaskItemProps> = ({taskItem}) => {
    return (
        <li className={styles.task}>
            <h3>{taskItem.title}</h3>
            <p>{`id: ${taskItem.id}`}</p>
        </li>
    );
};

export default TaskItem;
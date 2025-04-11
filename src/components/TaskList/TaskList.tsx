import styles from './TaskList.module.scss';
import TaskItem from "../TaskItem/TaskItem.tsx";
import {FC} from "react";
import {TasksList} from "../../types/types.ts";

type TaskListProps = {
    tasksList: TasksList
}

const TaskList: FC<TaskListProps> = ({tasksList}) => {
    return (
        <ul className={styles.tasks}>{
                tasksList.map((task) => <TaskItem key={task.id} taskItem={task}/>)}
        </ul>
    );
};

export default TaskList;
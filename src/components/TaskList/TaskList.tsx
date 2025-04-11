import styles from './TaskList.module.scss';
import TaskItem from "../TaskItem/TaskItem.tsx";
import React, {FC} from "react";
import {TasksList} from "../../types/types.ts";

type TaskListProps = {
    tasksList: TasksList;
    setTasksList: React.Dispatch<React.SetStateAction<TasksList>>;
}

const TaskList: FC<TaskListProps> = ({tasksList, setTasksList}) => {
    return (
        <ul className={styles.tasks}
        >{tasksList.map((task) =>
                    <TaskItem
                        key={task.id}
                        taskItem={task}
                        tasksList={tasksList}
                        setTasksList={setTasksList}
                    />
                )}
        </ul>
    );
};

export default TaskList;
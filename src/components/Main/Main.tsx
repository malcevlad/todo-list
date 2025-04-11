import styles from './Main.module.scss';
import TaskList from "../TaskList/TaskList.tsx";
import {FC} from "react";
import {TasksList} from "../../types/types.ts";

type MainProps = {
    tasksList: TasksList
}

const Main: FC<MainProps> = ({tasksList}) => {
    return (
        <main className={styles.main}>
            <h1>
                {tasksList.length
                    ? `Ваши задачи: ${tasksList.length}`
                    : 'Здесь будут ваши задачи'}
            </h1>
            <TaskList tasksList={tasksList} />
        </main>
    );
};

export default Main;
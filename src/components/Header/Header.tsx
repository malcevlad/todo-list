import React, { useRef} from 'react';
import styles from "./Header.module.scss";
import logo from "../../assets/todo-list-svgrepo-com.svg"
import {FC} from "react";
import {task, TasksList} from "../../types/types.ts";

type HeaderProps = {
    setTasksList: React.Dispatch<React.SetStateAction<TasksList>>;
}

const Header: FC<HeaderProps> = ({setTasksList}) => {

    const ref = useRef<HTMLInputElement>(null);

    const addTask = () => {
        if(ref.current && ref.current.value.trim()) {
            const newTask: task = {
                id: Date.now(),
                title: ref.current?.value,
            }
            setTasksList(prevTasks => [newTask, ...prevTasks]);
            ref.current.value = ''
        }
    }


    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <a href="#">
                    <img className={styles.logo} src={logo} alt="logo"/>
                </a>
                <div>
                    <input
                        ref={ref}
                        className={styles.input}
                        type="text"
                    />
                    <button
                        type="button"
                        onClick={addTask}
                    >Добавить задачу</button>
                </div>
            </div>
        </header>
    );
};

export default Header;
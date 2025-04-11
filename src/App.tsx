import './App.css'
import Header from "./components/Header/Header.tsx";
import {useEffect, useState} from "react";
import Main from "./components/Main/Main.tsx";
import {TasksList} from './types/types.ts'

function App() {

    const [tasksList, setTasksList] = useState<TasksList>([]);

    useEffect(() => {
        console.log(tasksList)
    }, [tasksList])

  return (
    <>
        <Header
            setTasksList={setTasksList}
        />
        <Main tasksList={tasksList} />
    </>
  )
}

export default App

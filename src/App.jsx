import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import ModalComponent from "./components/Modal/ModalComponent";

function App() {
  const [tasks, setTasks] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const handleTasksModal = () => {
    setOpenModal(true);
  };

  const closeModal = () =>{
    setOpenModal(false);
  }

  const saveTasks = (taskObject) =>{

    const newSavedTasks = [...tasks, taskObject];
    setTasks(newSavedTasks);
  }

  const deleteTask = (idx) =>{
    const remainingTasks = tasks.filter(taskItem=>tasks.indexOf(taskItem)!=idx);
    setTasks(remainingTasks);
  }

  const editTask = (editedTask, idx) =>{
    let tempTask = [...tasks];
    tempTask[idx] = editedTask;
    setTasks(tempTask);
  } 
  return (
    <div className="max-w-[80%] bg-slate-400 mx-auto min-h-[80vh] flex flex-col items-center border-2 mt-8">
      <button
        type="button"
        onClick={handleTasksModal}
        className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
      >
        Add a new task
      </button>

      <Tasks tasks={tasks} editTask={editTask} deleteTask = {deleteTask}></Tasks>

      {<ModalComponent openModal={openModal} closeModal={closeModal} saveTasks={saveTasks}  ></ModalComponent>}
    </div>
  );
}
export default App;

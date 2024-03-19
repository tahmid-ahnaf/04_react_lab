import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";
import EditModalComponent from "../Modal/EditModalComponent";
import { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
const Task = ({index, task, editTask, deleteTask}) => {
  const { title, description } = task;
  const [openModal, setOpenModal] = useState(false);

  const handleTasksModal = () => {
    setOpenModal(true);
  };

  const closeModal = () =>{
    setOpenModal(false);
  }
  return (
    <div>
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      <p className="font-normal text-gray-700 ">{description}</p>

      <div className="flex gap-4">
        <Button color="success" onClick={handleTasksModal}>Edit</Button>
        <Button color="failure" onClick={()=>deleteTask(index)}> <RiDeleteBin6Line className="mr-2" /> Delete</Button>
      </div>
    </Card>

    <EditModalComponent openModal={openModal} closeModal={closeModal} task={task} editTask={editTask} index={index} ></EditModalComponent>
    </div>
    

  );
};

Task.propTypes = {
  task: PropTypes.object,
  index: PropTypes.number,
  deleteTask: PropTypes.func,
  editTask: PropTypes.func
};
export default Task;

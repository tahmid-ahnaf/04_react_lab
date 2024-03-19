import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import PropTypes from 'prop-types';

const ModalComponent = ({openModal, closeModal,saveTasks}) => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const handleChange = (e) =>{

    const {name, value} = e.target;

    if(name === "taskTitle")
    {
      setTaskTitle(value);
    }
    else{
      setTaskDescription(value);
    }

  }

  const handleSave = () =>{
    let taskObject = {};
    taskObject["title"] = taskTitle;
    taskObject["description"] = taskDescription;
    saveTasks(taskObject);
    closeModal();
  }
  return (
    <div>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>Add New Task</Modal.Header>
        <Modal.Body>
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="Task Title" />
        </div>
        <TextInput type="text" value={taskTitle} onChange={handleChange} placeholder="Give your task title" name="taskTitle" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="Task Description" />
        </div>
        <TextInput type="text" value={taskDescription} onChange={handleChange} required name="taskDescription" placeholder="Give task description" />
      </div>
    </form>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" onClick={handleSave}>Set Task</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

ModalComponent.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  saveTasks: PropTypes.func,
  deleteTask:PropTypes.func
}
export default ModalComponent;

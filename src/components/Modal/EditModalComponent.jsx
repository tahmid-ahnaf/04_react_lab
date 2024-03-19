import { Button, Modal, Label, TextInput } from "flowbite-react";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

const EditModalComponent = ({openModal, closeModal,task, editTask, index}) => {

  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  useEffect(() =>{
    setTaskTitle(task.title);
    setTaskDescription(task.description);
  },[]);


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

  const handleEdit = (e) =>{
    e.preventDefault();
    let editedTaskObject = {};
    editedTaskObject["title"] = taskTitle;
    editedTaskObject["description"] = taskDescription;
    editTask(editedTaskObject, index);
    closeModal();
  }
  return (
    <div>
      <Modal show={openModal} onClose={closeModal}>
        <Modal.Header>Edit Task</Modal.Header>
        <Modal.Body>
        <form className="flex max-w-md flex-col gap-4">
      <div>
        <div className="mb-2 block">
          <Label value="New Title" />
        </div>
        <TextInput type="text" value={taskTitle} onChange={handleChange} placeholder="Give your task a new title" name="taskTitle" required />
      </div>
      <div>
        <div className="mb-2 block">
          <Label value="New Description" />
        </div>
        <TextInput type="text" value={taskDescription} onChange={handleChange} required name="taskDescription" placeholder="Give new task description" />
      </div>
    </form>
        </Modal.Body>
        <Modal.Footer>
        <Button type="submit" onClick={handleEdit}>Update Task</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

EditModalComponent.propTypes = {
  openModal: PropTypes.bool,
  closeModal: PropTypes.func,
  editTask:PropTypes.func,
  deleteTask:PropTypes.func,
  task:PropTypes.object.isRequired,
  index:PropTypes.number
}
export default EditModalComponent;

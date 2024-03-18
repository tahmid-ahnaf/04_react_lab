import { Card, Button } from "flowbite-react";
import PropTypes from "prop-types";

const Task = ({index, task, deleteTask}) => {
  const { title, description } = task;
  return (
    <Card href="#" className="max-w-sm">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 ">
        {title}
      </h5>
      <p className="font-normal text-gray-700 ">{description}</p>

      <div className="flex gap-4">
        <Button color="success">Edit</Button>
        <Button color="failure" onClick={()=>deleteTask(index)}>Delete</Button>
      </div>
    </Card>
  );
};

Task.propTypes = {
  task: PropTypes.object,
  index:PropTypes.number,
  deleteTask:PropTypes.func
};
export default Task;

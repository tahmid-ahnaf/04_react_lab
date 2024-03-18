import Task from "../Task/Task";
import PropTypes from 'prop-types';

const Tasks = ({tasks,deleteTask}) => {
    return (
        <div className="grid grid-cols-3 gap-4">

        {
            tasks.map((task, idx) => <Task key={idx} index={idx} task={task} deleteTask = {deleteTask}></Task>)
        }

            
        </div>
    );
};

Tasks.propTypes = {
    tasks: PropTypes.array,
    deleteTask:PropTypes.func
}
export default Tasks;
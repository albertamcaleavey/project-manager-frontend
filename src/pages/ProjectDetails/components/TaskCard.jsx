import './TaskCard.css'
import moment from 'moment';

const TaskCard = ({task, addCompletedTask}) => {
  // let currentDate = new Date()

  return (  
    <div className='task-card'>
      <p>{task?.description}</p>
      <h6>{moment(task?.date).format("MMM Do YY")}</h6>
      <p>{task?.complete ? 'true' : 'false'}</p>
    </div>
  );
}
 
export default TaskCard;
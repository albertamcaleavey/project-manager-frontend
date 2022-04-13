import './TaskCard.css'
import moment from 'moment';

const TaskCard = ({task}) => {
  // let currentDate = new Date()

  return (  
    <div className='task-card'>
      <h6>{moment(task?.date).format("MMM Do YY")}</h6>
      <p>{task?.description}</p>
      {/* <p>{task?.complete ? 'true' : 'false'}</p> */}
    </div>
  );
}
 
export default TaskCard;
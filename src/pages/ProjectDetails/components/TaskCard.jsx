import './TaskCard.css'
import moment from 'moment';

const TaskCard = ({task}) => {

  return (  
    <div className='task-card'>
      <h6>{moment(task?.date).add(1, 'days').format("MMM Do YY").toString()}</h6>
      <p>◻︎ {task?.description}</p>
    </div>
  );
}

export default TaskCard;
import './TaskCard.css'

const TaskCard = ({task}) => {
  let currentDate = new Date()
  
  return (  
    <div className='task-card'>
      <p>{task?.description}</p>
      {/* <h6>{task?.date}</h6> */}
    </div>
  );
}
 
export default TaskCard;
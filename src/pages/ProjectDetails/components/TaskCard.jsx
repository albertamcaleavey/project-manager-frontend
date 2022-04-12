
const TaskCard = ({task}) => {
  let currentDate = new Date()
  
  return (  
    <div>
      <h3>{task?.description}</h3>
      <h6>{task?.date}</h6>
    </div>
  );
}
 
export default TaskCard;
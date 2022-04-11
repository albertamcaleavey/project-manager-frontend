const TaskCard = ({project}) => {
  return (  
    <>
    <div>
      {project?.project?.tasks?.map((task) => (
        <div key={task.id}>
          <h3>{task.description}</h3>
          <h6>{task.date}</h6>
        </div>
      ))}
    </div>
    </>
  );
}
 
export default TaskCard;
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne } from '../../services/projectService'
import './ProjectDetails.css'

const ProjectDetails = ({handleDeleteProject}) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)

  // let renderAddTaskForm = false
  
  // function handleBtnClick() {
  //   renderAddTaskForm = true
  //   console.log(renderAddTaskForm)
  // }
  // console.log(renderAddTaskForm)


  useEffect(() => {
    const fetchOne = async () => {
      getOne(id)
      .then(data => setProject(data))
    }
    fetchOne()
  }, [id])

  let currentDate = new Date()

  return (  
    <>
    <button
    className="delete-btn" 
    onClick={() => handleDeleteProject(project?.project?.id)}
    >🗑</button>

    {/* <button onClick={handleBtnClick()}>add task</button>
    {renderAddTaskForm === false ? '' : 
    } */}
    <AddTaskForm project={project} setProject={setProject} />
    

    <div>
      {project?.project?.tasks?.map((task)=> (
        <div key={task.id}>
          {task.date !== currentDate ? 'no' : 'yes'}
        {/* <label htmlFor="checkbox-input">complete?</label>
        <input 
        onClick={handleClick}
        type="checkbox"
        name="complete"
        value={false}
        /> */}
        <TaskCard 
        task={task}
        project={project}
        />
        </div>
        
      ))}      
    </div>
    </>
  );
}
 
export default ProjectDetails;
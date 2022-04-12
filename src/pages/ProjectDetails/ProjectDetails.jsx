import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne } from '../../services/projectService'
import './ProjectDetails.css'

const ProjectDetails = ({handleDeleteProject}) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [formStatus, setFormStatus] = useState(false)
  console.log(formStatus)

  function handleClick(){
    setFormStatus(true)
  }

  useEffect(() => {
    const fetchOne = async () => {
      getOne(id)
      .then(data => setProject(data))
    }
    fetchOne()
  }, [id])

  return (  
    <main>

    <button
    className="delete-btn" 
    onClick={() => handleDeleteProject(project?.project?.id)}
    >🗑</button>
    {formStatus === true ? 
    <AddTaskForm 
    project={project} 
    setProject={setProject}
    setFormStatus={setFormStatus}
    />
    :
    ''
    }

    <button onClick={handleClick}>add task</button>

    <h2>To Do:</h2>
    <div>
      {project?.project?.tasks?.map((task)=> (
        <div key={task.id}>
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
    </main>
  );
}
 
export default ProjectDetails;
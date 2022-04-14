import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne } from '../../services/projectService'
import './ProjectDetails.css'

const ProjectDetails = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [project, setProject] = useState(null)
  const [formVisibility, setformVisibility] = useState(false)
  const [btnVisibility, setBtnVisibility] = useState(true)

  function handleClick(){
    setformVisibility(true)
    setBtnVisibility(false)
  }

  useEffect(() => {
    const fetchOne = async () => {
      const data = await getOne(id)
      setProject(data.project)

    }
    fetchOne()
  },[id])

  return (  
    <main>

    <div className="title-container">
      <h1 className="title">{project?.name}</h1>
      <button
      className="delete-btn" 
      onClick={() => navigate(`/projects/${project?.id}/confirmation`, { state: project })}
      >🗑</button>
    </div>
    
    {formVisibility ? 
    <AddTaskForm 
    project={project} 
    setProject={setProject}
    setformVisibility={setformVisibility}
    setBtnVisibility={setBtnVisibility}
    />
    :
    ''
    }
    <div className="todo-container">
    <h2>To Do:</h2>
    {btnVisibility ? <button onClick={handleClick} className="add-btn" id="render-task-form-btn" >add task</button> : ''}
    </div>
    {project?.tasks?.length ?
    <div>
      {project?.tasks?.map((task)=> (
        <div key={task.id}>
        <TaskCard 
        task={task}
        project={project}
        />
        </div>
      ))}      
    </div>
    :
    <div>
      Add a task!
    </div>
    }
    </main>
  );
}
 
export default ProjectDetails;
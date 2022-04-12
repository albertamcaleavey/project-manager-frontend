import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams, useNavigate, Link } from "react-router-dom";
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

    {/* <button
    className="delete-btn" 
    onClick={() => handleDeleteProject(project?.id)}
    >🗑</button> */}

<button
    className="delete-btn" 
    onClick={() => navigate(`/projects/${project?.id}/confirmation`, { state: project })}
    >🗑</button>
    



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

    <div className="title-container">
    <h1>To Do:</h1>
    {btnVisibility ? <button onClick={handleClick} className="add-btn" id="render-task-form-btn" >add task</button> : ''}
    </div>

    <div>
      {project?.tasks?.map((task)=> (
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
import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne } from '../../services/projectService'

const ProjectDetails = ({handleDeleteProject}) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [checkbox, setCheckbox] = useState(false)

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setCheckbox({
      [name]: value
    });
  }

  useEffect(() => {
    const fetchOne = async () => {
      getOne(id)
      .then(data => setProject(data))
    }
    fetchOne()
  }, [id])

  console.log(project?.project?.task)

  return (  
    <>
    <h1>project details</h1>
    <button 
    onClick={() => handleDeleteProject(project?.project?.id)}
    >delete</button>
    <AddTaskForm project={project} setProject={setProject} />

    <div>
      {project?.project?.tasks?.map((task)=> (
        <div key={project.id}>
        <label htmlFor="checkbox-input">complete?</label>
        <input type="checkbox" />
        <TaskCard 
        task={task}
        />
        </div>
        
      ))}      
    </div>
    </>
  );
}
 
export default ProjectDetails;
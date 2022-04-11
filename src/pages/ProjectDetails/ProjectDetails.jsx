import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne } from '../../services/projectService'

const ProjectDetails = ({handleDeleteProject}) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  console.log(project)
  useEffect(() => {
    const fetchOne = async () => {
      getOne(id)
      .then(data => setProject(data))
    }
    fetchOne()
  }, [id])

  return (  
    <>
    <h1>project details</h1>
    <button 
    onClick={() => handleDeleteProject(project?.project?.id)}
    >delete</button>
    <AddTaskForm project={project} setProject={setProject} />
    <div>
      <TaskCard project={project}/>
    </div>
    </>
  );
}
 
export default ProjectDetails;
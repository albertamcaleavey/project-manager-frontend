import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import { getOne, addTask } from '../../services/projectService'

const ProjectDetails = (props) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)

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
    <AddTaskForm project={project} setProject={setProject} />
    <div>
      <TaskCard project={project}/>
    </div>
    </>
  );
}
 
export default ProjectDetails;
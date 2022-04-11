import TaskCard from "./components/TaskCard";
import AddTaskForm from "./components/AddTaskForm";
import { useParams } from "react-router-dom";
import { getOne } from '../../services/projectService'
import { useEffect, useState } from 'react'

const ProjectDetails = (props) => {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  // console.log(project)

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
    < AddTaskForm />
    <div>
      <TaskCard project={project}/>
    </div>
    </>
  );
}
 
export default ProjectDetails;
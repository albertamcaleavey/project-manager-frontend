import { Link } from 'react-router-dom'

const ProjectCard = ({project}) => {
  return (  
    <Link 
    to={`${project.id}`}>
    <div>
    <div>
      <h6>{project.deadline}</h6>
    </div>
      <h3>{project.name}</h3>
    </div>
    </Link>
  );
}
 
export default ProjectCard;
import { Link } from 'react-router-dom'
import './ProjectCard.css'

const ProjectCard = ({project}) => {
  return ( 
    <Link 
    to={`${project.id}`}
    >
    <div className='projectcard-container'>
    <div className='project-deadline'>{project.deadline}</div>
    <div className='project-name'>{project.name}</div>
    </div>
    </Link>
  );
}
 
export default ProjectCard;
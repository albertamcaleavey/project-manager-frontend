import { Link } from 'react-router-dom'
import './ProjectCard.css'
import moment from 'moment';

const ProjectCard = ({project}) => {

  return ( 
    <Link 
    to={`${project.id}`}
    >
    <div className='projectcard-container'>
    <div className='project-deadline'>{moment(project.deadline).add(1, 'days').format("MMM Do YY").toString()}</div>
    <div className='project-name'>{project.name}</div>
    </div>
    </Link>
  );
}
 
export default ProjectCard;
import { Link } from 'react-router-dom'
import './ProjectCard.css'
import moment from 'moment';

const ProjectCard = ({project}) => {

  return ( 
    <Link 
    to={`${project.id}`}
    >
    <div className='projectcard-container'>
    <h3 className='project-name'>{project.name}</h3>
    <div className='project-deadline'>Deadline: {moment(project.deadline).add(1, 'days').format("MMM Do YY").toString()}</div>
    </div>
    </Link>
  );
}
 
export default ProjectCard;
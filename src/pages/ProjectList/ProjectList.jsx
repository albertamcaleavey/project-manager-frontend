import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ListCalendarViewBtn from "../../components/ListCalendarViewBtn/ListCalendarViewBtn";
import { Link } from "react-router-dom";
import './ProjectList.css'

const ProjectList = ({user, projects}) => {
  console.log(projects)
  return (  
    <main>
      {user?.id === projects[0]?.profile_id ?
      <>
      
      <h1>Projects</h1>
      <div className="project-list-container">
        {projects.map((project) => (
          <ProjectCard
          key={project.id}
          project={project}
          />
        ))}
      </div>
        <Link to={'/add-project'}>
          <button className="add-project-btn">+</button>
        </Link>
        <ListCalendarViewBtn />
      </>
        :
        <>
        <Link to={'/add-project'}>
          <button className="add-project-btn">+</button>
        </Link>
        <ListCalendarViewBtn />
        </>
      
    
    
    
    
    
    }
    </main>

  );
}
 
export default ProjectList;
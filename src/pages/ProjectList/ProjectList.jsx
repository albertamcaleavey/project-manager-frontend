import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ListCalendarViewBtn from "../../components/ListCalendarViewBtn/ListCalendarViewBtn";
import { Link } from "react-router-dom";
import './ProjectList.css'

const ProjectList = ({ projects }) => {
  return (  
    <main>
      {projects.length ?
      <>
      <Link className="btn-container" to={'/add-project'}>
        <button className="add-btn-mobile">+</button>
      </Link>
      <Link className="btn-container" to={'/add-project'}>
        <button className="add-btn-desktop">New Project</button>
      </Link>
      <div className="project-list-container">
        {projects.map((project) => (
          <ProjectCard
          key={project.id}
          project={project}
          />
        ))}
      </div>
      <footer className="list-cal-btn-container">
        <ListCalendarViewBtn />
      </footer>
      </>
      :
      <>
      <Link className="btn-container" to={'/add-project'}>
        <button className="add-btn-mobile">+</button>
      </Link>
      <Link className="btn-container" to={'/add-project'}>
        <button className="add-btn-desktop">New Project</button>
      </Link>
      <div className="animate__animated animate__pulse animate__infinite animate__slower add-task-msg-container">
      <div className="arrow">
      ↗
      </div>
    </div>
    <div className="add-task-msg">
      Add a Project
    </div>
      </>
    }
    </main>
  );
}

export default ProjectList;
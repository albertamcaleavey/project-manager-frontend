import ProjectCard from "../../components/ProjectCard/ProjectCard";
import ListCalendarViewBtn from "../../components/ListCalendarViewBtn/ListCalendarViewBtn";
import { Link } from "react-router-dom";
import './ProjectList.css'

const ProjectList = ({ projects }) => {
  return (  
    <main>
      <h1>Projects</h1>
      {projects.length ?
      <>
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
      <div>
        Add a new project!
      </div>
      <Link to={'/add-project'}>
        <button className="add-project-btn">+</button>
      </Link>
      </>
    }
    </main>
  );
}

export default ProjectList;
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";

const ProjectList = (props) => {
  return (  
    <>
    <h1>Projects</h1>
    <div>
      {props.projects.map((project) => (
        <ProjectCard
        key={project.id}
        project={project}
        />
      ))}
    </div>
    <Link to={'/add-project'}>
    <button>+</button>
    </Link>
    </>
  );
}
 
export default ProjectList;
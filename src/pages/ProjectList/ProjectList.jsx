import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import './ProjectList.css'

const ProjectList = ({user, projects}) => {

  return (  
    <>
    <main>
    <h1>Projects</h1>
    <div className="project-list-container">
      {projects.map((project) => (
        <ProjectCard
        key={project.id}
        project={project}
        />
      ))}
    </div>
    </main>
    {/* <footer> */}
      <Link to={'/add-project'}>
        <button className="add-project-btn">+</button>
     </Link>
    {/* </footer> */}
    </>
  );
}
 
export default ProjectList;
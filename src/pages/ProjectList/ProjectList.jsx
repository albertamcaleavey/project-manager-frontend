import ProjectCard from "../../components/ProjectCard/ProjectCard";

const ProjectList = (props) => {
  return (  
    <>
    <h1>project list</h1>
    <div>
      {props.projects.map((project) => (
        <ProjectCard
        key={project.id}
        project={project}
        />
      ))}
    </div>
    </>
  );
}
 
export default ProjectList;
const ProjectCard = ({project}) => {
  return (  
    <>
    <div>
    <div>
      <h6>{project.deadline}</h6>
    </div>
      <h3>{project.name}</h3>
    </div>
    </>
  );
}
 
export default ProjectCard;
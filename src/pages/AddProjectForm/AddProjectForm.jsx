import { useState, useEffect} from 'react'

const AddProjectForm = (props) => {
  return (  
    <>
    <h1>Add Project</h1>
    <form autoComplete='off'>
      <div>
        <label htmlFor="name-input">
          project name
        </label>
        <input 
        type="text" 
        name='name'
        placeholder='Project Name'
        required
        />
      </div>
      <div>
        <label htmlFor="deadline-input">
          project deadline
        </label>
        <input 
        type="date" 
        name='deadline'
        required
        />
      </div>
    </form>
    </>
  );
}
 
export default AddProjectForm;
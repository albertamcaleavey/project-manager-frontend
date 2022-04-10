import { useState, useEffect} from 'react'

const AddProjectForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    deadline: '2022/04/10'
  })
  // const [validform, setValidForm] = useState(false)

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  // const formElement = useRef()

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddProject(formData)
  }

  return (  
    <>
    <h1>Add Project</h1>
    <form 
    autoComplete='off'
    onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name-input">
          project name
        </label>
        <input 
        type="text" 
        name='name'
        value={formData.name}
        onChange={handleChange}
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
        value={formData.deadline}
        onChange={handleChange}
        required
        />
      </div>
      <div>
        <button 
        type="submit"
        // disabled={!validForm}
        >
          Add Project
        </button>
      </div>
    </form>
    </>
  );
}
 
export default AddProjectForm;
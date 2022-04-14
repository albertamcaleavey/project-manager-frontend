import { useState } from 'react'
import { Link } from 'react-router-dom'
import './AddProjectForm.css'

const AddProjectForm = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    deadline: '2022/04/10'
  })

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddProject(formData)
  }

  return (  
    <main className='add-project-form-main'>
      <Link 
      className='x-link'
      to={'/projects'}
      >x</Link>
    <form 
    autoComplete='off'
    onSubmit={handleSubmit}
    >
      <div>
        <label 
        className='name-label'
        htmlFor="name-input">
          Name
        </label>
        <input 
        className='name-input'
        type="text" 
        name='name'
        value={formData.name}
        onChange={handleChange}
        placeholder='Project Name'
        required
        />
      </div>
      <div>
        <label 
        className='deadline-label'
        htmlFor="deadline-input">
          Deadline
        </label>
        <input 
        className='deadline-input'
        type="date" 
        name='deadline'
        value={formData.deadline}
        onChange={handleChange}
        required
        />
      </div>
      <div>
        <button 
        className='add-btn'
        type="submit"
        // disabled={!validForm}
        >
          Add
        </button>
      </div>
    </form>
    </main>
  );
}
 
export default AddProjectForm;
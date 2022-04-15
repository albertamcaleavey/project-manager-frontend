import { useState } from 'react'
import { addTask } from '../../../services/projectService'
import './AddTaskForm.css'

const initialState = {
  description: '',
  date: '2022/04/10',
  complete: false
}

const AddTaskForm = ({project, setProject, setformVisibility, setBtnVisibility}) => {
  const [formData, setFormData] = useState(initialState)

  const addToProject = async (e) => {
    e.preventDefault()
    const updatedProject = await addTask(project?.id, formData)
    setProject(updatedProject)
    setFormData(initialState)
    setformVisibility(false)
    setBtnVisibility(true)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return ( 
    <>
    <form className='add-task-form' autoComplete='off' onSubmit={addToProject}>
      <div className='task-description'>
        <input 
        placeholder='Task Description'
        type="textarea"
        size={45}
        name='description'
        onChange={handleChange}
        required
        />
      </div>
      <div className='date-container'>
        <label htmlFor="date-input">
          Schedule for
          </label>
          <input 
          type="date"
          name='date'
          onChange={handleChange}
          required
          />
      </div>
      <button 
        id='add-task-btn' 
        className='add-btn' 
        type="submit"
        >Add
        </button>
    </form>
    </>
   );
}
 
export default AddTaskForm;
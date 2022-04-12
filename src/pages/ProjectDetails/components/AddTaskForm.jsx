import { useState } from 'react'
import { addTask } from '../../../services/projectService'
import './AddTaskForm.css'

const initialState = {
  description: '',
  date: '2022/04/10',
  complete: false
}

const AddTaskForm = ({project, setProject}) => {
  const [formData, setFormData] = useState(initialState)

  const addToProject = async (e) => {
    e.preventDefault()
    const newTask = await addTask(project?.project?.id, formData)
    setProject(newTask)
    setFormData(initialState)
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return ( 
    <>
    <form className='add-task-form' autoComplete='off' onSubmit={addToProject}>
      <div className='task-description'>
        <label htmlFor="description-input">
        </label>
        <input 
        placeholder='Add a new task'
        type="textarea"
        size={38}
        name='description'
        onChange={handleChange}
        required
        />
      </div>
      <div>
        <label htmlFor="date-input">
          Scheduled for
          </label>
          <input 
          type="date"
          name='date'
          onChange={handleChange}
          required
          />
      </div>
          {/* <div>
            <label htmlFor="checkbox-input">
              complete?
            </label>
              <input 
              type="checkbox"
              name='complete'
              value='false'
              onChange={handleChange}
              />
          </div> */}
          <button type="submit">Add</button>
    </form>
    </>
   );
}
 
export default AddTaskForm;
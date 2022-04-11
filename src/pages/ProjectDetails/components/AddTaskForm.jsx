import { useState } from 'react'
import { addTask } from '../../../services/projectService'
const initialState = {
  description: '',
  date: '2022/04/10',
  complete: false
}

const AddTaskForm = ({project, setProject}) => {
  const [formData, setFormData] = useState(initialState)

  const addToProject = evt => {
    evt.preventDefault()
    const newTask = addTask(project.id, formData)
    setProject(newTask)
    setFormData('')
  }

  const handleChange = evt => {
    setFormData({...formData, [evt.target.name]: evt.target.value})
  }
  return ( 
    <>
    <h1>add task form</h1>
    <form autoComplete='off' onSubmit={addToProject}>
      <div>
        <label htmlFor="description-input">
          task description
        </label>
        <input 
        type="textarea"
        name='description'
        onChange={handleChange}
        required
        />
      </div>
      <div>
        <label htmlFor="date-input">
          scheduled date of task
          </label>
          <input 
          type="date"
          name='date'
          onChange={handleChange}
          required
          />
      </div>
          <div>
            <label htmlFor="checkbox-input">
              complete?
            </label>
              <input 
              type="checkbox"
              name='complete'
              onChange={handleChange}
              />
          </div>
          <button type="submit">add task</button>
    </form>
    </>
   );
}
 
export default AddTaskForm;
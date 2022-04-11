import { useState } from 'react'
import { addTask } from '../../../services/projectService'
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
    <h1>add task form</h1>
    <form autoComplete='off' onSubmit={addToProject}>
      <div>
        <label htmlFor="description-input">
          task description
        </label>
        <input 
        type="text"
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
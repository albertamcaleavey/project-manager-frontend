import { useState } from 'react'
import { addTask } from '../../../services/projectService'

const AddTaskForm = () => {
  const [formData, setFormData] = useState({
    description: '',
    date: '2022/04/10',
    complete: false
  })

  const handleAddTask = evt => {
    evt.preventDefault()
    addTask()
  }
  return ( 
    <>
    <h1>add task form</h1>
    <form autoComplete='off'>
      <div>
        <label htmlFor="description-input">
          task description
        </label>
        <input 
        type="textarea"
        name='description'
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
          required
          />
          <div>
            <label htmlFor="checkbox-input">
              complete?
            </label>
              <input 
              type="checkbox"
              name='complete'
              />
            
          </div>
        
      </div>

    </form>
    </>
   );
}
 
export default AddTaskForm;
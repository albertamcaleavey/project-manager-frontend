import { useState } from 'react'

const TaskCard = ({task, project}) => {
  // const [formData, setFormData] = useState(project)

	// const handleChange = evt => {
	// 	setFormData({ ...formData, [evt.target.name]: evt.target.value })
	// }

  // const handleSubmit = evt => {
	// 	evt.preventDefault()
	// }

  return (  
    <>
    <div>
    {/* <form autoComplete='off' onSubmit={handleSubmit}>
      <div>
        <label htmlFor="description-input">
          task description
        </label>
        <input 
        type="text"
        name='description'
        onChange={handleChange}
        value={formData.description}
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
          value={formData.date}
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
              value={formData.complete}
              onChange={handleChange}
              />
          </div>
          <button type="submit">add task</button>
    </form> */}





      <h3>{task?.description}</h3>
      <h6>{task?.date}</h6>
    </div>
    </>
  );
}
 
export default TaskCard;
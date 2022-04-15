import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'
import './DeleteConfirmation.css'

const DeleteConfirmation = ({ handleDeleteProject }) => {
  const { id } = useParams()
  const { state } = useLocation()
  const navigate = useNavigate()

  const handleDelete = () => {
    handleDeleteProject(id)
    navigate('/projects')
  }

  return (
    <main className='confirmation-main'>
      <section className="confirmation">
        <h3>Are you sure you want to delete {state?.name}?</h3>
        <div>
        <button onClick={handleDelete} type="button" className="delete-confirm-btn">Delete</button>
        </div>
        <Link className="btn submit" to={`/projects/${id}`}>
          <button className='cancel-delete-btn'> Cancel</button>
        </Link>
      </section>
    </main>
  )
}

export default DeleteConfirmation
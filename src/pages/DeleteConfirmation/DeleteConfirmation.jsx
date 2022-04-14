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
    <>
    <main>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/projects/${id}`}>
          <button className='cancel-delete-btn'> Cancel</button>
        </Link>
        <button onClick={handleDelete} type="button" className="delete-confirm-btn">Yes - Delete</button>
      </section>
    </main>
    </>
  )
}

export default DeleteConfirmation
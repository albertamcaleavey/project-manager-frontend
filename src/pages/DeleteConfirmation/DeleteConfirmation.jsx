import { useNavigate, useLocation, useParams, Link } from 'react-router-dom'

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
      <div className="page-header">
        <h1>Delete Confirmation</h1>
      </div>
      <section className="confirmation">
        <h2>Are you sure you want to delete {state?.name}?</h2>
        <Link className="btn submit" to={`/projects/${id}`}>Cancel</Link>
        <button onClick={handleDelete} type="button" className="btn danger">Yes - Delete!</button>
      </section>
    </>
  )
}

export default DeleteConfirmation
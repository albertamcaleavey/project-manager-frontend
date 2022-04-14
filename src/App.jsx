import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import AddProjectForm from './pages/AddProjectForm/AddProjectForm'
import ProjectList from './pages/ProjectList/ProjectList'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import DeleteConfirmation from './pages/DeleteConfirmation/DeleteConfirmation'
import Calendar from './pages/Calendar/Calendar'

import * as authService from './services/authService'
import * as projectService from './services/projectService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [projects, setProjects] = useState([])

  const navigate = useNavigate()

  //--------------------------------------------
  // add created projects to the database 
  const handleAddProject = newProjectData => {
    projectService.create(newProjectData)
    .then(newProject => setProjects([...projects, newProject]))
    navigate('/projects')
  }

  // get all projects when component is loaded and save them to state 
  useEffect(() => {
    projectService.getAll()
    .then(allProjects => 
      setProjects(allProjects?.filter((project)=> {
        return project?.profile_id === user?.id
      }))
    
    )
  }, [user?.id])

//--------------------------------------------

const handleDeleteProject = async (id) => {
  await projectService.deleteOne(id)
	setProjects(projects.filter(project => project.id !== parseInt(id)))
  navigate('/projects')
}

//--------------------------------------------
  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
    navigate('/projects')
  }

  return (
    <>
      <NavBar projects={projects} user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
          path="/login"
          element={<Login handleSignupOrLogin={handleSignupOrLogin} />}
        />
        <Route
        path="/add-project"
        element={ user ? <AddProjectForm handleAddProject={handleAddProject}
        /> : <Navigate to="/login" />}
        />
        <Route
        path="/projects"
        element={ user ? <ProjectList 
        projects={projects} user={user} /> : <Navigate to="/login" />}
        />
        <Route
        path="/projects/:id"
        element={ user ? <ProjectDetails user={user} /> : <Navigate to="/login" />}
        />
        <Route 
        path="/projects/:id/confirmation" element={ user ? <DeleteConfirmation handleDeleteProject={handleDeleteProject} user={user} /> : <Navigate to="/login" />
          } />
          <Route
        path="/calendar"
        element={ user ? <Calendar user={user} projects={projects} /> : <Navigate to="/login" />}
        />
          
      </Routes>
    </>
  )
}

export default App

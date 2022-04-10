import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import AddProjectForm from './pages/AddProjectForm/AddProjectForm'

import * as authService from './services/authService'
import * as projectService from './services/projectService'

const App = () => {
  const [user, setUser] = useState(authService.getUser())
  const [projects, setProjects] = useState([])

  const navigate = useNavigate()
  
  // const handleAddProject = async (newProjectData) => {
  //   const project = await projectService.create(newProjectData)
  //   setProjects([...projects, project])
  // }

  const handleAddProject = newProjectData => {
    projectService.create(newProjectData)
    .then(newProject => setProjects([...projects, newProject]))
  }


  const handleLogout = () => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleSignupOrLogin = () => {
    setUser(authService.getUser())
  }

  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
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
          path="/profiles"
          element={user ? <Profiles /> : <Navigate to="/login" />}
        />
        <Route
        path="/add-project"
        element={<AddProjectForm handleAddProject={handleAddProject}
        />}
        />
      </Routes>
    </>
  )
}

export default App

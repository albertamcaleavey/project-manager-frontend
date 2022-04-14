import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import './NavBar.css'

const NavBar = ({ user, handleLogout, projects }) => {
  let location = useLocation()
  const [activeRoute, setActiveRoute] = useState(location.pathname)

  let currentProject = projects.find((project) => {
    console.log(project.id)
    return project.id.toString() === location.pathname.split('').splice(10, 2).join('')
  })

  useEffect(()=> {
    if(location.pathname === '/projects'){
      setActiveRoute('Projects')
    } 
    if(location.pathname === '/calendar'){
      setActiveRoute('Calendar')
    }
    if(location.pathname !== '/calendar' && location.pathname !== '/projects'){
      setActiveRoute(currentProject?.name)
    }
  }, [location?.pathname, currentProject?.name])

  return (
    <>
      {user ?
        <nav>
          <ul>
            <li>{activeRoute}</li>
            <li><Link to="" onClick={handleLogout}>Log Out</Link></li>
          </ul>
        </nav>
      :
        <nav>
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>
      }
    </>
  )
}

export default NavBar

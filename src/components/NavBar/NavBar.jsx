import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from "react"
import './NavBar.css'

const NavBar = ({ user, handleLogout, projects }) => {
  let location = useLocation()
  const [activeRoute, setActiveRoute] = useState(location.pathname)

  let currentProject = projects.find((project) => {
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
            <li className='page-title' >{activeRoute}</li>
            <li><Link to="" onClick={handleLogout} className="logout-link">Log Out</Link></li>
          </ul>
        </nav>
      :
        <nav className='guest-nav' >
          <img height={40} src="taskflow-logo.png" alt="taskflow-logo" />
          <div className='guest-links'>
            <Link to="/login">Log In</Link>
          </div>
        </nav>
      }
    </>
  )
}

export default NavBar

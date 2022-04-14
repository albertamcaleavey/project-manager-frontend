import { Link, useLocation } from "react-router-dom";
import { useState } from "react"
import './ListCalendarViewBtn.css'

const ListCalendarViewBtn = () => {
  let location = useLocation()
  const [activeRoute, setActiveRoute] = useState(location.pathname)
  
  function handleListClick() {
    setActiveRoute('/projects')
  }

  function handleCalendarClick() {
    setActiveRoute('/calendar')
  }

  function getActiveClassName(routeName) {
    return routeName === activeRoute ? 'active' : ''
  }

  return (  
    <>
    <Link to={'/projects'} >
      <button className="view-btn list" id={getActiveClassName('/projects')} onClick={handleListClick}>
        List View
      </button>
    </Link>

    <Link to={'/calendar'} >
      <button className="view-btn calendar" id={getActiveClassName('/calendar')} onClick={handleCalendarClick}>
        Calendar View
      </button>
    </Link>
    </>
  );
}
 
export default ListCalendarViewBtn;
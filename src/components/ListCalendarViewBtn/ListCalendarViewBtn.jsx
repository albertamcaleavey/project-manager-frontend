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
    <Link className={getActiveClassName('/projects')} to={'/projects'} onClick={handleListClick}>
        List View
    </Link>

    <Link className={getActiveClassName('/calendar')} to={'/calendar'} onClick={handleCalendarClick}>Calendar View
    </Link>
    </>
  );
}
 
export default ListCalendarViewBtn;
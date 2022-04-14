import { Link } from "react-router-dom";

const ListCalendarViewBtn = () => {
  return (  
    <>
    <Link to={'/projects'}>
      <button>List View</button>
    </Link>
    <Link to={'/calendar'}>
      <button>Calendar View</button>
    </Link>
    </>
  );
}
 
export default ListCalendarViewBtn;
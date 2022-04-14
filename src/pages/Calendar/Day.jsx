import './Calendar.css'

const Day = ({date, deadlines}) => {
  return (  
    <div className="day-box">
      {date}
    </div>
  );
}
 
export default Day;
import Day from "./Day";
import './Calendar.css'

const Calendar = () => {
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let month = months[new Date().getMonth()]

  let today = new Date(); // current date
  let end = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // end date of month
  let daysOfMonth = [];

  for(let i = 1; i <= end; i++){
    // returns in yyy-mm-dd format
    // result.push(today.getFullYear() + '-' + (today.getMonth() < 10? '0'+today.getMonth(): today.getMonth()) +'-'+ (i < 10 ? '0'+ i: i)) 
    daysOfMonth.push(i < 10 ? '0'+ i: i)
  }

  console.log(daysOfMonth)

  return (  
    <>
    
    <h1>{month}</h1>
    <div className="calendar-container">
    {daysOfMonth.map((date, idx) => (
      // <p>{date}</p> // parse DATE 
        <Day key={idx} date={date} />
      
      ))}
      </div>

    </>
  );
}
 
export default Calendar;
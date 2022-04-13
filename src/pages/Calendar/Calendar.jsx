import Day from "./Day";
import './Calendar.css'
import { useState, useEffect } from 'react'

const Calendar = ({ projects }) => {
  const [deadlines, setDeadlines] = useState([])
  // console.log(deadlines)
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let month = months[new Date().getMonth()]

  let today = new Date(); // current date
  let end = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate(); // end date of month
  let daysOfMonth = [];

  for(let i = 1; i <= end; i++){
    // returns in yyy-mm-dd format
    daysOfMonth.push(today.getFullYear() + '-' + (today.getMonth() < 10? '0'+today.getMonth(): today.getMonth()) +'-'+ (i < 10 ? '0'+ i: i)) 
    // daysOfMonth.push(i < 10 ? '0'+ i: i)
  }
  // console.log(daysOfMonth)

  let projectDeadlines = projects.map((project)=> {
    return new Date(project.deadline).toISOString().split('T')[0]
  })
  // console.log(projectDeadlines)

  useEffect(()=> {
    setDeadlines(projectDeadlines)
  }, [])
  // console.log(deadlines)

  // for each day, loop through project deadlines
  // if a project deadline === a date render a star
  let test = daysOfMonth.forEach((day, idx) => {
    projectDeadlines.forEach((deadline) => {
      if(deadline === day){
        console.log(deadline)
      }
    })
    return
  })

  console.log(test)
  

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
import Day from "./Day";
import './Calendar.css'
import { useState, useEffect } from 'react'

const Calendar = ({ projects }) => {
  const [deadlines, setDeadlines] = useState([])
  const months = ["January","February","March","April","May","June","July","August","September","October","November","December"]
  let month = months[new Date().getMonth()]
  let currentMonth = months.indexOf(month) + 1
  
  let today = new Date()
  let end = new Date(today.getFullYear(), currentMonth.toString(), 0).getDate()
  let daysOfMonth = []

  for(let i = 1; i <= end; i++){
    daysOfMonth.push(today.getFullYear() + '-' + (currentMonth < 10? '0'+currentMonth.toString(): currentMonth.toString()) +'-'+ (i < 10 ? '0'+ i: i)) 
  }

  useEffect(()=> {
    setDeadlines(projects.map((project)=> {
      return new Date(project.deadline).toISOString().split('T')[0]
    }))
  }, [projects])

  let daysWithDeadlines = daysOfMonth.map((date) => {
    let checkDate = deadlines.some((deadline)=> {
      return deadline === date
    })
    if(checkDate === true){
      return (`${date.split('').splice(8, 2).join('')} ⭐️`)
    } else {
      return (date.split('').splice(8, 2).join(''))
    }
  })


  return (  
    <>
    
    <h1>{month}</h1>
    <div className="calendar-container">
    {daysWithDeadlines.map((date, idx) => (
        <Day deadlines={deadlines} key={idx} date={date} />
      ))}
    </div>
    

    </>
  );
}
 
export default Calendar;
import Day from "./Day";
import moment from "moment";
import ListCalendarViewBtn from "../../components/ListCalendarViewBtn/ListCalendarViewBtn";
import './Calendar.css'
import { useState, useEffect } from 'react'

const Calendar = ({ projects }) => {
  const [deadlines, setDeadlines] = useState([])
  const [taskDays, setTaskDays] = useState([])
  const [todaysTasks, setTodaysTasks] = useState([])
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
    setDeadlines(projects?.map((project)=> {
      return new Date(project?.deadline).toISOString().split('T')[0]
    }))
  }, [projects])

  useEffect(()=> {
    setTaskDays(projects?.map((project) => {
      let taskDates = []
      project?.tasks?.forEach((task) => {
        taskDates?.push(new Date(task?.date).toISOString().split('T')[0])
      })
      return taskDates
    })[projects.length - 1])

    setTodaysTasks(projects?.map((project) => {
      let todaysTaskList = []
      project?.tasks?.forEach((task) => {
        if(new Date(task.date).toISOString().split('T')[0] === new Date().toISOString().split('T')[0]){
          todaysTaskList.push(task)
        }
      })
      return todaysTaskList
    })[projects.length - 1])

  }, [projects])

  console.log(todaysTasks)


  let daysWithDeadlines = daysOfMonth?.map((date) => {
    let formattedDate = date.split('').splice(8, 2).join('')
    let checkTaskDate = taskDays?.some((taskDate)=> {
      return taskDate === date
    })

    let checkDeadlineDate = deadlines?.some((deadline)=> {
      return deadline === date
    })

    if(checkTaskDate === true && checkDeadlineDate === true){
      return (`${formattedDate} ⭐️🔵`)
    } 

    if(checkDeadlineDate === true){
      return (`${formattedDate} ⭐️`)
    } 
    if(checkTaskDate === true){
      return (`${formattedDate} 🔵`)
    } 
    else {
      return (formattedDate)
    }
  })

  return (  
    <>
    <main>
      <h1>{month}</h1>
      <div className="calendar-container">
      {daysWithDeadlines?.map((date, idx) => (
        <Day deadlines={deadlines} key={idx} date={date} />
      ))}
      </div>
    <div>
        <p>⭐️ Project Deadline</p>
        <p>🔵 Task Scheduled </p>
      </div>
      <div>
        <h2>Today</h2>
          <div>
            {todaysTasks?.map((task)=> (
              <p key={task.id}>{task.description}</p>
            ))}
          </div>
      </div>
      <ListCalendarViewBtn />
    </main>
    </>
  );
}
 
export default Calendar;
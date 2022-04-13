import './Calendar.css'

const Day = ({date, deadlines}) => {
  // console.log(date)

  return (  
    <div className="day-box">
      {date}

      {/* {deadlines?.map((deadline, idx) => (
        <div key={idx}>
          {deadline !== date ? <p>⭐️</p> : <p></p>}
        </div>
      ))} */}
    </div>
  );
}
 
export default Day;
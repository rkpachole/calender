import React, { useState } from "react";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import { Calendar } from "react-modern-calendar-datepicker";

const App = () => {
    const myCustomLocale = {
        months: ['January', 'February',    'March',  'April', 'May','June', 'July', 'August','September','October','November', 'December'], }
const preselectedDays = [
    {
      year: 2019,
      month: 10,
      day: 2,
    },
    {
      year: 2019,
      month: 10,
      day: 15,
    },
    {
      year: 2019,
      month: 10,
      day: 30,
    },
  ]


  
  const [selectedDayRange, setSelectedDayRange] = useState(
    preselectedDays
  );
  return (
    <>
    <div className="calender">
    <div className="col-12">
   <Calendar
    value={selectedDayRange}
      onChange={setSelectedDayRange}
      shouldHighlightWeekends
    />
</div>
   </div>
    
   
    </>
  );
};

export default App;
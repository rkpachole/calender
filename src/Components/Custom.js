import React from "react";
import MobileCalendar from 'react-scroll-calendar';
import moment from 'moment';
import {Input} from "reactstrap";
import "react-scroll-calendar/build/react-scroll-calendar.css";
import dateFormat from "dateformat";
import { format } from "date-fns";

const currentYear = new Date();
// console.log(format(currentYear,"YYYY-MM-DD"));
console.log(format(new Date(), 'yyyy/MM/dd '))

const App = () => {

  return (
    <>
    <div>
    <div className="col-2">
    <MobileCalendar
    minDate={moment('2022-01-01', 'YYYY-MM-DD')}
    selectedDate={moment('2019-01-23', 'YYYY-MM-DD')}
    maxDate={moment(new Date(), 'YYYY-MM-DD')}
    />,
    </div>
    <div className="col-sm-10 position-fixed">
    <div className="col border col-sm-2">
    
    </div>
    </div>

  
    
    </div>
    
    </>
   
  );
};

export default App;
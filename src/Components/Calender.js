import React, { Component } from 'react';
import MobileCalendar from 'react-scroll-calendar';
import moment from 'moment';
import "react-scroll-calendar/build/react-scroll-calendar.css";


export default class Index extends Component {
    constructor() {
        super();
        this.state = {
            name:"",

        }
    }


 render() {
    return(
  <MobileCalendar
    minDate={moment('2019-01-14', 'YYYY-MM-DD')}
    selectedDate={moment('2019-01-23', 'YYYY-MM-DD')}
    maxDate={moment('2019-10-14', 'YYYY-MM-DD')}
    />,
  document.getElementById('root')
)
    }
}
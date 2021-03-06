import React from "react";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';
import API from "../../utils/API";

function CalendarComp(props) {

    document.addEventListener('DOMContentLoaded', () => {
        let Events = []
        API.getEvent().then(res => {
            Events = res.data

            var calendarEl = document.getElementById('calendar');

            let calendar = new Calendar(calendarEl, {
                plugins: [dayGridPlugin, timeGridPlugin, listPlugin]
            });
            Events.map(event => calendar.addEvent(event));
            calendar.render();
        })
    });

    return (
        <div id="calendar"></div>
    )
}

export default CalendarComp;
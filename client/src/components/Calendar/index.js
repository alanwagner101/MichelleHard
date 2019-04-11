import React from "react";
import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import '@fullcalendar/core/main.css';
import '@fullcalendar/daygrid/main.css';
import '@fullcalendar/timegrid/main.css';
import '@fullcalendar/list/main.css';

function CalendarComp(props) {

    let firstEvent = [{
        title: "Zello World j;lkj;glkjdsaf;lgkjsd;g;lsdkfjgsfdgsdfhxfdghdfghjdfghdfghdfg",
        start: "2019-04-12",
        textColor: "white",
        backgroundColor: "red",
        borderColor: "black",
        allDay: true
    },
    {
        title: "Quilting 101 5pm-6pm",
        start: "2019-04-12",
        textColor: "white",
        backgroundColor: "red",
        borderColor: "black",
        allDay: true
    },
    {
        title: "Quilting 101 5pm-6pm",
        start: "2019-04-12",
        textColor: "white",
        backgroundColor: "red",
        borderColor: "black",
        allDay: true
    },
    {
        title: "Hello World j;lkj;glkjdsaf;lgkjsd;g;lsdkfjgsfdgsdfhxfdghdfghjdfghdfghdfg",
        start: "2019-04-12",
        textColor: "white",
        backgroundColor: "red",
        borderColor: "black",
        allDay: true
    },
]
    document.addEventListener('DOMContentLoaded', function () {
        var calendarEl = document.getElementById('calendar');

        let calendar = new Calendar(calendarEl, {
            plugins: [dayGridPlugin, timeGridPlugin, listPlugin]
        });
        firstEvent.map(event => calendar.addEvent(event));
        calendar.render();
    });

    return (
        <div id="calendar"></div>
    )
}

export default CalendarComp;
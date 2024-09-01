"use client";
import { useState } from "react";

import {
  Calendar,
  momentLocalizer,
  View,
  Views,
  WorkWeek,
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { calendarEvents } from "@/lib/data";

const localizer = momentLocalizer(moment);

const BigCalender = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    console.log(1);
    setView(selectedView);
  };

  return (
    <div>
      <div>
        <Calendar
          localizer={localizer}
          events={calendarEvents}
          startAccessor="start"
          endAccessor="end"
          views={[Views.WORK_WEEK, Views.DAY]}
          view={view}
          onView={handleOnChangeView}
          style={{ height: "95%" }}
        />
      </div>
    </div>
  );
};

export default BigCalender;

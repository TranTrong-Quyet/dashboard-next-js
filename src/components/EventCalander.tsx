"use client";

import "react-calendar/dist/Calendar.css";
import { useState } from "react";
import Calendar from "react-calendar";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMPORARY
const events = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor",
    time: "12:00 PM - 2:00 PM",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

function EventCalander() {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
      <div className="flex flex-col gap-4 mt-4">
        {events.map((event) => (
          <div
            key={event.id}
            className="flex flex-col p-2 rounded-md border border-sky-200 odd:border-t-blue-300 even:border-t-yellow-300 border-t-4"
          >
            <div className="flex flex-row items-center justify-between mb-2">
              <p className="text-slate-800 text-sm font-medium">
                {event.title}
              </p>
              <span className="text-xs text-slate-300 uppercase">
                {event.time}
              </span>
            </div>
            <p className="text-slate-400 text-xs">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default EventCalander;

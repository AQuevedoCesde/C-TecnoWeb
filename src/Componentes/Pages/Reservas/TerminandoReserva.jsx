import React from "react";
import Layaout from "../../Layout/Layaout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";

function TerminandoReserva() {
  const localizer = dayjsLocalizer(dayjs);
  const events = [
    {
      start: dayjs("2024-6-11T11:00").toDate,
      end: dayjs("2024-6-11T11:20").toDate,
      title: "Evento 1",
    },
  ];
  return (
    <>
      <Layaout>
        <div className="w- h-96 flex justify-center">
          <Calendar
            localizer={localizer}
            events={events}
            min={dayjs("2024-6-11T8:00").toDate()}
            max={dayjs("2024-6-11T20:00").toDate()}
          />
        </div>
      </Layaout>
    </>
  );
}

export default TerminandoReserva;

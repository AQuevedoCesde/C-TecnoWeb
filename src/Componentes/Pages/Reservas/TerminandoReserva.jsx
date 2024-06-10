import React, { useContext } from "react";
import Layaout from "../../Layout/Layaout";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { InformacionCuenta } from "../../Context/Contex";
import Navegador from "../../Layout/Navegador";

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
        <Navegador/>
        <h1 className="text-[#003785] font-semibold mb-10 text-xl">Escoge el dia y la hora en el que deseas reservar</h1>
        <div className="h-96 flex justify-center">
          <Calendar
            localizer={localizer}
            events={events}
            min={dayjs("2024-6-11T8:00").toDate()}
            max={dayjs("2024-6-11T20:00").toDate()}
          />
        </div>
        <button className="bg-[#003785] p-3 text-white rounded-lg m-5">Guardar</button>
      </Layaout>
    </>
  );
}

export default TerminandoReserva;

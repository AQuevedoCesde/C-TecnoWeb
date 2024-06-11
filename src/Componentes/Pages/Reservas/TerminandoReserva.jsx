import React, { useState } from "react";
import Layout from "../../Layout/Layaout"; 
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import dayjs from "dayjs";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Navegador from "../../Layout/Navegador";

function TerminandoReserva() {
  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [horaSeleccionada, setHoraSeleccionada] = useState("");
  const [tiempoCompleto, setTimepoCompleto] = useState("");

  dayjs.locale("es");
  const localizer = dayjsLocalizer(dayjs);

  const handleDateChange = (event) => {
    const selectedDate = event.target.value;
    setFechaSeleccionada(selectedDate); 
  };

  const handleTimeChange = (event) => {
    setHoraSeleccionada(event.target.value);
  };

  const handleSave = () => {
    const fechaCompleta = `${fechaSeleccionada}T${horaSeleccionada}`;

    if (dayjs(fechaCompleta, "YYYY-MM-DDTHH:mm", true).isValid()) {
      setTimepoCompleto(dayjs(fechaCompleta).format());
    } else {
      console.error("Invalid date and time format. Please check your selections.");
    }
  };

  const events = [
    {
      start: dayjs(tiempoCompleto).toDate(),
      end: dayjs(tiempoCompleto).toDate(),
      title: "Andres",
    },
  ];

  return (
    <>
      <Layout>
        <Navegador />
        <h1 className="text-[#003785] font-semibold mb-10 text-xl">
          Escoge el dia y la hora en el que deseas reservar
        </h1>

        <div className="h-96 flex justify-center">
          <Calendar localizer={localizer} events={events} min={dayjs("2024-06-11T08:00").toDate()} max={dayjs("2024-06-11T20:00").toDate()} />
        </div>

        <div className="p-10">
          <input type="date" onChange={handleDateChange} />
          <input type="time" value={horaSeleccionada} onChange={handleTimeChange} />
          <button onClick={handleSave}>Reservar</button>
        </div>
        <button className="bg-[#003785] p-3 text-white rounded-lg m-5">Guardar</button>
      </Layout>
    </>
  );
}

export default TerminandoReserva;

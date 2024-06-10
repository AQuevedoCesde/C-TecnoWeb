import { XCircleIcon } from "@heroicons/react/16/solid";
import React, { useContext } from "react";
import { InformacionCuenta } from "../../Context/Contex";
import CardReserving from "../../CardItem/CardReserving";

function Reservando() {
  const contex = useContext(InformacionCuenta);

  const eliminarReservados = (id) => {
    const filtrarReservados = contex.stockReserva.filter(
      (item) => item.id != id
    );
    contex.setStockReserva(filtrarReservados);
    console.log(id);
  };

  return (
    <aside
      className={`${
        contex.isReservingOpen ? "flex" : "hidden"
      } reservando flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex flex-col">
        <div className="flex justify-between p-2">
          <div>
            <h2 className="font-medium text-xl">Mis reservas</h2>
          </div>
          <div onClick={() => contex.closeReserving()}>
            <XCircleIcon className="h-6 w-6 text-[#003785]"></XCircleIcon>
          </div>
        </div>
        <div className="bg-[#003785] text-white p-2 font-semibold rounded-lg  fixed bottom-0 right-10 m-3">
          <button>Finalizar reserva</button>
        </div>
      </div>
      <div>
        {contex.stockReserva.map((item) => (
          <CardReserving
            img={item.imagen}
            nombre={item.nombre}
            eliminarReservados={eliminarReservados}
            id={item.id}
          />
        ))}
      </div>
    </aside>
  );
}

export default Reservando;

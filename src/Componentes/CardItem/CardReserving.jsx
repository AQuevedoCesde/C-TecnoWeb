import React, { useContext } from "react";


function CardReserving({img,nombre}) {

  return (
    <div className="w-full p-3">
      <figure className="flex justify-around items-center border border-black rounded-md p-2">
        <img className='w-[20%]' src={"hola"} alt="titulo" />
        <h1>{nombre}</h1>
      </figure>
    </div>
  );
}

export default CardReserving;
 
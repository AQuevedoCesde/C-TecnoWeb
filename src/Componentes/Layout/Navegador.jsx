import React from "react";
import { NavLink } from "react-router-dom";

function Navegador() {
  const activeStyle = "underline underline-offset-4"

  return (
    <div className="flex flex-col w-3/5">
      <div className=" flex justify-around items-center mb-10 font-bold">
        <NavLink to="/computadores" className={({isActive})=>
        isActive ? activeStyle : undefined
        }>Computadores</NavLink>
        <NavLink to="/accesorios" className={({isActive})=>
        isActive ? activeStyle : undefined
        }>Accesorios</NavLink>
        <NavLink to="/salas" className={({isActive})=>
        isActive ? activeStyle : undefined
        }>Salas de computo</NavLink>
      </div>
      <div className="mb-10">
        <input className= ' rounded-md bg-[#D9D9D9] w-2/5 p-1' type="text" placeholder= "🔍"/>
      </div>
    </div>
  );
}

export default Navegador;

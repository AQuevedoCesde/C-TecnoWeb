import React from 'react'

function FiltrosPc() {
  return (
    <>
      <select  name="tipo" id="tipo" >
        <option value="tipo">Tipo</option>
        <option value="Escritorio">Escritorio</option>
        <option value="portatil">Portatil</option>
      </select>

      <select name="marca" id="marca">
        <option  value="Marca">Marca</option>
        <option value="Marca">Lenovo</option>
        <option value="Marca">HP</option>
        <option value="Marca">Assus</option>
        <option value="Marca">Apple</option>
      </select>

      <select name="Sistema" id="sistema">
        <option value="Sistema_operativo">Sistema operativo</option>
        <option value="Sistema_operativo">Windows</option>
        <option value="Sistema_operativo">Mac</option>
      </select>
    </>
  )
}

export default FiltrosPc

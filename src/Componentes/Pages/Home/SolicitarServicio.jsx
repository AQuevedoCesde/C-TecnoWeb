import CardServicios from "./CardServicios.jsx"
import computador from '../../../assets/computador.jpg'
import sala from '../../../assets/salaComputo1.jpg'
import accesorio from '../../../assets/Accesorio.jpg'



function SolicitarServicio() {
  return (
    <section className="flex flex-row mt-[20px]"> 
      <div className="bg-[#003785] w-2/5 h-96 flex items-center justify-center" >
        <h1 className="text-white font-bold text-lg text-[35px] ml-[-100px]">Solicitar Servicios</h1>
      </div>
      <div className=" w-[75%]" >
        <div className=" flex justify-evenly  w-[100%] mt-[50px] ml-[-100px]" >
            <CardServicios img = {computador} titulo = {"Computadores"} parrafo={"Solicita la reserva de tu computador"}/>
            <CardServicios img = {sala} titulo = {"Salas"}/>
            <CardServicios img = {accesorio} titulo = {"Accesorios"}/>
        </div> 
    </div>   
    </section>
  )
}

export default SolicitarServicio

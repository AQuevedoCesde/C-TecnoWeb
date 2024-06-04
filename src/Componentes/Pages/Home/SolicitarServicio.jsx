import CardServicios from "./CardServicios.jsx"
import computador from '../../../assets/computador.jpg'
import sala from '../../../assets/salaComputo1.jpg'
import accesorio from '../../../assets/Accesorio.jpg'
import { Link } from 'react-router-dom';




function SolicitarServicio() {
  return (
  
    <section className="flex flex-row mt-3 w-full"> 
      <div className="bg-[#003785] w-[35%] h-96 flex items-center " >
        <h1 className="text-white font-bold text-3xl ml-20">Solicitar Servicios</h1>
      </div>
      <div className=" w-[65%]" >
        <div className=" flex justify-evenly w-full mt-10 ml-[-100px] gap-5" >
            <Link to="/computadores"><CardServicios img = {computador} titulo = {"Computadores"} parrafo={"Solicita la reserva de tu computador"}/></Link>
            <Link to="/salas"><CardServicios img={sala} titulo={"Salas"} /></Link>
            <Link to="/accesorios" ><CardServicios img = {accesorio} titulo = {"Accesorios"}/></Link>
        </div> 
    </div>   
    </section>  
  )
}

export default SolicitarServicio


//Horario mas usado  dia mas usado sala mas usada 
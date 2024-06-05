
import { PlusIcon} from "@heroicons/react/16/solid"
import { useContext } from "react"
import { InformacionCuenta } from "../Context/Contex"

function CardItem({datos, nombre,imagen}) {
  const context = useContext(InformacionCuenta)

  function obtenerInformacion (datos) {
    context.setShowModal(true)
    context.setComputadores(datos)
  }

  return (
    <div className='bg-[#1465bb] cursor-pointer w-56 h-60 rounded-lg shadow-xl'
    onClick={() => obtenerInformacion(datos)}>
    <figure className='relative mb-2 w-full h-4/5'>
      <img className='w-full h-full object-cover rounded-lg' src={imagen} alt='headphones' />
    </figure>
    <p className='flex justify-center'>
      <span className='text-md  text-white font-bold'>{nombre}</span>
    </p>
  </div>

  )
}

export default CardItem

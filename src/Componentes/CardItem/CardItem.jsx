
import { PlusIcon} from "@heroicons/react/16/solid"
function CardItem({nombre,imagen}) {
  return (
    <div className='bg-[#1465bb] cursor-pointer w-56 h-60 rounded-lg shadow-xl'>
    <figure className='relative mb-2 w-full h-4/5'>
      <img className='w-full h-full object-cover rounded-lg' src={imagen} alt='headphones' />
      <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>
        <PlusIcon className="text-[#1465bb]" />
      </div>
    </figure>
    <p className='flex justify-center'>
      <span className='text-md  text-white font-bold'>{nombre}</span>
    </p>
  </div>

  )
}

export default CardItem

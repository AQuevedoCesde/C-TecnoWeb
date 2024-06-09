import { XCircleIcon } from '@heroicons/react/16/solid';
import React, { useContext } from 'react';
import { InformacionCuenta } from '../../Context/Contex';
import CardReserving from '../../CardItem/CardReserving';

function Reservando() {
  const contex = useContext(InformacionCuenta)
  
  return (
    <aside className={`${contex.isReservingOpen ? 'flex' : 'hidden' } reservando flex-col fixed right-0 border border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-4'>
        <h2 className='font-medium text-xl'>Reservando</h2>
        <div onClick={() => contex.closeReserving()}><XCircleIcon className='h-6 w-6 text-blue-500'></XCircleIcon></div>
      </div>
      <div>
        <CardReserving nombre = {contex.stockReserva}/>
      </div>
    </aside>
  );
}

export default Reservando;

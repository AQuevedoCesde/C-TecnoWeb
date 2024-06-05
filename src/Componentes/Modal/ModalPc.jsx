
import { XCircleIcon } from "@heroicons/react/16/solid";

function ModalPc({ isVisible, onClose,marca,s_o,procesador,memoria,imagen}) {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white w-3/5 h-5/6 rounded-xl">
        <div className="h-[13%] flex  ">
          <h1  className="w-[99%] text-center text-3xl font-extrabold self-center">{marca}</h1>
          <button onClick={() => onClose()} ><XCircleIcon className="w-8 text-red-600 text-xl m-2 self-"/></button>
        </div>
        <div className="flex h-[70%]  mt-3">
            <div className=" w-[60%] h-[100%] flex flex-col">
             <div className="w-[100%] h-[70%] flex justify-center"><img  src={imagen} alt="imagen" /></div> 
                <div className="w-[100%] h-[100%] flex  justify-center items-start mt-5  ">
                    <ul>
                        <li className="font-extrabold">Sistema Operativo: <span className="text-sm font-medium">{s_o}</span> </li>
                        <li className="font-extrabold">Procesador:<span className="text-sm font-medium"> {procesador}</span> </li>
                        <li className="font-extrabold">Memoria: <span className="text-sm font-medium"> {memoria + " "+ "GB" }</span>  </li>
                    </ul>
                </div>
          </div>   
            <div className="w-[30%] h-[100%] text-center font-bold text-xl">Aplicativos</div>
        </div>
        <div className="h-[15%] flex justify-center items-start"> <button className="bg-[#003785] text-white p-3 rounded-lg">Agregar</button> </div>
      </div>
    </div>
  );
}

export default ModalPc;


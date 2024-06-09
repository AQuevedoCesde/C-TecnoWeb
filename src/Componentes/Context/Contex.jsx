import {createContext,useState } from "react";

export const InformacionCuenta = createContext()

export const ProveedorInformacion = ({children}) =>{
    const [usuariogeneral, setusuariogeneral] = useState({})

    //Boton Iniciar sesion
    const [botonstate, setbotonstate] = useState(true)
    const botonoff = () => setbotonstate(false)

    //Icono usuario

    const [iconoState, seticonoState] = useState(false)
    const iconoOn = () => seticonoState(true)

    //Modal 
    const [showModal, setShowModal] = useState(false);

    //Computadores
    const [Computadores, setComputadores] = useState([])

    //Reservando
    const [isReservingOpen, setisReservingOpen] = useState(false)
    const [stockReserva,setStockReserva] = useState([])
    const openReserving = () => setisReservingOpen(true)
    const closeReserving = () => setisReservingOpen(false)

    console.log("stockreserva" + stockReserva)

return(
    <InformacionCuenta.Provider value={{
        usuariogeneral,
        botonstate,
        setusuariogeneral,
        botonoff,
        iconoOn,
        iconoState,
        showModal,
        setShowModal,
        Computadores,
        setComputadores,
        openReserving,
        closeReserving,
        isReservingOpen,
        stockReserva,
        setStockReserva
    }}>
        {children}
    </InformacionCuenta.Provider>
)

}
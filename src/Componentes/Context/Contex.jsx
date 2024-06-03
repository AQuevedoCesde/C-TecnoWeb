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

return(
    <InformacionCuenta.Provider value={{
        usuariogeneral,
        botonstate,
        setusuariogeneral,
        botonoff,
        iconoOn,
        iconoState
    }}>
        {children}
    </InformacionCuenta.Provider>
)

}
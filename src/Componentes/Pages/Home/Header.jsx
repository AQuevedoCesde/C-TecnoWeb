import logo from "../../../assets/logodefinitivo.png";
import icono from "../../../assets/user.png";
import { useContext } from "react";
import { InformacionCuenta } from "../../Context/Contex";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


function Header() {
  const contex = useContext(InformacionCuenta);
  let redirigir = useNavigate();

  function inicioDeSesion() {
    redirigir("/login");
  }

  return (
    <header className="w-[100%] h-[13vh] flex justify-between bg-gradient-to-r from-blue-900 to-sky-500 fixed top-0 z-10">
      <img className="w-15 h-[85%] m-1" src={logo} alt="logo" />
      <section className="text-white w-[70%] flex justify-around items-center font-bold">
        <Link to="/">Home</Link>
        <a href="https://basedatospy-3jxuhmy5hwcbiczjtxpejs.streamlit.app/" target="_blank">Estadisticas</a>
        <a href="#">Configurar perfil</a>
      </section>
      <div className="flex items-center w-[20%] justify-center">
        <button
          className={`${
            contex.botonstate ? "flex" : "hidden"
          }  bg-white px-5 py-2 text-center text-blue-700 font-bold rounded-xl  focus:outline-blue-400`}
          onClick={inicioDeSesion}
        >
          Iniciar sesión
        </button>
      </div>
      <div className={`${contex.iconoState ? "flex" : "hidden"} w-[20%]`}>
        <div className="w-full flex flex-col items-center mt-5 ">
          <p className="text-white w-full">{contex.usuariogeneral.nombres} </p>
          <p className="text-white w-full ">
            {contex.usuariogeneral.apellidos}
          </p>
        </div>
        <img className="w-[50%] h-[80%] m-2" src={icono} alt="usuarioFoto" />
      </div>
    </header>
  );
}

export default Header;

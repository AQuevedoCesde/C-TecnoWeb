import logo from "../../../assets/logodefinitivo.png";
 // import { useNavigate } from "react-router-dom";
// import "./../csspages/header.css";

function Header() {
  //let redirigir = useNavigate();

   function inicioDeSesion() {
  // redirigir("/login")
   }

  return (
    <header className="w-[100%] h-[13vh] flex justify-between bg-[#1465BB]">
      <img className="w-15 h-[85%] m-1" src={logo} alt="logo" />
      <section className="text-white w-[70%] flex justify-around items-center font-bold">
        <a href="#">Estadisticas</a>
        <a href="#">Configurar perfil</a>
        <a href="#" >Home</a>
      </section>
      <div className="flex items-center w-[20%] justify-center">
        <button  onClick={inicioDeSesion}>
          inicio de sesión
        </button>
      </div>
        <div >
        <div >
          <p>Nombre</p>
          <p>Apellidos</p>
        </div>
        <img className= {""} src={""} alt="usuarioFoto" />
      </div> 
    </header>
  );
}

export default Header;

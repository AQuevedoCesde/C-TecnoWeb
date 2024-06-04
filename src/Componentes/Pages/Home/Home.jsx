// import Carrusel from "./Carrusel"
import Estadisticas from "./Estadisticas";
import Footer from "./Footer"
import Header from "./Header";
import SolicitarServicio from "./SolicitarServicio"
import estadistica1 from "../../../assets/estadistica1.jpg";
import estadistica2 from "../../../assets/estadistica2.jpg";
import estadistica3 from "../../../assets/estadistica3.jpg";
import Layaout from "../../Layout/Layaout";


function Home() {
  return (
     <Layaout>
        <SolicitarServicio/>
        <div className=" flex justify-center">
          <Estadisticas imag={estadistica1} titulo={"Horarios"} subTitulo={"Descubre los horarios más populares"}
          seccion1={"Horarios pico:"} informacion1={" Identifica los momentos del día o de la semana con mayor actividad de usuarios."} />
          <Estadisticas imag={estadistica2} titulo={"Salas y computadores"} subTitulo={"Descubre las salas y computadores más frecuentadas"} seccion1={"Reduce la congestión"} informacion1={"dentifica las salas con mayor afluencia de usuarios y toma medidas para evitar aglomeraciones y mejorar la fluidez del tráfico."}/>
          <Estadisticas imag={estadistica3} titulo={"Accesorios"} 
          subTitulo={"Descubre los accesorios más populares"} seccion1={"Popularidad por tipo de accesorio"} informacion1={"Identifica los tipos de accesorios más utilizados, como ratones, teclados, audífonos o cámaras."}/>
        </div>
        <Footer/>
      </Layaout>
  );
}

export default Home;

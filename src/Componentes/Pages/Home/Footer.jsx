import logo from "../../../assets/logodefinitivo.png";

function Footer() {
  return (
    <>
      <div className="bg-[#0033A0] h-44 w-full flex justify-center items-center">
        <h2 className="text-white font-lg font-bold text-[20px]">
          Solucion al instante - Tecnología a tu alcance.
        </h2>
      </div>
      <div className="bg-black w-full p-11 h-54 text-white flex justify-evenly items-center">
        <div className="">
          <div className="flex flex-row items-center mt-3">
            <img src={logo} alt="LogoPc" className="w-32" />
            <h3 id="NameLogo">
              C- TECNO <br />
              SOLUTIONS
            </h3>
          </div>
        </div>
        <div>
          <h6>
          Misión :  <br />
          "Proveer soluciones tecnológicas eficientes y <br />
           accesibles para la reserva de computadores y <br />
           salones de cómputo, optimizando el uso de <br /> 
           recursos y facilitando el acceso a espacios<br />
            digitales de alta calidad para nuestros usuarios." <br />
          </h6>
        </div>
        <div>
          <h6>
          Visión : <br />
          "Ser la empresa líder en la gestión y reserva  <br />
          de espacios tecnológicos, reconocida por nuestra <br />
          innovación, confiabilidad y compromiso con la  <br />
          excelencia  en el servicio, contribuyendo al <br />
           desarrollo y éxito de nuestras comunidades  <br />
           educativas y profesionales."
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;

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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Et neque eum consequuntur officiis iure eveniet laudantium
            <br />
            alias ipsum maiores earum nostrum sequi quisquam enim iste ut <br />
            eligendi dicta, impedit beatae.
          </h6>
        </div>
        <div>
          <h6>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br />
            Et neque eum consequuntur officiis iure eveniet laudantium
            <br />
            alias ipsum maiores earum nostrum sequi quisquam enim iste ut <br />
            eligendi dicta, impedit beatae.
          </h6>
        </div>
      </div>
    </>
  );
}

export default Footer;

import CardItem from "../../CardItem/CardItem";
import Layaout from "../../Layout/Layaout";
import { useEffect, useState, Fragment } from "react";
import { collection } from "firebase/firestore";
import { connDatabase } from "../../../database/Firebase";
import { getDocs } from "firebase/firestore";

function Accesorios() {
  const [accesorios, setAccesorios] = useState([]);
  

  async function getAccesorios() {
    let collectionAccesorios = collection(connDatabase, "accesorios");
    let resultado = await getDocs(collectionAccesorios);
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
    setAccesorios(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getAccesorios();
  }, []);

  return (
    <Layaout>
      <Fragment>
        <div className="grid grid-cols-4 gap-5">
          {accesorios.map((accesorio) => (
            <CardItem nombre={accesorio.nombre} imagen={accesorio.imagen} />
          ))}
        </div>
      </Fragment>
    </Layaout>
  );
}

export default Accesorios;

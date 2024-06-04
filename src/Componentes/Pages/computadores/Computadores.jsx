import { connDatabase } from "../../../database/Firebase.jsx";
import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import Layout from "../../Layout/Layaout.jsx";
import CardItem from "../../CardItem/CardItem.jsx";



function Computadores() {
  const [computadores, setComputadores] = useState([]);

  async function getComputadores() {
    let collectionComputadores = collection(connDatabase, "computadores");
    let resultado = await getDocs(collectionComputadores);
    setComputadores(resultado.docs.map((doc) => ({ ...doc.data() })));
    console.log(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

  useEffect(() => {
    getComputadores();
  }, []);

  return (
    <>
    <Layout>
      <div className="grid grid-cols-4 gap-5">
      {computadores.map((computador)=>(<CardItem nombre = {computador.marca}  imagen = {computador.imagen}/> ))} 
      </div>
    </Layout>
  </>
);
}

export default Computadores;

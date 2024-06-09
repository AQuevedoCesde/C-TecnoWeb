import Layout from "../../Layout/Layaout";
import React, { useEffect, useState } from "react";
import { connDatabase } from "../../../database/Firebase.jsx";
import { collection, getDocs } from "firebase/firestore";
import CardItem from "../../CardItem/CardItem";
import Navegador from "../../Layout/Navegador.jsx";

function Salas() {

    const [salas, setSalas] = useState([])

  async function getSalas() {
    let collectionSalas = collection(connDatabase, "Salas");
    let resultado = await getDocs(collectionSalas);
    setSalas(resultado.docs.map((doc) => ({ ...doc.data() })));
  }

    
  useEffect(() => {
    getSalas();
    
  }, []);



  return (

    <>
      <Layout>
      <Navegador/>
        <div className="grid grid-cols-4 gap-5">
        {salas.map((sala)=>(<CardItem nombre = {sala.id} imagen = {sala.imagen}/> ))} 
        </div>
      </Layout>
    </>
  );
}

export default Salas;

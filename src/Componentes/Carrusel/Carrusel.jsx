import React, { useState, useEffect } from "react";
import imagen1 from '../../assets/b1.jpg';
import imagen3 from '../../assets/b3.jpg';
import imagen4 from '../../assets/b4.jpg';
import imagen5 from '../../assets/bar5.webp';

function Carrusel() {
    const [activeIndex, setActiveIndex] = useState(0); // Iniciar con el primer índice
    const images = [imagen1, imagen3, imagen4, imagen5]; // Lista de imágenes

    // Función para cambiar la imagen activa
    const changeImage = () => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % images.length); // Cambiar al siguiente índice
    };

    // Efecto para iniciar el cambio automático de imágenes
    useEffect(() => {
        const interval = setInterval(changeImage, 3000); // Cambiar la imagen cada 3000 milisegundos (3 segundos)
        return () => clearInterval(interval); // Limpiar el intervalo al desmontar el componente
    }, []); // Ejecutar solo una vez al montar el componente

    return (
        <>
          <h2 className="text-[25px] text-[#003785] font-extrabold mb-10">"Tu tecnología, donde y cuando la necesites"
            </h2>
            <div className='carrusel-container'>
                <div className='container'>
                    {images.map((image, index) => (
                        <div 
                            key={index} 
                            className={`panel ${activeIndex === index ? 'active' : ''}`} 
                            onClick={() => setActiveIndex(index)}
                        >
                            <img src={image} alt={`Imagen ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Carrusel;

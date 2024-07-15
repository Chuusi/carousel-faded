import React, { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import confetti from 'canvas-confetti'

const contenido = [
    {title:'Hola', parrafo: 'Estoy practicando para hacer carruseles '},
    {title:'Carousel', parrafo: 'He utilizado la librería de react-bootstrap/Carousel'},
    {title:'Proyecto', parrafo: 'Lo aplicaré en el proyecto que hice en NEOLAND'},
    {title:'Lo siguiente', parrafo: 'Próximamente compartiré el proyecto final que hice para el bootcamp de "Desarrollo Web Full-Stack"'},
    {title:'Gracias', parrafo: '¡Hasta la próxima!'},


  ]

function App() {


  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex)
    if(selectedIndex == contenido.length - 1){
      confetti({
      particleCount:100,
      spread: 100,
      origin: {
        x: .5,
        y: .3
      },
      gravity: .6
    });
    }
    
  }


  const CustomPrevIcon = ({index}) => {
    const prevIndex = (index === 0 ? contenido.length -1 : index -1);
    return (
      <span className='custom-control-prev-icon'>
        <h3>{contenido[prevIndex].title}</h3>
        <p>{contenido[prevIndex].parrafo}</p>
      </span>
    )
  }

  const CustomNextIcon = ({index}) => {
    const nextIndex = (index === contenido.length -1 ? 0 : index + 1);
    return (
      <span className='custom-control-next-icon'>
        <h3>{contenido[nextIndex].title}</h3>
        <p>{contenido[nextIndex].parrafo}</p>
      </span>
    )
  }


  return (
    <div className='div-carousel'>

      <h1>CARRUSEL CON REACT BOOTSTRAP</h1>
      <Carousel 
        className='my-carousel'
        indicators={false}
        pause='hover'
        interval={2000}
        onSelect={handleSelect}
        activeIndex={index}
        prevIcon={<CustomPrevIcon index={index} />}
        nextIcon={<CustomNextIcon index={index} />}
        

      >
        {contenido.map((elemento, i) => (
          <Carousel.Item 
            key={i}
          >
            <h3>{elemento.title}</h3>
            <p>{elemento.parrafo}</p>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default App;

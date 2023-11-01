import React, {useState} from 'react';
import './App.css';
import LogoFreecodeCamp from './imagen/FreeCodeCamplogo.svg';
import Boton from './components/Boton';
import Contador from './components/Contador';

function App() {

  const [numClics, setNumClics] = useState(0);
  const manejarClic = () => {
   setNumClics(numClics + 1);
  }

  const reinictarComputador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenador'> 
      <img className='freecodecamp-logo' 
      src={LogoFreecodeCamp} 
      alt='Logo de freeCodeCamp'
      />
      </div>
      <div className='contenedor-plincipal'>
        <Contador numClics={numClics} />
        <div className='botons'>
        <Boton texto='Clic' esBotonDeClic={true} manejarClic={manejarClic}/>

        <Boton texto='Reiniciar' esBotonDeClic={false} manejarClic={reinictarComputador}/>
        </div>
      </div>
    </div>
  );
}

export default App;

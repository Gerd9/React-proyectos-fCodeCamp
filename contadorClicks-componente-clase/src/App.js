import React from 'react';
import './App.css';
import freeCodeCampLogo from './img/free-logo.jpg'
import Boton from './components/Boton'
import Contador from './components/Contador';



class App extends React.Component {
 
     constructor(props) {
       super(props);
       this.state = {
         numClics: 0
       };
       this.manejarClic = this.manejarClic.bind(this);
       this.reiniciarContador = this.reiniciarContador.bind(this);
     }

     manejarClic() {
      this.setState(({ numClics }) => ( { numClics: numClics + 1}));
     }

     reiniciarContador() {
      this.setState({ numClics: 0 });
     }

   render() {
    return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
           <img 
            className='freecodecamp-logo'
            src={freeCodeCampLogo}
            alt='Logo de freecodeCamp'
           />     
        </div>
         
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />
          <Boton 
           texto='clic'
           esBotonDeClic= {true}
           manejarClic={this.manejarClic}
          />
          <Boton 
          texto='Reiniciar'
          esBotonDeClic= {false}
          manejarClic={this.reiniciarContador}
          />
        </div>
      
      </div>
    );
   }
}



export default App;

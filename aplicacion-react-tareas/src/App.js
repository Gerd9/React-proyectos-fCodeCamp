
import './App.css';
import Logo from './img/free-logo.jpg'
import ListaDeTareas from './components/ListaDeTareas';

function App() {
  return (
    <div className="aplicacion-tareas">
      <div className='freecodecamp-logo-contenedor'>
          <img 
           src={Logo}
           className='freecodecamp-logo' />
      </div>
      <div className='tareas-lista-principal'>
        <h1>Mis tareas</h1>  
         <ListaDeTareas />
      </div>
    </div>
  );
}

export default App;

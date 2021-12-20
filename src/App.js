import "./App.css";
import ComponenteClase from "./components/ComponenteClase/index";
import ComponenteFuncional from "./components/ComponenteFuncional";
import EstadoClase from "./components/EstadoClase";
import Propiedades from "./components/Propiedades";
import EstadoFuncional from './components/EstadoFuncional/index';
import RenderizadoElementosClase from "./components/RenderizadoElementosClase/RenderizadoElementosClase";
import EventosES6 from './components/EventosES6';
import EventosES7 from "./components/EventosES7";
import MasSobreEventos from './components/MasSobreEventos/index';

function App() {
    return (
        <div className="App">
            {/* <ComponenteClase msj="hola soy un componente de clase" />
            <ComponenteFuncional msj="hola soy un componente funcional" />
            <Propiedades
                cadena="soy texto"
                numero={15}
                boleano={true}
                arreglo={[1, 2, 3]}
                objeto={{ nombre: "odon", apellido: "lozada" }}
                funcion={(num) => num * num}
                elementoReact={<h1>soy un elemento react</h1>}
                componente={<ComponenteFuncional msj="hola"/>}
            /> 
            <EstadoClase />
            <EstadoFuncional/>
            <RenderizadoElementosClase/>
            <EventosES6/>
            <hr />
            <EventosES7/>
            */}
            <MasSobreEventos/>
        </div>
    );
}

export default App;

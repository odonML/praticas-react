import "./App.css";
import ComponenteClase from "./components/ComponenteClase/index";
import ComponenteFuncional from "./components/ComponenteFuncional";
import EstadoClase from "./components/EstadoClase";
import Propiedades from "./components/Propiedades";
import EstadoFuncional from './components/EstadoFuncional/index';
import RenderizadoElementosClase from "./components/RenderizadoElementosClase/RenderizadoElementosClase";

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
            */}
            <RenderizadoElementosClase/>
        </div>
    );
}

export default App;

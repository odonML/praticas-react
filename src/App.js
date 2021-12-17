import "./App.css";
import ComponenteClase from './components/ComponenteClase/index';
import ComponenteFuncional from "./components/ComponenteFuncional";

function App() {
    return (
        <div className="App">
            <ComponenteClase msj="hola soy un componente de clase"/>
            <ComponenteFuncional msj="hola soy un componente funcional"/>
            
        </div>
    );
}

export default App;

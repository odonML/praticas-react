import React, {useState} from 'react'


function Contador() {
    const [contador, setContador] = useState(0)

    const sumar = () => setContador(contador + 1);

    const restar = () => setContador(contador - 1);

    return (
        <div>
            <h3>Contador</h3>
            <nav>
                <button onClick={sumar}>+</button>
                <button onClick={restar}>-</button>
            </nav>
            <h3>{contador}</h3>
        </div>
    )
}

export default Contador;

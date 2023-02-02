// esto me sirve para deifinirle el tipo a las properitis
import ProTypes from "prop-types";

// se importa de react un hook
import {useState} from 'react';

// este es un Functional Component
export const CounterApp  = ({value}) => {

    // usamos el hook
    // en useState siempre ponemos el valor incial
    // el segundo valor del [] es el que vamos actualiza
    const [ counter, setCounter ] = useState(value)


    // esta es una funcion solo q con sintaxis de flecha
const handleAdd = () => {
    // de esta forma digo que (c) tiene el valor inicial de counter esto xk si desconozco el valor inicial y a ese valor le sumo
    setCounter( (c) => c + 1)
}

   // esta es una funcion solo q con sintaxis de flecha
   const handleRemove = () => {
    // de esta forma digo que (c) tiene el valor inicial de counter esto xk si desconozco el valor inicial y a ese valor le sumo
    setCounter( (c) => c - 1)
}

  // esta es una funcion solo q con sintaxis de flecha
  const handleReset = () => {
    // de esta forma digo que (c) tiene el valor inicial de counter esto xk si desconozco el valor inicial y a ese valor le sumo
    setCounter( value )
}



  return (
    <>
    <h1>CounterApp</h1>
    <h2> { counter } </h2>

{/* sino le pongo event antes no funciona */}
    <button onClick={ (event) => handleAdd(event, "hola") }>
        +1
    </button>

    <button onClick={ (event) => handleRemove(event, "hola") }>
        -1
    </button>

    <button onClick={ (event) => handleReset(event, "hola") }>
        Reset
    </button>
    </>
  )
}


CounterApp.propTypes = {
    value: ProTypes.number.isRequired
    }
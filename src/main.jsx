// estos dos elementos ocupo para renderizar mi app
// escribo imr y automaticamente me importa react (esto por las extensiones)
import React from 'react';
// importamos DOM
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp ';

// import { FirstApp } from './FirstApp';
// import HelloWorldApp from './HelloWorldApp';
// import HelloWorldApp, {App} from './HelloWorldApp' 
// para llamar la otra forma solo ponemos el nombre y precionamos TAB

// como el estilo css lo quiero global lo pongo como referencia
import "./style.css"


// ReactDOM.createRoot(document.getElementById("root")).render(
//     <React.StrictMode>        
//        <HelloWorldApp />   {/* para renderizar se coloca de esta forma y el nombre de lo q importamos */}      
//     </React.StrictMode>
// )

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>        
        {/* esto aca es como una properitis */}
       <CounterApp value={ 20} />   {/* para renderizar se coloca de esta forma y el nombre de lo q importamos */}  
    </React.StrictMode>
)
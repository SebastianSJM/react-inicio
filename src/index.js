import React from 'react';
import { render } from 'react-dom';

//Imprimir Hola Mundo en pantalla
const App = () => {
  return <h1> Hola mundo </h1>;
};

//Forma larga de usar createElement, es dificil de leer y reutilizar
const Btn = () => {
  return React.createElement(
    'button',
    {
      onClick: () => console.log('Hola')
    },
    'Enviar'
  );
};

//Codigo boton con JSX, mas expresivo y simple
const BtnJSX = () => (
  <button onClick={() => console.log('Hola')}> Enviar </button>
);

render(<BtnJSX />, document.getElementById('root'));

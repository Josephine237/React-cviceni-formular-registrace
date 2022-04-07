import React from 'react';
import { render } from 'react-dom';
import './style.css';

import { Registrace } from "./components/Registrace/index"

const App = () => {
  return (
    <>
    <Registrace></Registrace>
    </>
  )
};

render(<App />, document.querySelector('#app'));

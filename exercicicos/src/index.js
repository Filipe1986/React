import React from 'react'
import ReactDom from 'react-dom'
import Primeiro from './componentes/Primeiro';

const elemento = <h1>React 2</h1>;
ReactDom.render(<Primeiro/>, document.getElementById('root'));
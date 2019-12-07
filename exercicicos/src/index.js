import React from 'react'
import ReactDom from 'react-dom'
import Saudacao from './componentes/Saudacao';


ReactDom.render(
<div>
    <Saudacao nome='Filipe' tipo="Bom dia"/>
    
</div>, document.getElementById('root')
);
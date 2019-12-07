import React from 'react'
import ReactDom from 'react-dom'
import Pai from './componentes/Pai';
import Filho from './componentes/Filho';


ReactDom.render(
<div>
    <Pai nome='Ruy' sobrenome="Gonçalves">
        <Filho nome ="Filipe"/>
        <Filho nome ="Leandro"/>
    </Pai>
</div>, document.getElementById('root')
);
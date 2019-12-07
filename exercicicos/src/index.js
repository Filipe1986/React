import React from 'react'
import ReactDom from 'react-dom'
import Multi from './componentes/MultiplosComponentes';


ReactDom.render(
<div>
    <Multi.BoaTarde nome='Filipe'/>
    <Multi.BoaNoite nome='João'/>
</div>, document.getElementById('root'));
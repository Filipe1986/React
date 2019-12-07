import React from 'react'
import Filho from './Filho';


export default props => 
<div>
    <h1>{props.nome} {props.sobrenome}</h1>
    <Filho nome="Pedro" sobrenome={props.sobrenome}/>
    <Filho {...props}/>
    <Filho {...props} nome="Carla"/>
    
</div>
import React from 'react'

/*
//Ou coloca o nome , ou default
export default props => <h1>Oi </h1>
*/
//Se tem mais de um componente dar um nome para cada
const BoaTarde = props  => <h1>Boa tarde, {props.nome}!</h1>
const BoaNoite = props => <h1>Boa noite, {props.nome}!</h1>

/*
//Exportar um componente como default
//Isso irá mudar a forma como é chamado o componente no outro js
export default BoaTarde
*/


//Exportar os dois componentes como default
//Isso irá mudar a forma como é chamado o componente no outro js
export default {BoaTarde, BoaNoite}

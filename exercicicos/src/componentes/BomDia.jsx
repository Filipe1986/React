import React, {Fragment} from 'react'

/*
//props é uma convenção
Export default props => <p>Bom dia, <strong> {props.nome}</strong></p>
*/

/*

//Qualquer valor funcionaria aqui também coomo o x

export default x => <p>Bom dia, <strong> {x.nome}!</strong></p>
*/

/*
//Nesse formato não podemos retornar 2 elements como h1 e h2, ou envolvo eles com uma div, por exempo.
export default x => <div>
                        <h1>Bom dia, </h1> 
                        <h2>{x.nome}!</h2>
                    </div>
*/

/*
//Nesse formato podemos retornar 2 elements como h1 e h2 dentro de um array.
//Gera warming de each array child shopuld have a unique key
export default x => [
                        <h1>Bom dia, </h1> ,
                        <h2>{x.nome}!</h2>
                    ]
*/

/*
//Nesse formato podemos retornar 2 elements como h1 e h2 dentro de um array.
//Sem warming de each array child shopuld have a unique key, pois foi determinada uma chave única
//para cada um dos elementos
export default x => [
                        <h1 key='h1'>Bom dia, </h1> ,
                        <h2 key='h2'>{x.nome}!</h2>
                    ]
*/
/*
//Aqui o fragmento une diversos elementos sem necessidade de usar uma div que vai aparecer no f12 do browser
//Aqui sem importar especificamente o Fragment no import do topo da página
export default x => <React.Fragment>
                        <h2>Bom dia, </h2> 
                        <h1>{x.nome}!</h1>
                    </React.Fragment>

*/

//Aqui já com o Fragmente explicitamente importado
export default x => <Fragment>
                        <h2>Bom dia, </h2> 
                        <h1>{x.nome}!</h1>
                    </Fragment>
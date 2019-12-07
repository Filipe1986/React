import React, {Component} from 'react'


export default class Saudacao extends Component
{
    state ={
        tipo: this.props.tipo,
        nome: this.props.nome
    }
    /*
    //Altera a variavel de 1 em um segundo 
    setTipo(e)
    {
        let i = 1 
        setInterval(()=>{
            this.setState({tipo: i++}) 
        }, 1000)
        this.setState({tipo: e.target.value}) 
        
    }   
    */
    setTipo(e)
    {
        this.setState({tipo: e.target.value}) 
        
    } 

    setNome(e)
    {
        this.setState({nome: e.target.value}) 
        
    } 
    
    render()
    {
        const {tipo, nome} = this.state
        return(
            <div>

                
                <input type="text" placeholder="Tipo..." value={tipo} onChange={e => this.setTipo(e)}/>
                <input type="text" placeholder="Nome..." value={nome} onChange={e => this.setNome(e)}/>
                <hr/>
                <h1>{tipo}, {nome}!</h1>
            </div>
        );
    }
};
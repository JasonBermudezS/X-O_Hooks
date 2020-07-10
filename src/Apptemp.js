import React, { Component } from 'react';
import './App.css';
import uid from 'uid'

class App extends Component{
constructor(){
  super()
  this.state = {
    turno:'X',
    finJuego:false,
    cuadros:'',
    numMovimientos:0
  }
}

render(){
  return (<div id="juego">
    <div> {this.state.cuadros} </div>
    <div id="estado">{this.state.lineaGanador}</div>
    </div>)
}

componentWillMount(){
  this.inicioJuego()
}

inicioJuego(){

  this.setState({
    numMovimientos:0,
    finJuego:false,

    lineaGanador:'',
    cuadros: <div id="tablero" onClick={(e)=>{this.clicked(e)}}>
      {
        this.setState.tablero.map((cuadro,key)=>{
          return <div className="cuadro" data-cuadro = {key} key={uid()}></div>
        })
      }
    </div>
  })
}

}
export default App;
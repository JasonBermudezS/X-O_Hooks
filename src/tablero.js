import React, {useState} from 'react';

function Cuadro(props) {
    return(
        <button className="cuadro" onClick={props.onClick}>{props.value}</button>
    );   
}

function Tablero() {

    const [tabCuadros, setTabCuadros] = useState(Array(9).fill(null));
    const [NumMovimiento, setNumMovimiento] = useState(0);
    const [turno, setTurno] = useState(true);

    const clicked = index => {
        const cuadros = [...tabCuadros];
        if (CalculaGanador() || cuadros[index]) return;
        cuadros[index] = turno ? "X":"O";
        setNumMovimiento(NumMovimiento+1);
        setTurno(!turno);
        setTabCuadros(cuadros);

        console.log(index);
        console.log(NumMovimiento);
        console.log(cuadros[index]);
        console.log(cuadros);
        console.log(tabCuadros);
    }

    const Restart = () => {
        setTabCuadros(Array(9).fill(null));
        setNumMovimiento(0);
        setTurno(true);
    };

    const construCuadro = index=>{
        return <Cuadro value={tabCuadros[index]} onClick = {()=>clicked(index)}/>
    }

    let status;
    status = CalculaGanador() ? `El ganador es ${CalculaGanador()}`: `Es turno de ${turno ? "X": "O"}`;


//Mapea el tablero y mensajes
    return (
        <>
        <div className="tablero">
            {construCuadro(0)}{construCuadro(3)}{construCuadro(6)}
            {construCuadro(1)}{construCuadro(4)}{construCuadro(7)}
            {construCuadro(2)}{construCuadro(5)}{construCuadro(8)}
        </div>
        <div className="status">{status}</div>
        <div>{Reiniciar()}</div>
        </>
    )

    //Iniciar nueva partida
    function Reiniciar(){
        if(CalculaGanador()==="X" || CalculaGanador()==="O" || CalculaGanador()==="nadie"){
            return <button className="reinicio" onClick={Restart}>¿Desea volver a jugar?</button>;
        }  
    } 

    //Función para decicir si gana X, O, nadie o aun no finaliza el juego
    function CalculaGanador(){
        const opGanadoras=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
        for(let i=0;i<8;i++){
            const [a,b,c]=opGanadoras[i]
            if(tabCuadros[a]===tabCuadros[b] && tabCuadros[b]===tabCuadros[c]){
                return tabCuadros[a];
            }else if(NumMovimiento===9){
                return "nadie";
            }     
        }
    };     
}

export default Tablero;
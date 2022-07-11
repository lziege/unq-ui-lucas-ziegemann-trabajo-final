import React from "react";
import { useNavigate } from "react-router-dom";
import TablePlayer from "./TablePlayerView";
import TableIA from "./TableIAView";
import './Game.css';

export default function Player1VsIAFinalizada() {
    let eleccionPlayer = window.localStorage.getItem("eleccion P1");
    let eleccionIA = window.localStorage.getItem("eleccion IA");
    let eleccionGanadora = window.localStorage.getItem("eleccion ganadora");

    const navigate = useNavigate()
    const goTo1PvsIA = () => {
        window.localStorage.removeItem("eleccion P1");
        window.localStorage.removeItem("eleccion IA");
        window.localStorage.removeItem("eleccion ganadora");
        navigate(`/1PvsIA`);
    }

    return (
        <div>
            <div className="Game">
                <div className="TableFinalizada">
                    <TablePlayer nroPlayer={1} contador={window.localStorage.getItem("contador P" + 1)} />
                    <img className="Eleccion" src={eleccionPlayer} alt="Eleccion P1" />
                </div>
                <div className="TableFinalizada">
                    <TableIA />
                    <img className="Eleccion" src={eleccionIA} alt="Eleccion IA" />
                </div>
            </div>
            <div className="Empate">
                {eleccionGanadora ? <img className="Eleccion" src={eleccionGanadora} alt="Eleccion ganadora" /> : <h3>EMPATE</h3> }
            </div>
            <button type="button" onClick={goTo1PvsIA}>Volver a jugar</button>
        </div>
    )
}
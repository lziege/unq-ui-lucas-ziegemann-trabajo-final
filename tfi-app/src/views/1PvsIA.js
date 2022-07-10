import React from "react";
import Player from "./PlayerView";
import Piedra from "../assets/Piedra.png";
import Tijera from "../assets/Tijera.png";
import Papel from "../assets/Papel.png";
import Spock from "../assets/Spock.png";
import Lagarto from "../assets/Lagarto.png";
import './Game.css';

export default function Player1VsIA() {
    let eleccionPlayer = window.localStorage.getItem("eleccion P1");

    function eleccionIA() {
        var elementos = [Piedra, Tijera, Papel, Spock, Lagarto];
        return elementos[Math.floor(Math.random() * 5)];
    }

    return (
        <div className="PlayerVsCPU">
            <div className="Game">
                <div>
                    <Player nroPlayer={1} contador={window.localStorage.getItem("contador P1")} />
                    <table className="TablePlayer">
                        <thead>
                            <tr>
                                <th>IA</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{window.localStorage.getItem("contador IA")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div>
                {eleccionPlayer ? <img className="Eleccion" src={eleccionPlayer} alt="Eleccion P1" /> : null}
                {eleccionPlayer ? <img className="Eleccion" src={eleccionIA()} alt="Eleccion IA" /> : null}
            </div>
        </div>
    )
}
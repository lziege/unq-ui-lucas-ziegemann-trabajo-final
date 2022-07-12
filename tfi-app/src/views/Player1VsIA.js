import React from "react";
import { useNavigate } from "react-router-dom";
import Player from "./PlayerView";
import TableIA from "./TableIAView";
import ModificadorDeContadores from "./ModificadorDeContadores";
import Piedra from "../assets/Piedra.png";
import Tijera from "../assets/Tijera.png";
import Papel from "../assets/Papel.png";
import Spock from "../assets/Spock.png";
import Lagarto from "../assets/Lagarto.png";
import './Game.css';

export default function Player1VsIA() {
    let eleccionPlayer = window.localStorage.getItem("eleccion P1");
    var contadorP1 = window.localStorage.getItem("contador P1");
    var contadorIA = window.localStorage.getItem("contador IA");

    function eleccionDeIA() {
        var elementos = [Piedra, Tijera, Papel, Spock, Lagarto];
        window.localStorage.setItem("eleccion IA", elementos[Math.floor(Math.random() * 5)]);
    }

    const navigate = useNavigate()
    const goTo1PvsIAFinalizada = () => {
        eleccionDeIA();
        ModificadorDeContadores.aumentarContadorSiCorresponde(
            eleccionPlayer, window.localStorage.getItem("eleccion IA"), "contador IA", contadorP1, contadorIA);
        navigate(`/1PvsIA/PartidaFinalizada`);
    }

    return (
        <div>
            <div className="Game">
                <div>
                    <Player nroPlayer={1} />
                    <TableIA />
                </div>
            </div>
            <div>
                {eleccionPlayer ? <button type="button" className="Button" onClick={goTo1PvsIAFinalizada}>Jugar partida</button> : null}
            </div>
            <button type="button" className="Button" onClick={() => ModificadorDeContadores.reiniciarContadores("contador IA")}>Reiniciar contadores</button>
        </div>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";
import Player from "./PlayerView";
import Piedra from "../assets/Piedra.png";
import Tijera from "../assets/Tijera.png";
import Papel from "../assets/Papel.png";
import Spock from "../assets/Spock.png";
import Lagarto from "../assets/Lagarto.png";
import './Game.css';

export default function Player1VsPlayer2() {
    let eleccionP1 = window.localStorage.getItem("eleccion P1");
    let eleccionP2 = window.localStorage.getItem("eleccion P2");
    var contadorP1 = window.localStorage.getItem("contador P1");
    var contadorP2 = window.localStorage.getItem("contador P2");

    function leGana(eleccion1, eleccion2) {
        return ((eleccion1 === Tijera && (eleccion2 === Papel || eleccion2 === Lagarto))
            ||
            (eleccion1 === Papel && (eleccion2 === Piedra || eleccion2 === Spock))
            ||
            (eleccion1 === Piedra && (eleccion2 === Lagarto || eleccion2 === Tijera))
            ||
            (eleccion1 === Lagarto && (eleccion2 === Spock || eleccion2 === Papel))
            ||
            (eleccion1 === Spock && (eleccion2 === Tijera || eleccion2 === Piedra)))
    }

    function aumentarContadorSiCorresponde() {
        if (leGana(eleccionP1, eleccionP2)) {
            contadorP1++;
            window.localStorage.setItem("contador P1", contadorP1);
            window.localStorage.setItem("eleccion ganadora", eleccionP1);
        } else if (leGana(eleccionP2, eleccionP1)) {
            contadorP2++;
            window.localStorage.setItem("contador P2", contadorP2);
            window.localStorage.setItem("eleccion ganadora", eleccionP2);
        }
    }

    const navigate = useNavigate()
    const goTo1Pvs2PFinalizada = () => {
        aumentarContadorSiCorresponde();
        navigate(`/1Pvs2P/PartidaFinalizada`);
    }

    const reiniciarContadores = () => {
        window.localStorage.setItem("contador P1", 0);
        window.localStorage.setItem("contador P2", 0);
        window.location.reload();
    }

    return (
        <div className="PlayerVsPlayer">
            <div className="Game">
                <Player nroPlayer={1} />
                <Player nroPlayer={2} />
            </div>
            <div>
                {eleccionP1 && eleccionP2 ? <button type="button" onClick={goTo1Pvs2PFinalizada}>Jugar partida</button> : null}
            </div>
            <button type="button" onClick={reiniciarContadores}>Reiniciar contadores</button>
        </div>
    )
}
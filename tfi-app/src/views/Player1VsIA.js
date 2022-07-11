import React from "react";
import { useNavigate } from "react-router-dom";
import Player from "./PlayerView";
import TableIA from "./TableIAView";
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
        if (leGana(eleccionPlayer, window.localStorage.getItem("eleccion IA"))) {
            contadorP1++;
            window.localStorage.setItem("contador P1", contadorP1);
            window.localStorage.setItem("eleccion ganadora", eleccionPlayer);
        } else if (leGana(window.localStorage.getItem("eleccion IA"), eleccionPlayer)) {
            contadorIA++;
            window.localStorage.setItem("contador IA", contadorIA);
            window.localStorage.setItem("eleccion ganadora", window.localStorage.getItem("eleccion IA"));
        }
    }

    const navigate = useNavigate()
    const goTo1PvsIAFinalizada = () => {
        eleccionDeIA();
        aumentarContadorSiCorresponde();
        navigate(`/1PvsIA/PartidaFinalizada`);
    }

    const reiniciarContadores = () => {
        window.localStorage.setItem("contador P1", 0);
        window.localStorage.setItem("contador IA", 0);
        window.location.reload();
    }

    return (
        <div className="PlayerVsCPU">
            <div className="Game">
                <div>
                    <Player nroPlayer={1} />
                    <TableIA />
                </div>
            </div>
            <div>
                {eleccionPlayer ? <button type="button" onClick={goTo1PvsIAFinalizada}>Jugar partida</button> : null}
            </div>
            <button type="button" onClick={reiniciarContadores}>Reiniciar contadores</button>
        </div>
    )
}
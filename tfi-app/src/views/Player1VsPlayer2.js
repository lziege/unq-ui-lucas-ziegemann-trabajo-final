import React from "react";
import Player from "./PlayerView";
import './Game.css';

export default function Player1VsPlayer2() {
    let eleccionP1 = window.localStorage.getItem("eleccion P1");
    let eleccionP2 = window.localStorage.getItem("eleccion P2");

    return (
        <div>
            <div className="Game">
                <Player nroPlayer={1} />
                <Player nroPlayer={2} />
            </div>
            <div>
                {eleccionP1 && eleccionP2 ? <img className="Eleccion" src={eleccionP1} alt="Eleccion P1" /> : null}
                {eleccionP1 && eleccionP2 ? <img className="Eleccion" src={eleccionP2} alt="Eleccion P2" /> : null}
            </div>
        </div>
    )
}
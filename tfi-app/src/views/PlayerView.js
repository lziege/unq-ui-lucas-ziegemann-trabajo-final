import React from "react";
import Elementos from "./ElementosView";
import TablePlayer from "./TablePlayerView";
import './Game.css';

export default function PlayerView({ nroPlayer }) {
    return (
        <div className="Player">
            <TablePlayer nroPlayer={nroPlayer} contador={window.localStorage.getItem("contador P" + nroPlayer)} />
            <Elementos nroPlayer={nroPlayer} />
        </div>
    )
}
import React from "react";
import Elementos from "./ElementosView";
import './Game.css';

export default function PlayerView({ nroPlayer, contador }) {
    return (
        <div className="Player">
            <table className="TablePlayer">
                <thead>
                    <tr>
                        <th>Player {nroPlayer}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{contador}</td>
                    </tr>
                </tbody>
            </table>
            <Elementos nroPlayer={nroPlayer}/>
        </div>
    )
}
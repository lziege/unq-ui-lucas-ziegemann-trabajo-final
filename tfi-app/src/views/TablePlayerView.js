import React from "react";
import './Game.css';

export default function TablePlayerView({ nroPlayer, contador }) {
    return (
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
    )
}
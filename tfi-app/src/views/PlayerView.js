import React from "react";
import Elementos from "./ElementosView";

export default function PlayerView({ nroPlayer }) {
    var contador = 0;

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
            <Elementos />
        </div>
    )
}
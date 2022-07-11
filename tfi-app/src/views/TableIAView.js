import React from "react";
import './Game.css';

export default function TableIAView() {
    return (
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
    )
}
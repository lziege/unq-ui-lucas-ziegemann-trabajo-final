import React from "react";
import Player from "./PlayerView";

export default function Player1VsPlayer2() {
    return (
        <div className="Game">
            <Player nroPlayer={1} />
            <Player nroPlayer={2} />
        </div>
    )
}
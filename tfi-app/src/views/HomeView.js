import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomeView() {
    const navigate = useNavigate()
    const goTo1PvsIA = () => {
        navigate(`/1PvsIA`)
    }

    const goTo1Pvs2P = () => {
        navigate(`/1Pvs2P`)
    }

    return (
        <div>
            <div>
                <button type="button" onClick={goTo1PvsIA}>1P VS IA</button>
            </div>
            <div>
                <button type="button" onClick={goTo1Pvs2P}>1P VS 2P</button>
            </div>
        </div>
    )
}
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HeaderView() {
    const navigate = useNavigate()
    const goToHome = () => {
        navigate(`/`)
    }

    return (
        <button type="button" onClick={goToHome}>Ir al menu principal</button>
    )
}
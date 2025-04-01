import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Perfil() {
    const [userData, setUserData] = useState(null);
    const [errorMessage, setErrorMessage] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const token = localStorage.getItem("token");
                if (!token) {
                    setErrorMessage("No hay token, inicia sesión primero.");
                    return;
                }
                const response = await axios.get(
                    "http://127.0.0.1:8000/api/accounts/mi-perfil/",
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                setUserData(response.data);
            } catch (error) {
                setErrorMessage("Error al obtener los datos del usuario");
            }
        };
        fetchUserData();
    }, []);

    function handleHistorico() {
        navigate("/historico");
    }

    return (
        <>
            <section className="containerPerfil">
                <h1>Bono 10 baños</h1>
                {userData ? (
                    <p>Hola, {userData.username}! Tu DNI es {userData.dni}</p>
                ) : (
                    <p>{errorMessage || "Cargando..."}</p>
                )}
                <figure className="perfilSlaider">
                    <img src="../public/qr.svg" alt="qrBono" />
                    <img src="../public/qr.svg" alt="qrbono" />
                </figure>
                <p>Te quedan 5 entradas</p>
                <button onClick={handleHistorico}>Ver historico</button>
            </section>
        </>
    );
}
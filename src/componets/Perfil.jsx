import { use, useState } from "react"
import { useNavigate } from "react-router";
import axios from 'axios';

export default function Perfil(){
    const navigate = useNavigate()

    async function handleHistorico(){
        navigate('/historico')

    } 



    return (
        <>
            <section className="containerPerfil">
                <h1>Bono 10 baños</h1>
                <figure className="perfilSlaider">
                    <img src="../public/qr.svg" alt="qrBono" />
                    <img src="../public/qr.svg" alt="qrbono" />

                </figure>
                <p>Te quedan 5 entradas</p>
                <button onClick={handleHistorico}>Ver historico</button>

            </section>
        </>

)

}
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function Loggin() {
    // Componente Loggin
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function handleInputUsuario(event) {
        setUserName(event.target.value);
    }

    function handleInputPassword(event) {
        setPassword(event.target.value);
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setErrorMessage('');
        try {
            const response = await axios.post("http://127.0.0.1:8000/api/accounts/token/", {
                username: username,
                password: password
            });
            const token = response.data.access;
            localStorage.setItem('token', token);
            navigate('/perfil');
        } catch (error) {
            setErrorMessage("Usuario o contraseña incorrectos");
        }
    }

    function handleRegistrate() {
        navigate('/registrate');
    }

    return (
        <section>
            <form className='containerLoggin' onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Usuario'
                    className='inputUser'
                    value={username}
                    onChange={handleInputUsuario}
                />
                <input
                    type='password'
                    placeholder='Contraseña'
                    className='inputPasword'
                    value={password}
                    onChange={handleInputPassword}
                />

                <button className='buttonSubmit' type='submit'>Siguiente</button>
                {errorMessage && (
                    <p style={{ color: 'red', maxWidth: '10rem' }}>
                        {errorMessage}
                    </p>
                )}
            </form>
            <article className='containerRegistrate'>
                <h3>¿No tienes una cuenta?</h3>
                <button className='buttonRegistrate' onClick={handleRegistrate}>Regístrate</button>
            </article>
        </section>
    );
}
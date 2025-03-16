import { use, useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router';




export default function Perfil(){
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

async function handleButtonLoggin(){
    navigate('/')
}

    return (

        <section>
            <h1>Registrate para acceder a tus productos.</h1>

            <form  className='formRegister'action="">
                <input type='text' placeholder='Usuario' className='inputUser' onChange={''}></input>
                <input type='text' placeholder='Email' className='inputEmail' onChange={''}></input>
                <input type='text' placeholder='Número de telefono' className='inputNumPhone' onChange={''}></input>
                <input type='text' placeholder='DNI' className='inputPersonalId' onChange={''}></input>


                <input type='password' placeholder='Contraseña' className='inputPasword' onChange={''}></input>
                <input type='password' placeholder=' Repetir Contraseña' className='inputrepetPasword' onChange={''}></input>


                <button className='buttonSubmit' onClick={''}>Siguiente</button>

                {errorMessage && (<p style={{color:'red', maxWidth:'10rem'}}> {errorMessage}</p>)}

            </form>


            <article className='containerComeBack'>
                <h3>¿Ya tienes cuenta?</h3>
                <button className='buttonLoggin' onClick={handleButtonLoggin}>Entrar</button>

            </article>
        </section>


)

}
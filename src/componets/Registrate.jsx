import { use, useState } from "react"
import axios from 'axios';



export default function Perfil(){
    const [errorMessage, setErrorMessage] = useState('');



    return (
        <section>
            <h1>Registrate para acceder a tus productos.</h1>

            <form action="">
                <input type='text' placeholder='Usuario' className='inputUser' onChange={''}></input>
                <input type='text' placeholder='Email' className='inputEmail' onChange={''}></input>
                <input type='text' placeholder='Número de telefono' className='inputNumPhone' onChange={''}></input>

                <input type='password' placeholder='Contraseña' className='inputPasword' onChange={''}></input>

                <button className='buttonSubmit' onClick={''}>Siguiente</button>

                {errorMessage && (<p style={{color:'red', maxWidth:'10rem'}}> {errorMessage}</p>)}

            </form>


            <article className='containerRegistrate'>
                <h3>¿No tíenes una cuenta?</h3>
                <button className='buttonRegistrate' onClick={''}>Regístrate</button>

            </article>
        </section>


)

}
import { use, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router';


export default function Loggin(){
    // Componente Loggin 

    const [username,setUserName]= useState('');
    const [password,setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    function handleInputUsuario(event) {
        // Funcion para guardad el valor name en el estado 
        setUserName(event.target.value)  
    }
    function handleInputPassword(event) {
        // Funcion para guardad el valor password en el estado 
        setPassword(event.target.value)
    };


    async function handleSubmit(){
        // Recuperar token en caso de loggin correcto si no setemaos errorMessage
        try{
            const respons = await axios.post('https://reqres.in/api/login',{
                'email': username,
                'password': password,
            });
    
                localStorage.setItem('token', respons.data.token);
                navigate('/perfil')
        } catch(error){
            setErrorMessage("Usuario o contraseña incorrectos");
        }
    };

    async function handleRegistrate(){
        navigate('/registrate');
    };
    

    return (
        // Section de loggin
        <section>
            <article className='containerLoggin'>
                <input type='text' placeholder='Usuario' className='inputUser' onChange={handleInputUsuario}></input>
                <input type='password' placeholder='Contraseña' className='inputPasword' onChange={handleInputPassword}></input>

                <button className='buttonSubmit' onClick={handleSubmit}>Siguiente</button>

                {errorMessage && (<p style={{color:'red', maxWidth:'10rem'}}> {errorMessage}</p>)}
            </article>
            <article className='containerRegistrate'>
                <h3>¿No tíenes una cuenta?</h3>
                <button className='buttonRegistrate' onClick={handleRegistrate}>Regístrate</button>

            </article>
        </section>

)

}
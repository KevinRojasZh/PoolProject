import { use, useState } from "react"
import axios from 'axios';
import { useNavigate } from 'react-router';
import { useForm } from "react-hook-form";




export default function Perfil(){
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const {register, handleSubmit, formState:{errors}} = useForm();

async function comeBackLoggin(){
    navigate('/')
}
const onSubmit = handleSubmit(async (data) =>{
    if (data.contraseña !== data.repetirContraseña) {
        alert("Las contraseñas no coinciden");
        return;
        }

    try {
        const response = await axios.post(
            "http://127.0.0.1:8000/api/accounts/usuarios/",
        {
        username: data.nameUser,
        dni: data.dni,
        email: data.mail,
        telefono: data.phoneNumber,
        password: data.password,
        },
        {
            headers: { "Content-Type": "application/json" },
        });

        console.log("Registro exitoso:", response.data);
        alert("Usuario registrado correctamente");
        
        } catch (error) {
        console.error("Error al registrar:", error.response?.data || error.message);
        alert("Error al registrar el usuario.");
    }
})

    return (

        <section>
            <h1>Registrate para acceder a tus productos.</h1>

            <form  className='formRegister' onSubmit={onSubmit}>

                <input type='text' placeholder='Usuario' className='inputUser'
                {...register("nameUser", {
                    required:{
                        value: true,
                        message: 'Nombre de usuario requerido'
                    }
                })}
                />

                <input type='text' placeholder='Email' className='inputEmail'
                {...register("mail",{
                    required:{
                        value: true,
                        message: 'Email es requerido'
                    }
                })}
                />

                <input type='text' placeholder='Número de telefono' className='inputNumPhone'
                {...register("phoneNumber",{
                    required:{
                        value: true,
                        message: 'Numero de telefono es requerido'
                    }
                })}
                />

                <input type='text' placeholder='DNI' className='inputPersonalId'
                {...register("dni",{
                    required:{
                        value: true,
                        message: 'DNI es requerido'
                    }
                })}
                />

                <input type='password' placeholder='Contraseña' className='inputPasword'
                {...register("password",{
                    required:{
                        value: true,
                        message: 'Contraseña es requerida'
                    }
                })} 
                />

                <input type='password' placeholder=' Repetir Contraseña' className='inputrepetPasword'
                {...register("repeatPassword",{
                    required:{
                        value: true,
                        message: 'Confirmar contraseña es requerida'
                    }
                })}
                />


                <button className='buttonSubmit' type="submit">Siguiente</button>

            </form>


            <article className='containerComeBack'>
                <h3>¿Ya tienes cuenta?</h3>
                <button className='buttonLoggin' onClick={comeBackLoggin}>Entrar</button>

            </article>
        </section>


)

}
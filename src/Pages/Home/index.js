import { useState } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { signInWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

import * as C from './style'

export default function Home(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    async function handleLogin(e){
        e.preventDefault()

        if(email !== '' && password !== ''){            
            await signInWithEmailAndPassword(auth, email, password)
            .then(()=>{
                //navegar para o /admin
                navigate('/admin', {replace: true} )
            })
            .catch(()=>{
                console.log('erro ao logar')
            })
        }else{
            alert('preencha todos os campos')
        }
    }

    return(
        <C.Container>
            <C.Title>Lista de Tarefas</C.Title>
            <C.Span>Gerencie sua agenda de forma fácil</C.Span>

            <C.FormContainer onSubmit={handleLogin} >
                <C.Input 
                    type='text'
                    placeholder='Digite seu email..'
                    onChange={(e) => setEmail(e.target.value)}
                />

                <C.Input                    
                    type='password'
                    placeholder='Digite sua senha'
                    onChange={(e) => setPassword(e.target.value) }
                />
                <C.SubmitButton type='submit'>Acessar</C.SubmitButton>  
                
            </C.FormContainer>

            <Link to='/register'>
                Não possui conta? Cadastra-se
            </Link>

        </C.Container>
    )
}
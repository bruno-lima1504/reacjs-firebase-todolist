import { useState } from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../../firebaseConnection'
import { createUserWithEmailAndPassword } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'

import * as C from './style'

export default function Register(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    async function handleRegister(e){
        e.preventDefault()

        if(email !== '' && password !== ''){
            alert('entrou')
            await createUserWithEmailAndPassword(auth, email, password)
            .then(()=>{
                navigate('/admin', { replace: true })
            })
            .catch(()=>{
                console.log('erro ao cadastras')
            })
        }else{
            alert('preencha todos os campos')
        }
    }

    return(
        <C.Container>
            <C.Title>Cadastre-se</C.Title>
            <C.Span>Vamos criar sua conta</C.Span>

            <C.FormContainer onSubmit={handleRegister} >
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
                <C.SubmitButton type='submit'>Cadastrar</C.SubmitButton>  
                
            </C.FormContainer>

            <Link to='/'>
                Já possui uma conta? Realize o login!
            </Link>

        </C.Container>
    )
}
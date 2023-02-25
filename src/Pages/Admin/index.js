import { useState, useEffect } from 'react'


import { auth , db} from '../../firebaseConnection'
import { signOut } from 'firebase/auth'
import {
    addDoc,
    collection,
    onSnapshot,
    query,
    orderBy,
    where,
    doc,
    deleteDoc,
    updateDoc,   
} from 'firebase/firestore'



import * as C from './style'

export default function Admin(){
    const [tarefaInput, setTarefaInput] = useState('');
    const [user, setUser] = useState({});
    const [edit, setEdit] = useState({});

    const[tarefas, setTarefas] = useState([]);

    useEffect(()=>{
        async function loadTarefas(){
            const userDetail = localStorage.getItem("@detailUser");
            setUser(JSON.parse(userDetail));

            if(userDetail){
                const data = JSON.parse(userDetail);
                const tarefaRef = collection(db, "tarefas")
                const q = query(tarefaRef, orderBy("created", 'desc'), where("userUid", "==", data?.uid))
                const unsub = onSnapshot(q, (snapshot) =>{
                    let lista =[];
    
                    snapshot.forEach((doc) => {
                        lista.push({
                            id: doc.id,
                            tarefa: doc.data().tarefa,
                            userUid: doc.data().userUid
                        })
                    })                    
                    setTarefas(lista);
                })
            }
        }
        loadTarefas();
    },[])

    async function handleRegister(e){
        e.preventDefault();
        
        if(tarefaInput === ''){
            alert("Digite sua tarefa")
            return;
        }
        if(edit?.id){
            handleUpdateTask();
            return;
        }

        await addDoc(collection(db, "tarefas"),{
            tarefa: tarefaInput,
            created: new Date(),
            userUid: user?.uid
        })
        .then(()=>{
            console.log("TAREFA REGISTRADA")
            setTarefaInput('')
        })
        .catch((error)=>{
            console.log("ERRO AO REGISTRAR" + error)
        })
    }

    async function handleLogout(){
        await signOut(auth);
    }

    function editTask(item){
        setTarefaInput(item.tarefa);
        setEdit(item);        
    }

    async function handleUpdateTask(){
        const docRef = doc(db, "tarefas", edit?.id)
        await updateDoc(docRef, {
            tarefa: tarefaInput
        })
        .then(()=>{
            console.log('Tarefa atualizada');
            setTarefaInput('');
            setEdit({});
        })
        .catch(()=>{
            console.log('Falha ao atualizar a tarefa')
            setTarefaInput('');
            setEdit({});
        })
    }

    async function deleteTask(id){
        const docRef = doc(db, "tarefas", id)
        await deleteDoc(docRef);
    }    

    return(
        <C.Container>
            <C.Title>Minhas tarefas</C.Title>
            <C.FormContainer onSubmit={handleRegister} >
                <C.TextArea 
                    placeholder='Digite sua tarefa...'
                    onChange={(e) => setTarefaInput(e.target.value)}
                    value={tarefaInput}
                />
                {Object.keys(edit).length > 0 ? ( 
                    <C.SubmitButton style={{ backgroundColor: '#6add39'}} type="submit">Atualizar tarefas</C.SubmitButton>
                ) : (
                    <C.SubmitButton type="submit">Registrar tarefas</C.SubmitButton>)}
                
            </C.FormContainer>

            {tarefas.map((item)=>(
                <C.List key={item.id}>
                    <p>{item.tarefa}</p>
                    <div>
                        <C.ListButton onClick={() => editTask(item)}>Editar</C.ListButton>
                        <C.ListButton onClick={() => deleteTask(item.id)} fontColor='#ffcc23' background='transparent'>Concluir</C.ListButton>
                    </div>
                </C.List>
            ))}

            <C.LogoutBtn onClick={handleLogout}>Sair</C.LogoutBtn>

        </C.Container>
    )
}
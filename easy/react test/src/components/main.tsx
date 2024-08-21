import {useContext, useState} from "react";
import {GlobalContext} from "../App.tsx";

export function Main() {
    const [ name, setName ] = useState("")
    const [ password, setPassword ] = useState("")
    const { handleUser } = useContext(GlobalContext)


    function handleLogin(e){
        // inibe o comportamento padrão do form
        // enviar o form para outra pagina com base no método
        e.preventDefault()

        console.log("indo fazer o login..")

        handleUser({
            name: name,
            password: password
        })
    }


    return (
        <form method={"POSt"} onSubmit={(e)=> handleLogin(e)}>
            <input maxLength={6} id={'inputName'} onChange={(e)=> setName(e.target.value)} placeholder={'coloque seu nome'}/>

            <input maxLength={6} id={'inputName'} onChange={(e)=> setPassword(e.target.value)} placeholder={'coloque sua senha'}/>

            <button type={"submit"}>login</button>
        </form>
    );
}


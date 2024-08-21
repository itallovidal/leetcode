import {useContext} from "react";
import {GlobalContext} from "../App.tsx";


export function Header() {
    const {user} = useContext(GlobalContext)

    return (
        <div>
            <h1>cabecalho</h1>

            {
                user && user.name
                    ? <p>usuário logado!</p>
                    : <p>sem infos do usuário</p>
            }
        </div>
    );
}


import {useContext} from "react";
import {GlobalContext} from "../App.tsx";

export function Footer() {
    const {name, age} = useContext(GlobalContext)

    return (
        <div>
            <h1>footer</h1>
            <p>{name}</p>
            <p>{age}</p>
        </div>
    );
}


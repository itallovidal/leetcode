import {Header} from "./components/header.tsx";
import {Main} from "./components/main.tsx";
import {Footer} from "./components/footer.tsx";
import {createContext, useState} from "react";

export const GlobalContext = createContext({})




function App() {
    const [ user, setUser ] = useState()


    function handleUser(data){
        setUser(data)
    }

  return (
    <GlobalContext.Provider value={{handleUser, user}}>
        <Header />
        <Main />
        <Footer />

    </GlobalContext.Provider>
  )
}

export default App

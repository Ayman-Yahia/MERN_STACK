import React, { useState } from "react"
import {Router} from '@reach/router';
import Welcome from "./Welcome";
import Chat from './Chat'
export const MyContext = React.createContext()

const Main = () => {
    const [name,setName]=useState("")
    return (
       
        <MyContext.Provider value = {{ name, setName }}>
            <Router>
                <Welcome  path="/"/>
                <Chat    path="/chat" />
            </Router>
        </MyContext.Provider>

    )
}

export default Main

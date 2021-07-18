import React,{useState} from 'react'
import MyContext from '../context/MyContext';
import Form from './Form';
import Navbar from './Navbar'
const Wrapper = () => {
    const [name, setName] = useState("Ayamn Yahia");
    return (
        <MyContext.Provider value = {{ name, setName }}>
        <Navbar />
        <Form />
      </MyContext.Provider>
    )
}

export default Wrapper

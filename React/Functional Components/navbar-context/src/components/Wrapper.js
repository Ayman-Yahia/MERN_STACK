import React,{useState} from 'react'
// import FormWrapper from './FormWrapper';
// import Navbar from './Navbar'
export const MyContext = React.createContext()

const Wrapper = ({ children }) => {
    const [name, setName] = useState("Ayamn Yahia");
    return (
      <MyContext.Provider value = {{ name, setName }}>
          { children }
      </MyContext.Provider>
    )
}

export default Wrapper

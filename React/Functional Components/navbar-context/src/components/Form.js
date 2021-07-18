import React,{useContext} from 'react'
import MyContext from '../context/MyContext';

const Form = () => {
    const { name, setName } = useContext(MyContext);
    return (
        <div>
        <form>
        <label>Your Name: </label>
        <input value = { name } onChange = {e => setName(e.target.value)} placeholder=""/>
        </form>
        </div>
      

    )
}

export default Form

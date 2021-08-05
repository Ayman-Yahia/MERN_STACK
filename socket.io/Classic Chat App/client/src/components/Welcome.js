import React,{useContext} from 'react'
import { navigate } from '@reach/router'
import { MyContext } from './Main';
const Welcome = () => {
    const {name,setName}=useContext(MyContext);
    const onNameSubmit = (e) => {
		e.preventDefault()
        navigate("/chat")
	}
    return (
        <div>
            <h1>MERN CHAT</h1>
            <br></br>
            <div>
                <h4>Get Started right now</h4>
                <p>i wnat to start Chatting  with name</p>
                <br></br>
                <form onSubmit={onNameSubmit}>
				<div className="name-field">
					<input type="text"  onChange={(e) => setName(e.target.value)} value={name}  />
				</div>
				
				<button>Start Chatting</button>
			</form>

            </div>
        </div>
    )
}

export default Welcome

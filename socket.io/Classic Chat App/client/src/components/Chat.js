import React, { useEffect, useRef, useState,useContext } from "react"
import io from "socket.io-client"
import { MyContext } from "./Main";
function Chat() {
    const {name}=useContext(MyContext);
	const [ message, setMessage ] = useState("")
	const [ chat, setChat ] = useState([])

	const [socket] = useState(() => io(':8000'));

	useEffect(
		() => {
			socket.current = io.connect("http://localhost:8000")
			socket.current.on("message", ({ name, message }) => {
				setChat([ ...chat, { name, message } ])
			})
			return () => socket.disconnect(true)
		},
		[chat]
	)


	const onMessageSubmit = (e) => {
		socket.current.emit("message", {name, message })
		setChat([ ...chat, { name, message } ])
		e.preventDefault()
		setMessage('')
	}



	return (
		<div >
			<div className="render-chat">
				<h1>MERN Chat</h1>
				{chat.map(({ name, message }, index) => (
			<div key={index}>
				<h3>
					{name}: <span>{message}</span>
				</h3>
			</div>
		))}
			</div><br></br>
			<form onSubmit={onMessageSubmit}>
				<div>
					<input type="text"
						onChange={(e) => setMessage(e.target.value)}
						value={message}/>
				</div>
				<button>Send</button>
			</form>
			
		</div>
	)
}

export default Chat
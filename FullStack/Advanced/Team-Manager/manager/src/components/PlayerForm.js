import React,{useState}from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,navigate} from "@reach/router"
import axios from 'axios';
import Header from './Header';
const PlayerForm = (props) => {
    const [playerName,setPlayerName]=useState("");
    const [playerPosition,setPlayerPosition]=useState("");
    const [errors, setErrors] = useState([]);
    const [disableButton,setDisableButton]=useState(true);
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/players', {
            playerName,
            playerPosition
        })
            .then(res=>{
                console.log(res);
                navigate("/players/list");
            })
            .catch(err=>{
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            })  
        setPlayerName("");
        setPlayerPosition("");
    }
    const handlePlayer=(e)=>{
        setPlayerName(e.target.value);
        if(e.target.value.length>2){
            setDisableButton(false);
        }else{
            setDisableButton(true);
        }
    }
    return (
        <>
            <Header />
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <h1>Add Player</h1>

                <label htmlFor="playername">Player Name:</label>
                <input id="playername" type="text" onChange={handlePlayer} value={playerName}/>
                {errors.map((err, index) => <p key={index} style={{color:"red"}}>{err}</p>)}

                <label htmlFor="favouriteposition">Favourite Position:</label>
                <input id="favouriteposition" type="text" onChange={(e)=>setPlayerPosition(e.target.value)} value={playerPosition}/>
                
                <button disabled={disableButton}>Add</button>
            </form>
        </>
    )
}

export default PlayerForm

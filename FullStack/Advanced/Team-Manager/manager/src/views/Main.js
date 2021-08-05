  
import React,{useEffect,useState} from 'react'
import axios from 'axios';
import PlayersList from "../components/PlayersList"
const Main = () => {
    const [players, setPlayers] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(()=>{
        axios.get('http://localhost:8000/api/players')
            .then(res=>{
                setPlayers(res.data);
                setLoaded(true);
            });
    },[players])
    return (
        <div>
           {loaded && <PlayersList players={players} setPlayers={setPlayers}/>}
        </div>
    )
}

export default Main

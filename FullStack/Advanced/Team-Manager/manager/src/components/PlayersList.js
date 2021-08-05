import React,{useEffect,useState} from 'react'
import Model from './Model';
import axios from 'axios';
import Header from './Header';
import DeleteButton from './DeleteButton';

const PlayersList = (props) => {
    const {players,setPlayers}=props;
    const [isOpen, setIsOpen] = useState(false)
    
    const BUTTON_WRAPPER_STYLES = {
        position: 'relative',
        zIndex: 1
      }
      
    useEffect(() => {
        axios.get('http://localhost:8000/api/players')
            .then(res => setPlayers(res.data));
    }, [])

    const removeFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId))
    }
    
    return (
        <>
            <Header />
            <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Team-member</th>
                <th scope="col">favorite Position</th>
                <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                    
                {players.map((player,idx) => {
                return (
                    
                    <tr key={idx}>
                        
                        <td>{player.playerName}</td>
                        <td>{player.playerPosition}</td>
                        <td>
                        <div style={BUTTON_WRAPPER_STYLES} onClick={() => console.log('clicked')}>
                            <button onClick={() => setIsOpen(true)}>Delete</button>

                            <Model open={isOpen} onClose={() => setIsOpen(false)}>
                                <DeleteButton playerId={player._id} successCallback={()=>removeFromDom(player._id)}/>

                                
                            </Model>
                        </div>

                       
                       </td>
                       </tr>
                       
                )
            })}
                

                
            </tbody>
        </table>
        </div>
            
        </>
    )
}

export default PlayersList

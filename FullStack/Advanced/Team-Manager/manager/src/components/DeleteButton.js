import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
const DeleteButton = (props) => {
    const { playerId, successCallback } = props;
    const deletePlayer = e => {
        axios.delete('http://localhost:8000/api/players/' + playerId)
            .then(res=>{
                successCallback();
                navigate("/players/list")
            })
    }
    return (
        <button  className="btn btn-danger" onClick={deletePlayer}>
            Delete
        </button>
    )
}

export default DeleteButton

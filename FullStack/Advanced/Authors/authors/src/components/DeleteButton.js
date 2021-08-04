import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const DeleteButton = (props) => {
    const { authorId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:5000/api/authors/' + authorId)
            .then(res=>{
                successCallback();
                navigate("/")
            })
    }
    return (
        <button  className="btn btn-danger" onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton
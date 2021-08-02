import React from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = (props) => {
    const { productId, successCallback } = props;
    const deleteProduct = e => {
        axios.delete('http://localhost:5000/api/products/' + productId)
            .then(res=>{
                successCallback();
                navigate("/products")
            })
    }
    return (
        <button onClick={deleteProduct}>
            Delete
        </button>
    )
}

export default DeleteButton

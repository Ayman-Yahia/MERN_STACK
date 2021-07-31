import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  navigate } from '@reach/router'
const Update = (props) => {
    const { id } = props;
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState();
    const [description, setDescription] = useState('');
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description)
            })
    }, [])
    const updateProduct = e => {
        e.preventDefault();
        axios.put('http://localhost:5000/api/products/' + id, {
            title,
            price,
            description
        })
            .then(res => console.log(res));
            navigate('/products/'+id)
    }
    return (
        <div>
            <form onSubmit={updateProduct}>
            <p>
                <label>Title</label><br/>
                <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title}/>
            </p>
            <p>
                <label>Price</label><br/>
                <input type="number" min="1" onChange={(e)=>setPrice(e.target.value)} value={price}/>
            </p>
            <p>
                <label>Description</label><br/>
                <textarea type="text" min="1" onChange={(e)=>setDescription(e.target.value)} value={description}/>
            </p>
            <input type="submit" value="Update"/>
            </form>
        </div>
    )
}

export default Update

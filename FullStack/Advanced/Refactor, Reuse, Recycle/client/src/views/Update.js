import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  navigate } from '@reach/router'
import DeleteButton from '../components/DeleteButton';
import ProductForm from '../components/ProductForm';
const Update = (props) => {
    const { id } = props;
    const [product, setProduct] = useState('');
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products/' + id)
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            })
    }, [])
    const updateProduct = product => {
        axios.put('http://localhost:5000/api/products/' + id, product)
            .then(res => {console.log(res)
            navigate("/products/"+id)});
    }
    return (
        <div>
            <h1>Update a Product</h1>
        {loaded && (
            <>
            <ProductForm
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.descriprion}
            />
            <DeleteButton productId={product._id} successCallback={() => navigate("/")} />
            </>
        )}
        </div>
    )
}

export default Update

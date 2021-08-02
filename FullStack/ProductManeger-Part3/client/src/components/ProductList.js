import React from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios';

const ProductList = (props) => {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:5000/api/products/'+productId)
            .then(res => {
                removeFromDom(productId)
                navigate('/products')
            })
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx)=>{
                return<p key={idx}><Link to={`/products/${product._id}`}>{product.title}</Link><button onClick={(e)=>{deleteProduct(product._id)}}>
                Delete
            </button></p> 
            })}
        </div>
    )
}

export default ProductList

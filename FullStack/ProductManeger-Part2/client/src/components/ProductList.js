import React from 'react'
import { Link } from '@reach/router'
const ProductList = (props) => {
    return (
        <div>
            {props.products.map((product, idx)=>{
                return <Link to={`/products/${product._id}`}><p key={idx}>{product.title}</p></Link>
            })}
        </div>
    )
}

export default ProductList

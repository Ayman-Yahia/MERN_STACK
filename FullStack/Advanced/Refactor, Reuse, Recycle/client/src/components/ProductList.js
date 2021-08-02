import React,{useState,useEffect} from 'react'
import { Link, navigate } from '@reach/router'
import axios from 'axios';
import DeleteButton from './DeleteButton';
const ProductList = (props) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:5000/api/products')
            .then(res => setProducts(res.data));
    }, [])
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id !== productId))
    }
    return (
        <div>
            {products.map((product, idx) => {
                return (
                    <p key={idx}>
                        <Link to={"/" + product._id}>
                            {product.title}
                        </Link>
                        |
                        <Link to={"/" + product._id + "/edit"}>
                            Edit
                        </Link> 
                        |
                       <DeleteButton productId={product._id} successCallback={()=>removeFromDom(product._id)}/>
                    </p>
                )
            })}
        </div>
    )
}

export default ProductList

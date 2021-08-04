import React,{useEffect,useContext} from 'react'
import { Link} from '@reach/router'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import DeleteButton from './DeleteButton';
import { MyContext } from '../App';
const AuthorsList = () => {
    const { authors, setAuthors } = useContext(MyContext);
    useEffect(() => {
        axios.get('http://localhost:5000/api/authors')
            .then(res => setAuthors(res.data));
    }, [])
    const removeFromDom = authorId => {
        setAuthors(authors.filter(author => author._id !== authorId))
    }
    return (
        <>
        <div>
            <h1>Favorite Authors</h1>
            <Link to={"/new"}>add an author:</Link>
            <h4>we have quotes by:</h4>
        </div>
        <div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Author</th>
                <th scope="col">Actions available</th>
                </tr>
            </thead>
            <tbody>

                    
                {authors.map((author,idx) => {
                return (
                    
                    <tr key={idx}>
                        
                        <td>{author.name}</td>
                        <td>
                        <Link to={"/edit/"+author._id}>
                            <button className="btn btn-primary">Edit</button>
                        </Link> 
                        |
                       <DeleteButton authorId={author._id} successCallback={()=>removeFromDom(author._id)}/>
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

export default AuthorsList

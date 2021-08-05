import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {  navigate } from '@reach/router'
import AuthorForm from '../components/AuthorForm';

const Update = (props) => {
    const { id,setErrors} = props;
    const [author, setAuthor] = useState(null);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:5000/api/authors/' + id)
            .then(res => {
                setAuthor(res.data);
                setLoaded(true);
            })
            .catch(err => {
                console.log(err.response);
                alert("this author doesn't exist")
                navigate("/authors"+id)
            })

    }, [])

    const updateAuthor = author => {
        axios.put('http://localhost:5000/api/authors/' + id, author)
        .then((res) => {
            navigate("/");
        })
        .catch(err=>{
            const errorResponse = err.response.data.errors; 
            const errorArr = []; 
            for (const key of Object.keys(errorResponse)) { 
                errorArr.push(errorResponse[key].message)
            }
            setErrors(errorArr);
        })
    }
    return (
        <div>
            {loaded && (
            <>
            <AuthorForm
                onSubmitProp={updateAuthor}
                initialName={author.name}
            />
            </>
            )}  
 

        </div>
    )
}

export default Update

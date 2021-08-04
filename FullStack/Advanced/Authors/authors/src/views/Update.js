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
                setErrors(err.response.data.errors);
            })

    }, [])
    // if (author ===null) {
    // //     alert("the author you want to edit does not exist")
    // //     navigate("/")
    // // }
    const updateAuthor = author => {
        axios.put('http://localhost:5000/api/authors/' + id, author)
        .then((res) => {
            navigate("/");
        })
        .catch((err) => {
            // this catch happens because of the res.status(400) in the controller
            setErrors(err.response.data.errors);
            console.log(err.response);
        });
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

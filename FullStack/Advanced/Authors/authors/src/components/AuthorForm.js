import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link} from "@reach/router"
const AuthorForm = (props) => {
    const { initialName, onSubmitProp ,errors,setErrors} = props;
    const [name, setName] = useState("");
    const   onSubmitHandler=(e)=>{
        e.preventDefault();
        onSubmitProp({name});
        setName("")

    }
    return (
        <>
            <h1>Favorite Authors:</h1>
            <Link to={"/"}>Home</Link>
            <h4>add a new author:</h4>
            <div>
            {errors?
            errors.map((err, index) => <p style={{color:"red"}} key={index}>{err}</p>):""}
            <form onSubmit={onSubmitHandler}>
            
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="title">Name</label>
                    <input type="text" class="form-control" onChange={(e)=>setName(e.target.value)} value={name} placeholder={initialName}  required />
                </div>
                <div class="row mt-5 justify-content-center">
                        <button type="submit" class="btn btn-primary pl-4 pr-4">Submit</button>
                </div>
            </div>

            </form>
            </div>            

        </>
    )
}

export default AuthorForm

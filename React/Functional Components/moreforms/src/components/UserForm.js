import React,{Component} from "react";
const useState=React.useState
function UserForm(){
    const [ users, setUsers] = useState([]);
    return (
        <>
            <AddUser setUsers={setUsers} />
            <div>{users.map(person=> <Person firstName={person.firstName} lastName={person.lastName} email={person.email} password={person.password} confimationPassword={person.confimationPassword} />)}</div>
        </>
    )
}
function AddUser(props){
    const [firstName, setFirstName] = useState()
    const [lastName, setLastName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confimationPassword, setConfirmationPassword] = useState()
    const[firstNameError,setFirstNameError]=useState()
    const[lastNameError,setLastNameError]=useState()
    const[emailError,setEmailError]=useState()
    const[passwordError,setPasswordError]=useState()
    const handleFirstName=(e) =>{
        if(e.target.value.length < 2) {
          
          setFirstNameError("first name must not be less than 2 char");
        }
        else{
          setFirstName(e.target.value)
          setFirstNameError("")
        }
    }
    const handleLastName=(e) =>{
        if(e.target.value.length < 2) {
          setLastNameError("last name must not be less than 2 char");
        }
        else{
          setLastName(e.target.value)
          setLastNameError("")
        }
    }
    const handleEmail=(e) =>{
         if(e.target.value.length < 2) {
          setEmailError("email must not be less than 5char");
        }
        else{
          setEmail(e.target.value)
          setEmailError("")
        }
      }
      const handlePassword=(e) =>{
         if(e.target.value.length < 8) {
          setPasswordError("password must not be less than 8char");
        }
        else{
          setPassword(e.target.value)
          setPasswordError("")
        }
      }
      const createUser=(e)=>{
        e.preventDefault()
        props.setUsers(prev => prev.concat({firstName, lastName, email, password,confimationPassword}))
        setFirstName("")
        setLastName("")
        setEmail("")
        setPassword("")
        setConfirmationPassword("")
      }
    
  
  
    return(
        <form onSubmit={ (e) => createUser(e)} className="formUser">
          <h1>Creating Users</h1>
            <div className="form-group">
                <input value={firstName} type="text" placeholder="First Name" onChange={handleFirstName} />
                {
                      firstNameError ?
                      <p style={{color:'red'}}>{ firstNameError }</p> :
                      ''
                }
            </div><br />
            <div className="form-group">
                <input value={lastName} type="text" placeholder="Last Name" onChange={handleLastName} />
                {
                      lastNameError ?
                      <p style={{color:'red'}}>{ lastNameError }</p> :
                      ''
                }
            </div><br />
            <div className="form-group">
                <input value={email} type="text" placeholder="Email" onChange={handleEmail}  />
                {
                      emailError ?
                      <p style={{color:'red'}}>{ emailError }</p> :
                      ''
                }
            </div><br />
            <div className="form-group">
                <input value={password} type="password" placeholder="Password" onChange={handlePassword} />
                {
                      passwordError ?
                      <p style={{color:'red'}}>{ passwordError }</p> :
                      ''
                }
            </div><br />
            <div className="form-group">
                <input value={confimationPassword} type="password" placeholder="Confirmation Password" onChange={handlePassword} />
                {
                    confimationPassword !== password ?
                    <p style={{color: "red"}}>PASSWORDS DO NOT MATCH</p>
                    :''
                }
            </div><br />
            <input type="submit" value="Create User" />
        </form>
    )
}
  function Person(props) {
    return (
  
        <div className="ll">
          <p>First Name: {props.firstName}</p>
          <p>Last Name: {props.lastName}</p>
          <p>Email: {props.email}</p>
          <p>Password: {props.password}</p>
          <p>Confirmation Password: {props.confimationPassword}</p>
        </div>
  
    )
}
export default UserForm;
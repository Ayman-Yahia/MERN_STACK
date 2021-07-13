import './App.css';
import React from 'react';

const useState=React.useState;

function App() {
  const [ users, setUsers] = useState([]);
  return (
    <>
    <AddUser setUsers={setUsers} />
    <div>{users.map(person=> <Person firstName={person.firstName} lastName={person.lastName} email={person.email} password={person.password} confimationPassword={person.confimationPassword} />)}</div>
    </>
  );
}
function AddUser(props){
  const [firstName, setFirstName] = useState()
  const [lastName, setLastName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confimationPassword, setConfirmationPassword] = useState()
  function handleSubmit(e) {
      e.preventDefault()
      props.setUsers(prev => prev.concat({firstName, lastName, email, password,confimationPassword}))
      setFirstName("")
      setLastName("")
      setEmail("")
      setPassword("")
      setConfirmationPassword("")
  }
  return(
      <form onSubmit={handleSubmit} className="formUser">
        <h1>Creating Users</h1>
          <div className="form-group">
              <input value={firstName} type="text" placeholder="First Name" onChange={e => setFirstName(e.target.value)} />
          </div><br />
          <div className="form-group">
              <input value={lastName} type="text" placeholder="Last Name" onChange={e => setLastName(e.target.value)} />
          </div><br />
          <div className="form-group">
              <input value={email} type="email" placeholder="Email" onChange={e => setEmail(e.target.value)}  />
          </div><br />
          <div className="form-group">
              <input value={password} type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
          </div><br />
          <div className="form-group">
              <input value={confimationPassword} type="password" placeholder="Confirmation Password" onChange={e => setConfirmationPassword(e.target.value)} />
          </div><br />
          <button>Add User</button>
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

export default App;

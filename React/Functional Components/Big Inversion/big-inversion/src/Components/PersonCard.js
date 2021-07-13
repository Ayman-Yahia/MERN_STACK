import React, { Component } from 'react';

const people = [
    { firstName:"Ayman", lastName:"Yahia", age:23 ,hairColor:"Black" },
    { firstName:"Haitham" ,lastName:"Bashar", age:22, hairColor:"Blonde" },
    { firstName:"Amr" ,lastName:"Mohammed" ,age:31 ,hairColor:"Green"},
    { firstName:"Amro", lastName:"Ahmad", age:29, hairColor:"Brown" }
]
class PersonCard extends Component{
    render() {
        return (

            <div>{people.map(pep => <Pep firstName={pep.firstName} lastName={pep.lastName} age={pep.age} hairColor={pep.hairColor} />)}</div>
        );

    }
}
function Pep(props) {
    return (
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    )
}
export default PersonCard;
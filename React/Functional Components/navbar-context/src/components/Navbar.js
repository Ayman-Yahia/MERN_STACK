import React, { useContext } from 'react';
import MyContext from '../context/MyContext';

const Navbar = () => {
    const { name } = useContext(MyContext);
  return(
    <Navbar>Hi { name }</Navbar>
    )
}

export default Navbar

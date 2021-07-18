import React, { useContext } from 'react';
import {MyContext} from './Wrapper'

const Navbar = () => {
    const {name} = useContext(MyContext);
  return(
    <nav>Hi { name }</nav>
    )
}

export default Navbar

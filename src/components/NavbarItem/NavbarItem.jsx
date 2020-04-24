import React, {useState} from 'react';
import './NavbarItem.css';

import {IconButton} from '../IconButton';

export const NavbarItem = ({icon, children}) => {
  const [open, setOpen] = useState(false); 

  return (
    <li className="navbar-item">
      <IconButton icon={icon}onClick={()=> setOpen(!open)} />
      {open && children}
    </li>
  );
}

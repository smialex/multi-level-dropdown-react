import React from 'react';
import './IconButton.css';
import { Icon } from '../Icon';

export const IconButton = ({icon, ...rest}) => {
  return (
    <button className="icon-button" {...rest}>
      <Icon icon={icon}/>
    </button>
  );
}

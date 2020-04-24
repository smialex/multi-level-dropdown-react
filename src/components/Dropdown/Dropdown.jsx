import React, {forwardRef} from 'react';
import './Dropdown.css';

export const Dropdown = forwardRef(({height = 0, children}, ref) => {

  const style = {
    height: `${height}px`
  }

  return (
    <div className="dropdown" ref={ref} style={style}>
      {children}
    </div>
  );
})

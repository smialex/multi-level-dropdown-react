import React, {useCallback} from 'react';
import './ContextMenuItem.css';
import { Icon } from '../Icon';

export const ContextMenuItem = (props) => {

  const {back, title, leftIcon, rightIcon, onClick, children } = props;

  const onContextMenuItemClick = useCallback(()=>{
    onClick && (children || back) && onClick(children, title);
  }, [onClick, children, title, back])
  
  return (
    <li className="context-menu-item" onClick={onContextMenuItemClick} >
      <div className="context-menu-item__left"><Icon icon={leftIcon}/></div>
      <div className="context-menu-item__center">{title}</div>
      <div className="context-menu-item__right"><Icon icon={rightIcon} transparent/></div>
    </li>
  );
}

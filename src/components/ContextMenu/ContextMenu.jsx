import React, {useState, useCallback, useRef, useEffect} from 'react';
import { CSSTransition } from 'react-transition-group';
import './ContextMenu.css';
import { Dropdown } from '../Dropdown';

const SubContextMenu = ({children, onClose, onChangeHeight}) => {

  const [subMenuItems, setSubMenuItems] = useState(null);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const onSubMenuClose = useCallback(()=>setIsSubMenuOpen(false), [])

  const onContextMenuItemClick = useCallback((menu)=>{
    if(menu){
      setIsSubMenuOpen(true);
      setSubMenuItems(menu);
    }
    else{
      setIsSubMenuOpen(false)
      onClose();
    }
  }, [onClose])

  const onEnter = useCallback(el => {
    onChangeHeight && onChangeHeight(el.offsetHeight);
  }, [onChangeHeight]);

  const mainMenuItems = React.Children.map(children, 
    (child) => (React.cloneElement(child, { onClick: onContextMenuItemClick })));

  return (
    <>
      <CSSTransition
        in={isSubMenuOpen}
        timeout={300}
        classNames="right-menu"
        unmountOnExit
        onEnter = {onEnter}
      >
        <SubContextMenu 
          onClose={onSubMenuClose} 
          onChangeHeight={onChangeHeight}>
            {subMenuItems}
        </SubContextMenu>
      </CSSTransition>

      <CSSTransition
        in={!isSubMenuOpen}
        timeout={300}
        classNames="left-menu"
        unmountOnExit
        onEnter = {onEnter}
      >
        <ul className ="context-menu">
          {mainMenuItems}
        </ul> 
      </CSSTransition>
    </>
  )
};

export const ContextMenu= ({children}) => {

  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  useEffect( ()=>{
    setDropdownHeight(dropdownRef.current.firstChild.offsetHeight);
  }, []);

  const onChangeHeight = useCallback(height => {
    setDropdownHeight(height)
  }, []);

  return(
    <Dropdown height={dropdownHeight} ref={dropdownRef}>
      <SubContextMenu onChangeHeight={onChangeHeight}>
        {children}
      </SubContextMenu>
    </Dropdown>
  )
};


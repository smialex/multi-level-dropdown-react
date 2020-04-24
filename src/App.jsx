import React from 'react';
import './App.css';

import {Navbar, NavbarItem, ContextMenu, ContextMenuItem} from './components';
import {Arrow, Bell, Bolt, Caret, Chevron, Cog, Messanger, Plus } from './icons'

export const App = () => {
  return (
    <>
      <Navbar>
        <NavbarItem icon={<Bell/>} />
        <NavbarItem icon={<Cog/>} />
        <NavbarItem icon={<Messanger/>} />
        <NavbarItem icon={<Plus/>} />
        <NavbarItem icon={<Caret/>} >
          <ContextMenu>
            <ContextMenuItem title='Profile' leftIcon="😎"/>
            <ContextMenuItem title='Settings' leftIcon={<Cog/>} rightIcon={<Chevron/>}>
              <ContextMenuItem title='Settings' back leftIcon={<Arrow/>} />
              <ContextMenuItem title='HTML' leftIcon={<Bolt />}/>
              <ContextMenuItem title='CSS' leftIcon={<Bolt />}/>
              <ContextMenuItem title='JavaScript' leftIcon={<Bolt />}/>
              <ContextMenuItem title='React' leftIcon={<Bolt />}/>
            </ContextMenuItem>
            <ContextMenuItem title='Animals' leftIcon='🐪' rightIcon={<Chevron/>} >
              <ContextMenuItem title='Animals' back leftIcon={<Arrow/>} />
              <ContextMenuItem title='Dogs' leftIcon='🐾' rightIcon={<Chevron/>} >
                <ContextMenuItem title='Dogs' back leftIcon={<Arrow/>} />
                <ContextMenuItem title='Guide Dog' leftIcon="🦮" />
                <ContextMenuItem title='Service Dog' leftIcon="🐕‍🦺" />
                <ContextMenuItem title='Poodle' leftIcon="🐩" />
                <ContextMenuItem title='Wolf' leftIcon="🐺" />
              </ContextMenuItem>
              <ContextMenuItem title='Monkey' leftIcon="🐒" />
              <ContextMenuItem title='Cat' leftIcon="🐈" />
              <ContextMenuItem title='Lion' leftIcon="🦁" />
              <ContextMenuItem title='Tiger' leftIcon="🐅" />
              <ContextMenuItem title='Horse' leftIcon="🐎" />
              <ContextMenuItem title='Zebra' leftIcon="🦓" />
            </ContextMenuItem>
          </ContextMenu>
        </NavbarItem>
      </Navbar>
    </>
  );
}
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './sidebar.css';
import logo from '.././images/logo_2.png';

export default props => {
  return (
    <Menu>
      <img src={logo} height={150} width={150}/>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/createAccount">
        Create account
      </a>
      <a className="menu-item" href="/pizzas">
        Pizzas
      </a>
      <a className="menu-item" href="/desserts">
        Desserts
      </a>
    </Menu>
  );
};
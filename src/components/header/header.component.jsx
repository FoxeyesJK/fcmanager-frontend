import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.styles.scss';

const Header = ({ match, isSelectedOption }) => {
  return (
  <div className='header'>
    <div className='options'>
      <NavLink className='option' activeClassName='option-active' exact to='/admin-member'>
        User
      </NavLink>
      <NavLink className='option' activeClassName='option-active' exact to='/admin-league'>
        League
      </NavLink>
    </div>
  </div>
  )
};


export default Header;
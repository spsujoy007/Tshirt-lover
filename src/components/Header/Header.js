import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
      <div className="navbar bg-gray-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
  <li><NavLink to='/orders'>Orders</NavLink></li>
  <li><NavLink to='/grandpa'>Grandpa</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
      </ul>
    </div>
    
    <Link to='/' className="btn btn-ghost normal-case text-xl">Tshirt Lover</Link>
  </div>
  <div className="navbar hidden lg:flex justify-end">
    <ul className="menu menu-horizontal p-0">
    <li><NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
  <li><NavLink to='/orders'>Orders</NavLink></li>
  <li><NavLink to='/grandpa'>Grandpa</NavLink></li>
  <li><NavLink to='/about'>About</NavLink></li>
    </ul>
  </div>
</div>
    );
  };
  // <li><NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink></li>
  // <li><NavLink to='/orders'>Orders</NavLink></li>
  // <li><NavLink to='/grandpa'>Grandpa</NavLink></li>
  // <li><NavLink to='/about'>About</NavLink></li>
  // <nav>
  //     <NavLink className={({isActive}) => isActive ? 'active' : undefined} to='/home'>Home</NavLink>
  //     <NavLink to='/orders'>Orders</NavLink>
  // </nav>

export default Header;
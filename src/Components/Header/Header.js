import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.svg'
const Header = () => {
    return (
        <div className="navbar bg-white text-primary-content px-5">
            <Link className='mr-5' to='/'><img className='w-24 h-8' src={logo} alt="" /></Link>
            <Link className='btn btn-ghost normal-case text-xl text-black' to='/'>Home</Link>
            <Link className='btn btn-ghost normal-case text-xl text-black' to='/login'>Log in</Link>
            <Link className='btn btn-ghost normal-case text-xl text-black' to='/signup'>Sign up</Link>
            
            <Link className='btn btn-ghost normal-case text-xl text-black' to='/'>About</Link>
            <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img src="https://placeimg.com/80/80/people" />
                    </div>
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li>
                        <a className="justify-between">
                            Profile
                            <span className="badge">New</span>
                        </a>
                    </li>
                    <li><a>Settings</a></li>
                    <li><a>Logout</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
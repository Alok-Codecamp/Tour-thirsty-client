import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const {user,LogOut,isLoading,}=useAuth();
    return (
        <div className='header-container'>
                    <Link to="/home"><h1>Tour thirsty</h1></Link>
            <div className="nav-container">
                <Link to="/home">Home</Link>
                <Link to="/packages">Packages</Link>
                <Link to="/mybooking">My Booking</Link>
                <Link to="/managebooking">Manage All Booking</Link>
                <Link to="/addpackage">Add Package</Link>
                {
                    user.email?
                    <button onClick={LogOut}>Logout</button>
                    :
                    <Link to="/login">Login</Link>
                }
                {
                    user&&<span>{user.displayName}</span>
                }
            </div>
        </div>
    );
};

export default Header;
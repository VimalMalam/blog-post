import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

export const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get data from localStorage
        const storedData = localStorage.getItem("registerData");

        if (storedData) {
            try {
                const parsedData = JSON.parse(storedData);
                setUser(parsedData);
            } catch (error) {
                console.error("Invalid JSON in localStorage:", error);
            }
        }
    }, []);


    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem("lgnData");
        navigate('/login')
    }

    // const handleApi = () => {
    //     navigate('/api')
    // }

    const handleBlog = () => {
        navigate('/')
    }

    return (
        <nav className="navbar">
            <div className="navbar-left">
                <h2 className="app-name" onClick={handleBlog}>Blog Post</h2>
            </div>

            <div className="navbar-center">
                <img
                    src="/blogger.png" // replace with your logo
                    alt="Logo"
                    className="navbar-logo"
                />
            </div>

            <div className="navbar-right">
                <div>{user ? (<p>Welcome, {user.username} !</p>) : (<p>Welcome, Guest!</p>)}</div>
                {/* <img src={userImg} alt="User" className="user-img" /> */}
                <button className="logout-btn" onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
    );

    // return (
    //     <>
    //         <div className='nav-bar'>
    //             <p><span className='logo' onClick={handleBlog}>BLOG</span></p>
    //             {/* <div className='logo-container'>
    //                 <img className='img-logo' src="../blogger.png" alt="" />
    //             </div> */}
    //             {/* <button className='logout-btn' onClick={handleApi}>API</button> */}
    //             <div>
    //                 <button className='logout-btn' onClick={handleLogout}>Logout</button>
    //             </div>
    //         </div>
    //     </>
    // )
}
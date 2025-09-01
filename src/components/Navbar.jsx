import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from "react";

export const Navbar = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Get data from localStorage
        const storedData = localStorage.getItem("regData");

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
                    src="/Blog_Post_Purple.png" // your logo
                    alt="Logo"
                    className="navbar-logo"
                />
            </div>

            <div className="navbar-right">
                <span className="user-name">
                    {user ? `Welcome, ${user.name} !` : "Welcome, Guest!"}
                </span>
                <button className="logout-btn" onClick={handleLogout}>
                    <span className="logout-text">Logout</span>
                    <span className="logout-icon">⏻</span>
                </button>
            </div>


        </nav>
    );
}
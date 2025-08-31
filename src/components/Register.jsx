
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [confirmPass, setConfirmPass] = useState("");

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [confirmPassError, setConfirmPassError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;

        if (name === "") {
            setNameError("Enter Name Properly");
            isValid = false;
        }
        if (email === "") {
            setEmailError("Email must not be empty");
            isValid = false;
        }
        if (pass === "") {
            setPassError("Password is required");
            isValid = false;
        }
        if (confirmPass === "") {
            setConfirmPassError("Confirm your password");
            isValid = false;
        } else if (pass !== confirmPass) {
            setConfirmPassError("Passwords do not match");
            isValid = false;
        }

        if (!isValid) return;

        const regData = { name, email, pass };
        localStorage.setItem("regData", JSON.stringify(regData)); // store registered user

        navigate('/'); // redirect to home after successful register
    };

    return (
        <div className="login-container">
            {/* Background Video */}
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="/videos/283533.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="bg-overlay"></div>

            {/* Register Card */}
            <div className="login-card">
                <h2 className="login-title">Create Account 🚀</h2>
                <p className="login-subtitle">Register to continue</p>
                <form onSubmit={handleSubmit} className="login-form">
                    <label className="login-label">Name</label>
                    <input
                        className="login-input"
                        type="text"
                        placeholder="Your Name"
                        value={name}
                        onChange={(e) => {
                            setName(e.target.value);
                            setNameError("");
                        }}
                    />
                    {nameError && <p className="error">{nameError}</p>}

                    <label className="login-label">Email Address</label>
                    <input
                        className="login-input"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                        }}
                    />
                    {emailError && <p className="error">{emailError}</p>}

                    <label className="login-label">Password</label>
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Your Password"
                        value={pass}
                        onChange={(e) => {
                            setPass(e.target.value);
                            setPassError("");
                        }}
                    />
                    {passError && <p className="error">{passError}</p>}

                    <label className="login-label">Confirm Password</label>
                    <input
                        className="login-input"
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmPass}
                        onChange={(e) => {
                            setConfirmPass(e.target.value);
                            setConfirmPassError("");
                        }}
                    />
                    {confirmPassError && <p className="error">{confirmPassError}</p>}

                    <button className="login-button" type="submit">Register</button>

                    <p className='login-footer'>Already have an account? <a href="/login">Login</a></p>
                </form>
            </div>
        </div>
    );
};

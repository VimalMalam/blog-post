import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passError, setPassError] = useState("")

    const navigate = useNavigate()

    const nameChangeHandler = (e) => {
        console.log(e.target.value);
        setName(e.target.value);

        if (e.target.value !== "") {
            setNameError("");
        }
    }

    const emailChangeHandler = (e) => {
        console.log(e.target.value);
        setEmail(e.target.value);

        if (e.target.value !== "") {
            setEmailError("");
        }
    }

    const passChangeHandler = (e) => {
        console.log(e.target.value);
        setPass(e.target.value);

        if (e.target.value !== "") {
            setPassError("");
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (name == "") {
            setNameError("Enter Name Properly")
        }
        if (email == "") {
            setEmailError("Email must not be empty")
        }
        if (pass == "") {
            setPassError("Password is required")
            return
        }

        const data = {
            name, email, pass
        }

        localStorage.setItem("lgnData", JSON.stringify(data));
        navigate('/')

        // setName("");
        // setEmail("");
        // setPass("");
    }


    return (
        <>
            <div className="login-container">
                <div className='login-box'>
                    <h2 className='login-box-heading'>Login</h2>
                    <form onSubmit={handleSubmit}>
                        <label className='login-box-label'>Name:</label>
                        <input className='login-box-input' type="text" placeholder="Name" onChange={nameChangeHandler} value={name} name='email' />
                        {nameError && <p className="error">{nameError}</p>}
                        <label className='login-box-label'>Email Address:</label>
                        <input className='login-box-input' type="email" placeholder="vim@gmail.com" onChange={emailChangeHandler} value={email} name='email' />
                        {emailError && <p className="error">{emailError}</p>}
                        <label className='login-box-label'>Password:</label>
                        <input className='login-box-input' type="password" placeholder="Your Password" onChange={passChangeHandler} value={pass} name='pass' />
                        {passError && <p className="error">{passError}</p>}
                        <button className='login-box-button' type='submit'>Login</button>
                    </form>
                </div>
            </div>
        </>
    );
}
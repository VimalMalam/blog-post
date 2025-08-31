// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css'

// export const Login = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");

//     const [nameError, setNameError] = useState("")
//     const [emailError, setEmailError] = useState("")
//     const [passError, setPassError] = useState("")

//     const navigate = useNavigate()

//     const nameChangeHandler = (e) => {
//         console.log(e.target.value);
//         setName(e.target.value);

//         if (e.target.value !== "") {
//             setNameError("");
//         }
//     }

//     const emailChangeHandler = (e) => {
//         console.log(e.target.value);
//         setEmail(e.target.value);

//         if (e.target.value !== "") {
//             setEmailError("");
//         }
//     }

//     const passChangeHandler = (e) => {
//         console.log(e.target.value);
//         setPass(e.target.value);

//         if (e.target.value !== "") {
//             setPassError("");
//         }
//     }

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name == "") {
//             setNameError("Enter Name Properly")
//         }
//         if (email == "") {
//             setEmailError("Email must not be empty")
//         }
//         if (pass == "") {
//             setPassError("Password is required")
//             return
//         }

//         const data = {
//             name, email, pass
//         }

//         localStorage.setItem("lgnData", JSON.stringify(data));
//         navigate('/')

//         // setName("");
//         // setEmail("");
//         // setPass("");
//     }


//     return (
//         <>
//             <div className="login-container">
//                 <div className='login-box'>
//                     <h2 className='login-box-heading'>Login</h2>
//                     <form onSubmit={handleSubmit}>
//                         <label className='login-box-label'>Name:</label>
//                         <input className='login-box-input' type="text" placeholder="Name" onChange={nameChangeHandler} value={name} name='email' />
//                         {nameError && <p className="error">{nameError}</p>}
//                         <label className='login-box-label'>Email Address:</label>
//                         <input className='login-box-input' type="email" placeholder="vim@gmail.com" onChange={emailChangeHandler} value={email} name='email' />
//                         {emailError && <p className="error">{emailError}</p>}
//                         <label className='login-box-label'>Password:</label>
//                         <input className='login-box-input' type="password" placeholder="Your Password" onChange={passChangeHandler} value={pass} name='pass' />
//                         {passError && <p className="error">{passError}</p>}
//                         <button className='login-box-button' type='submit'>Login</button>
//                     </form>
//                 </div>
//             </div>
//         </>
//     );
// }


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// export const Login = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [pass, setPass] = useState("");

//     const [nameError, setNameError] = useState("");
//     const [emailError, setEmailError] = useState("");
//     const [passError, setPassError] = useState("");

//     const navigate = useNavigate();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         if (name === "") setNameError("Enter Name Properly");
//         if (email === "") setEmailError("Email must not be empty");
//         if (pass === "") {
//             setPassError("Password is required");
//             return;
//         }

//         const data = { name, email, pass };
//         localStorage.setItem("lgnData", JSON.stringify(data));
//         navigate('/');
//     };

//     return (
//         <div className="login-container">
//             {/* Background Video */}
//             <video autoPlay muted loop playsInline className="bg-video">
//                 <source src="/videos/283533.mp4" type="video/mp4" />
//             </video>

//             {/* Dark overlay */}
//             <div className="bg-overlay"></div>

//             {/* Login Card */}
//             <div className="login-card">
//                 <h2 className="login-title">Welcome Back 👋</h2>
//                 <p className="login-subtitle">Login to continue reading</p>
//                 <form onSubmit={handleSubmit} className="login-form">
//                     <label className="login-label">Name</label>
//                     <input
//                         className="login-input"
//                         type="text"
//                         placeholder="Your Name"
//                         value={name}
//                         onChange={(e) => {
//                             setName(e.target.value);
//                             setNameError("");
//                         }}
//                     />
//                     {nameError && <p className="error">{nameError}</p>}

//                     <label className="login-label">Email Address</label>
//                     <input
//                         className="login-input"
//                         type="email"
//                         placeholder="you@example.com"
//                         value={email}
//                         onChange={(e) => {
//                             setEmail(e.target.value);
//                             setEmailError("");
//                         }}
//                     />
//                     {emailError && <p className="error">{emailError}</p>}

//                     <label className="login-label">Password</label>
//                     <input
//                         className="login-input"
//                         type="password"
//                         placeholder="Your Password"
//                         value={pass}
//                         onChange={(e) => {
//                             setPass(e.target.value);
//                             setPassError("");
//                         }}
//                     />
//                     {passError && <p className="error">{passError}</p>}

//                     <button className="login-button" type="submit">Login</button>

//                     <p className='login-footer'>Don't have an account? <a href="/register">Register</a></p>
//                 </form>
//             </div>
//         </div>
//     );
// };


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

export const Login = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [emailError, setEmailError] = useState("");
    const [passError, setPassError] = useState("");
    const [formError, setFormError] = useState(""); // generic invalid credentials error

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        let isValid = true;
        setFormError(""); // reset previous errors

        if (email === "") {
            setEmailError("Email must not be empty");
            isValid = false;
        }
        if (pass === "") {
            setPassError("Password is required");
            isValid = false;
        }

        if (!isValid) return;

        // Get registered user from localStorage
        const regData = JSON.parse(localStorage.getItem("regData"));

        if (!regData) {
            setFormError("No account found. Please register first.");
            return;
        }

        if (regData.email === email && regData.pass === pass) {
            // Login successful
            localStorage.setItem("lgnData", JSON.stringify(regData));
            navigate('/');
        } else {
            setFormError("Invalid email or password");
        }
    };

    return (
        <div className="login-container">
            {/* Background Video */}
            <video autoPlay muted loop playsInline className="bg-video">
                <source src="/videos/283533.mp4" type="video/mp4" />
            </video>

            {/* Dark overlay */}
            <div className="bg-overlay"></div>

            {/* Login Card */}
            <div className="login-card">
                <h2 className="login-title">Welcome Back 👋</h2>
                <p className="login-subtitle">Login to continue reading</p>
                <form onSubmit={handleSubmit} className="login-form">

                    <label className="login-label">Email Address</label>
                    <input
                        className="login-input"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            setEmailError("");
                            setFormError("");
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
                            setFormError("");
                        }}
                    />
                    {passError && <p className="error">{passError}</p>}

                    {formError && <p className="error">{formError}</p>}

                    <button className="login-button" type="submit">Login</button>

                    <p className='login-footer'>
                        Don't have an account? <a href="/register">Register</a>
                    </p>
                </form>
            </div>
        </div>
    );
};


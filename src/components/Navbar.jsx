import './Navbar.css';
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        navigate('/login')
    }

    const handleApi = () => {
        navigate('/api')
    }

    const handleBlog = () => {
        navigate('/')
    }

    return (
        <>
            <div className='nav-bar'>
                <p><span className='logo' onClick={handleBlog}>BLOG</span></p>
                {/* <div className='logo-container'>
                    <img className='img-logo' src="../blogger.png" alt="" />
                </div> */}
                <button className='logout-btn' onClick={handleApi}>API</button>
                <div>
                    <button className='logout-btn' onClick={handleLogout}>Logout</button>
                </div>
            </div>
        </>
    )
}
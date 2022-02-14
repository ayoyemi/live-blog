import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
    const isAuth = localStorage.getItem('auth')
    const navigate = useNavigate();
    const handleLogout = () => {
        localStorage.clear('auth')
        navigate("/")
    }
    return (
        <nav className="navbar">
            <h1>Ayoyemi Blog</h1>
            <Link to="/home">Home</Link>
            { isAuth && 
                <div> 
                    <Link to="/create">Create Post</Link>
                    <Link to="/profile">Profile</Link>
                    <Link to="/" onClick={ handleLogout }>Logout</Link>
                </div>
            }
            { !isAuth && <Link to="/">Login</Link>}
        </nav>
    );
}
 
export default Navbar;
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registration } from "./redux/actions";
import {useDispatch} from "react-redux";

const Register = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bio, setBio] = useState('');
    const navigate = useNavigate();

    const dispatch = useDispatch();
    
    const handleRegistration = (firstname, lastname, username, email, password, bio) => 
    {dispatch(registration(firstname, lastname, username, email, password, bio))}

    const handleSubmit = (e) => {
        e.preventDefault();
       
        handleRegistration(firstname, lastname, username, email, password, bio);
        localStorage.setItem('auth', true);
        // console.log(article)
        navigate('/profile')
    }

    return (
        <div className="container">
            <h1>Register</h1>
            <form onSubmit={handleSubmit} className="form">
                <label>First Name:</label>
                <input
                    type="text"
                    value={firstname}
                    required
                    onChange = {(e) => setFirstname(e.target.value)}
                   
                />
                
                <label>Lastname:</label>
                <input
                    type="text"
                    value={lastname}
                    required
                    onChange = {(e) => setLastname(e.target.value)}
                    
                />
                
                <label>Username:</label>
                <input
                    type="text"
                    value={username}
                    required
                    onChange = {(e) => setUsername(e.target.value)}
                />
                
                <label>Email:</label>
                <input
                    type="email"
                    value={email}
                    required
                    onChange = {(e) => setEmail(e.target.value)}
                />
                
                <label>Password:</label>
                <input
                    type="password"
                    value={password}
                    required
                    onChange = {(e) => setPassword(e.target.value)}
                />
                
                <label>Bio:</label>
                <textarea
                    
                    rows="7"
                    cols="40"
                    value={bio}
                    required
                    onChange = {(e) => setBio(e.target.value)}
                />
                <button>Register</button>

                <p className="dont-have">Already have an account? <Link to="/">Login here...</Link> </p>
            </form>
        </div>
    );
}
 
export default Register;
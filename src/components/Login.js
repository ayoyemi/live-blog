import { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [ error, setError ] = useState('');
    const navigate  = useNavigate();
    const isAuth = localStorage.getItem('auth')

    const onSubmit = (data) => {
        if (data.email === "user@myblog.com" && data.password === "12345") {
            localStorage.setItem('auth', true);
            navigate("/home")
        }else {
            setError("Invalid login details")
        }
    }

    return (
        <div className="container">
            { isAuth && <Navigate to="/home" /> }
            { !isAuth && localStorage.clear('auth')}
            <h1>Login</h1>
            <hr />
            <p className="error-msg">{ error }</p>
            <div className="form">
                <form onSubmit={ handleSubmit(onSubmit) }>
                <label>Email</label>
                    <input 
                        type="email"
                        { ...register("email", { required: true })}
                    />
                    { errors.email && <p className="error-msg">email is required</p>}
                    <label>Password</label>
                    <input 
                        type="password"
                        { ...register("password", { required: true })}
                    />
                    { errors.password && <p className="error-msg">password is required</p>}
                    <button>Login</button>

                </form>
                
                <div className="dont-have">
                    <p>Don't have an account? <Link to="/register">Register Here</Link></p>
                </div>
            </div> 
        </div>   
    );
}
 
export default Login;
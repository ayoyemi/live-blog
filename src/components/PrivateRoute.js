import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children, ...otherProps}) => {
    const isAuth = localStorage.getItem('auth')
    return (
        <div className="container">
            { isAuth ? children : <Navigate to="/" /> }
        </div>
    );
}
 
export default PrivateRoute;
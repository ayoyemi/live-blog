import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="container">
            <h1>404, Page not found</h1>
            <p>Sorry, the page you're looking for does not exist on the server</p>
            <Link to="/home">Back to Homepage</Link>
        </div>
    );
}
 
export default NotFound;
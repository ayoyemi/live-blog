import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './components/Homepage';
import Navbar from './components/Navbar';
import Create from './components/Create';
import Login from './components/Login';
import Register from './components/Register';
import PostDetails from './components/PostDetails';
import NotFound from './components/NotFound';
import './index.css';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content"> 
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/create" element={<PrivateRoute><Create /></PrivateRoute>} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/posts/:id" element={<PostDetails />} />
            <Route path="/profile" element={ <PrivateRoute><Profile /></PrivateRoute> } />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
    
    
  );
}

export default App;

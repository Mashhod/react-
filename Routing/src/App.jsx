import { Link, Route, Routes, Navigate } from 'react-router';
import logo from './logo.svg';
import './App.css';
import Home from "./Pages/Home";
import About from './Pages/About';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';


function App() {
  return (

    <div className='navbar'>
      <nav>
        <ul>
          <li><Link to={"/login"}>Login </Link></li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About</Link></li>
        </ul>
      </nav>

      <div className="pages">
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/login' element={<Login />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/not-found' element={<NotFound />}/>
          <Route path='*' element={<Navigate to="/not-found" replace={true} />}/>
        </Routes>
      </div>
    </div>

      );
}

export default App;

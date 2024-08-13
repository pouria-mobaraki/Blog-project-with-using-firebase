import React, { useState } from 'react'
import "./App.css";
import {BrowserRouter as Router , Routes , Route, Link} from "react-router-dom"
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import Login from './pages/Login';
import {signOut} from "firebase/auth"
import { auth } from './firebase-config';


export default function App() {
  const [isAuth,setIsAuth] = useState(false)


  const signUserOut = ()=>{
    signOut(auth).then(()=>{
      localStorage.clear()
      setIsAuth(false)
      window.location.pathname="/login"
    })
  }

  return (
    <Router>
       <nav>
         <Link to="/">Home</Link>
         <Link to="/createpost">Create Post</Link>
         {!isAuth ? <Link to="/login">Login</Link> : <button type="" onClick={signUserOut}>Log out</button>}
       </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login setIsAuth={setIsAuth}/>} />
        <Route path='/createpost' element={<CreatePost/>} />
      </Routes>
    </Router>
  )
}

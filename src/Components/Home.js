import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
           <h1>Home</h1> 
           <Link to="/login">Login</Link>
           <Link to="/test"> Testing page</Link>
        </div>
    )
}

export default Home;


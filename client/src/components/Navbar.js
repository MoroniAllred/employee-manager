import React from "react"
import {Link, withRouter} from "react-router-dom"

const Navbar = () => {

    return(
       <nav>
           <h1>Employee Manager</h1>
           <div>
                <Link to="/" className="navLink">Home</Link>
                <Link to="/editTable" className="navLink">Edit Page</Link>
           </div>
       </nav>
    )
}

export default Navbar
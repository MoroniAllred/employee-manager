import React from "react"
import {Link, withRouter} from "react-router-dom"

const Footer = () => {

    return(
        <footer>
            <h4>Employee Manager</h4>
            <div className="footerLinkDiv">
                <h4 className="footerLogo">Explore</h4>
                <Link to="/" className="footerLink">Home</Link>
                <Link t0="/editTable" className="footerLink">Edit</Link>
            </div>
        </footer>
    )
}

export default Footer
import React from "react"
import Navbar from "./components/Navbar.js"
import Employee from "./components/Employee.js"
import Footer from "./components/Footer.js"
import "./style.scss"
import {Route, Switch} from "react-router-dom"
import Edit from "./components/Edit.js"

const App = () => {

    return(
        <div>
            <Navbar/>
            <Switch>
                <Route exact path="/" render={() => <Employee/>}/>
                <Route path="/editTable" render={() => <Edit/>}/>
            </Switch>
            <Footer/>
        </div>
    )
}

export default App
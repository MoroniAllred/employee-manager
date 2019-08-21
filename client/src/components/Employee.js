import React, {Component} from "react"
import axios from "axios"
import EmpTable from "./EmpTable"
import {Link, withRouter} from "react-router-dom"

class Employee extends Component{
    constructor(){
        super()
        this.state = {
            employee: []
        }
    }

componentDidMount = () => {
    axios.get("/employee")
        .then((res) => this.setState({
            employee: res.data
        }))
        .catch((err) => console.log(err))
}

    render(){
        const mappedEmployees = this.state.employee.map(emp => 
                                                            <EmpTable 
                                                                {...emp} 
                                                                lastName={emp.lastName[0].toUpperCase() + emp.lastName.slice(1)} 
                                                                firstName={emp.firstName[0].toUpperCase() + emp.firstName.slice(1)}
                                                                phone={`(${emp.phone.toString().slice(0, 3)}) ${emp.phone.toString().slice(3,6)}-${emp.phone.toString().slice(6)}`}/>)
        return(
            <div>
                <div className = "mainImag"></div>
                <div className = "spacerBack">
                    <div className = "columHeaders">
                        <h2>Last Name</h2>
                        <h2>First Name</h2>
                        <h2>Employee ID</h2>
                        <h2>Email</h2>
                        <h2>Phone Number</h2>
                    </div>
                {mappedEmployees}
                <Link to="/editTable" className="pageLink">Click Here to Edit/Add Employee</Link>
                </div>
            </div>
            )
        }
    }
export default Employee
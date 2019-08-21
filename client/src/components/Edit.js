import React, {Component} from "react"
import EditTable from "./EditTable.js"
import axios from "axios"
import {Link, withRouter} from "react-router-dom"

class Edit extends Component{
    constructor(){
        super()
        this.state = {
            firstName: "",
            lastName: "",
            phone: "",
            email: "",
            employeeID: "",
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

        handleChange = (e) => {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    
        handleSubmit = (e) => {
            e.preventDefault()
            axios.post(`/employee`, {firstName: this.state.firstName, lastName: this.state.lastName, employeeID: this.state.employeeID, phone: this.state.phone, email: this.state.email })
                    .then((res) => {
                        this.setState({
                            firstName: "",
                            lastName: "",
                            phone: "",
                            email: "",
                            employeeID: ""
                        })
                        this.setState( prevState => {
                            return {employee: [...prevState.employee, res.data]}
                        })})
                    .catch((err) => console.log(err))
            }

            handleEditReload = (id, updated) => {
                this.setState( prevState => {
                    return {
                        employee: prevState.employee.map(emp => emp._id === id ? updated : emp)
                    }
                })
            }

            handleDelete = (id) => {
                this.setState({
                    employee: this.state.employee.filter(emp => {
                        return emp._id !== id  
                    })
                })
            }

    render(){
        const mappedEditEmployees = this.state.employee.map(emp => <EditTable {...emp} handleEditReload={this.handleEditReload} handleDelet={this.handleDelet}/>)
        return(
            <div>
                <div className="addFormBack">
                    <form onSubmit={this.handleSubmit} className="addForm">
                        <input 
                            type="text" 
                            name="lastName" 
                            value={`${this.state.lastName}`} 
                            onChange={this.handleChange} 
                            placeholder="Last Name" 
                            required/>
                        <input 
                            type="text" 
                            name="firstName" 
                            value={`${this.state.firstName}`} 
                            onChange={this.handleChange} 
                            placeholder="First Name" 
                            required/>
                        <input 
                            type="number" 
                            name="employeeID" 
                            value={`${this.state.employeeID}`} 
                            onChange={this.handleChange} 
                            placeholder="Employee ID"
                            required/>
                        <input 
                            type="email" 
                            name="email" 
                            value={`${this.state.email}`} 
                            onChange={this.handleChange} 
                            placeholder="Email Adress"
                            required/>
                        <input 
                            type="number" 
                            name="phone" 
                            value={`${this.state.phone}`} 
                            onChange={this.handleChange} 
                            placeholder="Phone Number"
                            required/>
                        <button type="submit">Submit</button>
                    </form>
                    </div>
                    <div className="spacerBack">
                        <div className = "columHeaders">
                                <h2>Last Name</h2>
                                <h2>First Name</h2>
                                <h2>Employee ID</h2>
                                <h2>Email</h2>
                                <h2>Phone Number</h2>
                        </div>
                    {mappedEditEmployees}
                    <Link to="/" className="pageLink">Click Here to Return to the Home Page</Link>
                    </div>
                </div>
        )
    } 
}

export default Edit
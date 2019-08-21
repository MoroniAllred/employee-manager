import React, {Component} from "react"
import axios from "axios"

class EditTable extends Component{
    constructor(props){
        super(props)
        this.state = {
            firstName: props.firstName,
            lastName: props.lastName,
            phone: props.phone,
            email: props.email,
            employeeID: props.employeeID,
            edditToggle: false
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleEdit = (e) => {
        e.preventDefault()
        axios.put(`/employee/${this.props._id}`, {firstName: this.state.firstName, lastName: this.state.lastName, employeeID: this.state.employeeID, phone: this.state.phone, email: this.state.email })
                .then((res) => {
                    this.props.handleEditReload(this.props._id, res.data)
                    this.edditToggle()
                })
                .catch((err) => console.log(err))
        }

        

        delete = () => {
            axios.delete(`/employee/${this.props._id}`)
            .then(res => {
                this.props.handleDelete(this.props._id)
            })
            .catch((err) => console.log(err))
            window.location.reload()
        }

        edditToggle = () => {
            this.setState
            ({
                edditToggle: !this.state.edditToggle
            })
        }

render(){
    return(
         <div className="tableBack">
             <div className="employeeInfo">
                 <h3>{this.props.lastName}</h3>
                 <h3>{this.props.firstName}</h3>
                 <h3>{this.props.employeeID}</h3>
                 <h3>{this.props.email}</h3>
                 <h3>{this.props.phone}</h3>
                 <button onClick={this.delete} className={`editOrDelete-${this.state.edditToggle}`}>Delete</button>
                 <button onClick={this.edditToggle} className={`editOrDelete-${this.state.edditToggle}`}>Edit</button>
                <div className="formBreak">
                    <form className={`editForm-${this.state.edditToggle}`}>
                            <input 
                                type="text" 
                                name="lastName" 
                                value={`${this.state.lastName}`} 
                                onChange={this.handleChange} 
                                placeholder="Last Name" 
                                />
                            <input 
                                type="text" 
                                name="firstName" 
                                value={`${this.state.firstName}`} 
                                onChange={this.handleChange} 
                                placeholder="First Name" 
                                />
                            <input 
                                type="number" 
                                name="employeeID" 
                                value={`${this.state.employeeID}`} 
                                onChange={this.handleChange} 
                                placeholder="Employee ID"
                                />
                            <input 
                                type="email" 
                                name="email" 
                                value={`${this.state.email}`} 
                                onChange={this.handleChange} 
                                placeholder="Email Adress"
                                />
                            <input 
                                type="number" 
                                name="phone" 
                                value={`${this.state.phone}`} 
                                onChange={this.handleChange} 
                                placeholder="Phone Number"/>
                            <div className="buttonSparater">   
                                <button onClick={this.handleEdit} className="editButton">Submit Changes</button> 
                                <button onClick={this.edditToggle} className="editButton">Cancel</button>
                            </div> 
                    </form>
                </div>
             </div>
         </div>
     )
    }
}

export default EditTable
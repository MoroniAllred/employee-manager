import React from "react"

const EmpTable = (props) => {
    return (
        <div className="tableBack">
            <div className="employeeInfo">
                <h3>{props.lastName}</h3>
                <h3>{props.firstName}</h3>
                <h3>{props.employeeID}</h3>
                <h3>{props.email}</h3>
                <h3>{props.phone}</h3>
            </div>
        </div>
    )
}

export default EmpTable
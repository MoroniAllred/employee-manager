const express = require("express")
const employeeRouter = express.Router()
const Employee = require("../modles/employee.js")

employeeRouter.get("/", (req, res, next) =>{
    Employee.find((err, employee) => {
        if(err){
            res.status(500);
            next(err);
        }else{
            res.status(200).send(employee)
        }
    })
})

employeeRouter.post("/", (req, res, next) => {
    const newEmployee = new Employee(req.body)
    newEmployee.save((err, savedEmloyee) =>{
        if(err){
            res.status(500)
            next(err)
        }else{
            res.status(201).send(savedEmloyee)
        }
    })
})

employeeRouter.put("/:_id", (req, res, next) => {
    Employee.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err, updatedEmployee) => {
            if(err){
                res.status(500)
                next(err)
            }else{
                res.status(201).send(updatedEmployee)
            }
        }
    )
})

employeeRouter.delete("/:id", (req, res, next) => {
    Employee.findOneAndRemove(req.params._id, (err, deletedEmployee) => {
        if(err){
            res.status(500)
            next(err)
        }else{
            res.status(202).send({message: `employee removed ${deletedEmployee.firstName}`, _id: deletedEmployee._id})
        }
    })
})

module.exports = employeeRouter
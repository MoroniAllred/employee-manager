const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7000

app.use(morgan("dev"))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/employeeDB",{
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true 
})
    .then(() =>console.log("getting employees"))
    .catch(err => console.log(err))

app.use("/employee", require("./routes/employeeRouter.js"))

app.use((err, req, res, next) => {
        console.log(err)
        return res.send({errMsg: err.message})
})

app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
})
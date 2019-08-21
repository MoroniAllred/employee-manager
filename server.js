const express = require("express")
const app = express()
require("dotenv").config()
const morgan = require("morgan")
const mongoose = require("mongoose")
const PORT = process.env.PORT || 7000
const path = require("path")

app.use(morgan("dev"))
app.use(express.json())
app.use(express.static(path.join(__dirname, "client", "build")))


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/employeeDB",{
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

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
        console.log(`server is running on ${PORT}`)
})
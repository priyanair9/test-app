const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")


app.use(cors())
app.use(express.json());

//connect to mongoose
mongoose.connect("mongodb+srv://priya:priya@cluster0.0mtv8fy.mongodb.net/notesDB?retryWrites=true&w=majority")

//require route
app.use("/", require("./routes/noteRoute"))

app.listen(3001, function() {
    console.log("Express server is running on port 3001!!")
})

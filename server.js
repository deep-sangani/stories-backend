require("dotenv").config()
const express = require("express")
const app = express()
const cors = require("cors")
const mongoose = require("mongoose")



app.use(express.json({limit:"30mb"}))
app.use(express.urlencoded({extended:true,limit:"30mb"}))
app.use(cors())


const PORT = process.env.PORT || 3300

mongoose.connect(process.env.DATABASE_CONNECTION_URL,{useNewUrlParser:true,useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:true});
    const connection = mongoose.connection;


    connection.once('open',()=>{
      console.log("database connected");
    }).catch(()=>{
        console.log("connection failed");
    })


    require("./routes/posts")(app)

app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})
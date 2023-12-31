import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";
import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import cookieParser from "cookie-parser";
import cors from "cors";


const app = express();
dotenv.config()

const connect = async () => {
try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to MongoDB")
} catch (error) {
    throw error;
}
};
// test to see if app is connected to db by addind or delecting ip address
mongoose.connection.on("disconnected", ()=> {
    console.log("mongoDb Disconnected!")
})

mongoose.connection.on('connected', ()=>{
console.log("mongoDb Connected!")
})

app.get("/user", (req, res) => {
    res.send("hello first request")
})

// middlewares
app.use(cors())
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);
app.use("/api/users", usersRoute);
 
app.use((err, req, res, next)=>{ 
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success:false,
        status: errorStatus,
        message: errorMessage,
        stack: err.stack, 
    });

});


app.listen(8080, () => {
    connect();
    console.log("connected to backend.")
})

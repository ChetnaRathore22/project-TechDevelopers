import bodyParser from "body-parser";
import express from "express";
import AdminRouter from "./routes/admin.route.js"
const app=express();


app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json())
app.use("/admin",AdminRouter);

app.listen(3010,()=>{
    console.log("Server Started");
})

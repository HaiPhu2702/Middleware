import {AppDataSource} from "./src/data-source";
import express from "express";
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import authRouter from './src/routes/auth/auth.route'
const PORT = 3000;

AppDataSource.initialize().then(async () => {
    const app = express();
    app.use(bodyParser.json());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    app.use(cookieParser())

    app.set("view engine", "ejs");
    app.set("views", "./src/views");

    app.use("/", authRouter);
// app.get('/',(req,res)=>{
//     res.json("jfhdsjkfdhskjf");
// })

    app.listen(PORT, () => {
        console.log("App running with port: " + PORT)
    })
});

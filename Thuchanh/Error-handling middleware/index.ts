import  express from 'express';
import bodyParser from "body-parser";
import fs from "fs";


const port=8080;

const app = express();


app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

app.get('/one',(req,res,next) => {
    fs.promises.readFile("./one.txt")
        .then(data =>res.send(data))
        .catch(err =>next(err));
})

app.use((err, req, res, next) =>{
    console.error('Error:', err.type)
    if(err.type === 'time-out'){
        res.status(408).send(err)
    }else {
        res.status(500).send(err)
    }
})




app.listen(port,()=>{
    console.log("http://localhost:"+port)});
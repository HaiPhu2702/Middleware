import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import helmet from 'helmet';
const port=8080;

const app = express();

app.use(morgan("common"))
app.use(helmet());
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());


app.get('/',(req, res) => {
    res.json({
        message:"hello"
    })
})










app.listen(port,()=>{
    console.log("http://localhost:"+port)
});
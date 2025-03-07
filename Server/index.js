import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import 'dotenv/config';
import connectedDB from "./Config/mongoDB.js";
import authRouter from './Routes/authRoutes.js'

connectedDB();

const app = express();
const Port = process.env.PORT || 3000;

app.use(cors({credentials: true}));
app.use(cookieParser());
app.use(express.json());

///API Endpoints
app.get('/',(req,res)=>{res.send('API Working')});
app.use('/api/auth',authRouter);


app.listen(Port, () => {
  console.log(`Server Running on Port : ${Port}!`);
});

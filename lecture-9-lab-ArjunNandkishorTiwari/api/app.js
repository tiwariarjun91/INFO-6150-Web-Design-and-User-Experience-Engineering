import { urlencoded } from "express";
import express from  "express";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes/index.js";
import model from "./models/index.js";
import config from 'config';
const db = config.get('mongoURL');


const app = express();

mongoose.connect(db);

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());
// app.use(cookie)

routes(app);

export default app;
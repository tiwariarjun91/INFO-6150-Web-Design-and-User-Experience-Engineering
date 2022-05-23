import app from "./api/app.js";
import * as connectDb from './config/db.js';
// const connectDB = require('./config/db');



const port = 9000;
// connectDb.connectDB();

app.listen(port, () => {
    console.log(`Server running at ${port}`);
});

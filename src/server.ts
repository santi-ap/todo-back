import express from 'express';
import cors from 'cors';
import TaskRoute from './routes/tasks';
require('dotenv').config();

const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

TaskRoute(app);

app.listen(port, () => {
    //console.log("Server is running on port " + port);
});

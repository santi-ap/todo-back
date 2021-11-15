import express, { Request, Response } from 'express';
import cors from 'cors';
import {taskModel} from './controller/dbConnection';

const newTask = new taskModel(
    { 
        name: 'Task 2',
        details: "Details 2"
    }
);

console.log(newTask);

// newTask.save();



const app = express();

const port = "8080";

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

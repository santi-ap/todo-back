import express, { Request, Response } from 'express';
import saveTask from './controllers/saveTask';
import cors from 'cors';
require('dotenv').config();

const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.route('/')
    .get((req: Request, res: Response) => {
        console.log("Get called.");
        res.send("hello");
    })
    .post((req: Request, res: Response) => {
        console.log("Post called.");
        console.log("Req body: "+req.body);
        
        res.send(saveTask(req.body));
        // res.send(req.body);
    })
    .put((req: Request, res: Response) => {
        console.log("Put called.");
        res.send(req);
    })
    .delete((req: Request, res: Response) => {
        console.log("Delete called.");
        res.send(req);
    })

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

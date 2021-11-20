import { Request, Response } from 'express';
import saveTask from '../controllers/saveTask';
import findTask from "../controllers/findTask";
import updateTask from "../controllers/updateTask";
import deleteTask from '../controllers/deleteTask';


const TaskRoute =  (app : any) => {

    app.route('/')
        .get( async (req: Request, res: Response) => {
            console.log("Get called.");
            
            res.send( await findTask(req.body));
        })
        .post((req: Request, res: Response) => {
            console.log("Post called.");
            //console.log("Req body: "+req.body);
            
            res.send(saveTask(req.body));
            // res.send(req.body);
        })
        .put(async (req: Request, res: Response) => {
            console.log("Put called.");
            //console.log(req.body);
            
            res.send(await updateTask(req.body));
        })
        .delete(async (req: Request, res: Response) => {
            console.log("Delete called.");
            res.send( await deleteTask(req.body));
        })
}

export default TaskRoute;

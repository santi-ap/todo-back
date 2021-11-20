import { taskModel, Task } from './dbConnection';

const saveTask = (newTaskObject:Task) => {
    //console.log("New Task Object "+newTaskObject);
    
    const newTask = new taskModel(newTaskObject);
    newTask.save();
    //console.log(newTask);
    return newTask;
    
}

export default saveTask;

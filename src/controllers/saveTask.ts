import { taskModel, Task } from './dbConnection';


// const newTask = new taskModel(
//     {
//         name: 'Task 2',
//         details: "Details 2"
//     }
// );

// console.log(newTask);

// newTask.save();

const saveTask = (newTaskObject:Task) => {
    console.log("New Task Object "+newTaskObject);
    
    const newTask = new taskModel(newTaskObject);
    newTask.save();
    console.log(newTask);
    return newTask;
    
}

export default saveTask;

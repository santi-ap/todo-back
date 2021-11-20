import { taskModel, Task } from "./dbConnection";

const findTask = async (props: any) =>{
    const tasks = await taskModel.find(props);
    //console.log(tasks);
    return tasks;
}

export default findTask;
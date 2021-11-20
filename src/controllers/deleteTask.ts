import { taskModel } from "./dbConnection";

const deleteTask = async (props:any) => {
    await taskModel.deleteOne(props);
    return "Deleted one";
}

export default deleteTask;
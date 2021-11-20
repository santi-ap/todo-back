import { taskModel } from './dbConnection';

interface IUpdate {
    filter: object,
    update: object
}

const updateTask = async (props: IUpdate) => {
    console.log("filter: " + props.filter);
    console.log("update: " + props.update);

    // const TaskModel = new taskModel();
    // const tasks = await taskModel.find({ name: "Task 6" });
    // console.log(tasks);

    let result: string = "yeah";

    try {

        await taskModel.updateOne(props.filter, props.update);
    } catch (err) {
        console.log(err);
    } finally {
        console.log("resutl 2: " + result);

        return result;
    }

    // taskModel.findByIdAndUpdate("6191e0bbdb6fa3d26bee9802",{$set:{details:"Hi hello"}});
    //console.log(props);

    // //console.log(updatedTask);
    // console.log("resutl: "+result);

    // return result;
}

export default updateTask;
import EventEmitter from 'events';
import { runMain } from 'module';
import { Schema, model, connect, Error } from 'mongoose';

interface Task {
    name: string,
    details: string
}



const taskSchema = new Schema<Task>({
    name: { type: String, required: true },
    details: { type: String, required: true }
});

export const taskModel = model<Task>('Task', taskSchema);

run().catch((err) => console.log(err));

async function run() {
    await connect('mongodb://localhost:27017/todoWebApp');
}



// export default connection;



// main().catch(err => console.log(err));

// async function main() {
//     await mongoose.connect('mongodb://localhost:27017/todoWebApp');
// }

// const taskSchema = new mongoose.Schema({
//     name: String,
//     details:String
// });

// const Task = mongoose.model('Task', taskSchema);
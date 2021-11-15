import { Schema, model, connect } from 'mongoose';
require('dotenv').config();

console.log(JSON.stringify(process.env.DB_URL));

export interface Task {
    name: string,
    details?: string
    dueDate?:Date,
    dateAdded?:Date
}

const taskSchema = new Schema<Task>({
    name: { type: String, required: true },
    details: { type: String, required: false },
    dueDate: {type:Date, required:false},
    dateAdded: {type:Date, required:true, default: Date.now}
});

export const taskModel = model<Task>('Task', taskSchema);

run().catch((err) => console.log(err));

async function run() {
    await connect(process.env.DB_URL!);
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
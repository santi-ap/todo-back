"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("./dbConnection");
const saveTask = (newTaskObject) => {
    //console.log("New Task Object "+newTaskObject);
    const newTask = new dbConnection_1.taskModel(newTaskObject);
    newTask.save();
    //console.log(newTask);
    return newTask;
};
exports.default = saveTask;

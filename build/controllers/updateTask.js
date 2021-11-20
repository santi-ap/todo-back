"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConnection_1 = require("./dbConnection");
const updateTask = (props) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("filter: " + props.filter);
    console.log("update: " + props.update);
    // const TaskModel = new taskModel();
    // const tasks = await taskModel.find({ name: "Task 6" });
    // console.log(tasks);
    let result = "yeah";
    try {
        yield dbConnection_1.taskModel.updateOne(props.filter, props.update);
    }
    catch (err) {
        console.log(err);
    }
    finally {
        console.log("resutl 2: " + result);
        return result;
    }
    // taskModel.findByIdAndUpdate("6191e0bbdb6fa3d26bee9802",{$set:{details:"Hi hello"}});
    //console.log(props);
    // //console.log(updatedTask);
    // console.log("resutl: "+result);
    // return result;
});
exports.default = updateTask;

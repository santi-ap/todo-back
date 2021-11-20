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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const saveTask_1 = __importDefault(require("../controllers/saveTask"));
const findTask_1 = __importDefault(require("../controllers/findTask"));
const updateTask_1 = __importDefault(require("../controllers/updateTask"));
const deleteTask_1 = __importDefault(require("../controllers/deleteTask"));
const TaskRoute = (app) => {
    app.route('/')
        .get((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Get called.");
        res.send(yield (0, findTask_1.default)(req.body));
    }))
        .post((req, res) => {
        console.log("Post called.");
        //console.log("Req body: "+req.body);
        res.send((0, saveTask_1.default)(req.body));
        // res.send(req.body);
    })
        .put((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Put called.");
        //console.log(req.body);
        res.send(yield (0, updateTask_1.default)(req.body));
    }))
        .delete((req, res) => __awaiter(void 0, void 0, void 0, function* () {
        console.log("Delete called.");
        res.send(yield (0, deleteTask_1.default)(req.body));
    }));
};
exports.default = TaskRoute;

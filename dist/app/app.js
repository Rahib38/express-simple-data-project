"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.text());
// Router
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
userRouter.post("/create-user", (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is create successfully",
        data: user,
    });
});
app.use("/api/v1/users", courseRouter);
courseRouter.post("/create-course", (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is create successfully",
        data: course,
    });
});
// middelware
const logger = (req, res, next) => {
    console.log(req.url, req.hostname, req.path, req.cookies);
    next();
};
// id ber korar jonno =>params
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello dev!");
// });
// query
app.get("/", logger, (req, res) => {
    console.log(req.query);
    res.send("Hello dev!");
});
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello dev!");
// });
app.post("/", logger, (req, res) => {
    console.log(req.body);
    res.send("get data");
});
exports.default = app;

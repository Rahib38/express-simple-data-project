import express, { NextFunction, Request, Response } from "express";
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.text());

// Router

const userRouter = express.Router();
const courseRouter = express.Router();

app.use("/api/v1/users", userRouter);
userRouter.post("/create-user", (req: Request, res: Response) => {
  const user = req.body;
  console.log(user);
  res.json({
    success: true,
    message: "User is create successfully",
    data: user,
  });
});
app.use("/api/v1/users", courseRouter);
courseRouter.post("/create-course", (req: Request, res: Response) => {
  const course = req.body;
  console.log(course);
  res.json({
    success: true,
    message: "User is create successfully",
    data: course,
  });
});

// middelware
const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.hostname, req.path, req.cookies);
  next();
};

// id ber korar jonno =>params
// app.get("/:userId/:subId", (req: Request, res: Response) => {
//   console.log(req.params);
//   res.send("Hello dev!");
// });

// query
app.get("/", logger, (req: Request, res: Response) => {
  console.log(req.query);
  res.send("Hello dev!");
});
// app.get("/", (req: Request, res: Response) => {
//   res.send("Hello dev!");
// });

app.post("/", logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.send("get data");
});

export default app;

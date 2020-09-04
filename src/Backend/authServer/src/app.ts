/**********************************************************
 *    @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020     *
 *     @UPDATED: YONGQIAN HUANG, 23/07/2020, NPM INIT     *
 * YONGQIAN HUANG, 30/07/2020, REGISTER AND LOGIN HANDLER *
 * updated:  Shuyuan Zhang,26/08/2020,seed dummy record to database *
 **********************************************************/

require("dotenv").config();
import createError from "http-errors";
import express, { Application, Request, Response, NextFunction } from "express";
const app: Application = express();
import indexRouter from "./routes/index";
import adminRouter from "./routes/admin";
import Customer from "./models/customer";
import Login from "./models/login";
import cors from "cors";

// Database
import db from "./config/database";
import seed from "./data/seed";

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//catch database connection
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err: Error) => console.log(`DB connected fail: ${err}`));

app.use("/api", indexRouter);
app.use("/api/admin", adminRouter);

// error handler
app.use(function (err: any, req: Request, res: Response, next: NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

app.listen(4000, () =>
  console.log(
    "Car share scheme system authentication sever is running on port 4000 ..."
  )
);

if (process.env.NODE_ENV != "test") {
  db.sync().then(() => {
    seed.up().then(() => {
      console.log("Database seeded.");
    });
  });
}


export default app;
/**********************************************************
 *    @AUTHOR: YONGQIAN HUANG, CREATED AT: 23/07/2020     *
 *     @UPDATED: YONGQIAN HUANG, 23/07/2020, NPM INIT     *
 * YONGQIAN HUANG, 30/07/2020, REGISTER AND LOGIN HANDLER *
 * updated:  Shuyuan Zhang,26/08/2020,seed dummy record to database *
 **********************************************************/
 
require("dotenv").config();
const express = require("express");
const app = express();
const indexRouter = require("./routes/index");
const adminRouter = require("./routes/admin");
const Customer = require("./models/customer");
const Login = require("./models/login");
const cors = require("cors");
 
//db
const db = require("./config/database");
const seed = require("./data/seed");
 
app.use(cors());
 
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
 
//catch database connection
db.authenticate()
  .then(() => {
    console.log("Database connected...");
  })
  .catch((err) => console.log(`DB connected fail: ${err}`));


 
app.use("/api", indexRouter);
app.use("/api/admin", adminRouter);
 
// error handler
app.use(function (err, req, res, next) {
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
seed.sync().then(() => {
  seed.up().then(() => {
    console.log("Database seeded.");
  });
});
module.exports = app;
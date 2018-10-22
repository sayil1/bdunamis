const express = require("express");
const bodyPaser = require("body-parser");
const mongoose = require("mongoose");
const PastorRouter = require("./routes/pastors.routes");
const WorkerRouter = require("./routes/wokers.routes");
const departmentRouter = require("./routes/departments.routes");
const branchRouter = require("./routes/branches.routes");
const weeklyReport = require("./routes/weeklyReports.routes");
const test = require("./routes/test.routes");
mongoose.connect("mongodb://localhost:27017/dunamis");
const app = express();


app.use(bodyPaser.json());
app.use(bodyPaser.urlencoded({
    extended: false
}));

app.use("/pastors", PastorRouter);
app.use("/workers", WorkerRouter);
app.use("/departments", departmentRouter);
app.use("/branch", branchRouter);
app.use("/weeklyreport", weeklyReport);
app.use("/test",test);
app.get("/", (req, res) => {
    res.send("working");
});

app.listen(2030, console.log("its on 2030"));
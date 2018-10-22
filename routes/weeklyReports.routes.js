const router = require("express").Router();
const weeklyReportsModel = require("../models/weeklyreports.model");

router.post("/newReport", function (req, res) {
    console.log('posting works')


    let report = new weeklyReportsModel({

            dateOfService: req.body.dateofservice,
            ServiceType: req.body.servicetype,
            Attendance: req.body.attendance,
            NewConverts: req.body.newconverts,
            Rededication: req.body.rededication,
            Incidences: req.body.incidences,
            Financial:{
                tithes:req.body.tithes,
                RegularOffering:req.body.regularoffering,
                freeWillOffering:req.body.freewill
            },
        }


    );
    console.log(req.body.fname)
    console.log(req.body.lname)



    report.save(function (err, data) {

        if (err) {
            console.log("save pls");

        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        }
    })

});

router.get("/allreports", (req, res) => {
    // console.log("Get working!");
    weeklyReportsModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});

router.get("/delreport/:id", (req, res) => {
    weeklyReportsModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) res.send("An Error Occured!");

        res.send(result + "this document has been deleted");
        console.log("sent ");

    })
})

router.post("/updateReport/:id", (req, res) => {;

    var newvalue = {
        dateOfService: req.body.dateofservice,
        ServiceType: req.body.servicetype,
        Attendance: req.body.attendance,
        NewConverts: req.body.newconverts,
        Rededication: req.body.rededication,
        Incidences: req.body.incidences,
        Financial:{
            tithes:req.body.tithes,
            RegularOffering:req.body.regularoffering,
            freeWillOffering:req.body.freewill
    }}
    
    console.log(newvalue)
    testModel.update(req.params.id, newvalue, (err, result) => {
        if (err) res.send("An Error Occured!");
        res.send(result + "one document has been updated");
        console.log("sent ");

    })
})






router.get
module.exports = router;
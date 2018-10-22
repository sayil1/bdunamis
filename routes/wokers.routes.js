const router = require("express").Router();
const WorkerModel = require("../models/workers.models");

router.post("/newWorker", function (req, res) {
    console.log('posting works')
    let worker = new WorkerModel({
            firstName: req.body.fname,
            middleName: req.body.mname,
            lastName: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            DOB: req.body.DOB,
            gender: req.body.gender,
            maritalStatus: req.body.maritalstatus,
            employmentStatus: req.body.employmentstatus,
            nationality: req.body.nationality,
            stateOfOrigin: req.body.state,
            Address: {
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
            },
            Department: req.body.department
        }


    );
    worker.save(function (err, data) {

        if (err) {
            console.log("save pls");
            console.log(worker);

        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        }
    })

});



router.get("/", (req, res) => {
    // console.log("Get working!");
    res.send("seen")
});



router.get("/allworkers", (req, res) => {
    // console.log("Get working!");
    WorkerModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});

router.get("/delworker/:id", (req, res) => {
    WorkerModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) res.send("An Error Occured!");

        res.send(result + "this document has been deleted");
        console.log("sent ");

    })
})


router.post("/updateWorker/", (req, res) => {;

    var query = {

    };
    var newvalue = {
        firstName: req.body.fname,
            middleName: req.body.mname,
            lastName: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            DOB: req.body.DOB,
            gender: req.body.gender,
            maritalStatus: req.body.maritalstatus,
            employmentStatus: req.body.employmentstatus,
            nationality: req.body.nationality,
            stateOfOrigin: req.body.state,
            Address: {
                address: req.body.address,
                city: req.body.city,
                state: req.body.state,
                country: req.body.country,
            },
            Department: req.body.department
        }

    console.log(newvalue)
    testModel.update(query, newvalue, (err, result) => {
        if (err) res.send("An Error Occured!");
        res.send(result + "one document has been updated");
        console.log("sent ");

    })
})




module.exports = router;
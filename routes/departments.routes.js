const router = require("express").Router();
const DeptModel = require("../models/departments.model");

router.post("/newDeptment", function (req, res) {
    console.log('posting works')
    let Department = new DeptModel({

        name: req.body.Deptname,
        description: req.body.Desc,
    });
    Department.save(function (err, data) {

        if (err) {
            console.log("save pls");

        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        }
    })
});
router.get("/alldepartments", (req, res) => {
    // console.log("Get working!");
    DeptModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});

router.get("/deldepartment/:id", (req, res) => {
    DeptModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) res.send("An Error Occured!");

        res.send(result + "this document has been deleted");
        console.log("sent ");

    })
})


router.post("/updateDepartment/:id", (req, res) => {;

    var newvalue = {
        name: req.body.Deptname,
        description: req.body.Desc,
    }
    console.log(newvalue)
    testModel.update(req.params.id, newvalue, (err, result) => {
        if (err) res.send("An Error Occured!");
        res.send(result + "one document has been updated");
        console.log("sent ");

    })
})



router.get
module.exports = router;
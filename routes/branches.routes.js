const router = require("express").Router();
const BranchModel = require("../models/branches.model");

router.post("/newBranch", function (req, res) {
    console.log('posting works')
    let Branch = new BranchModel({
        name: req.body.branchName,
        Address: req.body.branchAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pastor: req.body.pastor

    });
    Branch.save(function (err, data) {

        if (err) {
            console.log("save pls");
            console.log(Branch);

        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        }
    })
});
router.get("/allbranches", (req, res) => {
    // console.log("Get working!");
    BranchModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});

router.get("/delbranches/:id", (req, res) => {
    BranchModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) res.send("An Error Occured!");

        res.send(result + "this document has been deleted");
        console.log("sent ");

    })
})

router.post("/updateBranch/:id", (req, res) => {;

    
    var newvalue = {
        name: req.body.branchName,
        Address: req.body.branchAddress,
        city: req.body.city,
        state: req.body.state,
        country: req.body.country,
        pastor: req.body.pastor
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
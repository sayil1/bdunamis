const router = require("express").Router();
const PastorModel = require("../models/pastors.models");

router.post("/newPastor", function (req, res) {
    console.log('posting works')


    let pastor = new PastorModel({

            title: req.body.title,
            firstName: req.body.fname,
            lastName: req.body.lname,
            phone: req.body.phone,
            email: req.body.email,
            gender: req.body.pastor,
        }


    );
    console.log(req.body.fname)
    console.log(req.body.lname)



    pastor.save(function (err, data) {

        if (err) {
            console.log("save pls");

        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        }
    })

});

router.get("/allpastors", (req, res) => {
    // console.log("Get working!");
    PastorModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});

router.get("/delpastor/:id", (req, res) => {
    PastorModel.findByIdAndDelete(req.params.id, (err, result) => {
        if (err) res.send("An Error Occured!");

        res.send(result + "this document has been deleted");
        console.log("sent ");

    })
})

router.post("/updatePastor/:id", (req, res) => {;

    var newvalue = {

        title: req.body.title,
        firstName: req.body.fname,
        lastName: req.body.lname,
        phone: req.body.phone,
        email: req.body.email,
        gender: req.body.pastor,
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
const router = require("express").Router();
const testModel = require("../models/tester.model");

router.post("/", function (req, res) {
    console.log('posting works')


    let test = new testModel({
        name: req.body.name,
        age: req.body.age,
    });
    test.save(function (err, data) {
        if (err) {
            console.log("save pls");
        } else {
            console.log(data)
            console.log("Data Saved!");
            res.send("saved")
        } 
    })
});

router.get("/tester", (req, res) => {
    // console.log("Get working!");
    testModel.find((err, result) => {
        if (err) {
            res.send("An Error Occured!");
            console.log("not seen");
        } else {
            res.send(result);
        }
    })
});


router.post("/t/", (req, res) => {
    // let change = new testModel({
    //     name: req.body.sname,
    //     age: req.body.sage
    // });

    var id = req.param.id;
    var newvalue = {
        name:req.body.sname,
        age:req.body.sage
    }
    console.log(newvalue)
    testModel.find({_id:id}, (err, foundObject) => {
        if (err) res.send("An Error Occured!");
        if(req.body.sname){
            foundObject.sname=req.body.sname
        }
        if(req.body.sage){
            foundObject.sage=req.body.sage
        }
        foundObject.save(function(error, updateObject){
            if(error) res.send(error)
            else 
            res.send(updateObject)
        })

        
        res.send(result + "one document has been updated");
        console.log("sent ");

    })
})



router.get
module.exports = router;